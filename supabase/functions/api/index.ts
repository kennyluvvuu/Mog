import "@supabase/functions-js/edge-runtime.d.ts";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import type { AppEnv } from "./types.ts";
import { authRouter } from "./routes/auth.ts";
import { ratingsRouter } from "./routes/ratings.ts";
import { streamRouter } from "./routes/stream.ts";

const app = new Hono<AppEnv>();

// Глобальные middleware: логирование и CORS
app.use("*", logger());
app.use(
  "*",
  cors({
    origin: "*",
    allowHeaders: [
      "authorization",
      "x-client-info",
      "apikey",
      "content-type",
    ],
    allowMethods: ["POST", "GET", "OPTIONS", "PUT", "DELETE", "PATCH"],
    exposeHeaders: ["content-length"],
    maxAge: 600,
    credentials: true,
  })
);

// Глобальный обработчик ошибок
app.onError((err, c) => {
  console.error("Необработанная ошибка API:", err);
  return c.json(
    {
      error: "InternalServerError",
      message: err.message || "Внутренняя ошибка сервера",
    },
    500
  );
});

// Роутер API
const api = new Hono<AppEnv>();

// Healthcheck
api.get("/health", (c) =>
  c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  })
);

// Подключение модульных маршрутов (с поддержкой trailing slash и без)
api.route("/me", authRouter);
api.route("/me/", authRouter);
api.route("/ratings", streamRouter);
api.route("/ratings/", streamRouter);
api.route("/ratings", ratingsRouter);
api.route("/ratings/", ratingsRouter);

// Поддержка различных префиксов роутинга в Supabase Edge Functions:
// 1. /functions/v1/api (вызов через Supabase API Gateway)
// 2. /api (пользовательский reverse proxy)
// 3. / (прямой вызов функции)
app.route("/functions/v1/api", api);
app.route("/functions/v1/api/", api);
app.route("/api", api);
app.route("/api/", api);
app.route("/", api);

// 404 handler
app.notFound((c) =>
  c.json(
    {
      error: "NotFound",
      message: `Маршрут ${c.req.method} ${c.req.path} не найден`,
    },
    404
  )
);

// Запуск HTTP-сервера для среды Supabase Edge Runtime / Deno
if (import.meta.main) {
  const port = Number(Deno.env.get("PORT") || 8000);
  const hostname = Deno.env.get("HOST") || "0.0.0.0";
  Deno.serve({ port, hostname }, app.fetch);
}

export default app;
