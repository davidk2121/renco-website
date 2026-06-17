"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;
const BASE = "https://raw.githubusercontent.com/davidk2121/renco-website/main/public";

const team = [
  {
    name: "Vitaliy",
    role: "Co-Founder · Lead Craftsman",
    image: `${BASE}/vitaliy.jpg`,
    bio: "Vitaliy leads RENCO's craftsmanship — the tile, the finishes, the details most people never notice but always feel. Two decades of building have made precision second nature.",
  },
  {
    name: "David",
    role: "Co-Founder · Project Lead",
    image: `${BASE}/david.jpg`,
    bio: "David is your point of contact from the first call to the final walkthrough. He keeps every project clear, on schedule, and true to what you envisioned.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 260, damping: 28 },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 md:py-36" style={{ background: "#141414" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="mb-16 max-w-2xl">
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
                Meet The Team
              </motion.span>
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F2EDE4] leading-tight">
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.85, delay: 0.28, ease: EXPO_OUT }}
              >
                You hire people,
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block gold-gradient italic"
                initial={{ y: "110%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.85, delay: 0.4, ease: EXPO_OUT }}
              >
                not a company.
              </motion.span>
            </div>
          </h2>
        </div>

        {/* Team grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridVariants}
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={cardVariants} className="group">
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}, RENCO LLC`}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-transparent group-hover:border-[rgba(201,169,106,0.3)] transition-all duration-500 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <h3 className="font-display text-2xl font-light text-[#F2EDE4]">{member.name}</h3>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A96A] mt-1 mb-3">
                {member.role}
              </p>
              <p className="font-body text-sm text-[#9A9388] leading-relaxed max-w-md">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
