CREATE TYPE "public"."looksmaxxing_tier" AS ENUM('sub3', 'ltn', 'mtn', 'htn', 'chadlite', 'chad', 'true_adam');--> statement-breakpoint
CREATE TYPE "public"."rating_status" AS ENUM('pending', 'processing', 'completed', 'failed');--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"username" text,
	"avatar_url" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "profiles_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "ratings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"photo_path" text NOT NULL,
	"status" "rating_status" DEFAULT 'pending' NOT NULL,
	"tier" "looksmaxxing_tier",
	"score" numeric(3, 1),
	"metrics" jsonb,
	"looksmaxxing_tips" jsonb,
	"raw_ai_response" jsonb,
	"error_message" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"completed_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "ratings" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "ratings_user_id_idx" ON "ratings" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "ratings_created_at_idx" ON "ratings" USING btree ("created_at");--> statement-breakpoint
CREATE POLICY "profiles_select_own" ON "profiles" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.uid()) = "profiles"."id");--> statement-breakpoint
CREATE POLICY "profiles_insert_own" ON "profiles" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK ((select auth.uid()) = "profiles"."id");--> statement-breakpoint
CREATE POLICY "profiles_update_own" ON "profiles" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.uid()) = "profiles"."id") WITH CHECK ((select auth.uid()) = "profiles"."id");--> statement-breakpoint
CREATE POLICY "ratings_select_own" ON "ratings" AS PERMISSIVE FOR SELECT TO "authenticated" USING ((select auth.uid()) = "ratings"."user_id");--> statement-breakpoint
CREATE POLICY "ratings_insert_own" ON "ratings" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK ((select auth.uid()) = "ratings"."user_id");--> statement-breakpoint
CREATE POLICY "ratings_update_own" ON "ratings" AS PERMISSIVE FOR UPDATE TO "authenticated" USING ((select auth.uid()) = "ratings"."user_id") WITH CHECK ((select auth.uid()) = "ratings"."user_id");--> statement-breakpoint
CREATE POLICY "ratings_delete_own" ON "ratings" AS PERMISSIVE FOR DELETE TO "authenticated" USING ((select auth.uid()) = "ratings"."user_id");