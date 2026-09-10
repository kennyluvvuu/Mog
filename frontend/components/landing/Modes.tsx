"use client";

// Секция с тремя режимами оценки: мягкий, честный и жёсткий

import { RATING_MODE_INFO, RATING_MODE_ORDER } from "@/lib/constants/tiers";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const MODE_ACCENTS: Record<string, string> = {
  soft: "var(--tier-htn)",
  honest: "var(--tier-chadlite)",
  brutal: "var(--tier-sub3)",
};

export function Modes() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-brand">Тон разбора</p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Ты сам выбираешь, насколько будет больно
          </h2>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {RATING_MODE_ORDER.map((mode) => {
            const info = RATING_MODE_INFO[mode];
            const accent = MODE_ACCENTS[mode];

            return (
              <StaggerItem key={mode}>
                <div
                  className="h-full rounded-xl border border-border/60 bg-card/40 p-7 transition-colors hover:border-border"
                  style={{ borderTopColor: accent, borderTopWidth: 2 }}
                >
                  <h3 className="mb-2 text-lg font-medium" style={{ color: accent }}>
                    {info.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
