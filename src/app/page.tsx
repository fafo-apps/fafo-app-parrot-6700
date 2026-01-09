import ProductCard from '@/app/components/ProductCard';
import { listProducts } from '@/app/db/repositories/ProductsRepository';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const products = await listProducts();
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_50%_-20%,rgba(0,0,0,0.08),transparent)] dark:bg-[radial-gradient(1000px_600px_at_50%_-20%,rgba(255,255,255,0.08),transparent)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 flex items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Premium Hoodies for Everyday Comfort</h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">Minimal design. Maximum comfort. Built to last and made to move with you.</p>
            <a href="#shop" className="inline-block mt-6 bg-black text-white dark:bg-white dark:text-black rounded-lg px-5 py-3 font-medium hover:opacity-90">Shop now</a>
          </div>
          <div className="hidden md:block aspect-square rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={products[0]?.image_url || 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop'} alt="Hero hoodie" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Latest Drops</h2>
          <a href="#" className="text-sm underline">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
