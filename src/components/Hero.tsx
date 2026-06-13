"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  onGetEstimate: () => void;
}

export default function Hero({ onGetEstimate }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      // Subtle gold caustic light pools
      const lights = [
        { x: 0.2 + Math.sin(t * 0.3) * 0.08, y: 0.3 + Math.cos(t * 0.2) * 0.06, r: 0.35 },
        { x: 0.7 + Math.cos(t * 0.25) * 0.07, y: 0.5 + Math.sin(t * 0.18) * 0.08, r: 0.4 },
        { x: 0.5 + Math.sin(t * 0.15) * 0.1, y: 0.8 + Math.cos(t * 0.22) * 0.05, r: 0.3 },
      ];

      lights.forEach((l) => {
        const grad = ctx.createRadialGradient(l.x * w, l.y * h, 0, l.x * w, l.y * h, l.r * Math.max(w, h));
        grad.addColorStop(0, "rgba(201,169,106,0.04)");
        grad.addColorStop(0.5, "rgba(184,148,90,0.02)");
        grad.addColorStop(1, "rgba(14,14,14,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      // Grid tile lines — very subtle
      ctx.strokeStyle = "rgba(201,169,106,0.03)";
      ctx.lineWidth = 1;
      const tileSize = 80;
      const offsetX = (t * 3) % tileSize;
      for (let x = -tileSize + offsetX; x < w + tileSize; x += tileSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h + tileSize; y += tileSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      t += 0.008;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const trustItems = [
    { value: "★ 5.0", label: "Google Reviews" },
    { value: "200+", label: "Projects Completed" },
    { value: "Licensed", label: "& Insured" },
    { value: "Gig Harbor", label: "+ Greater Seattle" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Dark background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0E0E0E] to-[#121212]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,169,106,0.03)] via-transparent to-[rgba(184,148,90,0.02)]" />

      {/* Ambient canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #C9A96A, transparent)" }} />
            <span
              className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A96A]"
            >
              Gig Harbor · Greater Seattle
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light leading-[1.05] mb-6"
            style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)", color: "#F2EDE4" }}
          >
            Reimagine Your
            <br />
            <span className="gold-gradient italic">Bathroom.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="font-body text-lg md:text-xl text-[#9A9388] max-w-xl leading-relaxed mb-10"
          >
            We&rsquo;re here to improve your home — and help you fall in love with it again.
          </motion.p>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex items-center gap-3 mb-12"
          >
            {["QUALITY", "TRUST", "CARE"].map((word, i) => (
              <div key={word} className="flex items-center gap-3">
                {i > 0 && <span className="text-[#3a3530]">·</span>}
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#6B6560]">
                  {word}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onGetEstimate}
              className="group relative font-body text-sm tracking-[0.15em] uppercase px-8 py-4 overflow-hidden"
              style={{ background: "linear-gradient(135deg, #B8945A, #E2C792)", color: "#0E0E0E", fontWeight: 500 }}
            >
              <span className="relative z-10">Get My Free Estimate</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #E2C792, #B8945A)" }} />
            </button>

            <a
              href="#story"
              className="font-body text-sm tracking-[0.15em] uppercase px-8 py-4 border border-[rgba(201,169,106,0.3)] text-[#9A9388] hover:text-[#C9A96A] hover:border-[#C9A96A] transition-all duration-300 text-center"
            >
              See Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Trust strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="relative z-10 border-t border-[rgba(201,169,106,0.1)] bg-[rgba(14,14,14,0.6)] backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(201,169,106,0.1)]">
            {trustItems.map((item) => (
              <div key={item.value} className="px-6 py-5 text-center">
                <div className="font-display text-xl md:text-2xl font-light text-[#C9A96A] mb-0.5">
                  {item.value}
                </div>
                <div className="font-body text-xs tracking-wider uppercase text-[#6B6560]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-widest uppercase text-[#3a3530]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#C9A96A] to-transparent"
        />
      </motion.div>
    </section>
  );
}
