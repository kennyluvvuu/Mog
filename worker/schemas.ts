import { z } from "zod";
import type { URL } from "node:url";
import type { LanguageModel } from "ai";
import type {
  CanthalTilt as DbCanthalTilt,
  LooksmaxxingTier as DbLooksmaxxingTier,
  RatingMetrics as DbRatingMetrics,
  RatingTips as DbRatingTips,
} from "../db.types.ts";

/**
 * Валидные значения canthal tilt (наклон глазной щели)
 */
export const CANTHAL_TILTS = ["positive", "neutral", "negative"] as const;
export const canthalTiltSchema = z.enum(CANTHAL_TILTS, {
  message: "canthal_tilt должен быть: positive, neutral или negative",
});
export type CanthalTilt = z.infer<typeof canthalTiltSchema>;

/**
 * Валидные уровни шкалы луксмаксинга (Looksmaxxing Tier List)
 */
export const LOOKSMAXXING_TIERS = [
  "sub3",
  "ltn",
  "mtn",
  "htn",
  "chadlite",
  "chad",
  "true_adam",
] as const;

export const looksmaxxingTierSchema = z.enum(LOOKSMAXXING_TIERS, {
  message:
    "tier должен быть одним из: sub3, ltn, mtn, htn, chadlite, chad, true_adam",
});
export type LooksmaxxingTier = z.infer<typeof looksmaxxingTierSchema>;

/**
 * Режимы оценки внешности:
 * - brutal: бескомпромиссный и жесткий разбор без прикрас
 * - honest: объективный и реалистичный анализ (по умолчанию)
 * - soft: щадящая и поддерживающая оценка с фокусом на потенциале
 */
export const RATING_MODES = ["brutal", "honest", "soft"] as const;
export const ratingModeSchema = z.enum(RATING_MODES, {
  message: "rating_mode должен быть: brutal, honest или soft",
});
export type RatingMode = z.infer<typeof ratingModeSchema>;

/**
 * Диапазоны числовых баллов (score: 1.0 - 10.0) для каждого тира
 */
export const TIER_SCORE_RANGES: Record<
  LooksmaxxingTier,
  { min: number; max: number; description: string }
> = {
  sub3: {
    min: 1.0,
    max: 2.9,
    description: "Значительные асимметрии, выраженные деформации, серьезные дефекты",
  },
  ltn: {
    min: 3.0,
    max: 4.4,
    description: "Low Tier Normie: Ниже среднего, невыраженная линия челюсти, слабый подбородок",
  },
  mtn: {
    min: 4.5,
    max: 5.9,
    description: "Mid Tier Normie: Средняя внешность большинства людей, стандартные пропорции",
  },
  htn: {
    min: 6.0,
    max: 7.4,
    description: "High Tier Normie: Выше среднего, хорошая структура костей, приятные черты",
  },
  chadlite: {
    min: 7.5,
    max: 8.4,
    description: "Отличная генетика, выраженная челюсть, позитивный canthal tilt, гармония",
  },
  chad: {
    min: 8.5,
    max: 9.4,
    description: "Модельная внешность, высокая маскулинность, идеальная гармония костных структур",
  },
  true_adam: {
    min: 9.5,
    max: 10.0,
    description: "Идеальные антропометрические пропорции лица (абсолютная вершина шкалы)",
  },
};

/**
 * Схема детальных метрик лица (RatingMetrics)
 * Каждая шкала оценивается от 1.0 до 10.0
 */
export const ratingMetricsSchema = z.object({
  canthal_tilt: canthalTiltSchema.describe(
    "Наклон глазной щели: 'positive' (внешний угол выше внутреннего), 'neutral' (на одной линии), 'negative' (внешний угол опущен)"
  ),
  jawline: z
    .number({ message: "jawline должен быть числом" })
    .min(1.0, { message: "jawline не может быть меньше 1.0" })
    .max(10.0, { message: "jawline не может быть больше 10.0" })
    .describe("Четкость линии челюсти, гониальный угол, длина ветви нижней челюсти и проекция подбородка (1.0-10.0)"),
  symmetry: z
    .number({ message: "symmetry должен быть числом" })
    .min(1.0, { message: "symmetry не может быть меньше 1.0" })
    .max(10.0, { message: "symmetry не может быть больше 10.0" })
    .describe("Двусторонняя симметрия лица, выравнивание глаз, носа, губ и овала лица (1.0-10.0)"),
  skin_quality: z
    .number({ message: "skin_quality должен быть числом" })
    .min(1.0, { message: "skin_quality не может быть меньше 1.0" })
    .max(10.0, { message: "skin_quality не может быть больше 10.0" })
    .describe("Качество кожи: чистота, текстура, ровность тона, отсутствие воспалений и дефектов (1.0-10.0)"),
  eye_area: z
    .number({ message: "eye_area должен быть числом" })
    .min(1.0, { message: "eye_area не может быть меньше 1.0" })
    .max(10.0, { message: "eye_area не может быть больше 10.0" })
    .describe("Эстетика периорбитальной зоны: посадка глаз, экспозиция верхнего века, поддержка надбровных дуг (1.0-10.0)"),
  cheekbones: z
    .number({ message: "cheekbones должен быть числом" })
    .min(1.0, { message: "cheekbones не может быть меньше 1.0" })
    .max(10.0, { message: "cheekbones не может быть больше 10.0" })
    .describe("Выраженность и высота скуловых костей, поддержка средней трети лица (1.0-10.0)"),
});
export type RatingMetrics = z.infer<typeof ratingMetricsSchema>;

/**
 * Схема структурированного ответа от модели Groq AI через Vercel AI SDK
 */
export const aiRatingOutputSchema = z.object({
  tier: looksmaxxingTierSchema.describe(
    "Уровень луксмаксинга: 'sub3' (1.0-2.9), 'ltn' (3.0-4.4), 'mtn' (4.5-5.9), 'htn' (6.0-7.4), 'chadlite' (7.5-8.4), 'chad' (8.5-9.4), 'true_adam' (9.5-10.0)"
  ),
  score: z
    .number({ message: "score должен быть числом" })
    .min(1.0, { message: "score не может быть меньше 1.0" })
    .max(10.0, { message: "score не может быть больше 10.0" })
    .describe("Итоговый общий балл от 1.0 до 10.0 с точностью до десятых (строго в рамках выбранного tier)"),
  metrics: ratingMetricsSchema.describe(
    "Детальные метрики ключевых анатомических областей лица"
  ),
  summary: z
    .string({ message: "summary обязателен" })
    .min(10, { message: "summary должен содержать подробный анализ" })
    .describe("Развернутый анализ черт лица, сильных сторон и эстетических зон роста на русском языке в заданном тоне"),
  looksmaxxing_tips: z
    .array(z.string().min(5, { message: "Совет слишком короткий" }), {
      message: "looksmaxxing_tips должен быть массивом строк",
    })
    .min(2, { message: "Минимум 2 практических совета по луксмаксингу" })
    .max(10, { message: "Максимум 10 практических советов по луксмаксингу" })
    .describe("Список конкретных практических рекомендаций по улучшению внешности (уход за кожей, прическа, процент жира, осанка и т.д.) на русском языке"),
});
export type AiRatingOutput = z.infer<typeof aiRatingOutputSchema>;

/**
 * Полный результирующий объект сервиса оценки, готовый для записи в БД ratings и отправки клиенту
 */
export interface RatingAnalysisResult {
  tier: LooksmaxxingTier;
  score: number;
  scoreFormatted: string; // Формат "7.2" для numeric(3, 1) в PostgreSQL
  metrics: RatingMetrics;
  looksmaxxing_tips: string[];
  summary: string;
  raw_ai_response: Record<string, unknown>;
  model: string;
  rating_mode: RatingMode;
  usage?: {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
  };
}

/**
 * Поддерживаемые форматы входного изображения
 */
export type ImageInput =
  | string
  | URL
  | Uint8Array
  | Buffer
  | ArrayBuffer;

/**
 * Параметры вызова сервисной функции оценки изображения
 */
export interface AnalyzeImageRatingOptions {
  /**
   * Экземпляр LanguageModel из Vercel AI SDK (строго обязательный параметр)
   */
  model: LanguageModel;

  /**
   * Изображение для оценки:
   * - HTTPS/HTTP URL (например, временный Signed URL из Supabase Storage)
   * - Data URL ("data:image/jpeg;base64,...")
   * - Raw base64 строка
   * - Бинарный буфер (Buffer, Uint8Array, ArrayBuffer)
   */
  image: ImageInput;

  /**
   * Режим оценки: 'honest' (по умолчанию), 'brutal' или 'soft'
   */
  ratingMode?: RatingMode;

  /**
   * Алиас для model (для обратной совместимости)
   */
  languageModel?: LanguageModel;

  /**
   * Температура генерации (по умолчанию 0.2 для максимальной стабильности)
   */
  temperature?: number;

  /**
   * Максимальное число генерируемых токенов
   */
  maxOutputTokens?: number;

  /**
   * Алиас для maxOutputTokens (для обратной совместимости)
   */
  maxTokens?: number;

  /**
   * Дополнительные инструкции к системному промпту
   */
  customInstructions?: string;

  /**
   * Максимальное число внутренних попыток повтора (по умолчанию 0 для немедленной передачи 429 в очередь)
   */
  maxRetries?: number;

  /**
   * AbortSignal для контроля таймаутов
   */
  abortSignal?: AbortSignal;
}

/**
 * Параметры вызова методов экземпляра RatingService (model опционален, если задан в конструкторе)
 */
export type AnalyzeServiceOptions = Omit<AnalyzeImageRatingOptions, "model"> & {
  model?: LanguageModel;
};

/**
 * Определение тира луксмаксинга по числовому баллу
 */
export function getTierForScore(score: number): LooksmaxxingTier {
  const clamped = Math.min(Math.max(score, 1.0), 10.0);
  if (clamped < 3.0) return "sub3";
  if (clamped < 4.5) return "ltn";
  if (clamped < 6.0) return "mtn";
  if (clamped < 7.5) return "htn";
  if (clamped < 8.5) return "chadlite";
  if (clamped < 9.5) return "chad";
  return "true_adam";
}

/**
 * Получение диапазона баллов для указанного тира
 */
export function getScoreRangeForTier(tier: LooksmaxxingTier): { min: number; max: number } {
  const range = TIER_SCORE_RANGES[tier];
  return { min: range.min, max: range.max };
}

/**
 * Калибровка соответствия тира и балла для гарантированной консистентности
 */
export function calibrateTierAndScore(
  tier: LooksmaxxingTier,
  rawScore: number
): { tier: LooksmaxxingTier; score: number } {
  const validTier: LooksmaxxingTier = TIER_SCORE_RANGES[tier] ? tier : "mtn";
  const range = TIER_SCORE_RANGES[validTier];

  let score = Number.isFinite(rawScore)
    ? Number(Math.min(Math.max(rawScore, 1.0), 10.0).toFixed(1))
    : Number(((range.min + range.max) / 2).toFixed(1));

  if (score < range.min || score > range.max) {
    // Если модель вернула балл вне диапазона тира, мягко подтягиваем балл к тиру
    score = Number(Math.min(Math.max(score, range.min), range.max).toFixed(1));
  }

  return { tier: validTier, score };
}

/**
 * Форматирование числа в строку numeric(3, 1)
 */
export function formatScore(score: number): string {
  if (!Number.isFinite(score)) {
    return "5.0";
  }
  return Math.min(Math.max(score, 1.0), 10.0).toFixed(1);
}

/**
 * Валидация произвольных данных по схеме aiRatingOutputSchema
 */
export function validateAiRatingOutput(data: unknown): AiRatingOutput {
  return aiRatingOutputSchema.parse(data);
}

// Проверка соответствия типов со схемой БД на этапе компиляции TypeScript
type _AssertTypeCompat = [
  DbCanthalTilt extends CanthalTilt ? true : false,
  DbLooksmaxxingTier extends LooksmaxxingTier ? true : false,
  DbRatingMetrics extends RatingMetrics ? true : false,
  DbRatingTips extends string[] ? true : false,
];
