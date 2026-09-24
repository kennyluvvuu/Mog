// Сервис авторизации: регистрация, вход, выход и ленивое создание профиля через Edge API

import { edgeClient } from "./client";
import { getSupabaseClient } from "./supabase";

export interface Profile {
  id: string;
  username: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface MeResponse {
  user: { id: string; email: string | null; created_at: string };
  profile: Profile;
}

export async function signUp(email: string, password: string, username?: string) {
  const { data, error } = await getSupabaseClient().auth.signUp({
    email,
    password,
    options: username ? { data: { username } } : undefined,
  });

  if (error) throw error;
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await getSupabaseClient().auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await getSupabaseClient().auth.signOut();
  if (error) throw error;
}

export async function fetchMe(): Promise<MeResponse> {
  const { data } = await edgeClient.get<MeResponse>("/me");
  return data;
}

export async function updateProfile(
  userId: string,
  values: { username?: string | null; avatar_url?: string | null }
): Promise<Profile> {
  const { data, error } = await getSupabaseClient()
    .from("profiles")
    .update(values)
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;
  return data as unknown as Profile;
}
