"use client";

// Управление потоком веб-камеры: запуск, остановка и снимок кадра в файл

import { useCallback, useEffect, useRef, useState } from "react";

type CameraError =
  | "unsupported"
  | "denied"
  | "not-found"
  | "in-use"
  | "unknown";

const ERROR_MESSAGES: Record<CameraError, string> = {
  unsupported: "Браузер не поддерживает камеру или страница открыта не по HTTPS",
  denied: "Доступ к камере запрещён. Разрешите его в настройках браузера",
  "not-found": "Камера не найдена. Подключите устройство и попробуйте снова",
  "in-use": "Камера занята другим приложением",
  unknown: "Не удалось включить камеру",
};

function mapError(error: unknown): CameraError {
  if (!(error instanceof DOMException)) return "unknown";

  if (error.name === "NotAllowedError" || error.name === "SecurityError") {
    return "denied";
  }
  if (error.name === "NotFoundError" || error.name === "OverconstrainedError") {
    return "not-found";
  }
  if (error.name === "NotReadableError") return "in-use";
  return "unknown";
}

export function useCamera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamsRef = useRef<Set<MediaStream>>(new Set());
  const requestIdRef = useRef(0);
  const [isActive, setIsActive] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const stop = useCallback(() => {
    // Гасим дорожки всех выданных потоков, иначе индикатор камеры останется гореть
    requestIdRef.current += 1;

    streamsRef.current.forEach((stream) =>
      stream.getTracks().forEach((track) => track.stop())
    );
    streamsRef.current.clear();

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setIsActive(false);
  }, []);

  const start = useCallback(async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setError(ERROR_MESSAGES.unsupported);
      return;
    }

    const requestId = ++requestIdRef.current;
    setIsStarting(true);
    setError(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 1280 },
        },
        audio: false,
      });

      // Пока ждали разрешение, мог прийти новый запуск или остановка
      if (requestId !== requestIdRef.current) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }

      streamsRef.current.add(stream);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setIsActive(true);
    } catch (cause) {
      if (requestId === requestIdRef.current) {
        setError(ERROR_MESSAGES[mapError(cause)]);
        stop();
      }
    } finally {
      setIsStarting(false);
    }
  }, [stop]);

  const capture = useCallback(async (): Promise<File | null> => {
    const video = videoRef.current;
    if (!video || !video.videoWidth) return null;

    const canvas = document.createElement("canvas");
    const size = Math.min(video.videoWidth, video.videoHeight);
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext("2d");
    if (!context) return null;

    // Отражаем кадр по горизонтали, чтобы снимок совпал с зеркальным превью
    context.translate(size, 0);
    context.scale(-1, 1);
    context.drawImage(
      video,
      (video.videoWidth - size) / 2,
      (video.videoHeight - size) / 2,
      size,
      size,
      0,
      0,
      size,
      size
    );

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", 0.92)
    );
    if (!blob) return null;

    return new File([blob], `camera-${Date.now()}.jpg`, { type: "image/jpeg" });
  }, []);

  useEffect(() => stop, [stop]);

  return { videoRef, isActive, isStarting, error, start, stop, capture };
}
