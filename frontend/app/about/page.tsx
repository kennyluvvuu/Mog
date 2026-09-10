// Страница «О проекте» с описанием идеи, технологий и позиции команды

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export const metadata: Metadata = {
  title: "О проекте",
  description: "Зачем существует mog, как устроен сервис и почему к оценке стоит относиться спокойно.",
};

const STACK = [
  { title: "Vision-модель", text: "Groq анализирует фото и возвращает строго структурированный JSON по схеме." },
  { title: "Очередь задач", text: "pgmq внутри PostgreSQL: задачи не теряются даже при перезапуске воркера." },
  { title: "Приватное хранилище", text: "Фото лежат в закрытом бакете, доступ — только по временным ссылкам." },
  { title: "Живой статус", text: "Стрим событий показывает прогресс обработки без перезагрузки страницы." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О проекте"
        title="Зеркало, которое не льстит"
        description="mog — эксперимент на стыке мем-культуры луксмаксинга и современных vision-моделей."
      />

      <div className="mx-auto max-w-3xl space-y-16 px-4 py-16 sm:px-6">
        <Reveal className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Идея</h2>
          <p className="leading-relaxed text-muted-foreground">
            Луксмаксинг-сообщества годами спорят о челюстях, скулах и наклоне
            глаз, но каждая оценка там субъективна и зависит от настроения
            отвечающего. Мы решили посмотреть, что получится, если задать
            нейросети жёсткую схему: одни и те же шесть параметров, фиксированные
            диапазоны баллов и обязательные практические выводы.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Получился инструмент, который выдаёт одинаково структурированный
            разбор для любого фото — с числом, тиром и списком того, что реально
            можно улучшить.
          </p>
        </Reveal>

        <Reveal className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Важная оговорка</h2>
          <p className="leading-relaxed text-muted-foreground">
            Внешность — не рейтинг и не соревнование. Балл от нейросети говорит о
            том, как модель интерпретировала один конкретный кадр, и ничего не
            говорит о вас как о человеке. Если оценка портит настроение — просто
            закройте вкладку: это развлекательный проект, а не приговор.
          </p>
        </Reveal>

        <div className="space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">Как устроено</h2>
          </Reveal>

          <Stagger className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2">
            {STACK.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full bg-background p-6">
                  <h3 className="mb-2 font-medium">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="rounded-xl border border-border/60 bg-card/40 p-8 text-center">
          <h2 className="text-xl font-semibold tracking-tight">
            Проверим на твоём фото?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Регистрация занимает полминуты, первая оценка — ещё столько же.
          </p>
          <Button asChild className="mt-6">
            <Link href="/rate">Получить оценку</Link>
          </Button>
        </Reveal>
      </div>
    </>
  );
}
