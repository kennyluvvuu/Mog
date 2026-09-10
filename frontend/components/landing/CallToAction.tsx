"use client";

// Финальный призыв к действию перед подвалом лендинга

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

export function CallToAction() {
  return (
    <section className="grain relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[130px]"
      />

      <div className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
        <Reveal>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Готов услышать правду?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-balance leading-relaxed text-muted-foreground">
            Одно фото, полминуты ожидания и честный разбор с планом действий.
            Фото хранится приватно и удаляется вместе с оценкой.
          </p>
          <Button size="lg" asChild className="group mt-9">
            <Link href="/rate">
              Загрузить фото
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
