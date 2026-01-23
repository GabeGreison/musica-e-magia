import { mockPosts } from "@/src/lib/mockPosts";

type PostPageProps = { params: { slug: string } | Promise<{ slug: string }> };

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = mockPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-zinc-600 dark:text-zinc-400">Post não encontrado.</p>
      </main>
    );
  }

  const publishedDate = new Date(post.published_at).toLocaleDateString("pt-BR");

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-zinc-900 leading-tight">
          {post.title}
        </h1>

        <p className="mt-3 text-lg text-zinc-700  leading-relaxed">
          {post.summary}
        </p>

        <time className="block mt-4 text-sm uppercase tracking-wider text-zinc-500">
          {publishedDate}
        </time>
      </div>

      <article className="prose prose-zinc  max-w-none">
        <p>{post.content}</p>
      </article>
    </main>
  );
}
