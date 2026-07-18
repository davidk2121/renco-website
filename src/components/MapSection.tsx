"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

// Keyless Google Maps embed — drops a pin on the business, no API key required.
const MAP_SRC =
  "https://maps.google.com/maps?q=RENCO%20LLC%20Gig%20Harbor%20WA&t=&z=11&ie=UTF8&iwloc=&output=embed";

export default function MapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="map" className="bg-[#0E0E0E] py-20 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8 justify-center">
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
              Find Us On The Map
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: EXPO_OUT }}
          className="border border-[rgba(201,169,106,0.2)] overflow-hidden"
        >
          <iframe
            title="RENCO LLC location — Gig Harbor, WA"
            src={MAP_SRC}
            width="100%"
            height="450"
            style={{ border: 0, display: "block", filter: "grayscale(0.3) contrast(1.05)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
