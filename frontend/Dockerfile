# syntax=docker/dockerfile:1

# ------------------------------------------------------------------------------
# 1. Базовый образ
# ------------------------------------------------------------------------------
FROM node:20-alpine AS base

# ------------------------------------------------------------------------------
# 2. Установка зависимостей
# ------------------------------------------------------------------------------
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Копируем манифесты зависимостей
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci || npm install; else npm install; fi

# ------------------------------------------------------------------------------
# 3. Сборка приложения
# ------------------------------------------------------------------------------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Аргументы сборки для Next.js (переменные NEXT_PUBLIC_* запекаются в клиентский бандл)
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_EDGE_URL

ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY
ENV NEXT_PUBLIC_EDGE_URL=$NEXT_PUBLIC_EDGE_URL
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# ------------------------------------------------------------------------------
# 4. Финальный легковесный runtime образ
# ------------------------------------------------------------------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Безопасность: непривилегированный пользователь
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Копируем статику и скомпилированный standalone сервер
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
