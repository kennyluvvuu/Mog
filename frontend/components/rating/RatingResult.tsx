"use client";

// Полная карточка результата оценки: балл, тир, метрики, разбор и рекомендации

import { motion } from "motion/react";
import { MetricsGrid } from "./MetricsGrid";
import { RatingPhoto } from "./RatingPhoto";
import { ScoreDial } from "./ScoreDial";
import { TierBadge } from "./TierBadge";
import { TipsList } from "./TipsList";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RATING_MODE_INFO } from "@/lib/constants/tiers";
import { getRatingMode } from "@/lib/rating-mode-store";
import { extractSummary, formatDate, getTierInfo } from "@/lib/rating-utils";
import type { Rating } from "@/lib/schemas/rating";

export function RatingResult({ rating }: { rating: Rating }) {
  const tierInfo = getTierInfo(rating.tier);
  const summary = extractSummary(rating);
  const mode = getRatingMode(rating.id);

  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-8 md:grid-cols-[minmax(0,18rem)_1fr] md:items-center"
      >
        <RatingPhoto ratingId={rating.id} />

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
          <ScoreDial score={rating.score ?? 0} tierInfo={tierInfo} />

          <div className="space-y-3 text-center sm:text-left">
            {tierInfo && <TierBadge tierInfo={tierInfo} />}
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {tierInfo?.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <Badge variant="outline" className="font-normal">
                {formatDate(rating.completed_at ?? rating.created_at)}
              </Badge>
              {mode && (
                <Badge variant="outline" className="font-normal">
                  Режим: {RATING_MODE_INFO[mode].label}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {summary && (
        <>
          <Separator />
          <section className="space-y-4">
            <h2 className="text-lg font-medium">Разбор</h2>
            <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
              {summary}
            </p>
          </section>
        </>
      )}

      {rating.metrics && (
        <>
          <Separator />
          <MetricsGrid metrics={rating.metrics} accentColor={tierInfo?.colorVar} />
        </>
      )}

      {rating.looksmaxxing_tips && rating.looksmaxxing_tips.length > 0 && (
        <>
          <Separator />
          <TipsList tips={rating.looksmaxxing_tips} />
        </>
      )}
    </div>
  );
}
