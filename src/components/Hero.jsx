export default function Hero() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-xs uppercase tracking-widest text-zinc-500">
          <span className="text-emerald-400">//</span> Product‑first portfolio
        </p>

        <div className="rounded-none border-2 border-zinc-700 bg-[#0b0b0b] p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight">
            Hi, I’m <span className="text-emerald-400">Your Name</span>.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300">
            I design and build web experiences that feel simple from the moment you land.
            My goal is to turn complex ideas into tools people can use without a manual.
          </p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-none border-2 border-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-400/10"
            >
              View work
            </a>

            <div className="rounded-none border border-zinc-700 bg-[#070707] px-4 py-3 text-xs text-zinc-200">
              <pre className="whitespace-pre-wrap leading-relaxed">
                <code>
{`// Simple by design
const goal = "make products people trust"
const approach = ["clarity", "speed", "honesty"]`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
