"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface HeaderProps {
  onGetEstimate: () => void;
}

export default function Header({ onGetEstimate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Work", href: "#gallery" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[rgba(201,169,106,0.12)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-9 h-9 md:w-10 md:h-10 relative">
                <Image
                  src="https://assets.cdn.filesafe.space/47uN66tEffAzqM5lHNd7/media/6938aaeefb91d02fc3494f02.svg"
                  alt="RENCO"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  unoptimized
                />
              </div>
              <span
                className="font-display text-xl tracking-[0.2em] uppercase text-[#F2EDE4] font-light"
                style={{ letterSpacing: "0.22em" }}
              >
                RENCO
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm tracking-widest uppercase text-[#9A9388] hover:text-[#C9A96A] transition-colors duration-300"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+12533892606"
                className="hidden lg:block font-body text-sm text-[#9A9388] hover:text-[#C9A96A] transition-colors"
              >
                253-389-2606
              </a>
              <button
                onClick={onGetEstimate}
                className="hidden md:block font-body text-xs tracking-widest uppercase px-5 py-2.5 border border-[#C9A96A] text-[#C9A96A] hover:bg-[#C9A96A] hover:text-[#0E0E0E] transition-all duration-300"
                style={{ letterSpacing: "0.12em" }}
              >
                Free Estimate
              </button>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 items-center"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-px bg-[#F2EDE4] transition-all duration-300 ${
                    mobileOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
                  }`}
                />
                <span
                  className={`block h-px bg-[#F2EDE4] transition-all duration-300 ${
                    mobileOpen ? "opacity-0 w-0" : "w-4"
                  }`}
                />
                <span
                  className={`block h-px bg-[#F2EDE4] transition-all duration-300 ${
                    mobileOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0E0E0E]/98 backdrop-blur-md border-b border-[rgba(201,169,106,0.12)] px-6 py-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-lg tracking-widest uppercase text-[#9A9388] hover:text-[#C9A96A] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setMobileOpen(false); onGetEstimate(); }}
                className="mt-2 font-body text-sm tracking-widest uppercase px-6 py-3 border border-[#C9A96A] text-[#C9A96A] text-left"
              >
                Get Free Estimate
              </button>
              <a
                href="tel:+12533892606"
                className="font-body text-sm text-[#6B6560]"
              >
                253-389-2606
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
