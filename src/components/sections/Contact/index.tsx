'use client'

import { useState } from 'react'
import { contactLinks, cvInfo, siteConfig } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

type Tab = 'info' | 'cv'

export default function Contact() {
  const [activeTab, setActiveTab] = useState<Tab>('info')

  return (
    <section id="contact" className="relative min-h-screen px-8 md:px-16 py-32 bg-surface overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,229,195,0.05) 0%, transparent 70%)' }}
      />

      <SectionHeader num="03" title="Contacto" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left — headline */}
        <div className="reveal">
          <h3
            className="font-syne font-black leading-none tracking-[-0.04em] mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            ¿Tienes un<br />
            <span className="text-accent">proyecto</span>
            <br />
            en mente?
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            Estoy disponible para proyectos freelance, posiciones full-time y
            colaboraciones. No dudes en escribirme.
          </p>
        </div>

        {/* Right — tabs */}
        <div className="reveal">
          {/* Tab buttons */}
          <div className="flex border-b border-[#1e2a38] mb-8">
            {(['info', 'cv'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-xs tracking-widest uppercase font-mono border-b-2 -mb-px transition-all duration-200 ${
                  activeTab === tab
                    ? 'text-accent border-accent'
                    : 'text-muted border-transparent hover:text-text'
                }`}
              >
                {tab === 'info' ? 'Contacto' : 'Curriculum Vitae'}
              </button>
            ))}
          </div>

          {/* Panel: Contact Info */}
          {activeTab === 'info' && (
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 px-6 py-5 bg-card border border-[#1e2a38] hover:border-accent hover:translate-x-1.5 transition-all duration-200 no-underline"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[#1e2a38] group-hover:border-accent group-hover:bg-accent/10 text-accent transition-all duration-200 flex-shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[0.68rem] text-muted tracking-widest uppercase mb-0.5">{link.label}</div>
                    <div className="text-text text-sm">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Panel: CV */}
          {activeTab === 'cv' && (
            <div className="relative bg-card border border-[#1e2a38] p-8 overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent2" />

              {/* Header */}
              <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                <div>
                  <div className="font-syne font-bold text-lg mb-1">{cvInfo.title}</div>
                  <div className="text-muted text-xs">{cvInfo.subtitle}</div>
                </div>
                <div className="flex items-center gap-2 text-accent text-xs border border-accent/30 bg-accent/5 px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                  Actualizado
                </div>
              </div>

              {/* Meta */}
              <div className="flex gap-8 py-4 border-t border-b border-[#1e2a38] mb-6 flex-wrap">
                {[
                  { label: 'Formato',  value: cvInfo.format },
                  { label: 'Idioma',   value: cvInfo.language },
                  { label: 'Páginas',  value: cvInfo.pages },
                ].map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <span className="text-muted text-[0.65rem] tracking-widest uppercase">{m.label}</span>
                    <span className="text-text text-sm">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Section chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cvInfo.sections.map((s) => (
                  <span key={s} className="text-[0.68rem] tracking-wide px-3 py-1 border border-[#1e2a38] text-muted">
                    {s}
                  </span>
                ))}
              </div>

              {/* Download button */}
              <a
                href={cvInfo.downloadPath}
                download
                className="group flex items-center justify-center gap-3 w-full py-4 bg-accent text-bg text-xs tracking-widest uppercase font-mono font-medium hover:bg-[#00ffda] transition-all duration-200"
              >
                <span className="group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
                Descargar CV — PDF
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
