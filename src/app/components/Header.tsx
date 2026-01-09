export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight">Hoodie Co.</a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="/" className="hover:opacity-80">Shop</a>
          <a href="/cart" className="hover:opacity-80">Cart</a>
        </nav>
      </div>
    </header>
  );
}
