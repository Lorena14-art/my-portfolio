import { Code2 } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-700 bg-[#060606]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-xs tracking-widest text-zinc-200">
          <Code2 className="h-4 w-4 text-emerald-400" />
          <span className="font-bold">YOUR NAME</span>
        </div>

        <nav className="flex items-center gap-6 text-xs uppercase tracking-widest text-zinc-400">
          <a href="#projects" className="transition hover:text-emerald-400">
            Work
          </a>
          <a href="#skills" className="transition hover:text-emerald-400">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-emerald-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
