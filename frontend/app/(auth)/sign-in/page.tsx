// Страница входа в аккаунт

import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";
import { SignInForm } from "@/components/auth/SignInForm";

export const metadata: Metadata = { title: "Вход" };

export default function SignInPage() {
  return (
    <AuthCard
      title="С возвращением"
      description="Войдите, чтобы посмотреть историю оценок"
      footerText="Ещё нет аккаунта?"
      footerLinkText="Зарегистрироваться"
      footerHref="/sign-up"
    >
      <SignInForm />
    </AuthCard>
  );
}
