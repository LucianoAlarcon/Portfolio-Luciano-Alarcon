"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    // Reveal on scroll
    const reveals = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 80);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((r) => obs.observe(r));

    // Tech bar animation
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll<HTMLElement>("[data-width]")
              .forEach((bar) => {
                bar.style.width = bar.dataset.width || "0%";
              });
            barObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    document
      .querySelectorAll("[data-tech-category]")
      .forEach((c) => barObs.observe(c));

    return () => {
      obs.disconnect();
      barObs.disconnect();
    };
  }, []);

  return null;
}
