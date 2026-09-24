// Страница 404 для несуществующих маршрутов

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-mono text-6xl font-semibold text-muted-foreground">404</p>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Страница не найдена</h1>
        <p className="text-muted-foreground">
          Возможно, ссылка устарела или содержит опечатку
        </p>
      </div>
      <Button asChild>
        <Link href="/">На главную</Link>
      </Button>
    </div>
  );
}
