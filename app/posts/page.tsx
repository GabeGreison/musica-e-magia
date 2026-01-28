import Link from "next/link";
import { fetchAPI } from "@/src/lib/apiClient";
import { Post } from "@/src/types";

export default async function PostsPage() {
  let posts: Post[] = [];

  try {
    posts = await fetchAPI<Post[]>("/posts");
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-14">
      {posts.length === 0 ? (
        <p className="text-zinc-400">Nenhum post encontrado.</p>
      ) : (
        <section className="space-y-14">
          {posts.map((post) => {
            const publishedDate = new Date(
              post.published_at,
            ).toLocaleDateString("pt-BR");

            return (
              <Link
                key={post.id}
                href={`/posts/${post.slug}`}
                className="block group"
              >
                <article className="relative pl-7 border-l border-zinc-800">
                  <h2
                    className="
                      text-2xl
                      font-medium
                      tracking-tight
                      text-zinc-100
                      transition-colors
                      group-hover:text-emerald-400
                    "
                  >
                    {post.title}
                  </h2>

                  <p className="mt-2 text-zinc-400 leading-relaxed max-w-3xl">
                    {post.summary}
                  </p>

                  <time className="block mt-3 text-xs tracking-wider uppercase text-zinc-500">
                    {publishedDate}
                  </time>
                </article>
              </Link>
            );
          })}
        </section>
      )}
    </main>
  );
}
