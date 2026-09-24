// Axios-клиенты для Edge API и PostgREST с автоматической подстановкой JWT и apikey

import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from "axios";
import { EDGE_URL, REST_URL, SUPABASE_ANON_KEY } from "./config";
import { getSupabaseClient } from "./supabase";

async function attachAuth(
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> {
  config.headers.set("apikey", SUPABASE_ANON_KEY);

  const { data } = await getSupabaseClient().auth.getSession();
  const token = data.session?.access_token;

  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }

  return config;
}

function createClient(baseURL: string): AxiosInstance {
  const instance = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
  });
  instance.interceptors.request.use(attachAuth);
  return instance;
}

export const edgeClient = createClient(EDGE_URL);
export const restClient = createClient(REST_URL);

export function extractApiError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as
      | { message?: string; error?: string; msg?: string; error_description?: string }
      | undefined;

    return (
      data?.message ||
      data?.error_description ||
      data?.msg ||
      data?.error ||
      error.message
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Неизвестная ошибка";
}
