"use client";

// Общая карточка-обёртка для страниц входа и регистрации

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
  footerText: string;
  footerLinkText: string;
  footerHref: string;
}

export function AuthCard({
  title,
  description,
  children,
  footerText,
  footerLinkText,
  footerHref,
}: AuthCardProps) {
  return (
    <div className="grain relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-sm"
      >
        <div className="mb-8 flex flex-col items-center text-center">
          <Image
            src="/logo.jpeg"
            alt=""
            width={56}
            height={56}
            className="mb-5 rounded-2xl ring-1 ring-white/10"
          />
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>

        {children}

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {footerText}{" "}
          <Link
            href={footerHref}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {footerLinkText}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
