"use client";

// Мобильная навигация в выдвижной панели

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavLink {
  href: string;
  label: string;
}

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Меню</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>Навигация</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
