import { z } from "zod";

/**
 * Поддерживаемые форматы и MIME-типы фотографий
 */
export const ALLOWED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
] as const;

export const ALLOWED_IMAGE_EXTENSIONS = [
  "jpg",
  "jpeg",
  "png",
  "webp",
  "heic",
] as const;

export const imageMimeTypeSchema = z.enum(ALLOWED_IMAGE_MIME_TYPES, {
  message: "Недопустимый content_type. Разрешены: image/jpeg, image/png, image/webp, image/heic",
});

export const imageExtensionSchema = z.enum(ALLOWED_IMAGE_EXTENSIONS, {
  message: "Недопустимое расширение файла. Разрешены: jpg, jpeg, png, webp, heic",
});

/**
 * Режимы ИИ-оценки внешности (луксмаксинга):
 * - brutal: бескомпромиссный и жесткий разбор внешности
 * - honest: объективный и реалистичный анализ (по умолчанию)
 * - soft: щадящая и поддерживающая оценка с фокусом на улучшениях
 */
export const RATING_MODES = ["brutal", "honest", "soft"] as const;
export const ratingModeSchema = z.enum(RATING_MODES, {
  message: "Недопустимый rating_mode. Допустимые значения: brutal, honest, soft",
});

export type RatingMode = z.infer<typeof ratingModeSchema>;

/**
 * Схема запроса на получение pre-signed URL для загрузки фото
 * POST /ratings/upload-url
 * 
 * Принимает MIME-тип (content_type) или расширение файла (extension).
 * Сервер самостоятельно генерирует уникальное имя файла и путь.
 */
export const uploadUrlRequestSchema = z
  .object({
    content_type: imageMimeTypeSchema.optional(),
    extension: imageExtensionSchema.optional(),
  })
  .refine(
    (data) => Boolean(data.content_type || data.extension),
    {
      message: "Необходимо указать хотя бы один из параметров: content_type или extension",
      path: ["content_type"],
    }
  );

export type UploadUrlRequest = z.infer<typeof uploadUrlRequestSchema>;

/**
 * Схема запроса на создание и постановку в очередь задачи ИИ-оценки фотографии
 * POST /ratings
 * 
 * Клиент передает путь к загруженному файлу в Supabase Storage (photo_path),
 * опциональный rating_id (если был сгенерирован заранее) и режим оценки (rating_mode).
 */
export const createRatingRequestSchema = z.object({
  photo_path: z
    .string({ message: "photo_path обязателен для заполнения" })
    .trim()
    .min(3, { message: "photo_path слишком короткий" })
    .max(512, { message: "photo_path не должен превышать 512 символов" })
    .regex(
      /\.(jpe?g|png|webp|heic)$/i,
      { message: "photo_path должен указывать на изображение (.jpg, .jpeg, .png, .webp, .heic)" }
    ),
  rating_id: z
    .string()
    .uuid({ message: "rating_id должен быть валидным UUID" })
    .optional(),
  rating_mode: ratingModeSchema.default("honest"),
});

export type CreateRatingRequest = z.infer<typeof createRatingRequestSchema>;
