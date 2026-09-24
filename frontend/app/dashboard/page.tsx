// Личный кабинет пользователя с историей всех оценок

import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { RatingHistory } from "@/components/rating/RatingHistory";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Кабинет" };

export default function DashboardPage() {
  return (
    <AuthGuard>
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight">
              История оценок
            </h1>
            <p className="mt-3 text-muted-foreground">
              Все ваши разборы в одном месте
            </p>
          </div>

          <Button asChild>
            <Link href="/rate">
              <Plus className="size-4" />
              Новая оценка
            </Link>
          </Button>
        </header>

        <RatingHistory />
      </div>
    </AuthGuard>
  );
}
