import { getProductBySlug } from '@/app/db/repositories/ProductsRepository';
import AddToCart from './AddToCart';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) return <div className="mx-auto max-w-6xl px-4 py-8"><p>Product not found.</p></div>;
  const price = (product.price_cents / 100).toLocaleString('en-US', { style: 'currency', currency: product.currency });
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image_url || ''} alt={product.name} className="w-full rounded-2xl border border-black/5 dark:border-white/10 object-cover aspect-square" />
        <div>
          <p className="text-sm uppercase tracking-widest text-neutral-500">Hoodie</p>
          <h1 className="text-3xl font-semibold mt-2">{product.name}</h1>
          <p className="text-xl font-medium mt-2">{price}</p>
          {product.description ? <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">{product.description}</p> : null}
          <div className="mt-6">
            <AddToCart product={{ slug: product.slug, name: product.name, price_cents: product.price_cents, image_url: product.image_url }} />
          </div>
        </div>
      </div>
    </div>
  );
}
