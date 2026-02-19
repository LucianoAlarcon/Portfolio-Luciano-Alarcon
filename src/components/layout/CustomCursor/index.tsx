"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    animate();

    const expand = () => {
      dot.style.transform = "translate(-50%,-50%) scale(2)";
      ring.style.width = "60px";
      ring.style.height = "60px";
    };
    const shrink = () => {
      dot.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    const addListeners = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", expand);
        el.addEventListener("mouseleave", shrink);
      });
    };
    addListeners();

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 border border-accent rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-50"
        style={{ transition: "width 0.3s, height 0.3s" }}
      />
    </>
  );
}
