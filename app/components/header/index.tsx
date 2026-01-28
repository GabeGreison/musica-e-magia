import Link from "next/link";
import { isAdminAuthenticated } from "@/src/lib/auth";

export default async function Header() {
  const isAdmin = await isAdminAuthenticated();
  return (
    <header className=" dark:border-zinc-800 bg-zinc-950 mb-10">
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

        <div className="flex gap-6 justify-between">
          <nav className="flex items-center gap-6">
            <Link
              href="/posts"
              className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
            >
              Posts
            </Link>
          </nav>

          {isAdmin && (
            <nav className="flex items-center gap-6">
              <Link
                href="/admin"
                className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              >
                Admin
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
