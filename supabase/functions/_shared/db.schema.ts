import { relations, sql } from "drizzle-orm";
import {
  index,
  jsonb,
  numeric,
  pgEnum,
  pgPolicy,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { authenticatedRole, authUid, authUsers } from "drizzle-orm/supabase";
import { looksmaxxingTierEnum, ratingStatusEnum, type RatingMetrics, type RatingTips } from "./db.types.ts";

// Tables
export const profiles = pgTable(
  "profiles",
  {
    id: uuid("id")
      .primaryKey()
      .references(() => authUsers.id, { onDelete: "cascade" }),
    username: text("username").unique(),
    avatarUrl: text("avatar_url"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    pgPolicy("profiles_select_own", {
      as: "permissive",
      for: "select",
      to: authenticatedRole,
      using: sql`${authUid} = ${table.id}`,
    }),
    pgPolicy("profiles_insert_own", {
      as: "permissive",
      for: "insert",
      to: authenticatedRole,
      withCheck: sql`${authUid} = ${table.id}`,
    }),
    pgPolicy("profiles_update_own", {
      as: "permissive",
      for: "update",
      to: authenticatedRole,
      using: sql`${authUid} = ${table.id}`,
      withCheck: sql`${authUid} = ${table.id}`,
    }),
  ]
).enableRLS();

export const ratings = pgTable(
  "ratings",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => profiles.id, { onDelete: "cascade" }),
    photoPath: text("photo_path").notNull(),
    status: ratingStatusEnum("status").notNull().default("pending"),
    tier: looksmaxxingTierEnum("tier"),
    score: numeric("score", { precision: 3, scale: 1 }),
    metrics: jsonb("metrics").$type<RatingMetrics>(),
    looksmaxxingTips: jsonb("looksmaxxing_tips").$type<RatingTips>(),
    rawAiResponse: jsonb("raw_ai_response").$type<Record<string, unknown>>(),
    errorMessage: text("error_message"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    completedAt: timestamp("completed_at", { withTimezone: true }),
  },
  (table) => [
    index("ratings_user_id_idx").on(table.userId),
    index("ratings_created_at_idx").on(table.createdAt),
    pgPolicy("ratings_select_own", {
      as: "permissive",
      for: "select",
      to: authenticatedRole,
      using: sql`${authUid} = ${table.userId}`,
    }),
    pgPolicy("ratings_insert_own", {
      as: "permissive",
      for: "insert",
      to: authenticatedRole,
      withCheck: sql`${authUid} = ${table.userId}`,
    }),
    pgPolicy("ratings_update_own", {
      as: "permissive",
      for: "update",
      to: authenticatedRole,
      using: sql`${authUid} = ${table.userId}`,
      withCheck: sql`${authUid} = ${table.userId}`,
    }),
    pgPolicy("ratings_delete_own", {
      as: "permissive",
      for: "delete",
      to: authenticatedRole,
      using: sql`${authUid} = ${table.userId}`,
    }),
  ]
).enableRLS();

// Relations
export const profilesRelations = relations(profiles, ({ many }) => ({
  ratings: many(ratings),
}));

export const ratingsRelations = relations(ratings, ({ one }) => ({
  profile: one(profiles, {
    fields: [ratings.userId],
    references: [profiles.id],
  }),
}));

// Re-export enums and types
export * from "./db.types.ts";
