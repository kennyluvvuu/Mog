import { pgEnum } from "drizzle-orm/pg-core";
import type {
  profiles,
  ratings,
} from "./db.schema.ts";

// Enums
export const ratingStatusEnum = pgEnum("rating_status", [
  "pending",
  "processing",
  "completed",
  "failed",
]);

export const looksmaxxingTierEnum = pgEnum("looksmaxxing_tier", [
  "sub5",
  "sub3",
  "ltn",
  "mtn",
  "htn",
  "chadlite",
  "chad",
  "true_adam",
]);

export type CanthalTilt = "positive" | "neutral" | "negative";

export interface RatingMetrics {
  canthal_tilt: CanthalTilt;
  jawline: number;
  symmetry: number;
  skin_quality: number;
  eye_area: number;
  cheekbones: number;
}

export type RatingTips = string[];

export type RatingStatus = (typeof ratingStatusEnum.enumValues)[number];
export type LooksmaxxingTier = (typeof looksmaxxingTierEnum.enumValues)[number];

export type Profile = typeof profiles.$inferSelect;
export type NewProfile = typeof profiles.$inferInsert;

export type Rating = typeof ratings.$inferSelect;
export type NewRating = typeof ratings.$inferInsert;
