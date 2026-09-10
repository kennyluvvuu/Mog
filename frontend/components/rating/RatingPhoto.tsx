"use client";

// Фото оценки из приватного бакета, загружаемое по временной подписанной ссылке

import { ImageOff } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { resolvePhotoUrl } from "@/lib/api/photo";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function RatingPhoto({
  ratingId,
  className,
}: {
  ratingId: string;
  className?: string;
}) {
  const { data: url, isPending } = useQuery({
    queryKey: ["photo-url", ratingId],
    queryFn: () => resolvePhotoUrl(ratingId),
    staleTime: 50 * 60 * 1000,
    retry: false,
  });

  if (isPending) {
    return <Skeleton className={cn("aspect-square w-full rounded-xl", className)} />;
  }

  if (!url) {
    return (
      <div
        className={cn(
          "flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/40 text-muted-foreground",
          className
        )}
      >
        <ImageOff className="size-6" />
        <span className="text-xs">Фото недоступно</span>
      </div>
    );
  }

  return (
    // Подписанная ссылка живёт около часа, поэтому кэш оптимизатора Next бесполезен
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt="Фото оценки"
      className={cn(
        "aspect-square w-full rounded-xl border border-border/60 object-cover",
        className
      )}
    />
  );
}
