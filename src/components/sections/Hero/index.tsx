import { siteConfig } from '@/lib/data'

export default function Hero() {
  const [firstName, ...rest] = siteConfig.name.split(' ')
  const lastName = rest.join(' ') || 'Nombre'

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-16 pt-32 pb-16 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#1e2a38 1px, transparent 1px), linear-gradient(90deg, #1e2a38 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(0,229,195,0.07) 0%, transparent 70%)' }}
      />

      {/* Available badge */}
      {siteConfig.available && (
        <div className="relative z-10 text-xs tracking-[0.2em] uppercase text-accent border border-accent px-3 py-1 mb-8 opacity-0 animate-fade-up-1">
          Disponible para trabajar
        </div>
      )}

      {/* Name */}
      <h1 className="relative z-10 font-syne font-black leading-[0.95] tracking-[-0.04em] mb-6 opacity-0 animate-fade-up-2"
        style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
      >
        {firstName}
        <br />
        <span className="text-accent">{lastName}</span>
      </h1>

      {/* Description */}
      <p className="relative z-10 text-muted max-w-xl leading-relaxed mb-12 opacity-0 animate-fade-up-3">
        {siteConfig.description}
      </p>

      {/* CTAs */}
      <div className="relative z-10 flex gap-4 opacity-0 animate-fade-up-4">
        <a
          href="#projects"
          className="px-8 py-3 text-xs tracking-widest uppercase bg-accent text-bg font-mono hover:bg-transparent hover:text-accent border border-accent transition-all duration-200"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="px-8 py-3 text-xs tracking-widest uppercase text-accent border border-accent hover:bg-accent hover:text-bg transition-all duration-200"
        >
          Contacto
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-8 md:left-16 flex items-center gap-4 text-muted text-[0.7rem] tracking-[0.15em] uppercase opacity-0 animate-fade-up-5">
        <div className="relative w-16 h-px bg-muted overflow-hidden">
          <span className="absolute inset-y-0 w-full bg-accent animate-scroll-line" />
        </div>
        Scroll para explorar
      </div>
    </section>
  )
}
