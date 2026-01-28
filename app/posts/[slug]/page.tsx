import { fetchAPI } from "@/src/lib/apiClient";
import { Post } from "@/src/types";
import Image from "next/image";

type PostPageProps = { params: { slug: string } | Promise<{ slug: string }> };

export async function fetchPost(slug: string): Promise<Post | null> {
  try {
    return await fetchAPI<Post>(`/posts/${slug}`);
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return null;
  }
}

function getRelativeTime(dateString: string) {
  const now = new Date();
  const postDate = new Date(dateString);

  now.setHours(0, 0, 0, 0);
  postDate.setHours(0, 0, 0, 0);

  const diffDays = Math.floor((now.getTime() - postDate.getTime()) / 86400000);

  if (diffDays === 0) return "hoje";

  const ranges = [
    { limit: 7, divisor: 1, unit: "day" },
    { limit: 30, divisor: 7, unit: "week" },
    { limit: 365, divisor: 30, unit: "month" },
    { limit: Infinity, divisor: 365, unit: "year" },
  ];

  const range = ranges.find((r) => diffDays < r.limit)!;

  const amount = Math.floor(diffDays / range.divisor);

  return new Intl.RelativeTimeFormat("pt-BR", {
    numeric: "auto",
  }).format(-amount, range.unit as Intl.RelativeTimeFormatUnit);
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-zinc-500">Post não encontrado.</p>
      </main>
    );
  }

  const relativeTime = getRelativeTime(post.published_at);

  return (
    <main className="max-w-4xl bg-[#f6f3ee] border border-zinc-300 mx-auto min-h-[70vh]">
      <section className=" min-h-full px-10 py-16">
        <div className="mb-12">
          <h1 className="text-[2.3rem] font-normal tracking-wide text-zinc-900 leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-base text-zinc-600 italic max-w-xl">
            {post.summary}
          </p>

          <div className="mt-7 flex items-center gap-1 text-sm text-zinc-500">
            <div className="flex items-center gap-3">
              <Image
                src="/bard.png"
                alt="O Bardo"
                width={36}
                height={36}
                priority
                className="rounded-full object-cover border border-zinc-400"
              />
              <span>O Bardo</span>
            </div>

            <span className="opacity-60 text-xs">✦</span>

            <span>{relativeTime}</span>
          </div>
        </div>

        <article className="prose prose-zinc max-w-none">
          <p className="text-zinc-800 leading-relaxed">{post.content}</p>
        </article>
      </section>
    </main>
  );
}
