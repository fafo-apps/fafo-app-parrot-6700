import Link from 'next/link';

export default function ProductCard({ product }: { product: { slug: string; name: string; image_url?: string | null; price_cents: number; color?: string | null; } }) {
  const price = (product.price_cents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10">
        {product.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image_url} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        ) : null}
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <div>
          <p className="font-medium">{product.name}</p>
          {product.color ? <p className="text-sm text-neutral-500">{product.color}</p> : null}
        </div>
        <p className="font-semibold">{price}</p>
      </div>
    </Link>
  );
}
