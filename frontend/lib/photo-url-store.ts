// Кэш подписанных ссылок на фото: сервер отдаёт их только в момент завершения оценки

const STORAGE_KEY = "mog:photo-urls";
const TTL_MS = 55 * 60 * 1000;

interface CachedUrl {
  url: string;
  savedAt: number;
}

function readStore(): Record<string, CachedUrl> {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, CachedUrl>) : {};
  } catch {
    return {};
  }
}

export function rememberPhotoUrl(ratingId: string, url: string): void {
  if (typeof window === "undefined") return;

  try {
    const store = readStore();
    store[ratingId] = { url, savedAt: Date.now() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Хранилище недоступно — ссылка просто не переживёт перезагрузку страницы
  }
}

export function getCachedPhotoUrl(ratingId: string): string | null {
  const cached = readStore()[ratingId];
  if (!cached) return null;

  return Date.now() - cached.savedAt < TTL_MS ? cached.url : null;
}
