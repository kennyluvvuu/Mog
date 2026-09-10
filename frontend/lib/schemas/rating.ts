// Zod-схемы и типы доменной модели оценок, зеркалирующие контракт бэкенда

import { z } from "zod";

export const LOOKSMAXXING_TIERS = [
  "sub3",
  "ltn",
  "mtn",
  "htn",
  "chadlite",
  "chad",
  "true_adam",
] as const;

export const RATING_STATUSES = [
  "pending",
  "processing",
  "completed",
  "failed",
] as const;

export const RATING_MODES = ["brutal", "honest", "soft"] as const;

export const CANTHAL_TILTS = ["positive", "neutral", "negative"] as const;

export const looksmaxxingTierSchema = z.enum(LOOKSMAXXING_TIERS);
export const ratingStatusSchema = z.enum(RATING_STATUSES);
export const ratingModeSchema = z.enum(RATING_MODES);
export const canthalTiltSchema = z.enum(CANTHAL_TILTS);

export const ratingMetricsSchema = z.object({
  canthal_tilt: canthalTiltSchema,
  jawline: z.number(),
  symmetry: z.number(),
  skin_quality: z.number(),
  eye_area: z.number(),
  cheekbones: z.number(),
});

const numericScoreSchema = z
  .union([z.number(), z.string()])
  .nullable()
  .optional()
  .transform((value) =>
    value === null || value === undefined ? null : Number(value)
  );

export const ratingSchema = z.object({
  id: z.string(),
  user_id: z.string().optional(),
  photo_path: z.string(),
  status: ratingStatusSchema,
  tier: looksmaxxingTierSchema.nullable().optional().default(null),
  score: numericScoreSchema,
  metrics: ratingMetricsSchema.nullable().optional().default(null),
  looksmaxxing_tips: z.array(z.string()).nullable().optional().default(null),
  raw_ai_response: z.record(z.string(), z.unknown()).nullable().optional(),
  error_message: z.string().nullable().optional().default(null),
  created_at: z.string(),
  completed_at: z.string().nullable().optional().default(null),
  photo_url: z.string().nullable().optional(),
});

export const uploadUrlResponseSchema = z.object({
  upload_url: z.string(),
  photo_path: z.string(),
  token: z.string().optional(),
  expires_in: z.number().optional(),
});

export const createRatingResponseSchema = z.object({
  rating_id: z.string(),
  status: ratingStatusSchema,
  photo_path: z.string(),
  rating_mode: ratingModeSchema.optional(),
  queue_msg_id: z.number().optional(),
  created_at: z.string(),
});

export type LooksmaxxingTier = z.infer<typeof looksmaxxingTierSchema>;
export type RatingStatus = z.infer<typeof ratingStatusSchema>;
export type RatingMode = z.infer<typeof ratingModeSchema>;
export type CanthalTilt = z.infer<typeof canthalTiltSchema>;
export type RatingMetrics = z.infer<typeof ratingMetricsSchema>;
export type Rating = z.infer<typeof ratingSchema>;
export type UploadUrlResponse = z.infer<typeof uploadUrlResponseSchema>;
export type CreateRatingResponse = z.infer<typeof createRatingResponseSchema>;
