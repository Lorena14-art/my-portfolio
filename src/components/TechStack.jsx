import { Terminal, Layers } from 'lucide-react'

const stack = [
  { label: 'React', hint: 'Interactive UI' },
  { label: 'Tailwind', hint: 'Design system' },
  { label: 'Vite', hint: 'Fast builds' },
  { label: 'Node.js', hint: 'APIs' },
  { label: 'Postgres', hint: 'Data store' },
  { label: 'Lucide', hint: 'Icons' },
]

export default function TechStack() {
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100">What I work with</h2>
            <p className="mt-1 text-sm text-zinc-500">
              A small set of tools that help me ship stable and straightforward experiences.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500">
            <Terminal className="h-4 w-4" />
            <span>Focused, not flashy</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stack.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-none border border-zinc-700 bg-[#070707] px-4 py-3"
            >
              <div>
                <div className="text-sm font-semibold text-zinc-100">{item.label}</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                  {item.hint}
                </div>
              </div>
              <Layers className="h-5 w-5 text-emerald-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
