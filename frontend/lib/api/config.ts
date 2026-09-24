// Конфигурация подключения к Supabase Gateway и базовые URL всех сервисов

function requireEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `Переменная окружения ${name} не задана. Скопируйте .env.example в .env.local`
    );
  }
  return value;
}

export const SUPABASE_URL = requireEnv(
  "NEXT_PUBLIC_SUPABASE_URL",
  process.env.NEXT_PUBLIC_SUPABASE_URL
).replace(/\/$/, "");

export const SUPABASE_ANON_KEY = requireEnv(
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const AUTH_URL = `${SUPABASE_URL}/auth/v1`;
export const REST_URL = `${SUPABASE_URL}/rest/v1`;
export const STORAGE_URL = `${SUPABASE_URL}/storage/v1`;
export const EDGE_URL =
  process.env.NEXT_PUBLIC_EDGE_URL?.replace(/\/$/, "") ||
  `${SUPABASE_URL}/functions/v1/api`;

export const RATINGS_BUCKET = "ratings_photos";
