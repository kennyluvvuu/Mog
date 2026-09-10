/**
 * Ядро фонового воркера платформы Looksmaxxing AI Rating Platform (Mog)
 *
 * Рантайм: Bun
 * Обязанности:
 * 1. Long-polling очереди pgmq ('rating_tasks') в последовательном режиме (qty: 1).
 * 2. Обновление статуса записи в таблице `ratings` ('processing' -> 'completed' / 'failed').
 * 3. Загрузка и подготовка фотографии из Supabase Storage (private bucket).
 * 4. Throttling и Rate Limiting перед вызовами Groq API (3-5 сек пауза, exponential backoff).
 * 5. ИИ-оценка внешности через @ai-sdk/groq и модуль worker/ai.ts.
 * 6. Запись структурированного результата в БД и удаление задачи из pgmq.
 * 7. Корректная обработка HTTP 429 с переносом Visibility Timeout (pgmq.set_vt).
 * 8. Graceful shutdown при получении сигналов SIGINT/SIGTERM.
 */

import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { groq } from "@ai-sdk/groq";
import { ratings } from "../db.schema.ts";
import type {
  PgmqMessage,
  RatingTaskPayload,
} from "../db.types.ts";
import { ratingQueue } from "./queue.ts";
import {
  analyzeImageRating,
  extractRetryAfterSeconds,
  isRateLimitError,
  type RatingAnalysisResult,
} from "./ai.ts";
import { rateLimiter } from "./limiter.ts";

// ============================================================================
// Конфигурация воркера
// ============================================================================

export interface WorkerConfig {
  /** Имя модели Groq Vision (мультимодальная) */
  groqVisionModel: string;
  /** URL Supabase инстанса */
  supabaseUrl: string;
  /** Сервисный ключ Supabase для доступа к приватному Storage */
  supabaseServiceRoleKey: string;
  /** Имя приватного бакета с фотографиями */
  ratingsBucket: string;
  /** Время скрытия сообщения в очереди при чтении (Visibility Timeout, сек) */
  visibilityTimeoutSeconds: number;
  /** Интервал long-polling опроса очереди при отсутствии задач (мс) */
  pollIntervalMs: number;
  /** Пауза при системной ошибке цикла long-polling (мс) */
  errorCooldownMs: number;
  /** Максимальное число попыток обработки одного сообщения (read_ct) */
  maxTaskRetries: number;
}

export const config: WorkerConfig = {
  groqVisionModel:
    process.env.GROQ_VISION_MODEL ||
    process.env.GROQ_MODEL ||
    "llama-3.2-11b-vision-preview",
  supabaseUrl:
    process.env.SUPABASE_URL || "http://127.0.0.1:54321",
  supabaseServiceRoleKey:
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_KEY ||
    "",
  ratingsBucket:
    process.env.RATINGS_BUCKET || "ratings_photos",
  visibilityTimeoutSeconds: Number(process.env.PGMQ_VT_SECONDS) || 60,
  pollIntervalMs: Number(process.env.WORKER_POLL_INTERVAL_MS) || 1500,
  errorCooldownMs: Number(process.env.WORKER_ERROR_COOLDOWN_MS) || 5000,
  maxTaskRetries: Number(process.env.MAX_TASK_RETRIES) || 3,
};

// Инициализация Drizzle ORM через общий пул соединений очереди
const db = drizzle(ratingQueue.getPool(), { schema: { ratings } });

// Флаги управления жизненным циклом воркера
let isRunning = true;
let isProcessingTask = false;

// ============================================================================
// Вспомогательные функции
// ============================================================================

function logInfo(message: string, ...args: unknown[]): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [INFO] [Worker] ${message}`, ...args);
}

function logWarn(message: string, ...args: unknown[]): void {
  const timestamp = new Date().toISOString();
  console.warn(`[${timestamp}] [WARN] [Worker] ${message}`, ...args);
}

function logError(message: string, ...args: unknown[]): void {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] [ERROR] [Worker] ${message}`, ...args);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Загрузка / подготовка фотографии для передачи в мультимодальную модель
 * Поддерживает:
 * 1. Data URI (data:image/...)
 * 2. Прямые HTTP/HTTPS ссылки
 * 3. Пути в Supabase Storage (например, `${userId}/${ratingId}.jpg`)
 */
export async function fetchPhotoBinary(photoPath: string): Promise<Buffer | string> {
  let trimmed = photoPath.trim().replace(/^\/+/, "");

  // 1. Уже готовый Data URI
  if (trimmed.startsWith("data:")) {
    return trimmed;
  }

  // 2. Внешний абсолютный HTTP / HTTPS URL
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    const response = await fetch(trimmed);
    if (!response.ok) {
      throw new Error(
        `Не удалось скачать фото по URL (${response.status} ${response.statusText}): ${trimmed}`
      );
    }
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }

  // 3. Если путь включает префикс имени бакета, отсекаем его
  if (trimmed.startsWith(`${config.ratingsBucket}/`)) {
    trimmed = trimmed.substring(config.ratingsBucket.length + 1);
  }

  // Относительный путь в приватном бакете Supabase Storage
  const storageEndpoint = `${config.supabaseUrl}/storage/v1/object/authenticated/${config.ratingsBucket}/${trimmed}`;
  const fallbackEndpoint = `${config.supabaseUrl}/storage/v1/object/${config.ratingsBucket}/${trimmed}`;

  const headers: Record<string, string> = {};
  if (config.supabaseServiceRoleKey) {
    headers["Authorization"] = `Bearer ${config.supabaseServiceRoleKey}`;
    headers["apikey"] = config.supabaseServiceRoleKey;
  }

  let response = await fetch(storageEndpoint, { headers });

  // Если authenticated endpoint вернул 404, пробуем стандартный endpoint
  if (!response.ok && response.status === 404) {
    response = await fetch(fallbackEndpoint, { headers });
  }

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(
      `Ошибка загрузки фото из Supabase Storage [${config.ratingsBucket}/${trimmed}] (${response.status} ${response.statusText}): ${errorBody}`
    );
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// ============================================================================
// Обработка отдельной задачи из очереди pgmq
// ============================================================================

export async function processTask(msg: PgmqMessage<RatingTaskPayload>): Promise<void> {
  const startTime = Date.now();
  const payload = msg.message;

  if (!payload || !payload.rating_id || !payload.photo_path) {
    logError(
      `Сообщение #${msg.msg_id} содержит невалидный payload. Архивируем poisoned message:`,
      payload
    );
    await ratingQueue.archive(msg.msg_id);
    return;
  }

  const { rating_id, user_id, photo_path, rating_mode } = payload;
  const currentMode = rating_mode || "honest";

  logInfo(
    `👉 Начало обработки задачи rating_id=${rating_id} (msg_id=${msg.msg_id}, попытка ${msg.read_ct}/${config.maxTaskRetries}, mode=${currentMode})`
  );

  // ШАГ 1: Обновление статуса в БД на 'processing'
  // (Вызывает триггер notify_rating_update -> уведомление SSE клиенту)
  try {
    await db
      .update(ratings)
      .set({ status: "processing" })
      .where(eq(ratings.id, rating_id));
  } catch (dbError) {
    logError(`Ошибка обновления статуса 'processing' для rating_id=${rating_id}:`, dbError);
    // Продолжаем выполнение, даже если первый UPDATE сбоит
  }

  try {
    // ШАГ 2: Загрузка изображения из Supabase Storage / URL
    logInfo(`Загрузка фото для rating_id=${rating_id} (${photo_path})...`);
    const imageBinary = await fetchPhotoBinary(photo_path);

    // ШАГ 3: Троттлинг перед вызовом Groq API (защита от превышения RPM/TPM)
    await rateLimiter.throttle();

    // ШАГ 4: Вызов Groq AI модели через Vercel AI SDK (@ai-sdk/groq)
    logInfo(
      `Отправка запроса в Groq AI (модель: ${config.groqVisionModel}, режим: ${currentMode})...`
    );

    const groqModel = groq(config.groqVisionModel);

    const result: RatingAnalysisResult = await analyzeImageRating({
      model: groqModel,
      image: imageBinary,
      ratingMode: currentMode,
    });

    const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(2);
    logInfo(
      `✅ Успешная оценка Groq AI для rating_id=${rating_id}: tier=${result.tier}, score=${result.scoreFormatted} (${elapsedSec}s)`
    );

    // ШАГ 5: Запись результатов в БД со статусом 'completed'
    await db
      .update(ratings)
      .set({
        status: "completed",
        tier: result.tier,
        score: result.scoreFormatted,
        metrics: result.metrics,
        looksmaxxingTips: result.looksmaxxing_tips,
        rawAiResponse: result.raw_ai_response,
        errorMessage: null,
        completedAt: new Date(),
      })
      .where(eq(ratings.id, rating_id));

    // ШАГ 6: Удаление выполненной задачи из очереди pgmq
    await ratingQueue.deleteMsg(msg.msg_id);
    rateLimiter.onSuccess();

    logInfo(`🎉 Задача rating_id=${rating_id} успешно завершена и удалена из pgmq`);
  } catch (error) {
    const isRateLimit = isRateLimitError(error);

    if (isRateLimit) {
      // ----------------------------------------------------------------------
      // СЦЕНАРИЙ А: 429 Too Many Requests (Rate Limit Groq API)
      // Сообщение НЕ удаляется и НЕ помечается как failed!
      // Увеличиваем Visibility Timeout (set_vt) и делаем паузу воркера.
      // ----------------------------------------------------------------------
      const retryAfterSeconds = extractRetryAfterSeconds(error);
      const backoffSeconds = rateLimiter.onRateLimit(retryAfterSeconds);

      logWarn(
        `⏳ Groq API Rate Limit (429) для задачи rating_id=${rating_id} (msg_id=${msg.msg_id}). ` +
          `Перенос Visibility Timeout на ${backoffSeconds} сек. Ошибок подряд: ${rateLimiter.getConsecutiveErrors()}`
      );

      try {
        await ratingQueue.setVt(msg.msg_id, backoffSeconds);
      } catch (vtError) {
        logError(`Ошибка вызова set_vt для msg_id=${msg.msg_id}:`, vtError);
      }

      // Пауза воркера на время backoff перед следующим чтением
      logInfo(`Спим ${backoffSeconds} сек перед повтором...`);
      await sleep(backoffSeconds * 1000);
      return;
    }

    // ------------------------------------------------------------------------
    // СЦЕНАРИЙ Б: Фатальная ошибка или превышение лимита попыток (read_ct)
    // ------------------------------------------------------------------------
    const errorMessage = error instanceof Error ? error.message : String(error);
    logError(`❌ Ошибка обработки задачи rating_id=${rating_id}: ${errorMessage}`);

    const isExhausted = msg.read_ct >= config.maxTaskRetries;

    if (isExhausted) {
      logError(
        `Превышено максимальное число попыток (${msg.read_ct}/${config.maxTaskRetries}). ` +
          `Помечаем rating_id=${rating_id} как 'failed' и архивируем сообщение.`
      );

      try {
        await db
          .update(ratings)
          .set({
            status: "failed",
            errorMessage: `Ошибка анализа: ${errorMessage}`,
            completedAt: new Date(),
          })
          .where(eq(ratings.id, rating_id));
      } catch (updateError) {
        logError(`Не удалось обновить статус 'failed' в БД:`, updateError);
      }

      try {
        await ratingQueue.archive(msg.msg_id);
      } catch (archiveError) {
        logError(`Не удалось архивировать msg_id=${msg.msg_id}:`, archiveError);
      }
    } else {
      // Временная ошибка (сбой сети, таймаут): переносим visibility timeout на короткий срок
      const retryDelaySec = 15;
      logWarn(
        `Временная ошибка. Задача rating_id=${rating_id} будет повторена через ${retryDelaySec}с (попытка ${msg.read_ct}/${config.maxTaskRetries})`
      );

      try {
        await ratingQueue.setVt(msg.msg_id, retryDelaySec);
      } catch (vtError) {
        logError(`Ошибка set_vt при временной ошибке:`, vtError);
      }
    }
  }
}

// ============================================================================
// Основной цикл воркера (Long-Polling Loop)
// ============================================================================

export async function startWorker(): Promise<void> {
  logInfo("=========================================================");
  logInfo("🚀 Запуск фонового воркера Looksmaxxing AI Rating Platform");
  logInfo(`- PID: ${process.pid}`);
  logInfo(`- Провайдер AI: @ai-sdk/groq`);
  logInfo(`- Модель Groq: ${config.groqVisionModel}`);
  logInfo(`- Очередь pgmq: ${ratingQueue.queueName}`);
  logInfo(`- Visibility Timeout: ${config.visibilityTimeoutSeconds}s`);
  logInfo(`- Троттлинг запросов: ${rateLimiter.getMinIntervalMs()}ms`);
  logInfo("=========================================================");

  // Идемпотентная инициализация расширения pgmq и очереди rating_tasks
  try {
    await ratingQueue.initQueue();
    logInfo(`Очередь "${ratingQueue.queueName}" готова к работе`);
  } catch (initError) {
    logError("Ошибка инициализации очереди pgmq:", initError);
  }

  // Главный цикл long-polling
  while (isRunning) {
    try {
      // Читаем строго 1 задачу (последовательная обработка)
      const msg = await ratingQueue.readOne(config.visibilityTimeoutSeconds);

      if (!msg) {
        // Очередь пуста: выдерживаем интервал опроса
        await sleep(config.pollIntervalMs);
        continue;
      }

      isProcessingTask = true;
      try {
        await processTask(msg);
      } finally {
        isProcessingTask = false;
      }
    } catch (loopError) {
      logError("Непредвиденная ошибка в основном цикле воркера:", loopError);
      // Пауза при сбое подключения к БД, чтобы не спамить лог
      await sleep(config.errorCooldownMs);
    }
  }

  logInfo("Основной цикл воркера остановлен.");
}

// ============================================================================
// Обработка сигналов завершения процесса (Graceful Shutdown)
// ============================================================================

async function handleShutdown(signal: string): Promise<void> {
  logInfo(`Получен сигнал ${signal}. Запуск корректного завершения (Graceful Shutdown)...`);
  isRunning = false;

  if (isProcessingTask) {
    logInfo("Ожидание завершения текущей задачи...");
    let waitCount = 0;
    while (isProcessingTask && waitCount < 30) {
      await sleep(1000);
      waitCount++;
    }
  }

  logInfo("Закрытие пула соединений с БД...");
  try {
    await ratingQueue.close();
  } catch (closeError) {
    logError("Ошибка при закрытии соединений:", closeError);
  }

  logInfo("Воркер успешно завершил работу.");
  process.exit(0);
}

process.on("SIGINT", () => {
  handleShutdown("SIGINT").catch((err) => {
    console.error("Ошибка при graceful shutdown:", err);
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  handleShutdown("SIGTERM").catch((err) => {
    console.error("Ошибка при graceful shutdown:", err);
    process.exit(1);
  });
});

// Запуск воркера при прямом вызове файла через Bun
if (import.meta.main) {
  startWorker().catch((err) => {
    logError("Критическая ошибка запуска воркера:", err);
    process.exit(1);
  });
}