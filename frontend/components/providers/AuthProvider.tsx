"use client";

// Контекст авторизации: отслеживает сессию Supabase и раздаёт её всему приложению

import type { Session, User } from "@supabase/supabase-js";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getSupabaseClient } from "@/lib/api/supabase";

interface AuthContextValue {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  session: null,
  user: null,
  isLoading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabaseClient();

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setIsLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        setSession(nextSession);
        setIsLoading(false);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const value = useMemo(
    () => ({ session, user: session?.user ?? null, isLoading }),
    [session, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
