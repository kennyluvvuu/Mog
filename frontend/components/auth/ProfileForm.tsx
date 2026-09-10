"use client";

// Форма редактирования профиля: никнейм и просмотр данных аккаунта

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useProfile, useUpdateProfile } from "@/lib/hooks/use-auth-mutations";
import { formatDate } from "@/lib/rating-utils";

const profileSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Минимум 2 символа" })
    .max(24, { message: "Максимум 24 символа" }),
});

type ProfileValues = z.infer<typeof profileSchema>;

export function ProfileForm() {
  const { data: me, isPending } = useProfile();
  const updateProfile = useUpdateProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ProfileValues>({ resolver: zodResolver(profileSchema) });

  useEffect(() => {
    if (me?.profile.username) {
      reset({ username: me.profile.username });
    }
  }, [me?.profile.username, reset]);

  if (isPending) {
    return <Skeleton className="h-64 w-full rounded-xl" />;
  }

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleSubmit((values) => updateProfile.mutate(values))}
        className="space-y-4 rounded-xl border border-border/60 bg-card/40 p-6"
      >
        <div className="space-y-2">
          <Label htmlFor="username">Никнейм</Label>
          <Input id="username" placeholder="chadmaxxer" {...register("username")} />
          {errors.username && (
            <p className="text-xs text-destructive">{errors.username.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={!isDirty || updateProfile.isPending}
          size="sm"
        >
          {updateProfile.isPending && <Loader2 className="size-4 animate-spin" />}
          Сохранить
        </Button>
      </form>

      <dl className="grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2">
        <div className="bg-background p-5">
          <dt className="text-xs uppercase tracking-wider text-muted-foreground">
            Email
          </dt>
          <dd className="mt-2 truncate text-sm">{me?.user.email ?? "—"}</dd>
        </div>
        <div className="bg-background p-5">
          <dt className="text-xs uppercase tracking-wider text-muted-foreground">
            Аккаунт создан
          </dt>
          <dd className="mt-2 text-sm">{formatDate(me?.profile.created_at)}</dd>
        </div>
      </dl>
    </div>
  );
}
