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

/**
 * Полезная нагрузка сообщения в очереди pgmq (rating_tasks)
 */
export interface RatingTaskPayload {
  rating_id: string;
  user_id: string;
  photo_path: string;
  rating_mode?: "brutal" | "honest" | "soft";
  created_at: string;
}

/**
 * Структура сообщения из pgmq (pgmq.read / pgmq.pop)
 */
export interface PgmqMessage<T = RatingTaskPayload> {
  msg_id: number;
  read_ct: number;
  enqueued_at: string | Date;
  vt: string | Date;
  message: T;
}

/**
 * Метрики очереди pgmq (pgmq.metrics)
 */
export interface PgmqMetrics {
  queue_name: string;
  queue_length: number;
  newest_msg_age_sec: number | null;
  oldest_msg_age_sec: number | null;
  total_messages: number;
  scrape_time: string | Date;
}

/**
 * Полезная нагрузка события Postgres NOTIFY для SSE стриминга
 */
export interface RatingUpdateNotification {
  id: string;
  user_id: string;
  status: RatingStatus;
  tier?: LooksmaxxingTier | null;
  score?: string | null;
  metrics?: RatingMetrics | null;
  looksmaxxing_tips?: RatingTips | null;
  error_message?: string | null;
  completed_at?: string | null;
}
