import { projects } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen px-8 md:px-16 py-32 bg-bg">
      <SectionHeader num="02" title="Proyectos" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.num}
            data-cursor
            className="reveal group relative bg-card border border-[#1e2a38] hover:border-accent p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {/* External link */}
            {p.href && (
              <a
                href={p.href}
                className="absolute top-6 right-6 text-muted hover:text-accent text-lg transition-colors duration-200"
              >
                ↗
              </a>
            )}

            <div className="text-muted text-[0.65rem] tracking-[0.15em] mb-4">{p.num}</div>
            <h3 className="font-syne font-bold text-xl mb-3">{p.title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">{p.description}</p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.68rem] tracking-widest px-2 py-1 border border-[#1e2a38] text-muted uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
