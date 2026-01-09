import { Pool } from 'pg';

const connectionString = process.env.SUPABASE_DB_URL;
const schema = process.env.SUPABASE_SCHEMA;

if (!connectionString) {
  throw new Error('Missing SUPABASE_DB_URL env var');
}

export const pool = new Pool({ connectionString, application_name: 'hoodie-storefront' });

// Ensure queries run in the configured schema without needing to prefix
export const withSchema = (sql: string) => `set local search_path to ${schema || 'public'}; ${sql}`;
