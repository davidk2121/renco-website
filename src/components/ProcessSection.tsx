"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Free Estimate",
    description:
      "We talk through your vision, walk the space, and build a detailed scope. No pressure, no obligation.",
  },
  {
    number: "02",
    title: "Design & Plan",
    description:
      "We finalize materials, timeline, and every detail before a single tool touches your home.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Vitaliy and David lead the work personally. Clean, organized, and on schedule.",
  },
  {
    number: "04",
    title: "The Reveal",
    description:
      "Walk into a space that exceeds what you imagined. That's the standard.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 md:py-36" style={{ background: "#0E0E0E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="mb-16 md:mb-24">
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
                How It Works
              </motion.span>
            </div>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-[#F2EDE4] leading-tight">
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.85, delay: 0.28, ease: EXPO_OUT }}
              >
                Simple process.
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block gold-gradient italic"
                initial={{ y: "110%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.85, delay: 0.4, ease: EXPO_OUT }}
              >
                Zero surprises.
              </motion.span>
            </div>
          </h2>
        </div>

        {/* Steps */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-4 gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={gridVariants}
        >
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-px" style={{ background: "rgba(201,169,106,0.15)" }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className="relative flex flex-col md:items-start px-0 md:px-6 pb-12 md:pb-0"
            >
              {/* Mobile connecting line */}
              {i < steps.length - 1 && (
                <div
                  className="md:hidden absolute left-[1.75rem] top-[4.5rem] bottom-0 w-px"
                  style={{ background: "linear-gradient(to bottom, rgba(201,169,106,0.4), rgba(201,169,106,0.05))" }}
                />
              )}

              {/* Number circle */}
              <div
                className="relative z-10 w-[3.5rem] h-[3.5rem] flex items-center justify-center border mb-6 shrink-0"
                style={{
                  border: "1px solid rgba(201,169,106,0.4)",
                  background: "#0E0E0E",
                }}
              >
                <span
                  className="font-display text-lg font-light"
                  style={{ background: "linear-gradient(135deg, #B8945A, #E2C792)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {step.number}
                </span>
              </div>

              <div className="md:pt-0 pl-0 md:pl-0">
                <h3 className="font-display text-xl font-light text-[#F2EDE4] mb-3">{step.title}</h3>
                <p className="font-body text-sm text-[#9A9388] leading-relaxed max-w-[220px]">{step.description}</p>
              </div>

              {/* Gold accent dot at top of number — desktop connector */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-[2.125rem] right-0 w-2 h-2 rounded-full translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ background: "rgba(201,169,106,0.3)" }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
