"use client";

// Липкий хедер сайта: меняет фон при скролле, содержит навигацию и меню пользователя

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/how-it-works", label: "Как это работает" },
  { href: "/tiers", label: "Шкала" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "О проекте" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                pathname === link.href && "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <UserMenu />
          <MobileNav links={NAV_LINKS} />
        </div>
      </div>
    </motion.header>
  );
}
