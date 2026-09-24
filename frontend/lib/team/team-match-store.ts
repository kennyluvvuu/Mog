// Хранилище совпадений с лицами команды между отправкой фото и получением результата

import type { RatingMode } from "@/lib/schemas/rating";

const STORAGE_KEY = "mog:team-matches";

export interface TeamMatch {
  memberId: string;
  mode: RatingMode;
}

type MatchMap = Record<string, TeamMatch>;

function read(): MatchMap {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}") as MatchMap;
  } catch {
    return {};
  }
}

export function rememberTeamMatch(
  ratingId: string,
  memberId: string,
  mode: RatingMode
): void {
  // Запоминает, что фото оценки принадлежит участнику команды
  try {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...read(), [ratingId]: { memberId, mode } })
    );
  } catch {
    // sessionStorage может быть недоступен — тогда просто отдаём обычную оценку
  }
}

export function getTeamMatch(ratingId: string): TeamMatch | null {
  try {
    return read()[ratingId] ?? null;
  } catch {
    return null;
  }
}
