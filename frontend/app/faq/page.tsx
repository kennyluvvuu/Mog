// Страница часто задаваемых вопросов

import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Ответы на частые вопросы о работе сервиса, приватности и точности оценок.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Вопросы"
        title="Частые вопросы"
        description="Коротко о точности, приватности фото, режимах разбора и скорости обработки."
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-left text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
