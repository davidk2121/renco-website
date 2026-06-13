"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";

const CDN = "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media";

const stages = [
  {
    id: "before",
    number: "01",
    label: "The Before",
    title: "The room you avoid showing guests.",
    body: "Cracked grout. Dated tile. Fixtures from another decade. You've learned to look past it — but guests notice. Every shower is a reminder of what could be.",
    image: `${CDN}/68c9d7999fe3cf6ad334b37e.png`,
    alt: "Dated bathroom before remodel",
    accent: "#9A9388",
  },
  {
    id: "plan",
    number: "02",
    label: "The Plan",
    title: "Nothing happens until you understand it.",
    body: "We walk every inch with you. Materials in hand. No approval signature until you've seen exactly what's going where — and why. Design that reflects how you actually live.",
    image: `${CDN}/68e987ad55c3adcbaa42b331.jpeg`,
    alt: "Design consultation and planning phase",
    accent: "#C9A96A",
  },
  {
    id: "during",
    number: "03",
    label: "The Build",
    title: "Precision laid one tile at a time.",
    body: "Our crew treats your home with the same care we'd give our own. Clean work. Straight lines. No shortcuts. Craftsmanship you can see in every grout joint.",
    image: `${CDN}/68e987adc49d37266c7d0ca2.jpeg`,
    alt: "Tile installation during bathroom remodel",
    accent: "#C9A96A",
  },
  {
    id: "after",
    number: "04",
    label: "The Reveal",
    title: "Fall in love with your home again.",
    body: "This is what it was all for. The moment you walk in and it stops you — because it's exactly what you imagined, only better.",
    image: `${CDN}/68e987ad4c424dfd7288ebe8.jpeg`,
    alt: "Completed luxury bathroom remodel",
    accent: "#E2C792",
    isReveal: true,
    beforeImage: `${CDN}/68c9d7999fe3cf6ad334b37e.png`,
    afterImage: `${CDN}/68e987ad4c424dfd7288ebe8.jpeg`,
  },
];

function StoryImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!errored ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            unoptimized
            onError={() => setErrored(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[rgba(14,14,14,0.3)]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#141414]" />
      )}
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
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="relative z-20 pt-20 pb-8 px-6 lg:px-12 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #C9A96A, transparent)" }} />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A96A]">The Story</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-light text-[#F2EDE4]">
            From Dated to <span className="gold-gradient italic">Dream</span>
          </h2>
        </div>

        <div className="flex-1 relative overflow-hidden">
          {stages.map((stage, i) => (
            <div
              key={stage.id}
              className="absolute inset-0 flex flex-col lg:flex-row transition-opacity duration-500"
              style={{ opacity: i === activeStage ? 1 : 0, pointerEvents: i === activeStage ? "auto" : "none" }}
            >
              <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 xl:px-20 pb-8 lg:pb-0 order-2 lg:order-1">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-6xl font-light text-[rgba(201,169,106,0.15)]">{stage.number}</span>
                  <span className="font-body text-xs tracking-[0.25em] uppercase" style={{ color: stage.accent }}>{stage.label}</span>
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-light text-[#F2EDE4] leading-tight mb-5">{stage.title}</h3>
                <p className="font-body text-[#9A9388] leading-relaxed max-w-md text-base md:text-lg">{stage.body}</p>
                <div className="flex gap-2 mt-8">
                  {stages.map((_, di) => (
                    <div
                      key={di}
                      className="h-px transition-all duration-500"
                      style={{ width: di === activeStage ? 32 : 12, background: di === activeStage ? "#C9A96A" : "rgba(201,169,106,0.2)" }}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 relative order-1 lg:order-2 flex-shrink-0 h-48 lg:h-auto">
                <div className="absolute inset-0">
                  {stage.isReveal && stage.beforeImage && stage.afterImage ? (
                    <BeforeAfterSlider
                      before={stage.beforeImage}
                      after={stage.afterImage}
                      className="w-full h-full"
                    />
                  ) : (
                    <StoryImage src={stage.image} alt={stage.alt} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
