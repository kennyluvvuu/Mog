# syntax=docker/dockerfile:1

FROM oven/bun:1-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Копируем манифесты зависимостей
COPY package.json bun.lock ./
COPY worker/package.json worker/bun.lock* ./worker/

# Устанавливаем зависимости для корня и воркера
RUN bun install --production --frozen-lockfile || bun install --production
RUN cd worker && (bun install --production --frozen-lockfile || bun install --production)

# Копируем схему базы данных, общие типы и функции
COPY db.schema.ts db.types.ts ./
COPY supabase/functions/_shared ./supabase/functions/_shared

# Копируем исходный код воркера
COPY worker ./worker

# Безопасность: непривилегированный пользователь bun
USER bun

CMD ["bun", "run", "worker/index.ts"]
