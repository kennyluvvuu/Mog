"use client";

// Съёмка фото с веб-камеры: живое превью, снимок кадра и обработка ошибок доступа

import { Camera, Loader2, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useCamera } from "@/lib/hooks/use-camera";

interface CameraCaptureProps {
  onCapture: (file: File) => void;
  onClose: () => void;
}

export function CameraCapture({ onCapture, onClose }: CameraCaptureProps) {
  const { videoRef, isActive, isStarting, error, start, stop, capture } =
    useCamera();

  useEffect(() => {
    void start();
  }, [start]);

  const handleShoot = async () => {
    const file = await capture();
    if (!file) return;

    stop();
    onCapture(file);
  };

  const handleClose = () => {
    stop();
    onClose();
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
          ref={videoRef}
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
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div className="size-[62%] rounded-[50%] border-2 border-dashed border-white/25" />
          </div>
        )}
      </div>

      <div className="space-y-3 border-t border-border/60 bg-card/60 p-4">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="flex items-center justify-between gap-3">
          <p className="hidden text-sm text-muted-foreground sm:block">
            Расположите лицо по центру круга
          </p>

          <div className="flex flex-1 gap-2 sm:flex-none">
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X className="size-4" />
              Отмена
            </Button>

            {error ? (
              <Button size="sm" onClick={() => void start()}>
                Повторить
              </Button>
            ) : (
              <Button
                size="sm"
                className="flex-1 sm:flex-none"
                disabled={!isActive}
                onClick={handleShoot}
              >
                <Camera className="size-4" />
                Снять
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
