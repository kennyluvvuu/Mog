-- ==============================================================================
-- Автоматическая инициализация схемы БД Mog для локального Supabase
-- ==============================================================================

SET check_function_bodies = off;

-- 1. Создание всех системных ролей Supabase
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'postgres') THEN
    CREATE ROLE postgres WITH SUPERUSER CREATEDB CREATEROLE REPLICATION BYPASSRLS LOGIN;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon') THEN
    CREATE ROLE anon NOLOGIN NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
    CREATE ROLE authenticated NOLOGIN NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'service_role') THEN
    CREATE ROLE service_role NOLOGIN NOINHERIT BYPASSRLS;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticator') THEN
    CREATE ROLE authenticator WITH NOINHERIT LOGIN;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'supabase_auth_admin') THEN
    CREATE ROLE supabase_auth_admin WITH SUPERUSER CREATEDB CREATEROLE LOGIN;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'supabase_storage_admin') THEN
    CREATE ROLE supabase_storage_admin WITH SUPERUSER CREATEDB CREATEROLE LOGIN;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'supabase_admin') THEN
    CREATE ROLE supabase_admin WITH SUPERUSER CREATEDB CREATEROLE REPLICATION BYPASSRLS LOGIN;
  END IF;
END $$;

-- Назначение ролей для authenticator
GRANT anon TO authenticator;
GRANT authenticated TO authenticator;
GRANT service_role TO authenticator;
GRANT supabase_admin TO authenticator;

-- Установка паролей пользователей
\set pgpass `echo "${POSTGRES_PASSWORD:-postgres_password_123}"`
ALTER USER postgres WITH PASSWORD :'pgpass';
ALTER USER authenticator WITH PASSWORD :'pgpass';
ALTER USER supabase_auth_admin WITH PASSWORD :'pgpass';
ALTER USER supabase_storage_admin WITH PASSWORD :'pgpass';
ALTER USER supabase_admin WITH PASSWORD :'pgpass';

-- Владелец базы данных
ALTER DATABASE postgres OWNER TO postgres;

-- Конфигурация JWT для базы данных
\set jwt_sec `echo "${JWT_SECRET}"`
ALTER DATABASE postgres SET "app.settings.jwt_secret" TO :'jwt_sec';
ALTER DATABASE postgres SET "app.settings.jwt_exp" TO '3600';

-- 2. Базовые расширения и схемы
CREATE SCHEMA IF NOT EXISTS "extensions";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS "pgcrypto" SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS "pgjwt" SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS "pgmq";

-- Realtime публикация
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
    CREATE PUBLICATION supabase_realtime;
  END IF;
END $$;

-- 3. Схема auth и функции uid(), role(), email()
CREATE SCHEMA IF NOT EXISTS auth AUTHORIZATION supabase_admin;
ALTER USER supabase_auth_admin SET search_path TO auth, public;

CREATE TABLE IF NOT EXISTS auth.users (
  instance_id uuid NULL,
  id uuid NOT NULL,
  aud varchar(255) NULL,
  "role" varchar(255) NULL,
  email varchar(255) NULL UNIQUE,
  encrypted_password varchar(255) NULL,
  email_confirmed_at timestamptz NULL,
  invited_at timestamptz NULL,
  confirmation_token varchar(255) NULL,
  confirmation_sent_at timestamptz NULL,
  recovery_token varchar(255) NULL,
  recovery_sent_at timestamptz NULL,
  email_change_token_new varchar(255) NULL,
  email_change varchar(255) NULL,
  email_change_sent_at timestamptz NULL,
  last_sign_in_at timestamptz NULL,
  raw_app_meta_data jsonb NULL,
  raw_user_meta_data jsonb NULL,
  is_super_admin bool NULL,
  created_at timestamptz NULL,
  updated_at timestamptz NULL,
  phone text UNIQUE DEFAULT NULL,
  phone_confirmed_at timestamptz NULL,
  phone_change text DEFAULT '',
  phone_change_token varchar(255) DEFAULT '',
  phone_change_sent_at timestamptz NULL,
  confirmed_at timestamptz NULL,
  email_change_token_current varchar(255) DEFAULT '',
  email_change_confirm_status smallint DEFAULT 0,
  banned_until timestamptz NULL,
  reauthentication_token varchar(255) DEFAULT '',
  reauthentication_sent_at timestamptz NULL,
  is_sso_user bool NOT NULL DEFAULT false,
  deleted_at timestamptz NULL,
  is_anonymous bool NOT NULL DEFAULT false,
  CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE OR REPLACE FUNCTION auth.uid() RETURNS uuid AS $$
  SELECT coalesce(
    nullif(current_setting('request.jwt.claim.sub', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
  )::uuid;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION auth.role() RETURNS text AS $$
  SELECT coalesce(
    nullif(current_setting('request.jwt.claim.role', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role')
  )::text;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION auth.email() RETURNS text AS $$
  SELECT coalesce(
    nullif(current_setting('request.jwt.claim.email', true), ''),
    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'email')
  )::text;
$$ LANGUAGE sql STABLE;

GRANT USAGE ON SCHEMA auth TO anon, authenticated, service_role, postgres;
GRANT ALL ON ALL TABLES IN SCHEMA auth TO postgres, supabase_auth_admin;
GRANT ALL ON ALL SEQUENCES IN SCHEMA auth TO postgres, supabase_auth_admin;
GRANT ALL ON ALL ROUTINES IN SCHEMA auth TO postgres, supabase_auth_admin;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA auth TO anon, authenticated, service_role, postgres;

-- 4. Схема storage
CREATE SCHEMA IF NOT EXISTS storage AUTHORIZATION supabase_admin;
ALTER USER supabase_storage_admin SET search_path TO storage, public;

CREATE TABLE IF NOT EXISTS storage.buckets (
  id text NOT NULL PRIMARY KEY,
  name text NOT NULL,
  owner uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  public boolean DEFAULT false,
  avif_autodetection boolean DEFAULT false,
  file_size_limit bigint,
  allowed_mime_types text[],
  owner_id text
);

CREATE TABLE IF NOT EXISTS storage.objects (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  bucket_id text REFERENCES storage.buckets(id),
  name text,
  owner uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  last_accessed_at timestamptz DEFAULT now(),
  metadata jsonb,
  path_tokens text[] GENERATED ALWAYS AS (string_to_array(name, '/')) STORED,
  version text,
  owner_id text,
  user_metadata jsonb
);

GRANT USAGE ON SCHEMA storage TO postgres, anon, authenticated, service_role, supabase_storage_admin;
GRANT ALL ON ALL TABLES IN SCHEMA storage TO postgres, anon, authenticated, service_role, supabase_storage_admin;
GRANT ALL ON ALL ROUTINES IN SCHEMA storage TO postgres, anon, authenticated, service_role, supabase_storage_admin;
GRANT ALL ON ALL SEQUENCES IN SCHEMA storage TO postgres, anon, authenticated, service_role, supabase_storage_admin;

-- 5. Права доступа к public и extensions схемам
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT USAGE ON SCHEMA extensions TO postgres, anon, authenticated, service_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO postgres, anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO postgres, anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO postgres, anon, authenticated, service_role;

-- 6. Схема drizzle для трекинга миграций
CREATE SCHEMA IF NOT EXISTS "drizzle";

CREATE SEQUENCE IF NOT EXISTS "drizzle"."__drizzle_migrations_id_seq" AS integer INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1 NO CYCLE;

CREATE TABLE IF NOT EXISTS "drizzle"."__drizzle_migrations" (
  "id"         integer NOT NULL DEFAULT nextval('drizzle.__drizzle_migrations_id_seq'::regclass),
  "hash"       text    NOT NULL,
  "created_at" bigint,
  CONSTRAINT "__drizzle_migrations_pkey" PRIMARY KEY (id)
);

-- 7. Таблица profiles
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

-- 8. Типы луксмаксинга и статусов
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

-- 9. Таблица ratings
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

-- 10. Внешние ключи
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

-- 11. Индексы
CREATE INDEX IF NOT EXISTS ratings_created_at_idx ON public.ratings USING btree (created_at);
CREATE INDEX IF NOT EXISTS ratings_user_id_idx ON public.ratings USING btree (user_id);

-- 12. Функция постановки в очередь pgmq
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

-- 13. Функция уведомления об изменениях (SSE / LISTEN-NOTIFY)
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

-- 14. Политики RLS
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

-- 15. Права доступа к объектам приложения
GRANT EXECUTE ON FUNCTION "public"."enqueue_rating_task"(uuid, uuid, text, text) TO PUBLIC, "anon", "authenticated", "postgres", "service_role";
GRANT EXECUTE ON FUNCTION "public"."notify_rating_update"() TO PUBLIC, "anon", "authenticated", "postgres", "service_role";
GRANT ALL ON TABLE "public"."profiles" TO "anon", "authenticated", "postgres", "service_role";
GRANT ALL ON TABLE "public"."ratings" TO "anon", "authenticated", "postgres", "service_role";

-- 16. Создание очереди pgmq (rating_tasks) и гранты
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pgmq.meta WHERE queue_name = 'rating_tasks') THEN
    PERFORM pgmq.create('rating_tasks');
  END IF;
END $$;

GRANT USAGE ON SCHEMA pgmq TO postgres, service_role, anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA pgmq TO postgres, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA pgmq TO postgres, service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA pgmq TO postgres, service_role;

-- 17. Автоматическое создание бакетов Storage
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('ratings_photos', 'ratings_photos', false, 52428800, ARRAY['image/jpeg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('avatars', 'avatars', true, 10485760, ARRAY['image/jpeg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO NOTHING;
