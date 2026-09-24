// Локальное хранилище режимов оценки, так как бэкенд не сохраняет rating_mode в БД

import type { RatingMode } from "@/lib/schemas/rating";

const STORAGE_KEY = "mog:rating-modes";

function readStore(): Record<string, RatingMode> {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, RatingMode>) : {};
  } catch {
    return {};
  }
}

export function rememberRatingMode(ratingId: string, mode: RatingMode): void {
  if (typeof window === "undefined") return;

  try {
    const store = readStore();
    store[ratingId] = mode;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Приватный режим браузера или переполненное хранилище — режим просто не сохранится
  }
}

export function getRatingMode(ratingId: string): RatingMode | null {
  return readStore()[ratingId] ?? null;
}
