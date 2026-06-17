"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

const wordmarkVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.9 },
  },
};

export default function IntroScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[#0E0E0E]"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-hidden="true"
        >
          {/* Logo mark */}
          <motion.div variants={logoVariants} initial="hidden" animate="visible">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16"
            >
              <rect
                x="1"
                y="1"
                width="38"
                height="38"
                stroke="#C9A96A"
                strokeWidth="1.2"
              />
              <text
                x="20"
                y="27"
                fontFamily="Georgia, serif"
                fontSize="20"
                fontWeight="400"
                textAnchor="middle"
                fill="#C9A96A"
              >
                R
              </text>
            </svg>
          </motion.div>

          {/* Gold line */}
          <motion.div
            className="mt-5 w-24 h-px bg-[#C9A96A] origin-left"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Wordmark */}
          <motion.p
            className="font-body mt-3 text-xs tracking-widest uppercase text-[#C9A96A]"
            variants={wordmarkVariants}
            initial="hidden"
            animate="visible"
          >
            RENCO LLC
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
