"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StickyCTAProps {
  onGetEstimate: () => void;
}

export default function StickyCTA({ onGetEstimate }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-cta"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50"
          style={{ background: "rgba(14,14,14,0.97)", borderTop: "1px solid rgba(201,169,106,0.12)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3">
            {/* Desktop layout */}
            <div className="hidden sm:flex items-center justify-between gap-6">
              <p className="font-body text-sm text-[#9A9388]">
                Ready to start your project?
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="tel:+12533892606"
                  className="font-body text-sm text-[#C9A96A] hover:text-[#E2C792] transition-colors tracking-wide"
                >
                  253-389-2606
                </a>
                <button
                  onClick={onGetEstimate}
                  className="font-body text-sm tracking-[0.15em] uppercase px-6 py-2.5 text-[#0E0E0E] font-medium transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #B8945A, #E2C792)" }}
                >
                  Get a Free Estimate →
                </button>
              </div>
            </div>

            {/* Mobile layout */}
            <div className="flex sm:hidden">
              <button
                onClick={onGetEstimate}
                className="w-full font-body text-sm tracking-[0.15em] uppercase py-3 text-[#0E0E0E] font-medium transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #B8945A, #E2C792)" }}
              >
                Get a Free Estimate →
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
