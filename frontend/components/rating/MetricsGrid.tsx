"use client";

// Сетка детальных метрик лица с анимированными полосами прогресса

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { CANTHAL_TILT_LABELS, METRIC_LABELS } from "@/lib/constants/tiers";
import type { RatingMetrics } from "@/lib/schemas/rating";

const NUMERIC_KEYS: (keyof RatingMetrics)[] = [
  "jawline",
  "symmetry",
  "cheekbones",
  "eye_area",
  "skin_quality",
];

export function MetricsGrid({
  metrics,
  accentColor,
}: {
  metrics: RatingMetrics;
  accentColor?: string;
}) {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-medium">Метрики лица</h2>
        <Badge variant="secondary" className="font-normal">
          Canthal tilt: {CANTHAL_TILT_LABELS[metrics.canthal_tilt]}
        </Badge>
      </div>

      <div className="space-y-4">
        {NUMERIC_KEYS.map((key, index) => {
          const value = metrics[key] as number;
          const percent = Math.min(Math.max((value / 10) * 100, 0), 100);

          return (
            <div key={key} className="space-y-2">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm">{METRIC_LABELS[key]}</span>
                <span className="font-mono text-sm tabular-nums text-muted-foreground">
                  {value.toFixed(1)}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-border/60">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: accentColor ?? "var(--brand)" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
