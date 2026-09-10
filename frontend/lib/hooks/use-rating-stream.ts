"use client";

// Отслеживание статуса оценки: SSE-стрим с автоматическим откатом на polling

import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { buildStreamUrl } from "@/lib/api/ratings";
import { getSupabaseClient } from "@/lib/api/supabase";
import { rememberPhotoUrl } from "@/lib/photo-url-store";
import { ratingSchema, type Rating } from "@/lib/schemas/rating";

type StreamState = "connecting" | "streaming" | "polling" | "done";

export function useRatingStream(ratingId: string | null, enabled: boolean) {
  const [streamed, setStreamed] = useState<Rating | null>(null);
  const [state, setState] = useState<StreamState>("connecting");
  const sourceRef = useRef<EventSource | null>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!ratingId || !enabled) return;

    let cancelled = false;

    const closeSource = () => {
      sourceRef.current?.close();
      sourceRef.current = null;
    };

    const handlePayload = (raw: string) => {
      const parsed = ratingSchema.safeParse(JSON.parse(raw));
      if (!parsed.success || cancelled) return;

      setStreamed(parsed.data);
      queryClient.setQueryData(["rating", ratingId], parsed.data);

      if (parsed.data.photo_url) {
        rememberPhotoUrl(ratingId, parsed.data.photo_url);
        queryClient.setQueryData(["photo-url", ratingId], parsed.data.photo_url);
      }

      if (parsed.data.status === "completed" || parsed.data.status === "failed") {
        setState("done");
        queryClient.invalidateQueries({ queryKey: ["ratings"] });
        closeSource();
      }
    };

    const connect = async () => {
      const { data } = await getSupabaseClient().auth.getSession();
      const token = data.session?.access_token;
      if (!token || cancelled) return;

      const source = new EventSource(buildStreamUrl(ratingId, token));
      sourceRef.current = source;

      source.addEventListener("open", () => !cancelled && setState("streaming"));
      source.addEventListener("status", (event) =>
        handlePayload((event as MessageEvent<string>).data)
      );
      source.addEventListener("error", () => {
        // Стрим закрылся (120-секундный лимит Edge Function) — переходим на polling
        closeSource();
        if (!cancelled) {
          setState((current) => (current === "done" ? current : "polling"));
        }
      });
    };

    void connect();

    return () => {
      cancelled = true;
      closeSource();
    };
  }, [ratingId, enabled, queryClient]);

  return { streamed, state, isPolling: state === "polling" };
}
