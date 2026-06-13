"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";

const showcasePairs = [
  {
    id: 1,
    label: "Master Bath",
    before: "/ba-bathroom-1-before.jpg",
    after: "/ba-bathroom-1-after.jpg",
  },
  {
    id: 2,
    label: "Guest Bath",
    before: "/ba-bathroom-2-before.jpg",
    after: "/ba-bathroom-2-after.jpg",
  },
  {
    id: 3,
    label: "Kitchen",
    before: "/ba-kitchen-1-before.jpg",
    after: "/ba-kitchen-1-after.jpg",
  },
  {
    id: 4,
    label: "Full Renovation",
    before: "/ba-fullhome-1%20-before.jpg",
    after: "/ba-fullhome-1-after.jpg",
  },
];

function SliderCard({ pair, index }: { pair: typeof showcasePairs[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="relative overflow-hidden">
        <BeforeAfterSlider
          before={pair.before}
          after={pair.after}
          className="aspect-[4/3] w-full"
          beforeLabel="Before"
          afterLabel="After"
        />
        <div className="absolute inset-0 border border-transparent group-hover:border-[rgba(201,169,106,0.3)] transition-all duration-500 pointer-events-none" />
      </div>
      <div className="pt-4">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-[#6B6560]">{pair.label}</p>
      </div>
    </motion.div>
  );
}

export default function ShowcaseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showcase" className="py-24 md:py-36 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #C9A96A, transparent)" }} />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A96A]">Before & After</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-[#F2EDE4] max-w-xl leading-tight">
            The transformation<br />
            <span className="gold-gradient italic">speaks for itself.</span>
          </h2>
          <p className="font-body text-[#9A9388] mt-5 max-w-md leading-relaxed">
            Drag the handle to reveal the full story. Every project starts with a vision and ends with a room you&rsquo;re proud to show off.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {showcasePairs.map((pair, i) => (
            <SliderCard key={pair.id} pair={pair} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
