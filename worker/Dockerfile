# syntax=docker/dockerfile:1

FROM oven/bun:1-alpine AS runner

WORKDIR /app

# Копируем только манифест зависимостей (без локального bun.lock, чтобы исключить рассинхронизацию)
COPY package.json ./

# Устанавливаем production-зависимости воркера
RUN bun install --production

ENV NODE_ENV=production

# Копируем схему базы данных, общие типы и код воркера
COPY db.schema.ts db.types.ts ./
COPY supabase/functions/_shared ./supabase/functions/_shared
COPY worker ./worker

# Безопасность: непривилегированный пользователь bun
USER bun

CMD ["bun", "run", "worker/index.ts"]
