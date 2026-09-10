import {
  generateText,
  APICallError,
  type LanguageModel,
  type UserContent,
} from "ai";
import { URL } from "node:url";
import {
  aiRatingOutputSchema,
  calibrateTierAndScore,
  formatScore,
  type AiRatingOutput,
  type AnalyzeImageRatingOptions,
  type ImageInput,
  type RatingAnalysisResult,
  type RatingMode,
} from "../schemas.ts";

/**
 * Ошибка конфигурации AI сервиса
 */
export class AiConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AiConfigurationError";
  }
}

/**
 * Ошибка превышения лимитов запросов AI API (RPM / TPM / Rate Limit / HTTP 429)
 */
export class AiRateLimitError extends Error {
  public readonly retryAfterSeconds: number | null;
  public readonly originalError: unknown;

  constructor(
    message: string,
    retryAfterSeconds: number | null = null,
    originalError?: unknown
  ) {
    super(message);
    this.name = "AiRateLimitError";
    this.retryAfterSeconds = retryAfterSeconds;
    this.originalError = originalError;
  }
}

// Алиасы для обратной совместимости
export class GroqConfigurationError extends AiConfigurationError {}
export class GroqRateLimitError extends AiRateLimitError {}

/**
 * Определение, является ли ошибка ошибкой превышения лимитов (Rate Limit / 429)
 * Работает универсально для любого провайдера (Groq, OpenAI, Anthropic, Google, etc.)
 */
export function isRateLimitError(error: unknown): boolean {
  if (!error) return false;

  if (error instanceof AiRateLimitError || error instanceof GroqRateLimitError) {
    return true;
  }

  // Проверка Vercel AI SDK APICallError
  if (APICallError.isInstance(error)) {
    if (error.statusCode === 429) {
      return true;
    }
  }

  if (typeof error === "object") {
    const err = error as Record<string, unknown>;

    // Проверка статуса HTTP 429
    if (err.statusCode === 429 || err.status === 429) {
      return true;
    }

    // Проверка кодов ошибок
    const code = String(err.code || err.type || "").toLowerCase();
    if (
      code.includes("rate_limit") ||
      code.includes("ratelimit") ||
      code.includes("quota") ||
      code === "429"
    ) {
      return true;
    }

    // Проверка сообщения об ошибке
    const message = typeof err.message === "string" ? err.message.toLowerCase() : "";
    if (
      message.includes("rate limit") ||
      message.includes("too many requests") ||
      message.includes("429") ||
      message.includes("tpm") ||
      message.includes("rpm") ||
      message.includes("tokens per minute") ||
      message.includes("requests per minute") ||
      message.includes("quota exceeded") ||
      message.includes("resource has been exhausted")
    ) {
      return true;
    }

    // Вложенная ошибка в response/data
    if (err.response && typeof err.response === "object") {
      const resp = err.response as Record<string, unknown>;
      if (resp.status === 429 || resp.statusCode === 429) {
        return true;
      }
    }

    // Вложенный cause
    if (err.cause && isRateLimitError(err.cause)) {
      return true;
    }
  }

  return false;
}

/**
 * Извлечение рекомендуемой задержки retry-after (в секундах) из ошибки любого провайдера
 */
export function extractRetryAfterSeconds(error: unknown): number | null {
  if (!error || typeof error !== "object") return null;

  const err = error as Record<string, unknown>;

  // 1. Поле в нашей кастомной ошибке
  if (err instanceof AiRateLimitError && err.retryAfterSeconds !== null) {
    return err.retryAfterSeconds;
  }

  // 2. Проверка заголовков ответа
  const headers = (
    err.responseHeaders ||
    err.headers ||
    (err.response as Record<string, unknown> | undefined)?.headers
  ) as Headers | Record<string, string> | undefined;

  if (headers) {
    let retryAfterHeader: string | null = null;
    if (typeof (headers as Headers).get === "function") {
      retryAfterHeader = (headers as Headers).get("retry-after");
    } else if (typeof headers === "object") {
      const lower = Object.entries(headers).find(
        ([k]) => k.toLowerCase() === "retry-after"
      );
      if (lower) retryAfterHeader = String(lower[1]);
    }

    if (retryAfterHeader) {
      const parsedSeconds = Number(retryAfterHeader);
      if (!isNaN(parsedSeconds) && parsedSeconds > 0) {
        return Math.ceil(parsedSeconds);
      }
      const parsedDate = new Date(retryAfterHeader).getTime();
      if (!isNaN(parsedDate)) {
        const diffSec = Math.ceil((parsedDate - Date.now()) / 1000);
        if (diffSec > 0) return diffSec;
      }
    }
  }

  // 3. Поиск паттернов в тексте ошибки
  const message = typeof err.message === "string" ? err.message : "";
  const matchSeconds = message.match(
    /(?:try again in|retry after|wait|retry in)\s+([0-9.]+)\s*(?:s|sec|seconds)?/i
  );
  if (matchSeconds && matchSeconds[1]) {
    const sec = parseFloat(matchSeconds[1]);
    if (!isNaN(sec) && sec > 0) {
      return Math.ceil(sec);
    }
  }

  return null;
}

/**
 * Надежное извлечение и парсинг JSON из сырого ответа generateText
 * Корректно срезает:
 * - блоки рассуждений моделей (<think>...</think>, <thought>...</thought>)
 * - markdown code fences (```json ... ```)
 * - начальный и завершающий мусорный текст
 */
export function extractJsonPayload(rawText: string): Record<string, unknown> {
  if (!rawText || typeof rawText !== "string") {
    throw new Error("Модель вернула пустой текстовый ответ вместо JSON");
  }

  let text = rawText.trim();

  // 1. Очистка блоков рассуждений (thinking/reasoning blocks)
  text = text.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
  text = text.replace(/<thought>[\s\S]*?<\/thought>/gi, "").trim();

  // 2. Поиск markdown code fence: ```json ... ``` или ``` ... ```
  const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (fenceMatch && fenceMatch[1]) {
    text = fenceMatch[1].trim();
  }

  // 3. Прямой парсинг, если строка начинается с {
  if (text.startsWith("{") && text.endsWith("}")) {
    return JSON.parse(text) as Record<string, unknown>;
  }

  // 4. Поиск первого '{' и соответствующего последнего '}'
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");

  if (firstBrace !== -1 && lastBrace > firstBrace) {
    const candidate = text.substring(firstBrace, lastBrace + 1).trim();
    return JSON.parse(candidate) as Record<string, unknown>;
  }

  // Если не удалось найти JSON блок
  throw new Error(
    `Не удалось извлечь JSON-объект из ответа модели: "${rawText.slice(0, 150)}..."`
  );
}

/**
 * Построение системного промпта в зависимости от выбранного режима оценки
 */
export function buildSystemPrompt(
  mode: RatingMode = "honest",
  customInstructions?: string
): string {
  let modeSpecificInstruction = "";

  switch (mode) {
    case "brutal":
      modeSpecificInstruction = `
РЕЖИМ ОЦЕНКИ: "BRUTAL" (БЕСКОМПРОМИССНЫЙ И ЖЕСТКИЙ РАЗБОР)
- Твой тон: предельно прямой, бескомпромиссный, строгий и безжалостный.
- Полностью исключи вежливость, прикрасы и политкорректность.
- Называй все дефекты и недостатки своими именами без сглаживания (рецессия челюсти, слабый подбородок, избыток жира на лице / bloated face, отрицательный наклон глаз, выраженная асимметрия, дефекты кожи).
- Рекомендации: давай самые жесткие, эффективные и бескомпромиссные меры для достижения максимального результата (жесткий дефицит калорий до 10-12% жира, ортодонтия, жевание твердых резинок/мьюинг, уходовые кислоты высокой концентрации).
`;
      break;

    case "soft":
      modeSpecificInstruction = `
РЕЖИМ ОЦЕНКИ: "SOFT" (ЩАДЯЩАЯ И ПОДДЕРЖИВАЮЩАЯ ОЦЕНКА)
- Твой тон: деликатный, вдохновляющий, тактичный и поддерживающий.
- Сфокусируйся на природном потенциале внешности, выдели самые сильные и привлекательные черты лица.
- Указывай на зоны роста мягко, в позитивном ключе возможностей преображения.
- Рекомендации: щадящие, комфортные и пошаговые шаги (базовый приятный уход за кожей, подходящая стрижка по форме лица, стилизация бороды, улучшение осанки, здоровый сон и водный баланс).
`;
      break;

    case "honest":
    default:
      modeSpecificInstruction = `
РЕЖИМ ОЦЕНКИ: "HONEST" (ОБЪЕКТИВНЫЙ И РЕАЛИСТИЧНЫЙ АНАЛИЗ)
- Твой тон: научно-обоснованный, нейтральный, беспристрастный и объективный.
- Соблюдай реалистичный баланс между сильными сторонами и анатомическими недостатками.
- Никакой лести, но и без неоправданной агрессии. Точные анатомические термины и выверенные оценки.
- Рекомендации: рациональные, практичные и применимые шаги с приоритетом на максимальный ROI изменений внешности.
`;
      break;
  }

  const basePrompt = `Ты — ведущий мировой эксперт в области антропометрии лица, эстетической дерматологии и теории луксмаксинга (Looksmaxxing).
Твоя задача — провести глубокий, анатомически точный анализ фотографий лица человека и вернуть СТРОГО валидный JSON объект (без вводных и завершающих фраз).

ШКАЛА ЛУКСМАКСИНГА (LOOKSMAXXING TIER LIST):
1. "sub3" (балл 1.0 - 2.9): Значительные анатомические асимметрии, челюстно-лицевые деформации, выраженная рецессия, серьезные визуальные дефекты.
2. "ltn" (Low Tier Normie, балл 3.0 - 4.4): Заметно ниже среднего. Невыраженная линия челюсти, слабый подбородок, плохая периорбитальная поддержка, размытый контур лица.
3. "mtn" (Mid Tier Normie, балл 4.5 - 5.9): Средняя внешность большинства людей. Стандартные пропорции, нормальная симметрия, отсутствие ярких выделяющихся достоинств или критических дефектов.
4. "htn" (High Tier Normie, балл 6.0 - 7.4): Выше среднего, привлекательная внешность. Хорошая структура костей, выраженный подбородок, приятные гармоничные черты.
5. "chadlite" (балл 7.5 - 8.4): Высокая привлекательность, модельный потенциал. Отличная генетическая костная структура, четкая линия челюсти, позитивный или нейтральный canthal tilt, высокая гармония.
6. "chad" (балл 8.5 - 9.4): Исключительная эстетика и маскулинность. Идеальная гармония черт, резкий гониальный угол, глубоко посаженные глаза (hunter eyes), выдающаяся остеометрия.
7. "true_adam" (балл 9.5 - 10.0): Абсолютная вершина человеческих антропометрических пропорций лица (золотое сечение, безупречные параметры).

КЛЮЧЕВЫЕ МЕТРИКИ АНАЛИЗА (metrics, шкала от 1.0 до 10.0):
- canthal_tilt: Наклон глазной щели.
  * "positive": латеральный (внешний) угол глаза выше медиального (внутреннего) на 2–5 градусов.
  * "neutral": латеральный и медиальный углы находятся на одной горизонтальной линии.
  * "negative": латеральный угол опущен ниже медиального (эффект усталого/грустного взгляда).
- jawline (1.0 - 10.0): Четкость мандибулярного контура, гониальный угол (в идеале ~120°), проекция подбородка.
- symmetry (1.0 - 10.0): Общая симметрия между левой и правой половинами лица (орбиты, крылья носа, уголки рта).
- skin_quality (1.0 - 10.0): Текстура, ровность тона, отсутствие акне, постакне, расширенных пор и темных кругов.
- eye_area (1.0 - 10.0): Периорбитальная область, экспозиция верхнего века (минимальная = лучше), поддержка надбровных дуг.
- cheekbones (1.0 - 10.0): Выраженность скуловых костей, ширина скуловой дуги, поддержка средней трети лица.

ФОРМАТ JSON ВЫВОДА:
{
  "tier": "sub3" | "ltn" | "mtn" | "htn" | "chadlite" | "chad" | "true_adam",
  "score": 7.2,
  "metrics": {
    "canthal_tilt": "positive" | "neutral" | "negative",
    "jawline": 7.5,
    "symmetry": 8.0,
    "skin_quality": 6.8,
    "eye_area": 7.0,
    "cheekbones": 7.4
  },
  "summary": "Развернутый аналитический разбор черт лица на русском языке...",
  "looksmaxxing_tips": [
    "Конкретный практический совет 1 на русском языке...",
    "Конкретный практический совет 2 на русском языке...",
    "Конкретный практический совет 3 на русском языке..."
  ]
}

${modeSpecificInstruction}
${customInstructions ? `\nДОПОЛНИТЕЛЬНЫЕ ИНСТРУКЦИИ:\n${customInstructions}\n` : ""}`;

  return basePrompt.trim();
}

/**
 * Построение текстового запроса пользователя для мультимодальной модели
 */
export function buildUserPrompt(mode: RatingMode = "honest"): string {
  return `Пожалуйста, внимательно проанализируй прикрепленное фото лица человека по методологии луксмаксинга в режиме "${mode}".
Определи точный tier, рассчитай итоговый балл (score 1.0-10.0), детально оцени метрики лица, напиши развернутый анализ (summary) и составь персональный список практических советов по улучшению внешности (looksmaxxing_tips).
Ответ верни СТРОГО в виде одного валидного JSON-объекта на русском языке без лишнего текста вокруг.`;
}

/**
 * Нормализация входного изображения для передачи в Vercel AI SDK
 */
export function normalizeImageInput(
  image: ImageInput
): string | URL | Uint8Array {
  // 1. Экземпляр URL
  if (image instanceof URL) {
    return image;
  }

  // 2. Строка
  if (typeof image === "string") {
    const trimmed = image.trim();

    // HTTP / HTTPS ссылка
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      try {
        return new URL(trimmed);
      } catch (_e) {
        return trimmed;
      }
    }

    // Data URI (data:image/...)
    if (trimmed.startsWith("data:")) {
      return trimmed;
    }

    // Чистый base64 без префикса
    return `data:image/jpeg;base64,${trimmed}`;
  }

  // 3. Uint8Array или Buffer
  if (image instanceof Uint8Array || Buffer.isBuffer(image)) {
    return image;
  }

  // 4. ArrayBuffer
  if (image instanceof ArrayBuffer) {
    return new Uint8Array(image);
  }

  throw new Error(
    "Неподдерживаемый формат изображения. Допустимы: URL, строка base64 / data-url, Uint8Array, Buffer, ArrayBuffer"
  );
}

/**
 * Автоматическое определение MIME-типа изображения
 */
export function detectImageMediaType(image: ImageInput): string {
  if (typeof image === "string") {
    const trimmed = image.trim();
    if (trimmed.startsWith("data:")) {
      const match = trimmed.match(/^data:([^;,]+)/i);
      if (match && match[1]) {
        return match[1].toLowerCase();
      }
    }
    const lower = trimmed.toLowerCase();
    if (lower.endsWith(".png")) return "image/png";
    if (lower.endsWith(".webp")) return "image/webp";
    if (lower.endsWith(".heic")) return "image/heic";
    if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  } else if (image instanceof URL) {
    const pathname = image.pathname.toLowerCase();
    if (pathname.endsWith(".png")) return "image/png";
    if (pathname.endsWith(".webp")) return "image/webp";
    if (pathname.endsWith(".heic")) return "image/heic";
    if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) return "image/jpeg";
  }

  return "image/jpeg";
}

/**
 * Динамическое разрешение модели на основе переменных окружения.
 * Позволяет менять провайдера (Groq, OpenAI, Anthropic, Google и др.) через .env
 * без изменения единой строчки кода сервера!
 */
export async function resolveModelFromEnv(): Promise<LanguageModel> {
  const provider = (process.env.AI_PROVIDER || "groq").toLowerCase().trim();
  const modelName = process.env.AI_MODEL;

  // Динамическая загрузка провайдера без жесткой привязки к зависимостям
  try {
    const pkgName = `@ai-sdk/${provider}`;
    // deno-lint-ignore no-explicit-any
    const mod: any = await (Function("m", "return import(m)")(pkgName));
    const factory = mod[provider] || mod.default;
    if (typeof factory === "function") {
      const defaultModel =
        provider === "groq"
          ? process.env.GROQ_VISION_MODEL || "llama-3.2-11b-vision-preview"
          : provider === "openai"
          ? "gpt-4o"
          : provider === "anthropic"
          ? "claude-3-5-sonnet-latest"
          : "default";

      return factory(modelName || defaultModel);
    }
  } catch (_e) {
    // fallback
  }

  throw new AiConfigurationError(
    `Не удалось инициализировать провайдер "${provider}". ` +
    `Убедитесь, что установлен пакет @ai-sdk/${provider}, либо передайте экземпляр \`model: LanguageModel\` напрямую.`
  );
}

/**
 * Единая сервисная функция для оценки изображения лица.
 * Работает через унифицированный интерфейс generateText с ЛЮБЫМ провайдером Vercel AI SDK.
 * Возвращает Zod-валидированный и откалиброванный результат.
 */
export async function analyzeImageRating(
  options: AnalyzeImageRatingOptions
): Promise<RatingAnalysisResult> {
  const ratingMode: RatingMode = options.ratingMode ?? "honest";

  // Разрешение модели: либо переданный model/languageModel, либо из окружения
  let model = options.model ?? options.languageModel;
  if (!model) {
    model = await resolveModelFromEnv();
  }

  // Нормализация изображения
  const normalizedImage = normalizeImageInput(options.image);
  const mediaType = detectImageMediaType(options.image);

  // Формирование промптов
  const systemPrompt = buildSystemPrompt(ratingMode, options.customInstructions);
  const userPrompt = buildUserPrompt(ratingMode);

  // Сообщения для модели
  const userContent: UserContent = [
    {
      type: "text",
      text: userPrompt,
    },
    {
      type: "file",
      data: normalizedImage,
      mediaType,
    },
  ];

  try {
    // Унифицированный вызов generateText вместо устаревшего generateObject
    const textResult = await generateText({
      model,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: userContent,
        },
      ],
      temperature: options.temperature ?? 0.2,
      maxOutputTokens: options.maxOutputTokens ?? options.maxTokens ?? 1800,
      abortSignal: options.abortSignal,
    });

    // Извлечение JSON из текста ответа (с очисткой thinking/fences)
    const rawParsed = extractJsonPayload(textResult.text);

    // Строгая Zod-валидация ответа по схеме
    const parsed: AiRatingOutput = aiRatingOutputSchema.parse(rawParsed);

    // Калибровка соответствия тира и числового балла
    const calibrated = calibrateTierAndScore(parsed.tier, parsed.score);
    const scoreFormatted = formatScore(calibrated.score);

    // Формирование итогового типизированного результата
    const result: RatingAnalysisResult = {
      tier: calibrated.tier,
      score: calibrated.score,
      scoreFormatted,
      metrics: {
        canthal_tilt: parsed.metrics.canthal_tilt,
        jawline: Number(parsed.metrics.jawline.toFixed(1)),
        symmetry: Number(parsed.metrics.symmetry.toFixed(1)),
        skin_quality: Number(parsed.metrics.skin_quality.toFixed(1)),
        eye_area: Number(parsed.metrics.eye_area.toFixed(1)),
        cheekbones: Number(parsed.metrics.cheekbones.toFixed(1)),
      },
      looksmaxxing_tips: parsed.looksmaxxing_tips,
      summary: parsed.summary,
      raw_ai_response: {
        text: textResult.text,
        parsed,
        response: textResult.response as unknown as Record<string, unknown>,
      },
      model: (model as { modelId?: string }).modelId || "unknown-model",
      rating_mode: ratingMode,
      usage: textResult.usage
        ? {
            inputTokens: textResult.usage.inputTokens,
            outputTokens: textResult.usage.outputTokens,
            totalTokens: textResult.usage.totalTokens,
          }
        : undefined,
    };

    return result;
  } catch (error) {
    if (isRateLimitError(error)) {
      const retryAfter = extractRetryAfterSeconds(error);
      const message =
        error instanceof Error ? error.message : "Превышен лимит запросов к AI модели (429)";
      throw new AiRateLimitError(
        `Превышен лимит AI API: ${message}`,
        retryAfter,
        error
      );
    }

    throw error;
  }
}

export interface AiRatingServiceOptions {
  /**
   * Предопределенный экземпляр модели любого провайдера (OpenAI, Anthropic, Groq, Google, etc.)
   */
  model?: LanguageModel;
}

/**
 * Единый сервис для ИИ-оценки внешности.
 * Позволяет инкапсулировать модель любого провайдера и менять её в одном месте.
 */
export class AiRatingService {
  private model?: LanguageModel;

  constructor(options: AiRatingServiceOptions = {}) {
    this.model = options.model;
  }

  /**
   * Установка или смена провайдера/модели на лету
   */
  setModel(model: LanguageModel): this {
    this.model = model;
    return this;
  }

  /**
   * Анализ изображения лица с возвратом типизированного Zod-результата
   */
  async analyze(
    options: Omit<AnalyzeImageRatingOptions, "model"> & { model?: LanguageModel }
  ): Promise<RatingAnalysisResult> {
    const modelToUse = options.model ?? this.model;
    if (!modelToUse) {
      return analyzeImageRating(options as AnalyzeImageRatingOptions);
    }

    return analyzeImageRating({
      ...options,
      model: modelToUse,
    });
  }

  isRateLimit(error: unknown): boolean {
    return isRateLimitError(error);
  }

  getRetryAfter(error: unknown): number | null {
    return extractRetryAfterSeconds(error);
  }

  getSystemPrompt(mode: RatingMode = "honest", custom?: string): string {
    return buildSystemPrompt(mode, custom);
  }
}

// Алиас для обратной совместимости
export const GroqRatingService = AiRatingService;

/**
 * Экземпляр сервиса по умолчанию
 */
export const aiRatingService = new AiRatingService();
export const groqRatingService = aiRatingService;
