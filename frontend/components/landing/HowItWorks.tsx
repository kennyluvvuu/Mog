"use client";

// Секция из трёх шагов работы сервиса с каскадной анимацией

import { Camera, Cpu, ListChecks } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const STEPS = [
  {
    icon: Camera,
    title: "Загружаешь фото",
    text: "Фронтальный снимок при ровном свете. Файл уходит напрямую в приватное хранилище по временной ссылке.",
  },
  {
    icon: Cpu,
    title: "ИИ разбирает лицо",
    text: "Vision-модель оценивает пять метрик и наклон глазной щели, затем сводит их в один балл и тир.",
  },
  {
    icon: ListChecks,
    title: "Получаешь план",
    text: "Развёрнутый разбор плюс список конкретных действий: уход, причёска, процент жира, осанка.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium text-brand">Процесс</p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Три шага до результата
          </h2>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <StaggerItem key={step.title}>
              <div className="group h-full rounded-xl border border-border/60 bg-card/40 p-7 transition-colors hover:border-border">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <step.icon className="size-5" />
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
