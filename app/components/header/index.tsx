import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <h1 className="font-logo text-2xl text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            Música e Magia
            <span>🌞</span>
          </h1>

          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            Som, alquimia e filosofia
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/posts"
            className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}
