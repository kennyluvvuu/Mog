// Страница создания новой оценки внешности

import type { Metadata } from "next";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { RateFlow } from "@/components/rating/RateFlow";

export const metadata: Metadata = { title: "Новая оценка" };

export default function RatePage() {
  return (
    <AuthGuard>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <header className="mb-10">
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Новая оценка
          </h1>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Один фронтальный снимок при ровном свете даёт самый точный разбор.
          </p>
        </header>

        <RateFlow />
      </div>
    </AuthGuard>
  );
}
