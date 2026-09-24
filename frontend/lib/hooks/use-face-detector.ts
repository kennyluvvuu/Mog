"use client";

// Детекция лица в кадре через MediaPipe: следит за попаданием лица в рамку и удержанием позиции

import type { Detection, FaceDetector } from "@mediapipe/tasks-vision";
import { useCallback, useEffect, useRef, useState } from "react";

const WASM_PATH = "/mediapipe/wasm";
const MODEL_PATH = "/mediapipe/blaze_face_short_range.tflite";

const MIN_FACE_RATIO = 0.26;
const MAX_FACE_RATIO = 0.82;
const MAX_CENTER_OFFSET = 0.2;
const HOLD_DURATION_MS = 1400;

export type FaceFrameStatus =
  | "loading"
  | "unavailable"
  | "searching"
  | "too-far"
  | "too-close"
  | "off-center"
  | "holding"
  | "ready";

export interface FaceBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

function evaluate(
  detection: Detection | undefined,
  videoWidth: number,
  videoHeight: number
): { status: FaceFrameStatus; box: FaceBox | null } {
  if (!detection?.boundingBox) return { status: "searching", box: null };

  const { originX, originY, width, height } = detection.boundingBox;
  const box: FaceBox = {
    x: originX / videoWidth,
    y: originY / videoHeight,
    width: width / videoWidth,
    height: height / videoHeight,
  };

  const size = Math.max(box.width, box.height);
  const offset = Math.hypot(box.x + box.width / 2 - 0.5, box.y + box.height / 2 - 0.5);

  if (size < MIN_FACE_RATIO) return { status: "too-far", box };
  if (size > MAX_FACE_RATIO) return { status: "too-close", box };
  if (offset > MAX_CENTER_OFFSET) return { status: "off-center", box };

  return { status: "holding", box };
}

export function useFaceDetector(video: HTMLVideoElement | null, enabled: boolean) {
  // Возвращает статус кадрирования лица, его рамку и прогресс удержания позиции
  const [status, setStatus] = useState<FaceFrameStatus>("loading");
  const [box, setBox] = useState<FaceBox | null>(null);
  const [holdProgress, setHoldProgress] = useState(0);

  const detectorRef = useRef<FaceDetector | null>(null);
  const frameRef = useRef<number | null>(null);
  const holdStartRef = useRef<number | null>(null);
  const lastTimestampRef = useRef(-1);
  const isReadyRef = useRef(false);

  useEffect(() => {
    if (!enabled || detectorRef.current) return;

    let cancelled = false;

    const load = async () => {
      try {
        const { FaceDetector, FilesetResolver } = await import(
          "@mediapipe/tasks-vision"
        );
        const fileset = await FilesetResolver.forVisionTasks(WASM_PATH);
        const detector = await FaceDetector.createFromOptions(fileset, {
          baseOptions: { modelAssetPath: MODEL_PATH, delegate: "GPU" },
          runningMode: "VIDEO",
        });

        if (cancelled) {
          detector.close();
          return;
        }

        detectorRef.current = detector;
        setStatus("searching");
      } catch {
        // Модель или WASM не загрузились — оставляем ручной снимок как запасной путь
        if (!cancelled) setStatus("unavailable");
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, [enabled]);

  useEffect(() => {
    return () => {
      detectorRef.current?.close();
      detectorRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!enabled || !video) return;

    const tick = () => {
      frameRef.current = requestAnimationFrame(tick);

      const detector = detectorRef.current;
      if (!detector || !video.videoWidth || isReadyRef.current) return;

      // MediaPipe требует строго возрастающие таймстемпы кадров
      const timestamp = performance.now();
      if (timestamp <= lastTimestampRef.current) return;
      lastTimestampRef.current = timestamp;

      const result = detector.detectForVideo(video, timestamp);
      const next = evaluate(result.detections[0], video.videoWidth, video.videoHeight);

      setBox(next.box);

      if (next.status !== "holding") {
        holdStartRef.current = null;
        setHoldProgress(0);
        setStatus(next.status);
        return;
      }

      holdStartRef.current ??= timestamp;
      const elapsed = timestamp - holdStartRef.current;
      const progress = Math.min(elapsed / HOLD_DURATION_MS, 1);

      setHoldProgress(progress);
      setStatus(progress >= 1 ? "ready" : "holding");

      if (progress >= 1) isReadyRef.current = true;
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    };
  }, [enabled, video]);

  const reset = useCallback(() => {
    holdStartRef.current = null;
    isReadyRef.current = false;
    lastTimestampRef.current = -1;
    setHoldProgress(0);
    setBox(null);
    setStatus((current) =>
      detectorRef.current ? "searching" : current === "unavailable" ? current : "loading"
    );
  }, []);

  return { status, box, holdProgress, reset };
}
