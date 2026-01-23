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
    <nav className="text-sm max-w-5xl mx-auto px-6 pt-6 text-zinc-500 mb-8 flex flex-wrap items-center">
      <Link href="/" className="hover:text-zinc-800 transition-colors">
        Home
      </Link>

      {path.map((item) => (
        <div key={item.href} className="flex items-center">
          <span className="mx-2 text-zinc-400">/</span>
          <Link
            href={item.href}
            className="hover:text-zinc-800 transition-colors capitalize"
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
