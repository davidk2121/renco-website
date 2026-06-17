"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

interface ExitIntentPopupProps {
  onGetEstimate: () => void;
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: -16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -8,
    transition: { duration: 0.2 },
  },
};

export default function ExitIntentPopup({ onGetEstimate }: ExitIntentPopupProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth <= 768) return;
    if (sessionStorage.getItem("exitIntentShown")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Re-check at trigger time — a form submit or Calendly booking may have
      // set this flag after mount.
      if (sessionStorage.getItem("exitIntentShown")) return;
      if (e.clientY < 20) {
        sessionStorage.setItem("exitIntentShown", "true");
        setVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const close = () => setVisible(false);

  const handleCTA = () => {
    onGetEstimate();
    close();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={close}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md border border-[#C9A96A] bg-[#0E0E0E] px-8 py-10 text-center"
            variants={modalVariants}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-headline"
          >
            <h2
              id="exit-intent-headline"
              className="font-display text-2xl font-normal text-[#F2EDE4] mb-3"
            >
              Wait — before you go.
            </h2>

            <p className="font-body text-sm text-[#9A9388] leading-relaxed mb-8">
              Get a free, no-pressure estimate from David personally.{" "}
              Takes 60 seconds.
            </p>

            <button
              onClick={handleCTA}
              className="font-body w-full bg-[#C9A96A] text-[#0E0E0E] text-sm font-medium tracking-wide uppercase py-3 px-6 hover:bg-[#d4b67a] transition-colors duration-200 mb-4"
            >
              Get My Free Estimate
            </button>

            <button
              onClick={close}
              className="font-body text-xs text-[#6B6560] hover:text-[#9A9388] transition-colors duration-200 underline underline-offset-2"
            >
              No thanks
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
