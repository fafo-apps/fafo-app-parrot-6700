'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';

type CartItem = { slug: string; name: string; price_cents: number; image_url?: string | null; qty: number };

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem('cart');
    if (raw) setItems(JSON.parse(raw));
  }, []);

  const subtotalCents = items.reduce((sum, it) => sum + it.price_cents * it.qty, 0);
  const subtotal = (subtotalCents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const updateQty = (slug: string, qty: number) => {
    const next = items.map(i => (i.slug === slug ? { ...i, qty } : i)).filter(i => i.qty > 0);
    setItems(next);
    localStorage.setItem('cart', JSON.stringify(next));
  };

  const clear = () => {
    setItems([]);
    localStorage.removeItem('cart');
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty. <a className="underline" href="/">Shop hoodies</a>.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {items.map((it) => (
              <div key={it.slug} className="flex gap-4 border border-black/5 dark:border-white/10 rounded-xl p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.image_url || ''} alt={it.name} className="h-24 w-24 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-medium">{it.name}</p>
                  <p className="text-sm text-neutral-500">{(it.price_cents/100).toLocaleString('en-US',{style:'currency',currency:'USD'})}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <label className="text-sm">Qty</label>
                    <input type="number" value={it.qty} min={1} onChange={(e)=>updateQty(it.slug, Number(e.target.value))} className="w-16 border rounded px-2 py-1 bg-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4 border border-black/5 dark:border-white/10 rounded-xl p-4 h-fit">
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-500">Subtotal</p>
              <p className="font-semibold">{subtotal}</p>
            </div>
            <button onClick={clear} className="w-full bg-black text-white dark:bg-white dark:text-black rounded-lg py-3 font-medium hover:opacity-90">Checkout (Coming Soon)</button>
            <p className="text-xs text-neutral-500">Secure payments will be added later.</p>
          </div>
        </div>
      )}
    </div>
  );
}
