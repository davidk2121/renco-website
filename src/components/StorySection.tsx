"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";

const stages = [
  {
    id: "before",
    number: "01",
    label: "The Before",
    title: "The room you avoid showing guests.",
    body: "Cracked grout. Dated tile. Fixtures from another decade. You've learned to look past it — but guests notice. Every shower is a reminder of what could be.",
    image: "/story/before-1.jpg",
    alt: "Dated bathroom before remodel — worn tile, old fixtures",
    accent: "#9A9388",
  },
  {
    id: "plan",
    number: "02",
    label: "The Plan",
    title: "Nothing happens until you understand it.",
    body: "We walk every inch with you. Materials in hand. No approval signature until you've seen exactly what's going where — and why. Design that reflects how you actually live.",
    image: "/story/during-plan-1.jpg",
    alt: "Design consultation and planning phase",
    accent: "#C9A96A",
  },
  {
    id: "during",
    number: "03",
    label: "The Build",
    title: "Precision laid one tile at a time.",
    body: "Our crew treats your home with the same care we'd give our own. Clean work. Straight lines. No shortcuts. Craftsmanship you can see in every grout joint.",
    image: "/story/during-1.jpg",
    alt: "Tile installation during bathroom remodel",
    accent: "#C9A96A",
  },
  {
    id: "after",
    number: "04",
    label: "The Reveal",
    title: "Fall in love with your home again.",
    body: "This is what it was all for. The moment you walk in and it stops you — because it's exactly what you imagined, only better.",
    image: "/story/after-1.jpg",
    imageAfter: "/story/before-1.jpg",
    alt: "Completed luxury bathroom remodel",
    accent: "#E2C792",
    isReveal: true,
  },
];

function StoryImage({ src, alt, label }: { src: string; alt: string; label: string }) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!errored && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setErrored(true)}
        />
      )}
      {errored && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#141414] flex items-center justify-center">
          <p className="text-[#3a3530] text-xs font-body tracking-wider uppercase">{label}</p>
        </div>
      )}
      {!errored && (
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[rgba(14,14,14,0.3)]" />
      )}
    </div>
  );
}

function PlaceholderImage({ label, aspect = "portrait" }: { label: string; aspect?: string }) {
  return (
    <div
      className={`w-full bg-[#1a1a1a] border border-[rgba(201,169,106,0.1)] flex items-center justify-center ${
        aspect === "portrait" ? "aspect-[3/4]" : "aspect-video"
      }`}
    >
      <div className="text-center p-8">
        <div className="w-12 h-12 mx-auto mb-3 opacity-20">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#C9A96A]">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <p className="font-body text-xs text-[#6B6560] tracking-wider uppercase">{label}</p>
        <p className="font-body text-xs text-[#3a3530] mt-1">Drop image into /public/story/</p>
      </div>
    </div>
  );
}

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const idx = Math.min(Math.floor(v * stages.length), stages.length - 1);
      setActiveStage(idx);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section id="story" ref={sectionRef} className="relative" style={{ height: `${stages.length * 100}vh` }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Section label */}
        <div className="relative z-20 pt-20 pb-8 px-6 lg:px-12 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #C9A96A, transparent)" }} />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A96A]">
              The Story
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-light text-[#F2EDE4]">
            From Dated to <span className="gold-gradient italic">Dream</span>
          </h2>
        </div>

        {/* Stage content */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {stages.map((stage, i) =>
              i === activeStage ? (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col lg:flex-row"
                >
                  {/* Text side */}
                  <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 xl:px-20 pb-8 lg:pb-0 order-2 lg:order-1">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="flex items-baseline gap-4 mb-5">
                        <span className="font-display text-6xl font-light text-[rgba(201,169,106,0.15)]">
                          {stage.number}
                        </span>
                        <span className="font-body text-xs tracking-[0.25em] uppercase" style={{ color: stage.accent }}>
                          {stage.label}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-4xl font-light text-[#F2EDE4] leading-tight mb-5">
                        {stage.title}
                      </h3>
                      <p className="font-body text-[#9A9388] leading-relaxed max-w-md text-base md:text-lg">
                        {stage.body}
                      </p>

                      {/* Progress dots */}
                      <div className="flex gap-2 mt-8">
                        {stages.map((_, di) => (
                          <div
                            key={di}
                            className="h-px transition-all duration-500"
                            style={{
                              width: di === activeStage ? 32 : 12,
                              background: di === activeStage ? "#C9A96A" : "rgba(201,169,106,0.2)",
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Image side */}
                  <div className="lg:w-1/2 relative order-1 lg:order-2 flex-shrink-0 h-48 lg:h-auto">
                    <motion.div
                      initial={{ scale: 1.02, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      {stage.isReveal ? (
                        <BeforeAfterSlider
                          before="/story/before-1.jpg"
                          after="/story/after-1.jpg"
                          className="w-full h-full"
                        />
                      ) : (
                        <StoryImage src={stage.image} alt={stage.alt} label={stage.label} />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
