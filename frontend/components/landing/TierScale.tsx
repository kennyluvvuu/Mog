"use client";

// Секция со шкалой тиров: липкий заголовок и появляющиеся по скроллу карточки

import { motion } from "motion/react";
import { TIER_ORDER, TIERS } from "@/lib/constants/tiers";
import { Reveal } from "@/components/motion/Reveal";

export function TierScale() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <Reveal>
              <p className="mb-3 text-sm font-medium text-brand">Шкала</p>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Семь тиров от sub3 до true adam
              </h2>
              <p className="mt-4 text-balance leading-relaxed text-muted-foreground">
                Каждому баллу соответствует свой уровень. Модель обязана держать
                балл внутри диапазона тира — никаких «восьмёрок» в mtn.
              </p>
            </Reveal>
          </div>

          <ol className="space-y-3">
            {TIER_ORDER.map((tier, index) => {
              const info = TIERS[tier];

              return (
                <motion.li
                  key={tier}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex items-start gap-4 overflow-hidden rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-border"
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1"
                    style={{ background: info.colorVar }}
                  />

                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold"
                    style={{
                      background: `color-mix(in oklch, ${info.colorVar} 18%, transparent)`,
                      color: info.colorVar,
                    }}
                  >
                    {info.short}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-medium">{info.label}</h3>
                      <span className="font-mono text-sm text-muted-foreground">
                        {info.min.toFixed(1)} — {info.max.toFixed(1)}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
