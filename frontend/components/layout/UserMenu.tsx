"use client";

// Меню пользователя в хедере: вход/регистрация для гостей, дропдаун для авторизованных

import Link from "next/link";
import { LayoutDashboard, LogOut, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/components/providers/AuthProvider";
import { useProfile, useSignOut } from "@/lib/hooks/use-auth-mutations";

export function UserMenu() {
  const { user, isLoading } = useAuth();
  const { data: me } = useProfile();
  const signOut = useSignOut();

  if (isLoading) {
    return <Skeleton className="h-9 w-24 rounded-md" />;
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
          <Link href="/sign-in">Войти</Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/sign-up">Начать</Link>
        </Button>
      </div>
    );
  }

  const username = me?.profile.username || user.email?.split("@")[0] || "user";
  const initials = username.slice(0, 2).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 px-2">
          <Avatar className="size-7">
            <AvatarFallback className="text-xs">{initials}</AvatarFallback>
          </Avatar>
          <span className="hidden max-w-24 truncate text-sm sm:inline">
            {username}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="truncate font-normal text-muted-foreground">
          {user.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard">
            <LayoutDashboard className="size-4" />
            Кабинет
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/rate">
            <Sparkles className="size-4" />
            Новая оценка
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile">
            <User className="size-4" />
            Профиль
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onSelect={() => signOut.mutate()}
        >
          <LogOut className="size-4" />
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
