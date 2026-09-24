"use client";

// Клиентская загрузка и отображение одной оценки с обработкой всех статусов

import Link from "next/link";
import { ArrowLeft, Loader2, Trash2 } from "lucide-react";
import { AnalysisScan } from "@/components/rating/AnalysisScan";
import { RatingResult } from "@/components/rating/RatingResult";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useRatingStream } from "@/lib/hooks/use-rating-stream";
import { useDeleteRating, useRating } from "@/lib/hooks/use-ratings";
import { resolvePhotoUrl } from "@/lib/api/photo";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function RatingDetail({ id }: { id: string }) {
  const router = useRouter();
  useRatingStream(id, true);
  const { data: rating, isPending, isError } = useRating(id, true);
  const deleteRating = useDeleteRating();
  const { data: photoUrl } = useQuery({
    queryKey: ["photo-url", id],
    queryFn: () => resolvePhotoUrl(id),
    staleTime: 50 * 60 * 1000,
    retry: false,
  });

  if (isPending) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError || !rating) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          Оценка не найдена или у вас нет к ней доступа
        </AlertDescription>
      </Alert>
    );
  }

  const isRunning = rating.status === "pending" || rating.status === "processing";

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between gap-4">
        <Button variant="ghost" size="sm" asChild className="-ml-2">
          <Link href="/dashboard">
            <ArrowLeft className="size-4" />
            К истории
          </Link>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          disabled={deleteRating.isPending}
          onClick={() =>
            deleteRating.mutate(id, { onSuccess: () => router.push("/dashboard") })
          }
        >
          <Trash2 className="size-4" />
          Удалить
        </Button>
      </div>

      {isRunning && (
        <AnalysisScan previewUrl={photoUrl ?? null} status={rating.status} />
      )}

      {rating.status === "failed" && (
        <Alert variant="destructive">
          <AlertDescription>
            {rating.error_message || "Не удалось обработать фото"}
          </AlertDescription>
        </Alert>
      )}

      {rating.status === "completed" && <RatingResult rating={rating} />}
    </div>
  );
}
