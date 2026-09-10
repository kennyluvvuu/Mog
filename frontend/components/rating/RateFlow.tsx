"use client";

// Основной сценарий получения оценки: выбор фото и режима, отправка и живой прогресс

import { Loader2, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnalysisProgress } from "./AnalysisProgress";
import { CameraCapture } from "./CameraCapture";
import { ModeSelector } from "./ModeSelector";
import { PhotoDropzone } from "./PhotoDropzone";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useCreateRating, useRating } from "@/lib/hooks/use-ratings";
import { useRatingStream } from "@/lib/hooks/use-rating-stream";
import type { RatingMode } from "@/lib/schemas/rating";

export function RateFlow() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<RatingMode>("honest");
  const [ratingId, setRatingId] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const createRating = useCreateRating();
  const { state, isPolling } = useRatingStream(ratingId, Boolean(ratingId));
  const { data: rating } = useRating(ratingId, isPolling);

  const previewUrl = useMemo(
    () => (file ? URL.createObjectURL(file) : null),
    [file]
  );

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  useEffect(() => {
    if (rating?.status === "completed" && ratingId) {
      const timer = setTimeout(() => router.push(`/ratings/${ratingId}`), 700);
      return () => clearTimeout(timer);
    }
  }, [rating?.status, ratingId, router]);

  const handleSubmit = async () => {
    if (!file) return;
    const created = await createRating.mutateAsync({ file, mode });
    setRatingId(created.rating_id);
  };

  const status = rating?.status ?? "pending";
  const isRunning = Boolean(ratingId) && state !== "done";

  if (ratingId) {
    return (
      <div className="space-y-6">
        <AnalysisProgress status={status} isPolling={isPolling} />

        {rating?.status === "failed" && (
          <>
            <Alert variant="destructive">
              <AlertDescription>
                {rating.error_message || "Не удалось обработать фото"}
              </AlertDescription>
            </Alert>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setRatingId(null);
                setFile(null);
              }}
            >
              Попробовать снова
            </Button>
          </>
        )}

        {isRunning && rating?.status !== "failed" && (
          <p className="text-center text-sm text-muted-foreground">
            Обычно занимает 15–40 секунд. Можно не закрывать вкладку.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {isCameraOpen ? (
        <CameraCapture
          onCapture={(captured) => {
            setFile(captured);
            setIsCameraOpen(false);
          }}
          onClose={() => setIsCameraOpen(false)}
        />
      ) : (
        <PhotoDropzone
          file={file}
          previewUrl={previewUrl}
          onSelect={setFile}
          onRequestCamera={() => setIsCameraOpen(true)}
          disabled={createRating.isPending}
        />
      )}

      <div className="space-y-3">
        <h2 className="text-sm font-medium">Тон разбора</h2>
        <ModeSelector
          value={mode}
          onChange={setMode}
          disabled={createRating.isPending}
        />
      </div>

      <Button
        size="lg"
        className="w-full"
        disabled={!file || createRating.isPending}
        onClick={handleSubmit}
      >
        {createRating.isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Sparkles className="size-4" />
        )}
        {createRating.isPending ? "Загружаем фото..." : "Оценить внешность"}
      </Button>
    </div>
  );
}
