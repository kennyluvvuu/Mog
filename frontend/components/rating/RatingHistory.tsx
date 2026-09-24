"use client";

// История всех оценок пользователя со статистикой и пустым состоянием

import Link from "next/link";
import { Plus, Sparkles } from "lucide-react";
import { RatingCard } from "./RatingCard";
import { RatingStats } from "./RatingStats";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { useRatings } from "@/lib/hooks/use-ratings";

export function RatingHistory() {
  const { data: ratings, isPending } = useRatings();

  if (isPending) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-28 w-full rounded-xl" />
        <div className="space-y-3">
          {[0, 1, 2].map((index) => (
            <Skeleton key={index} className="h-28 w-full rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (!ratings || ratings.length === 0) {
    return (
      <div className="flex flex-col items-center gap-5 rounded-xl border border-dashed border-border/70 px-6 py-20 text-center">
        <div className="flex size-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Sparkles className="size-6" />
        </div>
        <div className="space-y-1.5">
          <p className="font-medium">Пока ни одной оценки</p>
          <p className="text-sm text-muted-foreground">
            Загрузите фото и узнайте свой тир за полминуты
          </p>
        </div>
        <Button asChild>
          <Link href="/rate">
            <Plus className="size-4" />
            Первая оценка
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <RatingStats ratings={ratings} />

      <Stagger className="space-y-3" gap={0.05}>
        {ratings.map((rating) => (
          <StaggerItem key={rating.id}>
            <RatingCard rating={rating} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
