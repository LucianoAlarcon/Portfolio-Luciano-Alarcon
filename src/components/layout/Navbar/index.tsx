"use client";

import { use, useEffect, useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");

  const links = [
    { href: "#hero", label: t("home") },
    { href: "#experience", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-24 py-4 md:py-8 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#1e2a38] bg-[rgba(8,12,16,0.85)] backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <div className="flex w-[50%] items-center gap-4 md:justify-between">
        <span
          className="font-syne font-black text-xl text-accent tracking-tight"
          aria-label="Luciano Alarcón - Portfolio"
        >
          LUCIANO.ALARCÓN
        </span>
        <LanguageSwitcher />
      </div>
      <div className="hidden md:flex gap-16">
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
