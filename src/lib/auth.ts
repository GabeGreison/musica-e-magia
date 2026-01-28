import { cookies } from "next/headers";

export async function isAdminAuthenticated() {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    return token === process.env.ADMIN_TOKEN;
}
