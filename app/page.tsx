import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full mt-2 flex m-auto items-center justify-center px-6">
      <section className="max-w-4xl bg-zinc-950 text-zinc-100 border border-zinc-800 rounded-xl px-10 py-12 shadow-lg text-center my-auto">
        <h1 className="text-5xl font-logo font-semibold tracking-tight mb-12 text-emerald-400">
          O Bardo ✦
        </h1>

        <div className="flex justify-center mb-12">
          <Image
            src="/bard.png"
            width={500}
            height={500}
            alt="Carta do Bardo"
            className="rounded-lg shadow-2xl border border-zinc-800"
            priority
          />
        </div>

        <p className="max-w-2xl mx-auto text-zinc-300 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </section>
    </main>
  );
}
