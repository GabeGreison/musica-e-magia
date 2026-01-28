"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const path = segments.map((segment, index) => ({
    label: segment.replace("-", " "),
    href: "/" + segments.slice(0, index + 1).join("/"),
  }));

  return (
    <nav className="max-w-5xl mx-auto px-6 pt-8 pb-6 text-sm text-zinc-300 flex flex-wrap items-center gap-2">
      <Link href="/" className="hover:text-emerald-400 transition-colors">
        Início
      </Link>

      {path.map((item) => (
        <div key={item.href} className="flex items-center gap-2">
          <span className="text-zinc-700">/</span>

          <Link
            href={item.href}
            className="capitalize hover:text-emerald-400 transition-colors"
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
