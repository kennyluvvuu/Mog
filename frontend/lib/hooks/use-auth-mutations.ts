"use client";

// Мутации авторизации и запрос профиля текущего пользователя

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { fetchMe, signIn, signOut, signUp, updateProfile } from "@/lib/api/auth";
import { extractApiError } from "@/lib/api/client";
import { useAuth } from "@/components/providers/AuthProvider";

export function useProfile() {
  const { user, isLoading } = useAuth();

  return useQuery({
    queryKey: ["me", user?.id],
    queryFn: fetchMe,
    enabled: Boolean(user) && !isLoading,
    staleTime: 60_000,
  });
}

export function useSignIn() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: { email: string; password: string }) =>
      signIn(values.email, values.password),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
      toast.success("С возвращением");
      router.push("/dashboard");
    },
    onError: (error) => toast.error(extractApiError(error)),
  });
}

export function useSignUp() {
  const router = useRouter();

  return useMutation({
    mutationFn: (values: {
      email: string;
      password: string;
      username?: string;
    }) => signUp(values.email, values.password, values.username),
    onSuccess: () => {
      toast.success("Аккаунт создан");
      router.push("/dashboard");
    },
    onError: (error) => toast.error(extractApiError(error)),
  });
}

export function useSignOut() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.clear();
      router.push("/");
    },
    onError: (error) => toast.error(extractApiError(error)),
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: (values: { username?: string | null }) =>
      updateProfile(user!.id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      toast.success("Профиль обновлён");
    },
    onError: (error) => toast.error(extractApiError(error)),
  });
}
