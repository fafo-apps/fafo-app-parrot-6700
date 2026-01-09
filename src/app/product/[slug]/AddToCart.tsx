'use client';

type Product = { slug: string; name: string; price_cents: number; image_url?: string | null };

export default function AddToCart({ product }: { product: Product }) {
  const add = () => {
    const raw = localStorage.getItem('cart');
    const items: Array<any> = raw ? JSON.parse(raw) : [];
    const existing = items.find((i) => i.slug === product.slug);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ slug: product.slug, name: product.name, price_cents: product.price_cents, image_url: product.image_url, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(items));
    alert('Added to cart');
  };

  return (
    <button onClick={add} className="w-full bg-black text-white dark:bg-white dark:text-black rounded-lg py-3 font-medium hover:opacity-90">
      Add to cart
    </button>
  );
}
