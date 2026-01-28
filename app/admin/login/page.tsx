import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function loginAdmin() {
  "use server";

  const cookieStore = await cookies();

  cookieStore.set("admin_token", process.env.ADMIN_TOKEN!, {
    httpOnly: true,
    path: "/",
  });

  redirect("/admin");
}

export default function AdminLoginPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center">
      <form action={loginAdmin}>
        <button
          type="submit"
          className="px-6 py-3 rounded-md bg-emerald-700 text-white cursor-pointer"
        >
          Entrar como Admin
        </button>
      </form>
    </main>
  );
}
