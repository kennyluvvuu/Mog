"use client";

// Сводная статистика пользователя: количество оценок, лучший и средний балл

import { TIERS } from "@/lib/constants/tiers";
import { formatScore } from "@/lib/rating-utils";
import type { Rating } from "@/lib/schemas/rating";

export function RatingStats({ ratings }: { ratings: Rating[] }) {
  const completed = ratings.filter(
    (item) => item.status === "completed" && typeof item.score === "number"
  );

  const scores = completed.map((item) => item.score as number);
  const best = scores.length ? Math.max(...scores) : null;
  const average = scores.length
    ? scores.reduce((sum, value) => sum + value, 0) / scores.length
    : null;

  const bestRating = completed.find((item) => item.score === best);
  const bestTier = bestRating?.tier ? TIERS[bestRating.tier] : null;

  const items = [
    { label: "Всего оценок", value: String(ratings.length), accent: undefined },
    { label: "Лучший балл", value: formatScore(best), accent: bestTier?.colorVar },
    { label: "Средний балл", value: formatScore(average), accent: undefined },
    { label: "Лучший тир", value: bestTier?.label ?? "—", accent: bestTier?.colorVar },
  ];

  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="bg-background p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {item.label}
          </p>
          <p
            className="mt-2 font-mono text-2xl font-semibold tabular-nums"
            style={item.accent ? { color: item.accent } : undefined}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
