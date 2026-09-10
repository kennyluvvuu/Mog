SET local check_function_bodies = off;

CREATE SCHEMA "drizzle";

CREATE EXTENSION "pgmq";

CREATE SEQUENCE "drizzle"."__drizzle_migrations_id_seq" AS integer INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1 NO CYCLE;

CREATE TABLE "drizzle"."__drizzle_migrations" (
  "id"         integer NOT NULL DEFAULT nextval('drizzle.__drizzle_migrations_id_seq'::regclass),
  "hash"       text    NOT NULL,
  "created_at" bigint,
  CONSTRAINT "__drizzle_migrations_pkey" PRIMARY KEY (id)
);

CREATE TABLE "public"."profiles" (
  "id"         uuid                     NOT NULL,
  "username"   text,
  "avatar_url" text,
  "created_at" timestamp with time zone NOT NULL DEFAULT now(),
  "updated_at" timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT "profiles_pkey" PRIMARY KEY (id),
  CONSTRAINT "profiles_username_unique" UNIQUE (username)
);

ALTER TABLE "public"."profiles"
  ENABLE ROW LEVEL SECURITY;

CREATE TABLE "public"."ratings" (
  "id"                uuid                     NOT NULL DEFAULT gen_random_uuid(),
  "user_id"           uuid                     NOT NULL,
  "photo_path"        text                     NOT NULL,
  "score"             numeric(3,1),
  "metrics"           jsonb,
  "looksmaxxing_tips" jsonb,
  "raw_ai_response"   jsonb,
  "error_message"     text,
  "created_at"        timestamp with time zone NOT NULL DEFAULT now(),
  "completed_at"      timestamp with time zone,
  CONSTRAINT "ratings_pkey" PRIMARY KEY (id)
);

ALTER TABLE "public"."ratings"
  ENABLE ROW LEVEL SECURITY;

ALTER SEQUENCE "drizzle"."__drizzle_migrations_id_seq" OWNED BY "drizzle"."__drizzle_migrations"."id";

CREATE TYPE "public"."looksmaxxing_tier" AS ENUM (
  'sub3',
  'ltn',
  'mtn',
  'htn',
  'chadlite',
  'chad',
  'true_adam'
);

ALTER TABLE "public"."ratings"
  ADD COLUMN "tier" public.looksmaxxing_tier;

CREATE TYPE "public"."rating_status" AS ENUM (
  'pending',
  'processing',
  'completed',
  'failed'
);

ALTER TABLE "public"."ratings"
  ADD COLUMN "status" public.rating_status NOT NULL DEFAULT 'pending'::public.rating_status;

CREATE OR REPLACE FUNCTION public.enqueue_rating_task (
  p_rating_id   uuid,
  p_user_id     uuid,
  p_photo_path  text,
  p_rating_mode text DEFAULT 'honest'::text
)
  RETURNS bigint
  LANGUAGE plpgsql
  SECURITY DEFINER
  SET search_path TO 'public', 'pgmq'
  AS $function$
DECLARE
  v_msg_id bigint;
  v_payload jsonb;
BEGIN
  v_payload := jsonb_build_object(
    'rating_id', p_rating_id,
    'user_id', p_user_id,
    'photo_path', p_photo_path,
    'rating_mode', p_rating_mode,
    'created_at', now()
  );

  SELECT pgmq.send('rating_tasks', v_payload) INTO v_msg_id;
  RETURN v_msg_id;
END;
$function$;

CREATE OR REPLACE FUNCTION public.notify_rating_update()
  RETURNS TRIGGER
  LANGUAGE plpgsql
  SECURITY DEFINER
  AS $function$
DECLARE
  v_payload jsonb;
BEGIN
  IF (OLD.status IS DISTINCT FROM NEW.status) OR (NEW.completed_at IS NOT NULL AND OLD.completed_at IS NULL) THEN
    v_payload := jsonb_build_object(
      'id', NEW.id,
      'user_id', NEW.user_id,
      'status', NEW.status,
      'tier', NEW.tier,
      'score', NEW.score,
      'metrics', NEW.metrics,
      'looksmaxxing_tips', NEW.looksmaxxing_tips,
      'error_message', NEW.error_message,
      'completed_at', NEW.completed_at
    );

    PERFORM pg_notify('rating_update_' || NEW.id::text, v_payload::text);
  END IF;
  RETURN NEW;
END;
$function$;

ALTER TABLE "public"."profiles"
  ADD CONSTRAINT "profiles_id_users_id_fk" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;

ALTER TABLE "public"."ratings"
  ADD CONSTRAINT "ratings_user_id_profiles_id_fk" FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;

CREATE INDEX ratings_created_at_idx ON public.ratings USING btree (created_at);

CREATE INDEX ratings_user_id_idx ON public.ratings USING btree (user_id);

CREATE TRIGGER trigger_notify_rating_update
  AFTER UPDATE ON public.ratings
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_rating_update();

CREATE POLICY "profiles_insert_own" ON "public"."profiles"
  FOR INSERT
  TO "authenticated"
  WITH CHECK ((( SELECT auth.uid() AS uid) = id));

CREATE POLICY "profiles_select_own" ON "public"."profiles"
  FOR SELECT
  TO "authenticated"
  USING ((( SELECT auth.uid() AS uid) = id));

CREATE POLICY "profiles_update_own" ON "public"."profiles"
  FOR UPDATE
  TO "authenticated"
  USING ((( SELECT auth.uid() AS uid) = id))
  WITH CHECK ((( SELECT auth.uid() AS uid) = id));

CREATE POLICY "ratings_delete_own" ON "public"."ratings"
  FOR DELETE
  TO "authenticated"
  USING ((( SELECT auth.uid() AS uid) = user_id));

CREATE POLICY "ratings_insert_own" ON "public"."ratings"
  FOR INSERT
  TO "authenticated"
  WITH CHECK ((( SELECT auth.uid() AS uid) = user_id));

CREATE POLICY "ratings_select_own" ON "public"."ratings"
  FOR SELECT
  TO "authenticated"
  USING ((( SELECT auth.uid() AS uid) = user_id));

CREATE POLICY "ratings_update_own" ON "public"."ratings"
  FOR UPDATE
  TO "authenticated"
  USING ((( SELECT auth.uid() AS uid) = user_id))
  WITH CHECK ((( SELECT auth.uid() AS uid) = user_id));

CREATE POLICY "Give users access to own folder 1oj01fe_0" ON "storage"."objects"
  FOR SELECT
  TO PUBLIC
  USING (((bucket_id = 'avatars'::text) AND (( SELECT (auth.uid())::text AS uid) = (storage.foldername(name))[1])));

CREATE POLICY "Give users access to own folder 1oj01fe_1" ON "storage"."objects"
  FOR INSERT
  TO PUBLIC
  WITH CHECK (((bucket_id = 'avatars'::text) AND (( SELECT (auth.uid())::text AS uid) = (storage.foldername(name))[1])));

CREATE POLICY "Give users access to own folder 1oj01fe_2" ON "storage"."objects"
  FOR UPDATE
  TO PUBLIC
  USING (((bucket_id = 'avatars'::text) AND (( SELECT (auth.uid())::text AS uid) = (storage.foldername(name))[1])));

CREATE POLICY "Give users access to own folder 1oj01fe_3" ON "storage"."objects"
  FOR DELETE
  TO PUBLIC
  USING (((bucket_id = 'avatars'::text) AND (( SELECT (auth.uid())::text AS uid) = (storage.foldername(name))[1])));

COMMENT ON EXTENSION "pgmq" IS 'A lightweight message queue. Like AWS SQS and RSMQ but on Postgres.';

GRANT EXECUTE ON FUNCTION "public"."enqueue_rating_task"(uuid, uuid, text, text) TO PUBLIC, "anon", "authenticated", "postgres", "service_role";

GRANT EXECUTE ON FUNCTION "public"."notify_rating_update"() TO PUBLIC, "anon", "authenticated", "postgres", "service_role";

GRANT CREATE, USAGE ON SCHEMA "drizzle" TO "postgres";

GRANT SELECT, UPDATE, USAGE ON SEQUENCE "drizzle"."__drizzle_migrations_id_seq" TO "postgres";

GRANT DELETE, INSERT, MAINTAIN, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE ON TABLE "drizzle"."__drizzle_migrations" TO "postgres";

GRANT DELETE, INSERT, MAINTAIN, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE ON TABLE "public"."profiles" TO "anon", "authenticated", "postgres", "service_role";

GRANT DELETE, INSERT, MAINTAIN, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE ON TABLE "public"."ratings" TO "anon", "authenticated", "postgres", "service_role";

GRANT USAGE ON TYPE "public"."looksmaxxing_tier" TO "postgres";

GRANT USAGE ON TYPE "public"."rating_status" TO "postgres";

SELECT pgmq.create('rating_tasks');
