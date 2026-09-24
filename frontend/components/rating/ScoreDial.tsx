"use client";

// Круговой индикатор итогового балла с анимацией заполнения

import { motion, useReducedMotion } from "motion/react";
import type { TierInfo } from "@/lib/constants/tiers";

const RADIUS = 74;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScoreDial({
  score,
  tierInfo,
}: {
  score: number;
  tierInfo: TierInfo | null;
}) {
  const reduceMotion = useReducedMotion();
  const ratio = Math.min(Math.max(score / 10, 0), 1);
  const color = tierInfo?.colorVar ?? "var(--brand)";

  return (
    <div className="relative size-44 shrink-0">
      <svg viewBox="0 0 176 176" className="size-full -rotate-90">
        <circle
          cx="88"
          cy="88"
          r={RADIUS}
          fill="none"
          stroke="var(--border)"
          strokeWidth="8"
        />
        <motion.circle
          cx="88"
          cy="88"
          r={RADIUS}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          animate={{ strokeDashoffset: CIRCUMFERENCE * (1 - ratio) }}
          transition={{
            duration: reduceMotion ? 0 : 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-5xl font-semibold tabular-nums"
          style={{ color }}
        >
          {score.toFixed(1)}
        </motion.span>
        <span className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
          из 10
        </span>
      </div>
    </div>
  );
}
