// Бейдж тира луксмаксинга с цветом соответствующего уровня

import type { TierInfo } from "@/lib/constants/tiers";
import { cn } from "@/lib/utils";

export function TierBadge({
  tierInfo,
  className,
  size = "md",
}: {
  tierInfo: TierInfo;
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border font-medium",
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3.5 py-1.5 text-sm",
        className
      )}
      style={{
        color: tierInfo.colorVar,
        borderColor: `color-mix(in oklch, ${tierInfo.colorVar} 40%, transparent)`,
        background: `color-mix(in oklch, ${tierInfo.colorVar} 12%, transparent)`,
      }}
    >
      {tierInfo.label}
    </span>
  );
}
