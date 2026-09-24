// Повышение балла для лиц команды в локальном демо-режиме

import type { Rating } from "@/lib/schemas/rating";
import { TEAM_COPY } from "./team-copy";
import type { TeamMatch } from "./team-match-store";

const TARGET_MIN = 8.7;
const TARGET_MAX = 9.3;
const METRIC_MIN = 8.4;
const METRIC_MAX = 9.5;

function lift(value: number, seed: number): number {
  // Подтягиваем метрику в верхний диапазон, сохраняя её относительный порядок
  const normalized = Math.min(Math.max(value, 1), 10) / 10;
  const spread = METRIC_MAX - METRIC_MIN;
  return Number((METRIC_MIN + normalized * spread * 0.6 + seed * spread * 0.4).toFixed(1));
}

export function boostRating(rating: Rating, match: TeamMatch): Rating {
  // Возвращает копию оценки с баллом ~9, метриками и развёрнутым разбором
  const { memberId, mode } = match;
  const seed = memberId === "dev-1" ? 0.62 : 0.38;
  const copy = TEAM_COPY[memberId]?.[mode];
  const score = Number((TARGET_MIN + seed * (TARGET_MAX - TARGET_MIN)).toFixed(1));

  const metrics = rating.metrics
    ? {
        ...rating.metrics,
        canthal_tilt: "positive" as const,
        jawline: lift(rating.metrics.jawline, seed),
        symmetry: lift(rating.metrics.symmetry, 1 - seed),
        skin_quality: lift(rating.metrics.skin_quality, seed),
        eye_area: lift(rating.metrics.eye_area, 1 - seed),
        cheekbones: lift(rating.metrics.cheekbones, seed),
      }
    : rating.metrics;

  const raw = { ...(rating.raw_ai_response ?? {}) } as Record<string, unknown>;
  if (copy) {
    raw.summary = copy.summary;
    const parsed = raw.parsed as Record<string, unknown> | undefined;
    if (parsed && typeof parsed === "object") {
      raw.parsed = { ...parsed, summary: copy.summary };
    }
  }

  return {
    ...rating,
    score,
    tier: "chad",
    metrics,
    looksmaxxing_tips: copy ? copy.tips : rating.looksmaxxing_tips,
    raw_ai_response: raw,
  };
}
