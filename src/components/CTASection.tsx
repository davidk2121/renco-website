"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import LeadForm from "./LeadForm";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="estimate" className="py-24 md:py-36 relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(201,169,106,0.06) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(184,148,90,0.04) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — CTA copy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #C9A96A, transparent)" }} />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A96A]">
                Free Estimate
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-light text-[#F2EDE4] leading-tight mb-6">
              Enough talk —<br />
              <span className="gold-gradient italic">let&rsquo;s build</span>
              <br />what matters.
            </h2>

            <p className="font-body text-[#9A9388] leading-relaxed max-w-sm mb-10">
              Tell us about your project. David will reach out personally within 24 hours with a detailed, no-obligation estimate.
            </p>

            <div className="space-y-4 pt-8 border-t border-[rgba(201,169,106,0.1)]">
              <a href="tel:+12533892606" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-[rgba(201,169,106,0.2)] flex items-center justify-center group-hover:border-[#C9A96A] transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C9A96A" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-body text-sm text-[#F2EDE4]">253-389-2606</div>
                  <div className="font-body text-xs text-[#6B6560]">Call or text David directly</div>
                </div>
              </a>

              <a href="mailto:david@renco.co" className="flex items-center gap-4 group">
                <div className="w-10 h-10 border border-[rgba(201,169,106,0.2)] flex items-center justify-center group-hover:border-[#C9A96A] transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#C9A96A" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="font-body text-sm text-[#F2EDE4]">david@renco.co</div>
                  <div className="font-body text-xs text-[#6B6560]">Email anytime</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-8 md:p-10 border border-[rgba(201,169,106,0.15)]"
            style={{ background: "#141414" }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
