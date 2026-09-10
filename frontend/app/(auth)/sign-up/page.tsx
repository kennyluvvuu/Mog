// Страница регистрации нового аккаунта

import type { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";
import { SignUpForm } from "@/components/auth/SignUpForm";

export const metadata: Metadata = { title: "Регистрация" };

export default function SignUpPage() {
  return (
    <AuthCard
      title="Создать аккаунт"
      description="Первая оценка займёт меньше минуты"
      footerText="Уже есть аккаунт?"
      footerLinkText="Войти"
      footerHref="/sign-in"
    >
      <SignUpForm />
    </AuthCard>
  );
}
