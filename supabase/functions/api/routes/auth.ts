import { Hono } from "hono";
import type { AppEnv } from "../types.ts";
import { authMiddleware, getOrCreateProfile } from "../middlewares/auth.ts";

export const authRouter = new Hono<AppEnv>();

authRouter.use("*", authMiddleware);

/**
 * GET /me - Получить профиль текущего пользователя
 * Выполняет ленивый upsert в таблицу profiles при первом обращении.
 */
authRouter.get("/", async (c) => {
  const user = c.get("user");
  const supabaseAdmin = c.get("supabaseAdmin");

  try {
    const profile = await getOrCreateProfile(supabaseAdmin, user);

    return c.json({
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        created_at: user.created_at,
      },
      profile,
    });
  } catch (error) {
    return c.json(
      {
        error: "ProfileError",
        message:
          error instanceof Error ? error.message : "Не удалось загрузить профиль",
      },
      500
    );
  }
});
