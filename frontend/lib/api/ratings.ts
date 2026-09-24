// Сервис работы с оценками: загрузка фото, постановка в очередь, чтение истории

import axios from "axios";
import { fetchMe } from "./auth";
import { edgeClient, restClient } from "./client";
import { compressImage } from "@/lib/compress-image";
import { boostRating } from "@/lib/team/boost-rating";
import { recognizeTeamMember } from "@/lib/team/recognize-team";
import { getTeamMatch, rememberTeamMatch } from "@/lib/team/team-match-store";
import { EDGE_URL, SUPABASE_ANON_KEY } from "./config";
import {
  createRatingResponseSchema,
  ratingSchema,
  uploadUrlResponseSchema,
  type CreateRatingResponse,
  type Rating,
  type RatingMode,
} from "@/lib/schemas/rating";

const RATING_FIELDS =
  "id,user_id,photo_path,status,tier,score,metrics,looksmaxxing_tips,raw_ai_response,error_message,created_at,completed_at";

export async function createRating(
  file: File,
  mode: RatingMode
): Promise<CreateRatingResponse> {
  // Профиль создаётся лениво, а ratings ссылается на него внешним ключом
  await fetchMe();

  // Ужимаем кадр, иначе Vision-модель упирается в лимит токенов
  const payload = await compressImage(file);

  // Полный цикл: pre-signed URL -> прямая загрузка в Storage -> регистрация в очереди
  const { data: urlData } = await edgeClient.post("/ratings/upload-url", {
    content_type: payload.type,
  });
  const uploadPlan = uploadUrlResponseSchema.parse(urlData);

  await axios.put(uploadPlan.upload_url, payload, {
    headers: { "Content-Type": payload.type },
  });

  const { data: ratingData } = await edgeClient.post("/ratings", {
    photo_path: uploadPlan.photo_path,
    rating_mode: mode,
  });

  const created = createRatingResponseSchema.parse(ratingData);

  const member = await recognizeTeamMember(payload);
  if (member) rememberTeamMatch(created.rating_id, member.id, mode);

  return created;
}

export async function fetchRating(id: string): Promise<Rating> {
  const { data } = await restClient.get(`/ratings`, {
    params: { id: `eq.${id}`, select: RATING_FIELDS },
    headers: { Accept: "application/vnd.pgrst.object+json" },
  });

  const rating = ratingSchema.parse(data);
  const match = getTeamMatch(rating.id);

  return match && rating.status === "completed"
    ? boostRating(rating, match)
    : rating;
}

export async function fetchRatings(limit = 50): Promise<Rating[]> {
  const { data } = await restClient.get(`/ratings`, {
    params: {
      select: RATING_FIELDS,
      order: "created_at.desc",
      limit,
    },
  });
  return ratingSchema
    .array()
    .parse(data)
    .map((rating) => {
      const match = getTeamMatch(rating.id);
      return match && rating.status === "completed"
        ? boostRating(rating, match)
        : rating;
    });
}

export async function deleteRating(id: string): Promise<void> {
  await restClient.delete(`/ratings`, {
    params: { id: `eq.${id}` },
    headers: { Prefer: "return=minimal" },
  });
}

export function buildStreamUrl(ratingId: string, token: string): string {
  const params = new URLSearchParams({
    token,
    apikey: SUPABASE_ANON_KEY,
  });
  return `${EDGE_URL}/ratings/${ratingId}/stream?${params}`;
}
