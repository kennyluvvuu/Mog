// Страница с подробным описанием процесса оценки и советами по съёмке

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Metrics } from "@/components/landing/Metrics";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  title: "Как это работает",
  description: "Полный путь фото от загрузки до готового разбора и советы по правильной съёмке.",
};

const PIPELINE = [
  { step: "01", title: "Загрузка", text: "Фото уходит напрямую в приватный бакет по временной ссылке — сервер не хранит копию." },
  { step: "02", title: "Очередь", text: "Создаётся задача в очереди внутри базы данных. Она не потеряется при перезапуске." },
  { step: "03", title: "Анализ", text: "Фоновый воркер берёт задачу и отправляет фото в vision-модель со строгой схемой ответа." },
  { step: "04", title: "Калибровка", text: "Балл проверяется на соответствие диапазону тира, чтобы не было противоречий." },
  { step: "05", title: "Результат", text: "Метрики, разбор и советы сохраняются, а страница обновляет статус в реальном времени." },
];

const PHOTO_TIPS = [
  { good: true, text: "Фронтальный кадр, лицо смотрит прямо в камеру" },
  { good: true, text: "Ровный дневной свет без жёстких теней" },
  { good: true, text: "Нейтральное выражение лица, волосы убраны со лба" },
  { good: false, text: "Фильтры, бьюти-режим и ретушь" },
  { good: false, text: "Очки, головные уборы и маски" },
  { good: false, text: "Сильный ракурс снизу или сверху" },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Процесс"
        title="Что происходит после загрузки"
        description="От нажатия кнопки до готового разбора проходит пять этапов — вот все они."
      />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Stagger className="space-y-3">
            {PIPELINE.map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex gap-5 rounded-xl border border-border/60 bg-card/40 p-6">
                  <span className="font-mono text-sm text-brand">{item.step}</span>
                  <div>
                    <h3 className="mb-1.5 font-medium">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Metrics />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <Reveal className="mb-10">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Как снять фото, чтобы разбор был честным
            </h2>
          </Reveal>

          <Stagger className="grid gap-3 sm:grid-cols-2">
            {PHOTO_TIPS.map((tip) => (
              <StaggerItem key={tip.text}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-border/60 bg-card/40 p-4">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-xs"
                    style={{
                      background: tip.good
                        ? "color-mix(in oklch, var(--tier-htn) 18%, transparent)"
                        : "color-mix(in oklch, var(--tier-sub3) 18%, transparent)",
                      color: tip.good ? "var(--tier-htn)" : "var(--tier-sub3)",
                    }}
                  >
                    {tip.good ? "+" : "−"}
                  </span>
                  <p className="text-sm leading-relaxed">{tip.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/rate">Загрузить фото</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
