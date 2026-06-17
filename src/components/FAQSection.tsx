"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "How long does a bathroom remodel take?",
    a: "Most bathroom remodels take 2–4 weeks depending on scope. We give you a precise timeline before we start — and we stick to it.",
  },
  {
    q: "Do you handle permits?",
    a: "Yes. We pull all required permits and handle every inspection. You don't have to manage any of that.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Fully licensed in Washington State and fully insured. We carry general liability and workers' comp so you're protected.",
  },
  {
    q: "Do you use subcontractors?",
    a: "Yes — for specialized trades like tile, electrical, and plumbing. Every partner has been vetted over years of working together. Vitaliy and David are on-site personally to oversee all work and make sure the standard never slips.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Gig Harbor, Tacoma, and the greater Seattle area — King and Pierce County.",
  },
  {
    q: "How do I get started?",
    a: "Fill out our quick estimate form or call David directly at 253-389-2606. We'll respond within 24 hours.",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={itemVariants} className="border-b border-[rgba(201,169,106,0.1)]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-light text-[#F2EDE4] group-hover:text-[#E2C792] transition-colors leading-snug">
          {q}
        </span>
        <span
          className="shrink-0 w-7 h-7 flex items-center justify-center border border-[rgba(201,169,106,0.3)] text-[#C9A96A] transition-all duration-300 mt-0.5"
          style={{ fontSize: "1.25rem", lineHeight: 1 }}
          aria-hidden="true"
        >
          {open ? "×" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="font-body text-[#9A9388] leading-relaxed pb-6 pr-10 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 md:py-36" style={{ background: "#141414" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="mb-16">
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
                FAQ
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
                Common questions,
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block gold-gradient italic"
                initial={{ y: "110%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.85, delay: 0.4, ease: EXPO_OUT }}
              >
                straight answers.
              </motion.span>
            </div>
          </h2>
        </div>

        {/* FAQ list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={listVariants}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
