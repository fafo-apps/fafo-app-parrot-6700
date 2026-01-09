import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">Hoodie Co.</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:opacity-80">Shop</Link>
          <Link href="/cart" className="hover:opacity-80">Cart</Link>
        </nav>
      </div>
    </header>
  );
}
