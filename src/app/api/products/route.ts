import { NextResponse } from 'next/server';
import { listProducts } from '@/app/db/repositories/ProductsRepository';

export async function GET() {
  try {
    const products = await listProducts();
    return NextResponse.json(products);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
  }
}
