// Справочник тиров луксмаксинга: подписи, диапазоны баллов и цвета для UI

import type { LooksmaxxingTier, RatingMode } from "@/lib/schemas/rating";

export interface TierInfo {
  tier: LooksmaxxingTier;
  label: string;
  short: string;
  min: number;
  max: number;
  description: string;
  colorVar: string;
}

export const TIERS: Record<LooksmaxxingTier, TierInfo> = {
  sub3: {
    tier: "sub3",
    label: "Sub 3",
    short: "S3",
    min: 1.0,
    max: 2.9,
    description:
      "Выраженные асимметрии и структурные особенности. Максимальный потенциал роста.",
    colorVar: "var(--tier-sub3)",
  },
  ltn: {
    tier: "ltn",
    label: "Low Tier Normie",
    short: "LTN",
    min: 3.0,
    max: 4.4,
    description:
      "Ниже среднего: невыраженная линия челюсти, слабая проекция подбородка.",
    colorVar: "var(--tier-ltn)",
  },
  mtn: {
    tier: "mtn",
    label: "Mid Tier Normie",
    short: "MTN",
    min: 4.5,
    max: 5.9,
    description:
      "Средняя внешность большинства людей, стандартные пропорции без явных изъянов.",
    colorVar: "var(--tier-mtn)",
  },
  htn: {
    tier: "htn",
    label: "High Tier Normie",
    short: "HTN",
    min: 6.0,
    max: 7.4,
    description:
      "Выше среднего: хорошая костная структура и приятные гармоничные черты.",
    colorVar: "var(--tier-htn)",
  },
  chadlite: {
    tier: "chadlite",
    label: "Chadlite",
    short: "CL",
    min: 7.5,
    max: 8.4,
    description:
      "Отличная генетика: выраженная челюсть, позитивный canthal tilt, гармония.",
    colorVar: "var(--tier-chadlite)",
  },
  chad: {
    tier: "chad",
    label: "Chad",
    short: "CH",
    min: 8.5,
    max: 9.4,
    description:
      "Модельная внешность: высокая маскулинность и идеальная гармония костных структур.",
    colorVar: "var(--tier-chad)",
  },
  true_adam: {
    tier: "true_adam",
    label: "True Adam",
    short: "TA",
    min: 9.5,
    max: 10.0,
    description:
      "Идеальные антропометрические пропорции лица. Абсолютная вершина шкалы.",
    colorVar: "var(--tier-true_adam)",
  },
};

export const TIER_ORDER: LooksmaxxingTier[] = [
  "sub3",
  "ltn",
  "mtn",
  "htn",
  "chadlite",
  "chad",
  "true_adam",
];

export interface RatingModeInfo {
  mode: RatingMode;
  label: string;
  description: string;
}

export const RATING_MODE_INFO: Record<RatingMode, RatingModeInfo> = {
  soft: {
    mode: "soft",
    label: "Мягкий",
    description: "Щадящая оценка с фокусом на сильных сторонах и потенциале.",
  },
  honest: {
    mode: "honest",
    label: "Честный",
    description: "Объективный и реалистичный анализ без прикрас и без жести.",
  },
  brutal: {
    mode: "brutal",
    label: "Жёсткий",
    description: "Бескомпромиссный разбор. Только для крепкой психики.",
  },
};

export const RATING_MODE_ORDER: RatingMode[] = ["soft", "honest", "brutal"];

export const METRIC_LABELS: Record<string, string> = {
  jawline: "Линия челюсти",
  symmetry: "Симметрия",
  skin_quality: "Качество кожи",
  eye_area: "Зона глаз",
  cheekbones: "Скулы",
};

export const CANTHAL_TILT_LABELS: Record<string, string> = {
  positive: "Позитивный",
  neutral: "Нейтральный",
  negative: "Негативный",
};
