import { NextResponse } from 'next/server';
import { getProductBySlug } from '@/app/db/repositories/ProductsRepository';

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  try {
    const product = await getProductBySlug(params.slug);
    if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(product);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to load product' }, { status: 500 });
  }
}
