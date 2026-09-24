// Логотип проекта на основе изображения favicon

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <Image
        src="/logo.jpeg"
        alt="Mog"
        width={size}
        height={size}
        priority
        className="rounded-lg ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="text-lg font-semibold tracking-tight">mog</span>
    </Link>
  );
}
