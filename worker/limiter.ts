/**
 * Rate Limiter и Throttling для фонового воркера Groq API
 * Реализует:
 * 1. Минимальную паузу между вызовами (throttling 3-5 сек) для соблюдения RPM/TPM
 * 2. Экспоненциальный backoff с jitter при ошибках 429 Too Many Requests
 * 3. Учет заголовков/параметров Retry-After от провайдера
 */

export interface RateLimiterOptions {
  /**
   * Минимальный интервал между вызовами AI API (в миллисекундах).
   * По умолчанию 3500 мс (3.5 секунды), чтобы укладываться в лимиты RPM / TPM бесплатного тарифа Groq.
   */
  minIntervalMs?: number;

  /**
   * Базовая задержка для экспоненциального backoff при 429 (в секундах).
   * По умолчанию 30 секунд (в соответствии со спецификацией pgmq.set_vt в AGENTS.md).
   */
  baseBackoffSeconds?: number;

  /**
   * Максимальная задержка при 429 (в секундах).
   * По умолчанию 120 секунд.
   */
  maxBackoffSeconds?: number;

  /**
   * Максимальный случайный jitter (в секундах) для предотвращения thundering herd.
   * По умолчанию 5 секунд.
   */
  maxJitterSeconds?: number;
}

export class RateLimiter {
  private readonly minIntervalMs: number;
  private readonly baseBackoffSeconds: number;
  private readonly maxBackoffSeconds: number;
  private readonly maxJitterSeconds: number;
  private lastRequestTime = 0;
  private consecutiveErrors = 0;

  constructor(options: RateLimiterOptions = {}) {
    this.minIntervalMs =
      options.minIntervalMs ??
      (process.env.RATE_LIMIT_INTERVAL_MS
        ? Number(process.env.RATE_LIMIT_INTERVAL_MS)
        : 3500);

    this.baseBackoffSeconds =
      options.baseBackoffSeconds ??
      (process.env.RATE_LIMIT_BASE_BACKOFF_SEC
        ? Number(process.env.RATE_LIMIT_BASE_BACKOFF_SEC)
        : 30);

    this.maxBackoffSeconds =
      options.maxBackoffSeconds ??
      (process.env.RATE_LIMIT_MAX_BACKOFF_SEC
        ? Number(process.env.RATE_LIMIT_MAX_BACKOFF_SEC)
        : 120);

    this.maxJitterSeconds =
      options.maxJitterSeconds ??
      (process.env.RATE_LIMIT_MAX_JITTER_SEC
        ? Number(process.env.RATE_LIMIT_MAX_JITTER_SEC)
        : 5);
  }

  /**
   * Выдерживает обязательную паузу перед следующим вызовом AI API (throttling).
   * Гарантирует, что между вызовами пройдет не менее `minIntervalMs`.
   */
  async throttle(): Promise<void> {
    const now = Date.now();
    const elapsed = now - this.lastRequestTime;

    if (this.lastRequestTime > 0 && elapsed < this.minIntervalMs) {
      const waitMs = this.minIntervalMs - elapsed;
      await new Promise((resolve) => setTimeout(resolve, waitMs));
    }

    this.lastRequestTime = Date.now();
  }

  /**
   * Обработка ошибки 429 Too Many Requests.
   * Вычисляет задержку (в секундах) для переноса Visibility Timeout в pgmq (`set_vt`).
   *
   * @param retryAfterSeconds Рекомендуемая задержка от Groq API (из заголовка Retry-After)
   * @returns Задержка в секундах для передачи в pgmq.set_vt
   */
  onRateLimit(retryAfterSeconds?: number | null): number {
    this.consecutiveErrors++;

    // Экспоненциальный множитель: 1.5^(errors - 1)
    const exponent = Math.max(0, this.consecutiveErrors - 1);
    const exponentialBase = this.baseBackoffSeconds * Math.pow(1.5, exponent);

    // Случайный jitter для устранения одновременных повторов
    const jitter = Math.random() * this.maxJitterSeconds;

    let computedSeconds = exponentialBase + jitter;

    // Если провайдер явно указал Retry-After, берем максимум из вычисленного и полученного
    if (retryAfterSeconds && Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0) {
      computedSeconds = Math.max(computedSeconds, retryAfterSeconds + jitter);
    }

    // Ограничиваем сверху maxBackoffSeconds
    const finalSeconds = Math.min(Math.ceil(computedSeconds), this.maxBackoffSeconds);

    return Math.max(finalSeconds, 5);
  }

  /**
   * Сброс счетчика последовательных ошибок при успешном ответе от AI
   */
  onSuccess(): void {
    this.consecutiveErrors = 0;
    this.lastRequestTime = Date.now();
  }

  /**
   * Получение текущего количества последовательных 429 ошибок
   */
  getConsecutiveErrors(): number {
    return this.consecutiveErrors;
  }

  /**
   * Получение минимального интервала троттлинга
   */
  getMinIntervalMs(): number {
    return this.minIntervalMs;
  }
}

// Экземпляр ограничителя скорости по умолчанию для использования в воркере
export const rateLimiter = new RateLimiter();
