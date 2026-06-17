"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;
const CALENDLY_URL = "https://calendly.com/david-renco/new-meeting";

export default function BookCallSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly widget script once
    if (document.getElementById("calendly-widget-script")) return;
    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    // Suppress the exit-intent popup once a call is booked
    const onCalendly = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        try { sessionStorage.setItem("exitIntentShown", "true"); } catch {}
      }
    };
    window.addEventListener("message", onCalendly);
    return () => window.removeEventListener("message", onCalendly);
  }, []);

  return (
    <section id="book-call" className="py-24 md:py-36" style={{ background: "#0E0E0E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="w-8 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #C9A96A)", transformOrigin: "right" }}
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
                Book A Call
              </motion.span>
            </div>
            <motion.div
              className="w-8 h-px"
              style={{ background: "linear-gradient(90deg, #C9A96A, transparent)", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: EXPO_OUT }}
            />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F2EDE4] leading-tight">
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.85, delay: 0.28, ease: EXPO_OUT }}
              >
                Rather just talk it through?
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block gold-gradient italic"
                initial={{ y: "110%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{ duration: 0.85, delay: 0.4, ease: EXPO_OUT }}
              >
                Pick a time that works.
              </motion.span>
            </div>
          </h2>

          <motion.p
            className="font-body text-[#9A9388] mt-5 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
            animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55, ease: EXPO_OUT }}
          >
            Grab a slot on David&rsquo;s calendar for a quick, no-pressure call about your project.
          </motion.p>
        </div>

        {/* Calendly inline embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: EXPO_OUT }}
          className="border border-[rgba(201,169,106,0.15)]"
          style={{ background: "#141414" }}
        >
          <div
            ref={widgetRef}
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=141414&text_color=F2EDE4&primary_color=C9A96A`}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
