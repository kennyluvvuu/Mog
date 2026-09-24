"use client";

// Первый экран лендинга с крупной типографикой и параллаксом логотипа

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  return (
    <section
      ref={ref}
      className="grain relative overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-18rem] size-[36rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-28">
        <motion.div
          style={{ y: imageY, opacity: imageOpacity }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/logo.jpeg"
            alt=""
            width={104}
            height={104}
            priority
            className="rounded-3xl ring-1 ring-white/10"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Узнай свой тир.
          <br />
          <span className="text-muted-foreground">Без вежливой лжи.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          Загружаешь фото — ИИ разбирает линию челюсти, симметрию, скулы и зону
          глаз, ставит балл от 1 до 10 и выдаёт конкретный план, что делать
          дальше.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Button size="lg" asChild className="group">
            <Link href="/rate">
              Получить оценку
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/how-it-works">Как это работает</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
