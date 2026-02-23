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
          className="fade-in bg-primary-foreground absolute top-[50px] flex flex-col gap-2 rounded py-2 ps-2 pe-4 text-black"
        >
          {languages.map((lang, index) => (
            <div key={lang.key}>
              <button
                onClick={() => handleChangeLanguage(lang.key)}
                className={`flex cursor-pointer items-center gap-2 pe-4 ${
                  locale === lang.key ? "font-bold" : ""
                }`}
              >
                <Image
                  width={15}
                  height={16}
                  src={`/icons/flags/${lang.key}.svg`}
                  alt="bandera"
                />
                <span>{lang.name}</span>
              </button>

              {index !== languages.length - 1 && (
                <hr className="bg-secondary border-secondary" />
              )}
            </div>
          ))}
        </div>
      )}

      <div
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer gap-3 select-none"
      >
        <Image src={GlobeIcon} alt="globe" width={20} height={20} />
        <span className="hidden md:block">|</span>
        <span className="hidden md:block">
          {locale === "es" ? "Español" : "English"}
        </span>
      </div>
    </div>
  );
}
