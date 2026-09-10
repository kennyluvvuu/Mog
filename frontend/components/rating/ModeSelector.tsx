"use client";

// Переключатель тона разбора: мягкий, честный или жёсткий

import { RATING_MODE_INFO, RATING_MODE_ORDER } from "@/lib/constants/tiers";
import type { RatingMode } from "@/lib/schemas/rating";
import { cn } from "@/lib/utils";

interface ModeSelectorProps {
  value: RatingMode;
  onChange: (mode: RatingMode) => void;
  disabled?: boolean;
}

export function ModeSelector({ value, onChange, disabled }: ModeSelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {RATING_MODE_ORDER.map((mode) => {
        const info = RATING_MODE_INFO[mode];
        const isActive = value === mode;

        return (
          <button
            key={mode}
            type="button"
            disabled={disabled}
            onClick={() => onChange(mode)}
            className={cn(
              "rounded-xl border p-4 text-left transition-all",
              isActive
                ? "border-brand bg-brand/5 ring-1 ring-brand/30"
                : "border-border/60 hover:border-border hover:bg-card/40",
              disabled && "pointer-events-none opacity-60"
            )}
          >
            <p className={cn("font-medium", isActive && "text-brand")}>
              {info.label}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {info.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}
