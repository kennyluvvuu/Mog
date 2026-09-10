// Страница профиля пользователя с настройками аккаунта

import type { Metadata } from "next";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { ProfileForm } from "@/components/auth/ProfileForm";

export const metadata: Metadata = { title: "Профиль" };

export default function ProfilePage() {
  return (
    <AuthGuard>
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <header className="mb-10">
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Профиль
          </h1>
          <p className="mt-3 text-muted-foreground">
            Данные аккаунта и публичный никнейм
          </p>
        </header>

        <ProfileForm />
      </div>
    </AuthGuard>
  );
}
