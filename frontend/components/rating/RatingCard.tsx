"use client";

// Карточка оценки в истории со статусом, баллом и тиром

import Link from "next/link";
import { Loader2, TriangleAlert } from "lucide-react";
import { RatingPhoto } from "./RatingPhoto";
import { TierBadge } from "./TierBadge";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatScore, getTierInfo } from "@/lib/rating-utils";
import type { Rating } from "@/lib/schemas/rating";

export function RatingCard({ rating }: { rating: Rating }) {
  const tierInfo = getTierInfo(rating.tier);
  const isRunning = rating.status === "pending" || rating.status === "processing";

  return (
    <Link
      href={`/ratings/${rating.id}`}
      className="group flex gap-4 rounded-xl border border-border/60 bg-card/40 p-4 transition-all hover:border-border hover:bg-card/70"
    >
      <RatingPhoto
        ratingId={rating.id}
        className="size-20 shrink-0 rounded-lg"
      />

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 py-0.5">
        <div className="flex items-start justify-between gap-3">
          {tierInfo ? (
            <TierBadge tierInfo={tierInfo} size="sm" />
          ) : isRunning ? (
            <Badge variant="secondary" className="gap-1.5 font-normal">
              <Loader2 className="size-3 animate-spin" />
              {rating.status === "pending" ? "В очереди" : "Анализ"}
            </Badge>
          ) : (
            <Badge variant="destructive" className="gap-1.5 font-normal">
              <TriangleAlert className="size-3" />
              Ошибка
            </Badge>
          )}

          <span className="font-mono text-2xl font-semibold tabular-nums">
            {formatScore(rating.score)}
          </span>
        </div>

        <span className="text-xs text-muted-foreground">
          {formatDate(rating.created_at)}
        </span>
      </div>
    </Link>
  );
}
