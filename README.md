# Mog — Looksmaxxing AI Rating Platform (Backend)

Бэкенд платформы ИИ-оценки внешности на базе Supabase (PostgreSQL 17, Storage, Auth, Edge Functions, `pgmq`) и фонового воркера на Bun с интеграцией Groq Vision AI.

---

## 🛠 Предварительные требования

- **Docker Desktop** или **OrbStack** (должен быть запущен)
- **Bun** (`curl -fsSL https://bun.sh/install | bash` или `brew install oven-sh/bun/bun`)
- **API-ключ Groq** ([console.groq.com/keys](https://console.groq.com/keys))

---

## 🚀 Быстрый старт (Local Dev Setup)

### 1. Установка зависимостей
```bash
bun install
```

### 2. Запуск локального Supabase
```bash
bun run supabase:start
```
Команда в Docker:
- Поднимает PostgreSQL 17, GoTrue Auth, Storage и Kong Gateway;
- **Автоматически применяет все миграции** из `supabase/migrations/`;
- **Автоматически запускает Edge Functions** (`api` маршруты сразу доступны через Gateway);
- Запускает Supabase Studio по адресу [http://127.0.0.1:54323](http://127.0.0.1:54323);
- Выводит в терминал адреса и ключи доступа (`Publishable key`, `Secret key`).

> Скопируйте значение **`Secret key`** (`sb_secret_...`) из вывода команды (или вызовите `bun run supabase:status`, если пропустили вывод).

### 3. Настройка окружения воркера (`worker/.env`)
Скопируйте пример конфигурации воркера:
```bash
cp worker/.env.example worker/.env
```

В файле `worker/.env` заполните обязательные параметры:
```ini
# 1. API-ключ Groq для Vision AI
GROQ_API_KEY="gsk_..."

# 2. Актуальный Secret key Supabase для доступа воркера к приватному Storage
# Вставляем сюда Secret key (sb_secret_...) из вывода 'bun run supabase:start'
SUPABASE_SERVICE_ROLE_KEY="sb_secret_..."

# 3. Подключение к БД и очереди pgmq (локальные значения по умолчанию уже заданы в .env.example)
DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:54322/postgres"
SUPABASE_URL="http://127.0.0.1:54321"
```

### 4. Запуск фонового воркера (Bun)
В отдельном терминале запустите обработчик очереди:
```bash
bun run worker:dev
```

---

## 🔍 Проверка и работа с сервисами

- **Supabase Studio (веб-панель):** [http://127.0.0.1:54323](http://127.0.0.1:54323)  
  Просмотр таблиц (`profiles`, `ratings`), пользователей Auth, очередей и Storage в одном интерфейсе.
- **Healthcheck Edge API:**
  ```bash
  curl http://127.0.0.1:54321/functions/v1/api/health
  # Ответ: {"status":"ok","timestamp":"..."}
  ```
- **Статус контейнеров и ключи доступа:**
  ```bash
  bun run supabase:status
  ```

---

## 🛑 Остановка

```bash
bun run supabase:stop
```

---

## 📚 Документация
- **Спецификация API для ИИ-агентов:** [supabase/API.md](supabase/API.md)
- **Архитектурный манифест проекта:** [AGENTS.md](AGENTS.md)
