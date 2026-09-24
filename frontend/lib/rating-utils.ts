// Утилиты извлечения и форматирования данных оценки для отображения в интерфейсе

import { TIERS } from "@/lib/constants/tiers";
import type { LooksmaxxingTier, Rating } from "@/lib/schemas/rating";

export function extractSummary(rating: Rating): string | null {
  // summary не сохраняется отдельной колонкой, поэтому достаём его из raw_ai_response
  const raw = rating.raw_ai_response;
  if (!raw) return null;

  const parsed = raw.parsed as { summary?: unknown } | undefined;
  if (parsed && typeof parsed.summary === "string") {
    return parsed.summary;
  }

  if (typeof raw.summary === "string") {
    return raw.summary;
  }

  return null;
}

export function getTierInfo(tier: LooksmaxxingTier | null | undefined) {
  return tier ? TIERS[tier] : null;
}

export function formatScore(score: number | null | undefined): string {
  return typeof score === "number" && Number.isFinite(score)
    ? score.toFixed(1)
    : "—";
}

export function formatDate(value: string | null | undefined): string {
  if (!value) return "—";

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function scoreToPercent(score: number | null | undefined): number {
  if (typeof score !== "number" || !Number.isFinite(score)) return 0;
  return Math.min(Math.max((score / 10) * 100, 0), 100);
}
