import type { MiddlewareHandler } from "hono";
import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";
import type { AppEnv } from "../types.ts";
import type { Profile } from "../../../../db.types.ts";

/**
 * Создает клиенты Supabase для контекста Edge Function:
 * - supabase: клиент с правами текущего пользователя (с учетом RLS)
 * - supabaseAdmin: клиент с сервисным ключом (обход RLS для служебных операций)
 */
export function getSupabaseClients(authHeader?: string): {
  supabase: SupabaseClient;
  supabaseAdmin: SupabaseClient;
} {
  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

  const supabase = createClient(supabaseUrl, anonKey, {
    global: {
      headers: authHeader ? { Authorization: authHeader } : {},
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return { supabase, supabaseAdmin };
}

/**
 * Ленивое создание (lazy upsert) профиля пользователя в таблице `profiles`,
 * если он еще не существует.
 */
export async function getOrCreateProfile(
  supabaseAdmin: SupabaseClient,
  user: User
): Promise<Profile> {
  // Сначала проверяем существование профиля
  const { data: existing, error: selectError } = await supabaseAdmin
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (existing) {
    return existing as Profile;
  }

  // Извлекаем имя пользователя из метаданных или email
  const meta = user.user_metadata ?? {};
  const rawUsername =
    meta.username ||
    meta.preferred_username ||
    meta.name ||
    (user.email ? user.email.split("@")[0] : null);

  const avatarUrl = meta.avatar_url ?? null;

  // Пытаемся создать профиль
  const { data: inserted, error: insertError } = await supabaseAdmin
    .from("profiles")
    .insert({
      id: user.id,
      username: rawUsername,
      avatar_url: avatarUrl,
    })
    .select()
    .single();

  if (!insertError && inserted) {
    return inserted as Profile;
  }

  // Если конфликт по уникальному имени пользователя, добавляем суффикс
  if (insertError?.code === "23505") {
    const fallbackUsername = rawUsername
      ? `${rawUsername}_${user.id.substring(0, 6)}`
      : null;

    const { data: retryInserted, error: retryError } = await supabaseAdmin
      .from("profiles")
      .insert({
        id: user.id,
        username: fallbackUsername,
        avatar_url: avatarUrl,
      })
      .select()
      .single();

    if (!retryError && retryInserted) {
      return retryInserted as Profile;
    }
  }

  // Проверяем еще раз на случай race condition при параллельных запросах
  const { data: finalCheck } = await supabaseAdmin
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (finalCheck) {
    return finalCheck as Profile;
  }

  throw new Error(
    `Не удалось создать профиль пользователя: ${insertError?.message ?? "неизвестная ошибка"}`
  );
}

/**
 * Middleware для обязательной аутентификации через Supabase Auth JWT.
 * Извлекает токен из заголовка Authorization или query-параметра token (для SSE).
 */
export const authMiddleware: MiddlewareHandler<AppEnv> = async (c, next) => {
  const authHeader = c.req.header("Authorization");
  const queryToken = c.req.query("token") ?? c.req.query("access_token");

  let token: string | undefined;
  if (authHeader?.startsWith("Bearer ")) {
    token = authHeader.substring(7).trim();
  } else if (authHeader) {
    token = authHeader.trim();
  } else if (queryToken) {
    token = queryToken.trim();
  }

  if (!token) {
    return c.json(
      {
        error: "Unauthorized",
        message: "Отсутствует токен авторизации (Authorization: Bearer <token>)",
      },
      401
    );
  }

  const { supabase, supabaseAdmin } = getSupabaseClients(
    authHeader ?? `Bearer ${token}`
  );

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);

  if (authError || !user) {
    return c.json(
      {
        error: "Unauthorized",
        message: authError?.message ?? "Недействительный или истекший токен",
      },
      401
    );
  }

  c.set("user", user);
  c.set("supabase", supabase);
  c.set("supabaseAdmin", supabaseAdmin);

  await next();
};
