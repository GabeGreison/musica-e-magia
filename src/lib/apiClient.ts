export async function fetchAPI<T>(endpoint: string): Promise<T> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) {
        let errorMessage = res.statusText;

        try {
            const errorBody = await res.json();
            errorMessage = errorBody?.error || errorBody?.message || errorMessage;
        } catch { }

        throw new Error(errorMessage);
    }

    return res.json();
}
