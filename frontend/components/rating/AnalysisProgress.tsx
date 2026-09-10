"use client";

// Индикатор прогресса обработки оценки: очередь, анализ и завершение

import { Check, Loader2, TriangleAlert } from "lucide-react";
import { motion } from "motion/react";
import { Progress } from "@/components/ui/progress";
import type { RatingStatus } from "@/lib/schemas/rating";
import { cn } from "@/lib/utils";

const STEPS: { status: RatingStatus; label: string; hint: string }[] = [
  { status: "pending", label: "В очереди", hint: "Задача поставлена в очередь обработки" },
  { status: "processing", label: "Анализ лица", hint: "Vision-модель разбирает черты лица" },
  { status: "completed", label: "Готово", hint: "Результат рассчитан" },
];

const PROGRESS_BY_STATUS: Record<RatingStatus, number> = {
  pending: 25,
  processing: 65,
  completed: 100,
  failed: 100,
};

export function AnalysisProgress({
  status,
  isPolling,
}: {
  status: RatingStatus;
  isPolling: boolean;
}) {
  const activeIndex = STEPS.findIndex((step) => step.status === status);
  const isFailed = status === "failed";

  return (
    <div className="space-y-6 rounded-xl border border-border/60 bg-card/40 p-6">
      <Progress value={PROGRESS_BY_STATUS[status]} className="h-1.5" />

      <ol className="space-y-4">
        {STEPS.map((step, index) => {
          const isDone = activeIndex > index || status === "completed";
          const isActive = activeIndex === index && !isFailed;

          return (
            <li key={step.status} className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-xs",
                  isDone && "border-brand bg-brand/15 text-brand",
                  isActive && !isDone && "border-brand text-brand",
                  !isDone && !isActive && "border-border/60 text-muted-foreground"
                )}
              >
                {isDone ? (
                  <Check className="size-3.5" />
                ) : isActive ? (
                  <Loader2 className="size-3.5 animate-spin" />
                ) : (
                  index + 1
                )}
              </span>

              <div className="min-w-0">
                <p
                  className={cn(
                    "text-sm font-medium",
                    !isDone && !isActive && "text-muted-foreground"
                  )}
                >
                  {step.label}
                </p>
                <p className="text-xs text-muted-foreground">{step.hint}</p>
              </div>
            </li>
          );
        })}
      </ol>

      {isFailed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-destructive"
        >
          <TriangleAlert className="size-4" />
          Обработка завершилась ошибкой
        </motion.div>
      )}

      {isPolling && status !== "completed" && !isFailed && (
        <p className="text-xs text-muted-foreground">
          Стрим закрыт по таймауту — статус обновляется опросом каждые 3 секунды
        </p>
      )}
    </div>
  );
}
