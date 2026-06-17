"use client";

import { useEffect, useRef, useState } from "react";

export default function GoldCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Current positions for lerp
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const scale = useRef(1);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTouch =
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouch) return;

    setEnabled(true);

    // Inject cursor: none globally
    const style = document.createElement("style");
    style.id = "gold-cursor-style";
    style.textContent = "html, html * { cursor: none !important; }";
    document.head.appendChild(style);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        scale.current = 1.5;
      } else {
        scale.current = 1;
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    const loop = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x - 6}px, ${mouse.current.y - 6}px) scale(${scale.current})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px) scale(${scale.current})`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      const injected = document.getElementById("gold-cursor-style");
      if (injected) injected.remove();
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Dot — follows mouse exactly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "#E2C792",
          boxShadow: "0 0 8px rgba(226,199,146,0.9), 0 0 2px rgba(0,0,0,0.5)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid rgba(226,199,146,0.7)",
          backgroundColor: "transparent",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
    </>
  );
}
