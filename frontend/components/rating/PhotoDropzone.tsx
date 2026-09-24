"use client";

// Зона загрузки фото с drag-and-drop, превью и проверкой формата и размера

import { Camera, ImageUp, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState, type DragEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic"];
const MAX_SIZE_BYTES = 15 * 1024 * 1024;

function formatFileSize(bytes: number): string {
  return bytes < 1024 * 1024
    ? `${Math.round(bytes / 1024)} КБ`
    : `${(bytes / 1024 / 1024).toFixed(1)} МБ`;
}

interface PhotoDropzoneProps {
  file: File | null;
  previewUrl: string | null;
  onSelect: (file: File | null) => void;
  onRequestCamera: () => void;
  disabled?: boolean;
}

export function PhotoDropzone({
  file,
  previewUrl,
  onSelect,
  onRequestCamera,
  disabled,
}: PhotoDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateAndSelect = useCallback(
    (candidate: File | undefined) => {
      if (!candidate) return;

      if (!ALLOWED_TYPES.includes(candidate.type)) {
        toast.error("Поддерживаются только JPG, PNG, WebP и HEIC");
        return;
      }

      if (candidate.size > MAX_SIZE_BYTES) {
        toast.error("Файл больше 15 МБ");
        return;
      }

      onSelect(candidate);
    },
    [onSelect]
  );

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (!disabled) validateAndSelect(event.dataTransfer.files[0]);
  };

  if (file && previewUrl) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-border/60">
        <Image
          src={previewUrl}
          alt="Загруженное фото"
          width={640}
          height={640}
          unoptimized
          className="max-h-[26rem] w-full object-contain bg-black/40"
        />
        <div className="flex items-center justify-between gap-3 border-t border-border/60 bg-card/60 px-4 py-3">
          <p className="min-w-0 truncate text-sm text-muted-foreground">
            {file.name} · {formatFileSize(file.size)}
          </p>
          <Button
            variant="ghost"
            size="sm"
            disabled={disabled}
            onClick={() => onSelect(null)}
          >
            <X className="size-4" />
            Убрать
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      onDragOver={(event) => {
        event.preventDefault();
        if (!disabled) setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => !disabled && inputRef.current?.click()}
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border border-dashed px-6 py-16 text-center transition-colors",
        isDragging
          ? "border-brand bg-brand/5"
          : "border-border/70 hover:border-border hover:bg-card/40",
        disabled && "pointer-events-none opacity-60"
      )}
    >
      <div className="flex size-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <ImageUp className="size-6" />
      </div>
      <div className="space-y-1.5">
        <p className="font-medium">Перетащите фото или нажмите для выбора</p>
        <p className="text-sm text-muted-foreground">
          Фронтальный снимок, ровный свет. JPG, PNG, WebP или HEIC до 15 МБ
        </p>
      </div>

      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px w-8 bg-border" />
        или
        <span className="h-px w-8 bg-border" />
      </div>

      <Button
        variant="outline"
        size="sm"
        disabled={disabled}
        onClick={(event) => {
          event.stopPropagation();
          onRequestCamera();
        }}
      >
        <Camera className="size-4" />
        Снять на камеру
      </Button>

      <input
        ref={inputRef}
        type="file"
        accept={ALLOWED_TYPES.join(",")}
        className="hidden"
        onChange={(event) => validateAndSelect(event.target.files?.[0])}
      />
    </div>
  );
}
