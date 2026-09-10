import { Pool, type PoolConfig } from "pg";
import type {
  PgmqMessage,
  PgmqMetrics,
  RatingTaskPayload,
} from "../../db.types.ts";

export interface PgmqClientOptions {
  connectionString?: string;
  poolConfig?: PoolConfig;
  queueName?: string;
}

/**
 * Обертка над pgmq (PostgreSQL Message Queue) для долгоживущего воркера на Bun
 */
export class PgmqClient {
  private pool: Pool;
  public readonly queueName: string;

  constructor(options: PgmqClientOptions = {}) {
    this.queueName = options.queueName || process.env.PGMQ_QUEUE_NAME || "rating_tasks";

    const connectionString =
      options.connectionString ||
      process.env.DATABASE_URL ||
      "postgresql://postgres:postgres@127.0.0.1:54322/postgres";

    this.pool = new Pool({
      connectionString,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
      ...options.poolConfig,
    });
  }

  /**
   * Инициализация расширения pgmq и очереди rating_tasks (идемпотентно)
   */
  async initQueue(): Promise<void> {
    const client = await this.pool.connect();
    try {
      await client.query("CREATE EXTENSION IF NOT EXISTS pgmq CASCADE;");
      await client.query(`
        DO $$
        BEGIN
          IF NOT EXISTS (
            SELECT 1 FROM pgmq.meta WHERE queue_name = '${this.queueName}'
          ) THEN
            PERFORM pgmq.create('${this.queueName}');
          END IF;
        END $$;
      `);
    } finally {
      client.release();
    }
  }

  /**
   * Постановка задачи в очередь pgmq
   * @param payload Полезная нагрузка задачи
   * @param delaySeconds Задержка перед доступностью задачи (в секундах)
   * @returns ID сообщения в очереди (msg_id)
   */
  async enqueue(
    payload: RatingTaskPayload,
    delaySeconds = 0
  ): Promise<number> {
    const res = await this.pool.query<{ msg_id: string }>(
      "SELECT pgmq.send($1, $2::jsonb, $3::integer) AS msg_id;",
      [this.queueName, JSON.stringify(payload), delaySeconds]
    );

    const msgId = Number(res.rows[0]?.msg_id);
    if (isNaN(msgId)) {
      throw new Error(`Не удалось получить msg_id после постановки в очередь ${this.queueName}`);
    }
    return msgId;
  }

  /**
   * Чтение пакета сообщений из очереди
   * @param vtSeconds Visibility Timeout (в секундах) — на сколько скрыть сообщение от других чтений
   * @param qty Количество сообщений (по умолчанию 1 для последовательной обработки)
   */
  async read(
    vtSeconds = 60,
    qty = 1
  ): Promise<PgmqMessage<RatingTaskPayload>[]> {
    interface PgmqReadRow {
      msg_id: string;
      read_ct: number;
      enqueued_at: Date;
      vt: Date;
      message: RatingTaskPayload;
    }

    const res = await this.pool.query<PgmqReadRow>(
      "SELECT msg_id, read_ct, enqueued_at, vt, message FROM pgmq.read($1, $2::integer, $3::integer);",
      [this.queueName, vtSeconds, qty]
    );

    return res.rows.map((row: PgmqReadRow) => ({
      msg_id: Number(row.msg_id),
      read_ct: Number(row.read_ct),
      enqueued_at: row.enqueued_at,
      vt: row.vt,
      message: row.message,
    }));
  }

  /**
   * Чтение одной задачи для последовательной обработки воркером
   * @param vtSeconds Visibility Timeout (в секундах, по умолчанию 60 сек)
   */
  async readOne(vtSeconds = 60): Promise<PgmqMessage<RatingTaskPayload> | null> {
    const messages = await this.read(vtSeconds, 1);
    const first = messages[0];
    return first !== undefined ? first : null;
  }

  /**
   * Удаление успешно обработанного сообщения из очереди
   * @param msgId ID сообщения
   */
  async deleteMsg(msgId: number | string | bigint): Promise<boolean> {
    const res = await this.pool.query<{ delete: boolean }>(
      "SELECT pgmq.delete($1, $2::bigint) AS delete;",
      [this.queueName, msgId.toString()]
    );
    return Boolean(res.rows[0]?.delete);
  }

  /**
   * Изменение Visibility Timeout (например, при 429 Too Many Requests от Groq API)
   * Скрывает сообщение на vtOffsetSeconds вперед без удаления из очереди
   * @param msgId ID сообщения
   * @param vtOffsetSeconds Дополнительное время скрытия (в секундах)
   */
  async setVt(
    msgId: number | string | bigint,
    vtOffsetSeconds: number
  ): Promise<void> {
    await this.pool.query(
      "SELECT * FROM pgmq.set_vt($1, $2::bigint, $3::integer);",
      [this.queueName, msgId.toString(), vtOffsetSeconds]
    );
  }

  /**
   * Перемещение сообщения в архив (Dead Letter Queue / poisoned message)
   * @param msgId ID сообщения
   */
  async archive(msgId: number | string | bigint): Promise<boolean> {
    const res = await this.pool.query<{ archive: boolean }>(
      "SELECT pgmq.archive($1, $2::bigint) AS archive;",
      [this.queueName, msgId.toString()]
    );
    return Boolean(res.rows[0]?.archive);
  }

  /**
   * Получение текущих метрик очереди (длина очереди, возраст сообщений)
   */
  async getMetrics(): Promise<PgmqMetrics | null> {
    const res = await this.pool.query<{
      queue_name: string;
      queue_length: string;
      newest_msg_age_sec: number | null;
      oldest_msg_age_sec: number | null;
      total_messages: string;
      scrape_time: Date;
    }>("SELECT * FROM pgmq.metrics($1);", [this.queueName]);

    const row = res.rows[0];
    if (!row) return null;

    return {
      queue_name: row.queue_name,
      queue_length: Number(row.queue_length),
      newest_msg_age_sec: row.newest_msg_age_sec !== null ? Number(row.newest_msg_age_sec) : null,
      oldest_msg_age_sec: row.oldest_msg_age_sec !== null ? Number(row.oldest_msg_age_sec) : null,
      total_messages: Number(row.total_messages),
      scrape_time: row.scrape_time,
    };
  }

  /**
   * Получение прямого доступа к пулу соединений для транзакций и кастомных запросов
   */
  getPool(): Pool {
    return this.pool;
  }

  /**
   * Закрытие соединений пула
   */
  async close(): Promise<void> {
    await this.pool.end();
  }
}

// Экземпляр очереди по умолчанию для использования в воркере
export const ratingQueue = new PgmqClient();
