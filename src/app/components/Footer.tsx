export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p>© {new Date().getFullYear()} Hoodie Co. All rights reserved.</p>
        <p className="opacity-80">Designed for speed and simplicity.</p>
      </div>
    </footer>
  );
}
