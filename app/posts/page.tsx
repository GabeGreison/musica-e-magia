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
    <main className="max-w-5xl mx-auto px-6 py-12">
      {posts.length === 0 ? (
        <p className="text-zinc-600">Nenhum post encontrado.</p>
      ) : (
        <section className="space-y-12">
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
                <article className="border-l-4 border-emerald-700 pl-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 group-hover:text-emerald-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-zinc-700 leading-relaxed max-w-3xl">
                    {post.summary}
                  </p>
                  <time className="block mt-3 text-xs uppercase tracking-widest text-zinc-500">
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
