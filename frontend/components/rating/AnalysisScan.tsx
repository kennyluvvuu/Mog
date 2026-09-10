"use client";

// Анимация сканирования снимка во время обработки: сетка, бегущая линия и статус

import { TriangleAlert } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import type { RatingStatus } from "@/lib/schemas/rating";
import { cn } from "@/lib/utils";

const STATUS_LABELS: Record<RatingStatus, string> = {
  pending: "Готовим снимок к анализу",
  processing: "Сканируем черты лица",
  completed: "Анализ завершён",
  failed: "Обработка прервана",
};

interface AnalysisScanProps {
  previewUrl: string | null;
  status: RatingStatus;
}

export function AnalysisScan({ previewUrl, status }: AnalysisScanProps) {
  // Показывает снимок с анимацией сканирования, пока идёт обработка оценки
  const isFailed = status === "failed";
  const isDone = status === "completed";
  const isScanning = !isFailed && !isDone;

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border/60 bg-black/60">
        {previewUrl && (
          <Image
            src={previewUrl}
            alt="Анализируемое фото"
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, 42rem"
            className={cn(
              "object-cover transition-all duration-700",
              isScanning ? "brightness-75 saturate-[0.85]" : "brightness-100"
            )}
          />
        )}

        <div aria-hidden className="pointer-events-none absolute inset-0">
          <svg
            className={cn(
              "absolute inset-0 size-full transition-opacity duration-700",
              isScanning ? "opacity-25" : "opacity-0"
            )}
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="analysis-grid" width="6%" height="6%" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#analysis-grid)" className="text-brand" />
          </svg>

          {isScanning && (
            <motion.div
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-24 -translate-y-1/2"
            >
              <div className="size-full bg-gradient-to-b from-transparent via-brand/40 to-transparent" />
              <div className="h-px w-full bg-brand/80 shadow-[0_0_12px_var(--color-brand)]" />
            </motion.div>
          )}

          {isDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-brand/10"
            />
          )}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2.5 text-sm">
        {isFailed ? (
          <TriangleAlert className="size-4 text-destructive" />
        ) : (
          <motion.span
            animate={isScanning ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
            transition={{ duration: 1.4, repeat: isScanning ? Infinity : 0 }}
            className="size-2 rounded-full bg-brand"
          />
        )}
        <span className={cn(isFailed ? "text-destructive" : "text-muted-foreground")}>
          {STATUS_LABELS[status]}
        </span>
      </div>
    </div>
  );
}
