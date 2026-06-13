"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  className?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  className = "",
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleTouchStart = () => setDragging(true);

  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const handleUp = () => setDragging(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [dragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${className}`}
      style={{ cursor: dragging ? "ew-resize" : "ew-resize" }}
      onClick={(e) => updatePosition(e.clientX)}
    >
      {/* After image (full) */}
      <div className="relative w-full h-full">
        <Image src={after} alt={afterLabel} fill className="object-cover" />
        {/* Placeholder */}
        <div className="absolute inset-0 bg-[#1C1A17] flex items-center justify-center"
          style={{ zIndex: -1 }}>
          <span className="text-[#3a3530] text-xs uppercase tracking-widest font-body">After</span>
        </div>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt={beforeLabel} fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1C1A17] flex items-center justify-center"
          style={{ zIndex: -1 }}>
          <span className="text-[#3a3530] text-xs uppercase tracking-widest font-body">Before</span>
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px pointer-events-none"
        style={{
          left: `${position}%`,
          background: "#C9A96A",
          boxShadow: "0 0 12px rgba(201,169,106,0.6)",
        }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center"
        style={{
          left: `${position}%`,
          background: "linear-gradient(135deg, #B8945A, #E2C792)",
          boxShadow: "0 0 20px rgba(201,169,106,0.5), 0 2px 8px rgba(0,0,0,0.4)",
          cursor: "ew-resize",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6 5l-4 4 4 4M12 5l4 4-4 4" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-4 font-body text-xs tracking-widest uppercase text-white/70 bg-black/40 px-2 py-1">
        {beforeLabel}
      </div>
      <div className="absolute bottom-3 right-4 font-body text-xs tracking-widest uppercase text-white/70 bg-black/40 px-2 py-1">
        {afterLabel}
      </div>
    </div>
  );
}
