import { Pool } from 'pg';

let pool: Pool | null = null;

export function getPool() {
  if (!pool) {
    const connectionString = process.env.SUPABASE_DB_URL;
    pool = new Pool({ connectionString, application_name: 'hoodie-storefront' });
  }
  return pool;
}

export const withSchema = (sql: string) => `set local search_path to ${process.env.SUPABASE_SCHEMA || 'public'}; ${sql}`;
