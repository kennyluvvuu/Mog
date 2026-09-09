import type { SupabaseClient, User } from "@supabase/supabase-js";
import type { Profile } from "../../../db.types.ts";

export interface AppVariables {
  user: User;
  profile?: Profile;
  supabase: SupabaseClient;
  supabaseAdmin: SupabaseClient;
}

export interface AppEnv {
  Variables: AppVariables;
}
