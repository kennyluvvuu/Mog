// Типы схемы БД Supabase для строгой типизации клиента (таблицы profiles и ratings)

import type { LooksmaxxingTier, RatingMetrics, RatingStatus } from "./rating";

export type ProfileRow = {
  id: string;
  username: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export type RatingRow = {
  id: string;
  user_id: string;
  photo_path: string;
  status: RatingStatus;
  tier: LooksmaxxingTier | null;
  score: string | null;
  metrics: RatingMetrics | null;
  looksmaxxing_tips: string[] | null;
  raw_ai_response: Record<string, unknown> | null;
  error_message: string | null;
  created_at: string;
  completed_at: string | null;
}

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: {
          id: string;
          username?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      ratings: {
        Row: RatingRow;
        Insert: {
          id?: string;
          user_id: string;
          photo_path: string;
          status?: RatingStatus;
          tier?: LooksmaxxingTier | null;
          score?: string | null;
          metrics?: RatingMetrics | null;
          looksmaxxing_tips?: string[] | null;
          raw_ai_response?: Record<string, unknown> | null;
          error_message?: string | null;
          created_at?: string;
          completed_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          photo_path?: string;
          status?: RatingStatus;
          tier?: LooksmaxxingTier | null;
          score?: string | null;
          metrics?: RatingMetrics | null;
          looksmaxxing_tips?: string[] | null;
          raw_ai_response?: Record<string, unknown> | null;
          error_message?: string | null;
          created_at?: string;
          completed_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      looksmaxxing_tier: LooksmaxxingTier;
      rating_status: RatingStatus;
    };
    CompositeTypes: Record<string, never>;
  };
}
