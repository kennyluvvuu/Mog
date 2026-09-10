// Подвал сайта со ссылками на разделы и дисклеймером

import Link from "next/link";
import { Logo } from "./Logo";

const FOOTER_SECTIONS = [
  {
    title: "Продукт",
    links: [
      { href: "/rate", label: "Получить оценку" },
      { href: "/tiers", label: "Шкала тиров" },
      { href: "/how-it-works", label: "Как это работает" },
    ],
  },
  {
    title: "Информация",
    links: [
      { href: "/about", label: "О проекте" },
      { href: "/faq", label: "FAQ" },
      { href: "/privacy", label: "Приватность" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            ИИ-оценка внешности по шкале луксмаксинга. Развлекательный проект —
            не медицинский сервис и не повод для выводов о себе.
          </p>
        </div>

        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title} className="space-y-3">
            <h3 className="text-sm font-medium">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} mog. Все оценки субъективны.</p>
          <p>Сделано с ИИ и самоиронией</p>
        </div>
      </div>
    </footer>
  );
}
