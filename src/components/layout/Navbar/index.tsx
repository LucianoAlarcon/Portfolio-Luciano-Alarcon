"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-6 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#1e2a38] bg-[rgba(8,12,16,0.85)] backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <span className="font-syne font-black text-xl text-accent tracking-tight">
        LUCIANO.ALARCÓN
      </span>
      <div className="hidden md:flex gap-10">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-muted text-xs tracking-widest uppercase hover:text-accent transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
