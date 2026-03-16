const projects = [
  {
    id: 'cwc-connect',
    title: 'CWC Connect Portal',
    tagline: 'A single place for enrollment and campus services.',
    impact: 'Reduced confusion and support requests by giving students a clearer path to complete tasks.',
    tags: ['Education', 'UX', 'Automation'],
  },
  {
    id: 'toolchain',
    title: 'Toolchain Dashboard',
    tagline: 'A clear view of what’s building and what’s ready to ship.',
    impact: 'Helped teams quickly see build status without digging through logs.',
    tags: ['Developer Tools', 'Status', 'Efficiency'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Work</h2>
          <span className="text-xs uppercase tracking-widest text-zinc-500">
            Real outcomes, not buzzwords
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group flex flex-col gap-4 rounded-none border-2 border-zinc-700 bg-[#080808] p-6 transition-colors hover:border-emerald-400"
            >
              <header className="flex items-center justify-between">
                <span className="text-[10px] tracking-widest text-zinc-500">
                  PROJECT_{index + 1}
                </span>
                <span className="text-xs tracking-widest text-emerald-400">
                  {project.tags.join(' • ')}
                </span>
              </header>

              <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-300">{project.tagline}</p>
              <p className="text-sm text-zinc-500">{project.impact}</p>

              <a
                href="#"
                className="mt-auto inline-flex w-max items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 transition hover:text-white"
              >
                Learn more
                <span className="text-emerald-300">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
