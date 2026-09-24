// Страница детального просмотра результата оценки

import type { Metadata } from "next";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { RatingDetail } from "./RatingDetail";

export const metadata: Metadata = { title: "Результат оценки" };

export default async function RatingPage({ params }: PageProps<"/ratings/[id]">) {
  const { id } = await params;

  return (
    <AuthGuard>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <RatingDetail id={id} />
      </div>
    </AuthGuard>
  );
}
