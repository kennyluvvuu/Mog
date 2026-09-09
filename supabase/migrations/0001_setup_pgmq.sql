-- Extension: pgmq
CREATE EXTENSION IF NOT EXISTS pgmq CASCADE;
--> statement-breakpoint

-- Create the rating_tasks queue idempotently
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pgmq.meta WHERE queue_name = 'rating_tasks'
  ) THEN
    PERFORM pgmq.create('rating_tasks');
  END IF;
END $$;
--> statement-breakpoint

-- Grant permissions on pgmq schema to postgres and service_role
GRANT USAGE ON SCHEMA pgmq TO postgres, service_role;
--> statement-breakpoint
GRANT ALL ON ALL TABLES IN SCHEMA pgmq TO postgres, service_role;
--> statement-breakpoint
GRANT ALL ON ALL ROUTINES IN SCHEMA pgmq TO postgres, service_role;
--> statement-breakpoint
GRANT ALL ON ALL SEQUENCES IN SCHEMA pgmq TO postgres, service_role;
--> statement-breakpoint
ALTER DEFAULT PRIVILEGES IN SCHEMA pgmq GRANT ALL ON TABLES TO postgres, service_role;
--> statement-breakpoint
ALTER DEFAULT PRIVILEGES IN SCHEMA pgmq GRANT ALL ON ROUTINES TO postgres, service_role;
--> statement-breakpoint
ALTER DEFAULT PRIVILEGES IN SCHEMA pgmq GRANT ALL ON SEQUENCES TO postgres, service_role;
--> statement-breakpoint

-- RPC function to enqueue a rating task safely from API / Supabase Client
CREATE OR REPLACE FUNCTION public.enqueue_rating_task(
  p_rating_id uuid,
  p_user_id uuid,
  p_photo_path text,
  p_rating_mode text DEFAULT 'honest'
)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pgmq
AS $$
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
$$;
--> statement-breakpoint

-- Allow authenticated users and service_role to call enqueue_rating_task
GRANT EXECUTE ON FUNCTION public.enqueue_rating_task(uuid, uuid, text, text) TO authenticated, service_role;
--> statement-breakpoint

-- Trigger function for real-time SSE streaming notifications via LISTEN/NOTIFY
CREATE OR REPLACE FUNCTION public.notify_rating_update()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
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
$$;
--> statement-breakpoint

DROP TRIGGER IF EXISTS trigger_notify_rating_update ON public.ratings;
--> statement-breakpoint

CREATE TRIGGER trigger_notify_rating_update
AFTER UPDATE ON public.ratings
FOR EACH ROW
EXECUTE FUNCTION public.notify_rating_update();