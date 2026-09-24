"use client";

// Съёмка фото с веб-камеры: автозапуск сканирования и автоматический снимок при попадании лица в рамку

import { Camera, Loader2, X } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaceScanOverlay } from "./FaceScanOverlay";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useCamera } from "@/lib/hooks/use-camera";
import { useFaceDetector, type FaceFrameStatus } from "@/lib/hooks/use-face-detector";

const HINTS: Record<FaceFrameStatus, string> = {
  loading: "Загружаем модуль распознавания лица...",
  unavailable: "Автоскан недоступен — снимите фото вручную",
  searching: "Расположите лицо по центру круга",
  "too-far": "Придвиньтесь ближе к камере",
  "too-close": "Отодвиньтесь немного назад",
  "off-center": "Выровняйте лицо по центру",
  holding: "Не двигайтесь, идёт сканирование...",
  ready: "Лицо зафиксировано — делаем снимок",
};

interface CameraCaptureProps {
  onCapture: (file: File) => void;
  onClose: () => void;
}

export function CameraCapture({ onCapture, onClose }: CameraCaptureProps) {
  const { videoRef, isActive, isStarting, error, start, stop, capture } = useCamera();
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const hasCapturedRef = useRef(false);

  const { status, box, holdProgress, reset } = useFaceDetector(video, isActive);

  const attachVideo = useCallback(
    (element: HTMLVideoElement | null) => {
      videoRef.current = element;
      setVideo(element);
    },
    [videoRef]
  );

  useEffect(() => {
    void start();
  }, [start]);

  useEffect(() => {
    if (status !== "ready" || hasCapturedRef.current) return;

    hasCapturedRef.current = true;

    // Небольшая пауза, чтобы пользователь увидел завершённый цикл сканирования
    const timer = setTimeout(async () => {
      const file = await capture();
      stop();

      if (file) {
        onCapture(file);
        return;
      }

      hasCapturedRef.current = false;
      reset();
    }, 420);

    return () => clearTimeout(timer);
  }, [status, capture, stop, onCapture, reset]);

  const handleClose = () => {
    stop();
    onClose();
  };

  const handleManualShoot = async () => {
    const file = await capture();
    if (!file) return;

    hasCapturedRef.current = true;
    stop();
    onCapture(file);
  };

  const handleRetry = () => {
    hasCapturedRef.current = false;
    reset();
    void start();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-xl border border-border/60"
    >
      <div className="relative aspect-square w-full bg-black/60">
        <video
          ref={attachVideo}
          playsInline
          muted
          className="size-full -scale-x-100 object-cover"
        />

        {(isStarting || (!isActive && !error)) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
            <Loader2 className="size-6 animate-spin" />
            <p className="text-sm">Запрашиваем доступ к камере...</p>
          </div>
        )}

        {isActive && (
          <FaceScanOverlay status={status} box={box} holdProgress={holdProgress} />
        )}
      </div>

      <div className="space-y-3 border-t border-border/60 bg-card/60 p-4">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="flex items-center justify-between gap-3">
          <p className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
            {error ? "Камера недоступна" : HINTS[status]}
          </p>

          {error ? (
            <Button size="sm" onClick={handleRetry}>
              Повторить
            </Button>
          ) : (
            <div className="flex shrink-0 gap-2">
              <Button variant="ghost" size="sm" onClick={handleClose}>
                <X className="size-4" />
                Отмена
              </Button>

              {status === "unavailable" && (
                <Button size="sm" disabled={!isActive} onClick={handleManualShoot}>
                  <Camera className="size-4" />
                  Снять
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
