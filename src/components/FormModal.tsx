"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "./LeadForm";

interface FormModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FormModal({ open, onClose }: FormModalProps) {
  const [openCount, setOpenCount] = useState(0);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setOpenCount((c) => c + 1);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(8,8,8,0.92)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg p-8 md:p-10 border border-[rgba(201,169,106,0.2)]"
            style={{ background: "#141414" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6">
              <h2 className="font-display text-2xl md:text-3xl font-light text-[#F2EDE4]">
                Get Your Free Estimate
              </h2>
              <p className="font-body text-sm text-[#9A9388] mt-1">
                Takes 60 seconds. No pressure.
              </p>
            </div>
            <LeadForm key={openCount} onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
