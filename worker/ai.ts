/**
 * Единый интерфейс AI сервиса и схем валидации для фонового воркера
 * Поддерживает любого провайдера Vercel AI SDK (Groq, OpenAI, Anthropic, Google, Ollama и др.)
 */

export * from "./schemas.ts";
export * from "./services/ai.ts";
