# syntax=docker/dockerfile:1

FROM denoland/deno:alpine

WORKDIR /app

ENV PORT=8000
ENV HOST=0.0.0.0

# Копируем общие схемы/типы и код API
COPY supabase/functions/_shared ./supabase/functions/_shared
COPY supabase/functions/api ./supabase/functions/api

# Кэшируем зависимости Deno
RUN deno cache --config ./supabase/functions/api/deno.json ./supabase/functions/api/index.ts

EXPOSE 8000

# Безопасность: запуск под непривилегированным пользователем deno
USER deno

CMD ["run", "--allow-net", "--allow-env", "--config", "supabase/functions/api/deno.json", "supabase/functions/api/index.ts"]
