"use client";

// Форма входа по email и паролю с валидацией через zod

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignIn } from "@/lib/hooks/use-auth-mutations";

const signInSchema = z.object({
  email: z.email({ message: "Введите корректный email" }),
  password: z.string().min(6, { message: "Минимум 6 символов" }),
});

type SignInValues = z.infer<typeof signInSchema>;

export function SignInForm() {
  const signIn = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({ resolver: zodResolver(signInSchema) });

  return (
    <form
      onSubmit={handleSubmit((values) => signIn.mutate(values))}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Пароль</Label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={signIn.isPending}>
        {signIn.isPending && <Loader2 className="size-4 animate-spin" />}
        Войти
      </Button>
    </form>
  );
}
