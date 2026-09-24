"use client";

// Запросы и мутации оценок: создание, список, детальная карточка и удаление

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { extractApiError } from "@/lib/api/client";
import {
  createRating,
  deleteRating,
  fetchRating,
  fetchRatings,
} from "@/lib/api/ratings";
import { rememberRatingMode } from "@/lib/rating-mode-store";
import type { RatingMode } from "@/lib/schemas/rating";
import { useAuth } from "@/components/providers/AuthProvider";

const ACTIVE_STATUSES = new Set(["pending", "processing"]);

export function useRatings(limit = 50) {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["ratings", user?.id, limit],
    queryFn: () => fetchRatings(limit),
    enabled: Boolean(user),
  });
}

export function useRating(id: string | null, pollingEnabled = false) {
  return useQuery({
    queryKey: ["rating", id],
    queryFn: () => fetchRating(id!),
    enabled: Boolean(id),
    refetchInterval: (query) => {
      const status = query.state.data?.status;
      if (!pollingEnabled || !status) return false;
      return ACTIVE_STATUSES.has(status) ? 3000 : false;
    },
  });
}

export function useCreateRating() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ file, mode }: { file: File; mode: RatingMode }) =>
      createRating(file, mode),
    onSuccess: (data, variables) => {
      // rating_mode не хранится в БД, поэтому запоминаем его локально для истории
      rememberRatingMode(data.rating_id, variables.mode);
      queryClient.invalidateQueries({ queryKey: ["ratings"] });
    },
    onError: (error) => toast.error(extractApiError(error)),
  });
}

export function useDeleteRating() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteRating,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ratings"] });
      toast.success("Оценка удалена");
    },
    onError: (error) => toast.error(extractApiError(error)),
  });
}
