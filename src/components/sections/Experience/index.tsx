"use client";
import { techCategories } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import { useTranslations } from "next-intl";
import { use } from "react";

export default function Experience() {
  const t = useTranslations("experience");
  return (
    <section
      id="experience"
      className="relative min-h-screen px-8 md:px-16 py-32 bg-surface"
    >
      <SectionHeader num="01" title={t("title")} />

      <div className="flex flex-col gap-12">
        {techCategories.map((cat) => (
          <div key={cat.label} data-tech-category className="reveal">
            {/* Category label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-accent2 text-xs tracking-[0.2em] uppercase">
                {cat.label}
              </span>
              <div className="flex-1 h-px bg-[#1e2a38]" />
            </div>

             {/* Tech nodes */}
             <div className="flex flex-wrap gap-4 sm:gap-6">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  data-cursor
                  className="group bg-card border border-[#1e2a38] hover:border-accent p-4 min-w-[160px] flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="font-syne font-semibold text-sm">
                    {item.name}
                  </span>
                  <span className="text-muted text-xs">{item.years}</span>
                  <div className="h-[3px] bg-[#1e2a38] mt-1 relative overflow-hidden">
                    <div
                      className="tech-bar-fill absolute inset-y-0 left-0 bg-accent"
                      data-width={`${item.level}%`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
