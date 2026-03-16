export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Contact</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300">
          Interested in working together? Send a note and I’ll get back to you within a day.
        </p>

        <div className="mt-8 flex flex-col gap-4 rounded-none border-2 border-zinc-700 bg-[#080808] p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-zinc-500">Email</span>
            <a
              href="mailto:hello@example.com"
              className="text-sm font-semibold text-emerald-400 transition hover:text-white"
            >
              hello@example.com
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-zinc-500">Inquiries</span>
            <span className="text-sm text-zinc-300">Consulting, mentoring, or collaboration.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
