"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const values = [
  {
    label: "Faith",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/>
      </svg>
    ),
    desc: "Guided by purpose. Everything we build reflects who we are.",
  },
  {
    label: "Trust",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    desc: "You know exactly what's happening, always. No surprises.",
  },
  {
    label: "Care",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    desc: "Your home is your sanctuary. We treat it accordingly.",
  },
  {
    label: "Craftsmanship",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    desc: "Straight lines. Level surfaces. Work that lasts decades.",
  },
  {
    label: "Legacy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    desc: "We build what matters — spaces that hold memories for generations.",
  },
];

const valueCardVariants: Variants = {
  hidden: { opacity: 0, x: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
};

const valuesGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-36 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <div ref={ref}>
            {/* Eyebrow line + label */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-8 h-px"
                style={{ background: "linear-gradient(90deg, #C9A96A, transparent)", transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: EXPO_OUT }}
              />
              <div className="overflow-hidden">
                <motion.span
                  className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A96A] block"
                  initial={{ y: "110%" }}
                  animate={inView ? { y: "0%" } : {}}
                  transition={{ duration: 0.7, delay: 0.2, ease: EXPO_OUT }}
                >
                  About RENCO
                </motion.span>
              </div>
            </div>

            {/* H2 — clip reveals per line */}
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#F2EDE4] leading-tight mb-8">
              <div className="overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={inView ? { y: "0%" } : {}}
                  transition={{ duration: 0.85, delay: 0.28, ease: EXPO_OUT }}
                >
                  Built on purpose.
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="block gold-gradient italic"
                  initial={{ y: "110%" }}
                  animate={inView ? { y: "0%" } : {}}
                  transition={{ duration: 0.85, delay: 0.4, ease: EXPO_OUT }}
                >
                  Backed by faith.
                </motion.span>
              </div>
            </h2>

            {/* Paragraphs — blur entrance staggered */}
            <div className="space-y-5 font-body text-[#9A9388] leading-relaxed">
              {[
                "RENCO LLC was founded on a simple belief: the people who let you into their home deserve your absolute best. Every project — whether it's a single bathroom or a full renovation — gets the same dedication we'd give our own families.",
                "We're a family-owned contractor serving Gig Harbor and the greater Seattle area (King & Pierce County). Vitaliy and David lead every project personally — you won't talk to a salesperson or hand your home off to a subcontractor who's never met you.",
                "Our faith shapes the way we work. Colossians 3:17 — “whatever you do, do it with all your heart” — isn't a tagline. It's a standard that shows up in every tile joint and every conversation.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
                  animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.52 + i * 0.15, ease: EXPO_OUT }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Faith quote — blur entrance */}
            <motion.div
              className="mt-10 border-l-2 border-[rgba(201,169,106,0.4)] pl-6"
              initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
              animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.97, ease: EXPO_OUT }}
            >
              <p className="font-display text-xl italic text-[#C9A96A] font-light leading-relaxed">
                &ldquo;We don&rsquo;t just build. We build what matters.&rdquo;
              </p>
              <p className="font-body text-xs tracking-widest uppercase text-[#6B6560] mt-2">
                Colossians 3:17
              </p>
            </motion.div>

            {/* Stats — blur entrance stagger */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[rgba(201,169,106,0.1)]">
              {[
                { value: "200+", label: "Projects" },
                { value: "5.0★", label: "Google Rating" },
                { value: "King / Pierce", label: "County" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
                  animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 1.1 + i * 0.1, ease: EXPO_OUT }}
                >
                  <div className="font-display text-2xl md:text-3xl font-light text-[#C9A96A]">{stat.value}</div>
                  <div className="font-body text-xs tracking-wider uppercase text-[#6B6560] mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — values: slide from right + blur, stagger 0.1s */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={valuesGridVariants}
          >
            {values.map((value) => (
              <motion.div
                key={value.label}
                variants={valueCardVariants}
                className="group flex items-start gap-5 p-5 border border-[rgba(201,169,106,0.08)] hover:border-[rgba(201,169,106,0.25)] transition-all duration-400"
                style={{ background: "#141414" }}
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[rgba(201,169,106,0.2)] text-[#C9A96A] group-hover:border-[rgba(201,169,106,0.5)] transition-colors">
                  {value.icon}
                </div>
                <div>
                  <h4 className="font-body text-sm tracking-[0.2em] uppercase text-[#F2EDE4] mb-1">{value.label}</h4>
                  <p className="font-body text-sm text-[#9A9388] leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
