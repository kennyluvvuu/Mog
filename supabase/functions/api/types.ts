import type { SupabaseClient, User } from "@supabase/supabase-js";
import type { Profile } from "../_shared/db.types.ts";

// Реэкспорт моделей и типов БД из общей директории functions/_shared
export * from "../_shared/db.types.ts";

export interface AppVariables {
  user: User;
  profile?: Profile;
  supabase: SupabaseClient;
  supabaseAdmin: SupabaseClient;
}

export interface AppEnv {
  Variables: AppVariables;
}
