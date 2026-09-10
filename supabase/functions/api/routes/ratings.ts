import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { AppEnv } from "../types.ts";
import { authMiddleware, getOrCreateProfile } from "../middlewares/auth.ts";
import {
  createRatingRequestSchema,
  uploadUrlRequestSchema,
} from "../schemas/index.ts";
import { enqueueRatingTask } from "../queue.ts";

export const ratingsRouter = new Hono<AppEnv>();

// Все эндпоинты оценок требуют авторизованного пользователя
ratingsRouter.use("*", authMiddleware);

export const RATINGS_BUCKET = "ratings_photos";

/**
 * Преобразует внутренний URL Supabase Storage (например, http://kong:8000/...)
 * в публичный URL (http://127.0.0.1:54321/...), доступный клиенту вне Docker-сети.
 */
export function resolvePublicStorageUrl(
  internalUrl: string,
  reqUrl?: string,
  headers?: Headers
): string {
  if (!internalUrl) return internalUrl;

  try {
    const parsed = new URL(internalUrl);

    // 1. Приоритет: явная переменная окружения
    const envPublicUrl =
      Deno.env.get("PUBLIC_SUPABASE_URL") ||
      Deno.env.get("SUPABASE_PUBLIC_URL") ||
      Deno.env.get("API_URL");

    if (envPublicUrl) {
      const publicOrigin = new URL(envPublicUrl).origin;
      return `${publicOrigin}${parsed.pathname}${parsed.search}`;
    }

    // 2. Извлекаем протокол, хост и порт из заголовков запроса
    let proto = "http";
    let host = "";
    let port = "";

    if (headers) {
      proto = headers.get("x-forwarded-proto") || "http";
      const rawHost = headers.get("x-forwarded-host") || headers.get("host") || "";
      const forwardedPort = headers.get("x-forwarded-port") || "";

      if (rawHost.includes(":")) {
        const [h, p] = rawHost.split(":");
        host = h;
        port = p;
      } else {
        host = rawHost;
        port = forwardedPort;
      }
    }

    // Проверяем, является ли хост внутренним для Docker или пустым
    const isInternalHost = (h: string) =>
      !h ||
      h === "kong" ||
      h === "supabase-kong" ||
      h.startsWith("supabase_") ||
      h.startsWith("172.");

    // 3. Если из заголовков хост не получен или внутренний, пробуем reqUrl
    if (isInternalHost(host) && reqUrl) {
      try {
        const reqParsed = new URL(reqUrl);
        proto = reqParsed.protocol.replace(":", "");
        host = reqParsed.hostname;
        port = reqParsed.port;
      } catch {
        // ignore
      }
    }

    // 4. Если хост все еще внутренний или пустой, ставим 127.0.0.1:54321
    if (isInternalHost(host)) {
      host = "127.0.0.1";
      port = "54321";
    }

    // 5. Для локальных адресов (127.0.0.1 / localhost): если порт не задан или равен 80,
    // в локальном Supabase Kong всегда слушает на порту 54321
    if ((host === "127.0.0.1" || host === "localhost") && (!port || port === "80")) {
      port = "54321";
    }

    const hostWithPort = port && port !== "80" && port !== "443" ? `${host}:${port}` : host;
    return `${proto}://${hostWithPort}${parsed.pathname}${parsed.search}`;
  } catch (_e) {
    return internalUrl;
  }
}

/**
 * Убеждается, что приватный бакет для фотографий оценок существует в Supabase Storage
 */
export async function ensureRatingsBucket(supabaseAdmin: SupabaseClient): Promise<void> {
  try {
    const { data: buckets } = await supabaseAdmin.storage.listBuckets();
    const exists = buckets?.some((b) => b.name === RATINGS_BUCKET);
    if (!exists) {
      await supabaseAdmin.storage.createBucket(RATINGS_BUCKET, {
        public: false,
        fileSizeLimit: 15 * 1024 * 1024, // 15MB
        allowedMimeTypes: [
          "image/jpeg",
          "image/png",
          "image/webp",
          "image/heic",
        ],
      });
    }
  } catch (_e) {
    // Игнорируем ошибку, если бакет уже создан или нет прав на создание
  }
}

/**
 * POST /ratings/upload-url
 * Генерация pre-signed URL для безопасной прямой загрузки фото в Supabase Storage
 */
ratingsRouter.post(
  "/upload-url",
  zValidator("json", uploadUrlRequestSchema, (result, c) => {
    if (!result.success) {
      return c.json(
        {
          error: "ValidationError",
          message: "Неверные параметры для генерации URL загрузки",
          issues: result.error.issues,
        },
        400
      );
    }
  }),
  async (c) => {
    const body = c.req.valid("json");
    const user = c.get("user");
    const supabaseAdmin = c.get("supabaseAdmin");

    try {
      // 1. Убеждаемся, что профиль пользователя существует (lazy upsert)
      await getOrCreateProfile(supabaseAdmin, user);

      // 2. Убеждаемся в наличии бакета в хранилище
      await ensureRatingsBucket(supabaseAdmin);

      // 3. Формируем уникальное имя файла хранилища и расширение
      const fileId = crypto.randomUUID();

      let ext: string;
      if (body.extension) {
        ext = body.extension.toLowerCase();
        if (ext === "jpeg") ext = "jpg";
      } else if (body.content_type) {
        const mimeToExt: Record<string, string> = {
          "image/jpeg": "jpg",
          "image/png": "png",
          "image/webp": "webp",
          "image/heic": "heic",
        };
        ext = mimeToExt[body.content_type] ?? "jpg";
      } else {
        ext = "jpg";
      }

      // 4. Формируем безопасный путь в хранилище: {userId}/{fileId}.{ext}
      const photoPath = `${user.id}/${fileId}.${ext}`;

      // 5. Создаем Signed Upload URL (срок жизни 15 минут)
      const { data, error: storageError } = await supabaseAdmin.storage
        .from(RATINGS_BUCKET)
        .createSignedUploadUrl(photoPath);

      if (storageError || !data) {
        return c.json(
          {
            error: "StorageError",
            message: `Ошибка генерации URL для загрузки: ${storageError?.message ?? "неизвестная ошибка"}`,
          },
          500
        );
      }

      // Преобразуем внутренний Docker URL в доступный клиенту
      const publicUploadUrl = resolvePublicStorageUrl(
        data.signedUrl,
        c.req.url,
        c.req.raw.headers
      );

      return c.json({
        upload_url: publicUploadUrl,
        photo_path: photoPath,
        token: data.token,
        expires_in: 900,
      });
    } catch (error) {
      return c.json(
        {
          error: "InternalError",
          message:
            error instanceof Error ? error.message : "Внутренняя ошибка сервера",
        },
        500
      );
    }
  }
);

/**
 * POST /ratings
 * Регистрация новой оценки, сохранение записи в БД со статусом 'pending'
 * и постановка задачи в очередь pgmq (rating_tasks).
 */
ratingsRouter.post(
  "/",
  zValidator("json", createRatingRequestSchema, (result, c) => {
    if (!result.success) {
      return c.json(
        {
          error: "ValidationError",
          message: "Неверные параметры создания оценки",
          issues: result.error.issues,
        },
        400
      );
    }
  }),
  async (c) => {
    const body = c.req.valid("json");
    const user = c.get("user");
    const supabaseAdmin = c.get("supabaseAdmin");

    try {
      // 1. Нормализуем путь к фото: убираем начальные слэши и префикс бакета, если он был передан
      let photoPath = body.photo_path.trim().replace(/^\/+/, "");
      if (photoPath.startsWith(`${RATINGS_BUCKET}/`)) {
        photoPath = photoPath.substring(RATINGS_BUCKET.length + 1);
      }

      // Проверяем, что фото загружено именно в каталог текущего пользователя
      if (!photoPath.startsWith(`${user.id}/`)) {
        return c.json(
          {
            error: "Forbidden",
            message: `photo_path должен принадлежать текущему пользователю (${user.id}/...)`,
          },
          403
        );
      }

      // 2. Если передан конкретный rating_id, проверяем идемпотентность
      if (body.rating_id) {
        const { data: existingRating } = await supabaseAdmin
          .from("ratings")
          .select("*")
          .eq("id", body.rating_id)
          .maybeSingle();

        if (existingRating) {
          return c.json(
            {
              message: "Оценка с таким ID уже зарегистрирована",
              rating_id: existingRating.id,
              status: existingRating.status,
              photo_path: existingRating.photo_path,
              created_at: existingRating.created_at,
            },
            200
          );
        }
      }

      // 3. Вставляем запись в таблицу ratings.
      // Если rating_id не указан явно, id генерирует сама БД через DEFAULT gen_random_uuid()
      const insertPayload: {
        user_id: string;
        photo_path: string;
        status: "pending";
        id?: string;
      } = {
        user_id: user.id,
        photo_path: photoPath,
        status: "pending",
      };

      if (body.rating_id) {
        insertPayload.id = body.rating_id;
      }

      let newRating: { id: string; created_at: string; status: string } | null = null;

      const { data: insertedData, error: insertError } = await supabaseAdmin
        .from("ratings")
        .insert(insertPayload)
        .select()
        .single();

      if (insertError) {
        // Если ошибка FK (23503 - профиля еще нет), лениво создаем профиль и повторяем вставку
        if (insertError.code === "23503") {
          await getOrCreateProfile(supabaseAdmin, user);
          const { data: retryData, error: retryError } = await supabaseAdmin
            .from("ratings")
            .insert(insertPayload)
            .select()
            .single();

          if (retryError || !retryData) {
            return c.json(
              {
                error: "DatabaseError",
                message: `Не удалось сохранить запись оценки: ${retryError?.message ?? "неизвестная ошибка"}`,
              },
              500
            );
          }
          newRating = retryData;
        } else {
          return c.json(
            {
              error: "DatabaseError",
              message: `Не удалось сохранить запись оценки: ${insertError.message}`,
            },
            500
          );
        }
      } else {
        newRating = insertedData;
      }

      if (!newRating) {
        return c.json(
          {
            error: "DatabaseError",
            message: "Не удалось получить созданную запись оценки",
          },
          500
        );
      }

      // ID оценки, выданный базой данных (newRating.id)
      const ratingId = newRating.id;

      // 5. Ставим задачу в очередь pgmq (rating_tasks)
      let queueMsgId: number;
      try {
        queueMsgId = await enqueueRatingTask(supabaseAdmin, {
          ratingId,
          userId: user.id,
          photoPath: photoPath,
          ratingMode: body.rating_mode,
        });
      } catch (queueError) {
        // В случае ошибки очереди помечаем запись как failed
        await supabaseAdmin
          .from("ratings")
          .update({
            status: "failed",
            error_message:
              queueError instanceof Error
                ? queueError.message
                : "Ошибка добавления в очередь pgmq",
          })
          .eq("id", ratingId);

        return c.json(
          {
            error: "QueueError",
            message: "Не удалось поставить задачу в очередь обработки",
            detail:
              queueError instanceof Error
                ? queueError.message
                : String(queueError),
          },
          500
        );
      }

      return c.json(
        {
          rating_id: ratingId,
          status: "pending",
          photo_path: photoPath,
          rating_mode: body.rating_mode,
          queue_msg_id: queueMsgId,
          created_at: newRating.created_at,
        },
        201
      );
    } catch (error) {
      return c.json(
        {
          error: "InternalError",
          message:
            error instanceof Error ? error.message : "Внутренняя ошибка сервера",
        },
        500
      );
    }
  }
);


