import { Hono } from "hono";
import { streamSSE } from "hono/streaming";
import type { AppEnv } from "../types.ts";
import { authMiddleware } from "../middlewares/auth.ts";
import { RATINGS_BUCKET } from "./ratings.ts";

export const streamRouter = new Hono<AppEnv>();

// Требуется авторизация (поддерживается как заголовок Bearer, так и query ?token=)
streamRouter.use("*", authMiddleware);

/**
 * GET /ratings/:id/stream
 * Server-Sent Events (SSE) эндпоинт для отслеживания статуса обработки фото в реальном времени.
 * Стримит клиенту обновления: pending -> processing -> completed / failed.
 */
streamRouter.get("/:id/stream", async (c) => {
  const id = c.req.param("id");
  const user = c.get("user");
  const supabaseAdmin = c.get("supabaseAdmin");

  // 1. Проверяем существование записи и права доступа
  const { data: initialRating, error } = await supabaseAdmin
    .from("ratings")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    return c.json(
      {
        error: "DatabaseError",
        message: `Ошибка запроса: ${error.message}`,
      },
      500
    );
  }

  if (!initialRating) {
    return c.json(
      {
        error: "NotFound",
        message: "Оценка не найдена",
      },
      404
    );
  }

  return streamSSE(c, async (stream) => {
    let isAborted = false;
    stream.onAbort(() => {
      isAborted = true;
    });

    // Отправляем начальное состояние
    await stream.writeSSE({
      event: "status",
      data: JSON.stringify(initialRating),
    });

    // Если оценка уже завершена или завершилась с ошибкой, закрываем поток
    if (
      initialRating.status === "completed" ||
      initialRating.status === "failed"
    ) {
      return;
    }

    const pollIntervalMs = 1500;
    const maxWaitMs = 120_000; // Таймаут 2 минуты
    const startTime = Date.now();

    let lastStatus = initialRating.status;
    let lastCompletedAt = initialRating.completed_at;
    let pollCount = 0;

    while (!isAborted && Date.now() - startTime < maxWaitMs) {
      await stream.sleep(pollIntervalMs);
      if (isAborted) break;

      pollCount++;

      const { data: currentRating, error: pollError } = await supabaseAdmin
        .from("ratings")
        .select("*")
        .eq("id", id)
        .eq("user_id", user.id)
        .maybeSingle();

      if (pollError || !currentRating) {
        break;
      }

      // Проверяем, изменился ли статус
      const statusChanged = currentRating.status !== lastStatus;
      const completionChanged = currentRating.completed_at !== lastCompletedAt;

      if (statusChanged || completionChanged) {
        lastStatus = currentRating.status;
        lastCompletedAt = currentRating.completed_at;

        let photoUrl: string | null = null;
        if (
          currentRating.status === "completed" &&
          currentRating.photo_path
        ) {
          const { data: signedData } = await supabaseAdmin.storage
            .from(RATINGS_BUCKET)
            .createSignedUrl(currentRating.photo_path, 3600);
          photoUrl = signedData?.signedUrl ?? null;
        }

        await stream.writeSSE({
          event: "status",
          data: JSON.stringify({
            ...currentRating,
            photo_url: photoUrl,
          }),
        });

        // Если финальный статус, завершаем стрим
        if (
          currentRating.status === "completed" ||
          currentRating.status === "failed"
        ) {
          break;
        }
      } else if (pollCount % 4 === 0) {
        // Каждые ~6 секунд шлем heartbeat ping для поддержания соединения
        await stream.writeSSE({
          event: "ping",
          data: JSON.stringify({
            timestamp: new Date().toISOString(),
            status: currentRating.status,
          }),
        });
      }
    }
  });
});
