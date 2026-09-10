import { describe, it, expect, mock, spyOn } from "bun:test";
import { RateLimiter } from "./limiter.ts";
import { fetchPhotoBinary } from "./index.ts";
import { isRateLimitError, extractRetryAfterSeconds, AiRateLimitError } from "./ai.ts";

describe("Worker RateLimiter", () => {
  it("should initialize with default parameters", () => {
    const limiter = new RateLimiter({
      minIntervalMs: 3500,
      baseBackoffSeconds: 30,
      maxBackoffSeconds: 120,
      maxJitterSeconds: 5,
    });

    expect(limiter.getMinIntervalMs()).toBe(3500);
    expect(limiter.getConsecutiveErrors()).toBe(0);
  });

  it("should throttle requests within minIntervalMs", async () => {
    const limiter = new RateLimiter({ minIntervalMs: 50 });
    const start = Date.now();

    await limiter.throttle();
    await limiter.throttle();

    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(45);
  });

  it("should calculate exponential backoff on consecutive rate limits", () => {
    const limiter = new RateLimiter({
      baseBackoffSeconds: 30,
      maxBackoffSeconds: 120,
      maxJitterSeconds: 0, // Disable jitter for predictable test
    });

    // 1st error: 30 * 1.5^0 = 30
    const delay1 = limiter.onRateLimit();
    expect(delay1).toBe(30);
    expect(limiter.getConsecutiveErrors()).toBe(1);

    // 2nd error: 30 * 1.5^1 = 45
    const delay2 = limiter.onRateLimit();
    expect(delay2).toBe(45);
    expect(limiter.getConsecutiveErrors()).toBe(2);

    // 3rd error: 30 * 1.5^2 = 67.5 -> 68
    const delay3 = limiter.onRateLimit();
    expect(delay3).toBe(68);

    // Reset on success
    limiter.onSuccess();
    expect(limiter.getConsecutiveErrors()).toBe(0);
  });

  it("should respect retryAfter parameter if larger than base backoff", () => {
    const limiter = new RateLimiter({
      baseBackoffSeconds: 20,
      maxBackoffSeconds: 120,
      maxJitterSeconds: 0,
    });

    const delay = limiter.onRateLimit(55);
    expect(delay).toBe(55);
  });

  it("should clamp backoff to maxBackoffSeconds", () => {
    const limiter = new RateLimiter({
      baseBackoffSeconds: 100,
      maxBackoffSeconds: 120,
      maxJitterSeconds: 0,
    });

    limiter.onRateLimit();
    const delayMax = limiter.onRateLimit();
    expect(delayMax).toBe(120);
  });
});

describe("Worker Photo Fetcher", () => {
  it("should pass data URI through unchanged", async () => {
    const dataUri = "data:image/jpeg;base64,/9j/4AAQSkZJRg==";
    const result = await fetchPhotoBinary(dataUri);
    expect(result).toBe(dataUri);
  });
});

describe("Rate Limit Error Detection", () => {
  it("should detect AiRateLimitError", () => {
    const error = new AiRateLimitError("Rate limit exceeded", 25);
    expect(isRateLimitError(error)).toBe(true);
    expect(extractRetryAfterSeconds(error)).toBe(25);
  });

  it("should detect 429 status code objects", () => {
    const error = { statusCode: 429, message: "Too many requests" };
    expect(isRateLimitError(error)).toBe(true);
  });

  it("should extract retry-after from error message", () => {
    const error = new Error("Rate limit exceeded. Please try again in 18.5s.");
    expect(isRateLimitError(error)).toBe(true);
    expect(extractRetryAfterSeconds(error)).toBe(19);
  });
});
