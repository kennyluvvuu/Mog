// Получение временной ссылки на фото оценки из SSE-эндпоинта Edge API

import { EDGE_URL, SUPABASE_ANON_KEY } from "./config";
import { getSupabaseClient } from "./supabase";
import { getCachedPhotoUrl, rememberPhotoUrl } from "@/lib/photo-url-store";

const STREAM_TIMEOUT_MS = 8000;

export async function resolvePhotoUrl(ratingId: string): Promise<string | null> {
  // Подписать ссылку может только сервер: политики RLS не дают клиенту доступ к бакету
  const cached = getCachedPhotoUrl(ratingId);
  if (cached) return cached;

  const { data } = await getSupabaseClient().auth.getSession();
  const token = data.session?.access_token;
  if (!token) return null;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), STREAM_TIMEOUT_MS);

  try {
    const params = new URLSearchParams({ token, apikey: SUPABASE_ANON_KEY });
    const response = await fetch(
      `${EDGE_URL}/ratings/${ratingId}/stream?${params}`,
      { headers: { Accept: "text/event-stream" }, signal: controller.signal }
    );

    const reader = response.body?.getReader();
    if (!reader) return null;

    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        if (!line.startsWith("data:")) continue;

        try {
          const payload = JSON.parse(line.slice(5).trim()) as {
            photo_url?: string | null;
          };
          if (payload.photo_url) {
            void reader.cancel();
            rememberPhotoUrl(ratingId, payload.photo_url);
            return payload.photo_url;
          }
        } catch {
          continue;
        }
      }
    }

    return null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
