import type { SupabaseClient } from "@supabase/supabase-js";

export interface EnqueueRatingTaskParams {
  ratingId: string;
  userId: string;
  photoPath: string;
  ratingMode?: "brutal" | "honest" | "soft";
}

/**
 * Ставит задачу анализа фото в очередь pgmq (rating_tasks) через функцию enqueue_rating_task в БД
 */
export async function enqueueRatingTask(
  supabase: SupabaseClient,
  params: EnqueueRatingTaskParams
): Promise<number> {
  const { data, error } = await supabase.rpc("enqueue_rating_task", {
    p_rating_id: params.ratingId,
    p_user_id: params.userId,
    p_photo_path: params.photoPath,
    p_rating_mode: params.ratingMode ?? "honest",
  });

  if (error) {
    throw new Error(`Ошибка постановки задачи в pgmq: ${error.message}`);
  }

  return Number(data);
}
