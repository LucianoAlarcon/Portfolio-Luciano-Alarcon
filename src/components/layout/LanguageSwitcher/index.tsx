"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import GlobeIcon from "../../../../public/icons/Globe.svg";
import useClickOutside from "@/hooks/useClickOutside";

export default function SelectLanguage() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const languages = [
    { name: "Español", key: "es" },
    { name: "English", key: "en" },
  ];

  useClickOutside(ref, () => setOpen(false));

  const handleChangeLanguage = (newLocale: string) => {
    if (!pathname) return;

    const segments = pathname.split("/");
    segments[1] = newLocale; // reemplazamos el locale actual
    const newPath = segments.join("/");

    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className="relative flex gap-3 text-white">
      {open && (
        <div
          ref={ref}
          className="fade-in bg-surface absolute left-0 top-full mt-2 w-44 flex flex-col gap-2 rounded-lg py-2 px-3 border border-border shadow-lg z-50 max-md:w-[50px]"
        >
          {languages.map((lang, index) => (
            <div key={lang.key}>
              <button
                onClick={() => handleChangeLanguage(lang.key)}
                className={`flex cursor-pointer items-center gap-2 w-full py-1 ${
                  locale === lang.key ? "font-bold" : ""
                }`}
              >
                <Image
                  width={15}
                  height={16}
                  src={`/icons/flags/${lang.key}.svg`}
                  alt="bandera"
                />
                <span className="text-white max-md:hidden">{lang.name}</span>
              </button>

              {index !== languages.length - 1 && (
                <hr className="bg-secondary border-secondary max-md:mt-1" />
              )}
            </div>
          ))}
        </div>
      )}

      <div
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center justify-center gap-2 select-none md:gap-4 w-[52px] h-[52px] flex-shrink-0 bg-surface/20 rounded-md hover:bg-surface/30 transition-colors duration-200 border border-surface/30"
      >
        <Image
          src={GlobeIcon}
          alt="globe"
          width={20}
          height={20}
          className="mx-auto"
        />
        <span className="hidden md:block">|</span>
        <span className="hidden md:block">
          {locale === "es" ? "Español" : "English"}
        </span>
      </div>
    </div>
  );
}
