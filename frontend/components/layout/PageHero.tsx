"use client";

// Общая шапка контентных страниц с анимацией появления

import { motion } from "motion/react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="grain relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-14rem] size-[28rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6"
      >
        <p className="mb-3 text-sm font-medium text-brand">{eyebrow}</p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-balance leading-relaxed text-muted-foreground">
          {description}
        </p>
      </motion.div>
    </header>
  );
}
