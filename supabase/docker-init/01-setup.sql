-- ==============================================================================
-- Автоматическая инициализация схемы БД Mog для локального Supabase
-- ==============================================================================

SET check_function_bodies = off;

-- 1. Схема drizzle для трекинга миграций
CREATE SCHEMA IF NOT EXISTS "drizzle";

-- 2. Расширение pgmq
CREATE EXTENSION IF NOT EXISTS "pgmq";

CREATE SEQUENCE IF NOT EXISTS "drizzle"."__drizzle_migrations_id_seq" AS integer INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1 NO CYCLE;

CREATE TABLE IF NOT EXISTS "drizzle"."__drizzle_migrations" (
  "id"         integer NOT NULL DEFAULT nextval('drizzle.__drizzle_migrations_id_seq'::regclass),
  "hash"       text    NOT NULL,
  "created_at" bigint,
  CONSTRAINT "__drizzle_migrations_pkey" PRIMARY KEY (id)
);

-- 3. Таблица profiles
CREATE TABLE IF NOT EXISTS "public"."profiles" (
  "id"         uuid                     NOT NULL,
  "username"   text,
  "avatar_url" text,
  "created_at" timestamp with time zone NOT NULL DEFAULT now(),
  "updated_at" timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT "profiles_pkey" PRIMARY KEY (id),
  CONSTRAINT "profiles_username_unique" UNIQUE (username)
);

ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;

-- 4. Типы луксмаксинга и статусов
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'looksmaxxing_tier') THEN
    CREATE TYPE "public"."looksmaxxing_tier" AS ENUM (
      'sub3',
      'ltn',
      'mtn',
      'htn',
      'chadlite',
      'chad',
      'true_adam'
    );
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'rating_status') THEN
    CREATE TYPE "public"."rating_status" AS ENUM (
      'pending',
      'processing',
      'completed',
      'failed'
    );
  END IF;
END $$;

-- 5. Таблица ratings
CREATE TABLE IF NOT EXISTS "public"."ratings" (
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
  "tier"              public.looksmaxxing_tier,
  "status"            public.rating_status NOT NULL DEFAULT 'pending'::public.rating_status,
  CONSTRAINT "ratings_pkey" PRIMARY KEY (id)
);

ALTER TABLE "public"."ratings" ENABLE ROW LEVEL SECURITY;

-- 6. Внешние ключи
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'profiles_id_users_id_fk') THEN
    ALTER TABLE "public"."profiles"
      ADD CONSTRAINT "profiles_id_users_id_fk" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'ratings_user_id_profiles_id_fk') THEN
    ALTER TABLE "public"."ratings"
      ADD CONSTRAINT "ratings_user_id_profiles_id_fk" FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
  END IF;
END $$;

-- 7. Индексы
CREATE INDEX IF NOT EXISTS ratings_created_at_idx ON public.ratings USING btree (created_at);
CREATE INDEX IF NOT EXISTS ratings_user_id_idx ON public.ratings USING btree (user_id);

-- 8. Функция постановки в очередь pgmq
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

-- 9. Функция уведомления об изменениях (SSE / LISTEN-NOTIFY)
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

DROP TRIGGER IF EXISTS trigger_notify_rating_update ON public.ratings;
CREATE TRIGGER trigger_notify_rating_update
  AFTER UPDATE ON public.ratings
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_rating_update();

-- 10. Политики RLS
DO $$
BEGIN
  -- Profiles
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'profiles_insert_own' AND tablename = 'profiles') THEN
    CREATE POLICY "profiles_insert_own" ON "public"."profiles" FOR INSERT TO "authenticated" WITH CHECK ((( SELECT auth.uid() AS uid) = id));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'profiles_select_own' AND tablename = 'profiles') THEN
    CREATE POLICY "profiles_select_own" ON "public"."profiles" FOR SELECT TO "authenticated" USING ((( SELECT auth.uid() AS uid) = id));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'profiles_update_own' AND tablename = 'profiles') THEN
    CREATE POLICY "profiles_update_own" ON "public"."profiles" FOR UPDATE TO "authenticated" USING ((( SELECT auth.uid() AS uid) = id)) WITH CHECK ((( SELECT auth.uid() AS uid) = id));
  END IF;

  -- Ratings
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'ratings_delete_own' AND tablename = 'ratings') THEN
    CREATE POLICY "ratings_delete_own" ON "public"."ratings" FOR DELETE TO "authenticated" USING ((( SELECT auth.uid() AS uid) = user_id));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'ratings_insert_own' AND tablename = 'ratings') THEN
    CREATE POLICY "ratings_insert_own" ON "public"."ratings" FOR INSERT TO "authenticated" WITH CHECK ((( SELECT auth.uid() AS uid) = user_id));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'ratings_select_own' AND tablename = 'ratings') THEN
    CREATE POLICY "ratings_select_own" ON "public"."ratings" FOR SELECT TO "authenticated" USING ((( SELECT auth.uid() AS uid) = user_id));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'ratings_update_own' AND tablename = 'ratings') THEN
    CREATE POLICY "ratings_update_own" ON "public"."ratings" FOR UPDATE TO "authenticated" USING ((( SELECT auth.uid() AS uid) = user_id)) WITH CHECK ((( SELECT auth.uid() AS uid) = user_id));
  END IF;
END $$;

-- 11. Права доступа
GRANT EXECUTE ON FUNCTION "public"."enqueue_rating_task"(uuid, uuid, text, text) TO PUBLIC, "anon", "authenticated", "postgres", "service_role";
GRANT EXECUTE ON FUNCTION "public"."notify_rating_update"() TO PUBLIC, "anon", "authenticated", "postgres", "service_role";
GRANT ALL ON TABLE "public"."profiles" TO "anon", "authenticated", "postgres", "service_role";
GRANT ALL ON TABLE "public"."ratings" TO "anon", "authenticated", "postgres", "service_role";

-- 12. Создание очереди pgmq (rating_tasks)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pgmq.meta WHERE queue_name = 'rating_tasks') THEN
    PERFORM pgmq.create('rating_tasks');
  END IF;
END $$;

-- 13. Автоматическое создание приватного бакета Storage для фотографий
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('ratings_photos', 'ratings_photos', false, 52428800, ARRAY['image/jpeg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO NOTHING;

-- 14. Автоматическое создание бакета для аватарок
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('avatars', 'avatars', true, 10485760, ARRAY['image/jpeg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO NOTHING;
