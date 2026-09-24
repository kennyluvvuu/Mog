"use client";

// Форма регистрации нового пользователя с необязательным именем

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignUp } from "@/lib/hooks/use-auth-mutations";

const signUpSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Минимум 2 символа" })
    .max(24, { message: "Максимум 24 символа" })
    .optional()
    .or(z.literal("")),
  email: z.email({ message: "Введите корректный email" }),
  password: z.string().min(6, { message: "Минимум 6 символов" }),
});

type SignUpValues = z.infer<typeof signUpSchema>;

export function SignUpForm() {
  const signUp = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({ resolver: zodResolver(signUpSchema) });

  return (
    <form
      onSubmit={handleSubmit((values) =>
        signUp.mutate({
          email: values.email,
          password: values.password,
          username: values.username || undefined,
        })
      )}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="username">Никнейм (необязательно)</Label>
        <Input id="username" placeholder="chadmaxxer" {...register("username")} />
        {errors.username && (
          <p className="text-xs text-destructive">{errors.username.message}</p>
        )}
      </div>

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
          autoComplete="new-password"
          placeholder="Минимум 6 символов"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={signUp.isPending}>
        {signUp.isPending && <Loader2 className="size-4 animate-spin" />}
        Создать аккаунт
      </Button>
    </form>
  );
}
