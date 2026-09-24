"use client";

// Локальное распознавание лиц команды: сверяет эмбеддинг фото с эталонами разработчиков

import { TEAM_MEMBERS, type TeamMember } from "./team-embeddings";

const WASM_PATH = "/mediapipe/wasm";
const DETECTOR_MODEL = "/mediapipe/blaze_face_short_range.tflite";
const EMBEDDER_MODEL = "/mediapipe/mobilenet_v3_small.tflite";

const MATCH_THRESHOLD = 0.55;
const CROP_PADDING = 0.25;
const CROP_SIZE = 224;

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}

export async function recognizeTeamMember(file: File): Promise<TeamMember | null> {
  // Возвращает разработчика, если лицо на фото совпало с эталоном, иначе null
  try {
    const { FaceDetector, FilesetResolver, ImageEmbedder } = await import(
      "@mediapipe/tasks-vision"
    );

    const fileset = await FilesetResolver.forVisionTasks(WASM_PATH);
    const detector = await FaceDetector.createFromOptions(fileset, {
      baseOptions: { modelAssetPath: DETECTOR_MODEL },
      runningMode: "IMAGE",
    });
    const embedder = await ImageEmbedder.createFromOptions(fileset, {
      baseOptions: { modelAssetPath: EMBEDDER_MODEL },
      runningMode: "IMAGE",
      quantize: false,
    });

    try {
      const bitmap = await createImageBitmap(file);
      const detection = detector.detect(bitmap).detections[0];
      if (!detection?.boundingBox) return null;

      const { originX, originY, width, height } = detection.boundingBox;
      const canvas = document.createElement("canvas");
      canvas.width = CROP_SIZE;
      canvas.height = CROP_SIZE;

      const context = canvas.getContext("2d");
      if (!context) return null;

      context.drawImage(
        bitmap,
        Math.max(0, originX - width * CROP_PADDING),
        Math.max(0, originY - height * CROP_PADDING),
        width * (1 + 2 * CROP_PADDING),
        height * (1 + 2 * CROP_PADDING),
        0,
        0,
        CROP_SIZE,
        CROP_SIZE
      );
      bitmap.close();

      const embedding = embedder.embed(canvas).embeddings[0]?.floatEmbedding;
      if (!embedding) return null;

      const vector = Array.from(embedding);
      let best: TeamMember | null = null;
      let bestScore = MATCH_THRESHOLD;

      for (const member of TEAM_MEMBERS) {
        const score = cosineSimilarity(vector, member.embedding);
        if (score >= bestScore) {
          bestScore = score;
          best = member;
        }
      }

      return best;
    } finally {
      detector.close();
      embedder.close();
    }
  } catch {
    // Распознавание не критично: при любой ошибке отдаём обычную оценку
    return null;
  }
}
