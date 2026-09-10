// Страница подробного описания шкалы тиров луксмаксинга

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { TierScale } from "@/components/landing/TierScale";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Шкала тиров",
  description: "Все семь уровней шкалы луксмаксинга от sub3 до true adam с диапазонами баллов.",
};

export default function TiersPage() {
  return (
    <>
      <PageHero
        eyebrow="Шкала"
        title="От sub3 до true adam"
        description="Семь уровней, за каждым закреплён свой диапазон баллов. Модель не может поставить балл вне диапазона выбранного тира."
      />

      <TierScale />

      <section>
        <div className="mx-auto max-w-3xl space-y-6 px-4 py-20 text-center sm:px-6">
          <Reveal className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Тир — это не про ценность человека
            </h2>
            <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
              Шкала пришла из интернет-культуры и описывает довольно узкий набор
              признаков лица на одном кадре. Она не учитывает харизму, голос,
              манеру держаться и всё то, что на самом деле определяет впечатление
              о человеке.
            </p>
            <Button asChild className="mt-2">
              <Link href="/rate">Узнать свой тир</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
