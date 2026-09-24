"use client";

// Список практических рекомендаций по улучшению внешности

import { motion } from "motion/react";
import { Check } from "lucide-react";

export function TipsList({ tips }: { tips: string[] }) {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-medium">Что делать дальше</h2>

      <ol className="space-y-3">
        {tips.map((tip, index) => (
          <motion.li
            key={tip}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="flex items-start gap-3 rounded-lg border border-border/60 bg-card/40 p-4"
          >
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
              <Check className="size-3" />
            </span>
            <p className="text-sm leading-relaxed">{tip}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
