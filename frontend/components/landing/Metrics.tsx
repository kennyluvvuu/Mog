"use client";

// Секция с описанием метрик, которые модель оценивает на фото

import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const METRICS = [
  { label: "Линия челюсти", text: "Гониальный угол, длина ветви и проекция подбородка." },
  { label: "Симметрия", text: "Двустороннее выравнивание глаз, носа, губ и овала лица." },
  { label: "Качество кожи", text: "Чистота, текстура, ровность тона, отсутствие воспалений." },
  { label: "Зона глаз", text: "Посадка глаз, экспозиция века, поддержка надбровных дуг." },
  { label: "Скулы", text: "Выраженность и высота скуловых костей, средняя треть лица." },
  { label: "Canthal tilt", text: "Наклон глазной щели: позитивный, нейтральный или негативный." },
];

export function Metrics() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-brand">Метрики</p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Шесть параметров, а не одно «нравится»
          </h2>
        </Reveal>

        <Stagger className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="h-full bg-background p-7 transition-colors hover:bg-card/60">
                <h3 className="mb-2 font-medium">{metric.label}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {metric.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
