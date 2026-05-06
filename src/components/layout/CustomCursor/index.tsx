"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    // Check if we're on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // If mobile, don't initialize custom cursor
    if (isMobile) {
      return;
    }

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
      animationFrameRef.current = requestAnimationFrame(animate);
    };

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
      // Use event delegation instead of querying all elements
      document.addEventListener("mouseenter", (e) => {
        const target = e.target as Element;
        if (target && (target.matches && target.matches("a, button, [data-cursor]"))) {
          expand();
        }
      }, true); // Use capture phase to handle nested elements
      
      document.addEventListener("mouseleave", (e) => {
        const target = e.target as Element;
        if (target && (target.matches && target.matches("a, button, [data-cursor]"))) {
          shrink();
        }
      }, true);
    };
    addListeners();

    document.addEventListener("mousemove", onMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", addListeners, true);
      document.removeEventListener("mouseleave", addListeners, true);
      cancelAnimationFrame(animationFrameRef.current);
    };
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
