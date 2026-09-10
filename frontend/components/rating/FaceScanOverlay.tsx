"use client";

// Визуальный оверлей сканирования лица: сетка, рамка захвата и индикатор удержания

import { motion } from "motion/react";
import type { FaceBox, FaceFrameStatus } from "@/lib/hooks/use-face-detector";
import { cn } from "@/lib/utils";

const CORNERS = [
  "left-0 top-0 border-l-2 border-t-2 rounded-tl-lg",
  "right-0 top-0 border-r-2 border-t-2 rounded-tr-lg",
  "left-0 bottom-0 border-l-2 border-b-2 rounded-bl-lg",
  "right-0 bottom-0 border-r-2 border-b-2 rounded-br-lg",
];

interface FaceScanOverlayProps {
  status: FaceFrameStatus;
  box: FaceBox | null;
  holdProgress: number;
}

export function FaceScanOverlay({ status, box, holdProgress }: FaceScanOverlayProps) {
  // Рисует сетку сканирования и рамку вокруг найденного лица
  const isLocked = status === "holding" || status === "ready";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 size-full opacity-[0.18]" preserveAspectRatio="none">
        <defs>
          <pattern id="scan-grid" width="7.5%" height="7.5%" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#scan-grid)" className="text-brand" />
      </svg>

      <div
        className={cn(
          "absolute left-1/2 top-1/2 size-[62%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-2 border-dashed transition-colors duration-500",
          isLocked ? "border-brand/70" : "border-white/25"
        )}
      />

      {box && (
        <motion.div
          animate={{
            left: `${box.x * 100}%`,
            top: `${box.y * 100}%`,
            width: `${box.width * 100}%`,
            height: `${box.height * 100}%`,
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute"
        >
          {CORNERS.map((corner) => (
            <span
              key={corner}
              className={cn(
                "absolute size-5 transition-colors duration-300",
                corner,
                isLocked ? "border-brand" : "border-white/70"
              )}
            />
          ))}
        </motion.div>
      )}

      {isLocked && (
        <motion.div
          initial={{ top: "0%" }}
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-0 h-16 -translate-y-1/2 bg-gradient-to-b from-transparent via-brand/35 to-transparent"
        />
      )}

      {status !== "ready" && holdProgress > 0 && (
        <svg
          className="absolute left-1/2 top-1/2 size-[64%] -translate-x-1/2 -translate-y-1/2 -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={1 - holdProgress}
            className="stroke-brand"
          />
        </svg>
      )}
    </div>
  );
}
