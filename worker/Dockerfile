# syntax=docker/dockerfile:1

FROM oven/bun:1-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Копируем манифест зависимостей
COPY package.json bun.lock* ./

# Устанавливаем production-зависимости воркера без жесткой привязки к lockfile
RUN bun install --production --no-frozen-lockfile

# Копируем схему базы данных, общие типы и код воркера
COPY db.schema.ts db.types.ts ./
COPY supabase/functions/_shared ./supabase/functions/_shared
COPY worker ./worker

# Безопасность: непривилегированный пользователь bun
USER bun

CMD ["bun", "run", "worker/index.ts"]
