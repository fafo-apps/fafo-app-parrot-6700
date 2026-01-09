import { pool, withSchema } from '@/app/db/pool';

export type Product = {
  id: number;
  name: string;
  slug: string;
  price_cents: number;
  currency: string;
  image_url: string | null;
  description: string | null;
  color: string | null;
  in_stock: boolean;
  created_at: string;
};

export async function listProducts(): Promise<Product[]> {
  const sql = withSchema(`
    select id, name, slug, price_cents, currency, image_url, description, color, in_stock, created_at
    from products
    where in_stock = true
    order by created_at desc
    limit 24;
  `);
  const { rows } = await pool.query(sql);
  return rows as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const sql = withSchema(`
    select id, name, slug, price_cents, currency, image_url, description, color, in_stock, created_at
    from products
    where slug = $1
    limit 1;
  `);
  const { rows } = await pool.query(sql, [slug]);
  return (rows[0] as Product) || null;
}
