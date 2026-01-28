import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/src/lib/auth";

export default async function AdminPage() {
  const isAuth = await isAdminAuthenticated();

  if (!isAuth) {
    redirect("/");
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Painel do Mago ✨</h1>
      <p className="mt-4 text-zinc-600">Área de criação de posts.</p>
    </main>
  );
}
