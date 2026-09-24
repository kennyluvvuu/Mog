"use client";

// Глобальная граница ошибок приложения с возможностью повторить попытку

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Что-то пошло не так</h1>
        <p className="max-w-md text-muted-foreground">
          {error.message || "Непредвиденная ошибка приложения"}
        </p>
      </div>
      <Button onClick={reset}>Попробовать снова</Button>
    </div>
  );
}
