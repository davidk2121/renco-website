"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad4c424dfd7288ebe8.jpeg", alt: "RENCO bathroom remodel" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adab9cea4f91cdaca8.jpeg", alt: "RENCO kitchen renovation" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adc49d37266c7d0ca2.jpeg", alt: "RENCO tile work" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad4c424d94ac88ebea.jpeg", alt: "RENCO shower installation" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adc49d376b887d0ca1.jpeg", alt: "RENCO bathroom vanity" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad4c424d7d3788ebe4.jpeg", alt: "RENCO home renovation" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad55c3adcbaa42b331.jpeg", alt: "RENCO interior remodel" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad4c424d883288ebe0.jpeg", alt: "RENCO flooring" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adc04b4e96f7937227.jpeg", alt: "RENCO exterior work" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad4c424dd0a688ebe9.jpeg", alt: "RENCO full renovation" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adab9ceab49dcdaca7.jpeg", alt: "RENCO remodel project" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adc04b4e3a60937230.jpeg", alt: "RENCO craftsmanship" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad15bf074765bc201a.jpeg", alt: "RENCO project detail" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68c9d7999fe3cf6ad334b37e.png", alt: "RENCO completed project" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68c9d799a798eaec7919080b.png", alt: "RENCO home improvement" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68c9d7990cfa3268088443c4.png", alt: "RENCO remodel" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68c9d7990cfa320e428443c3.png", alt: "RENCO project" },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImage = useCallback(() => setLightbox((l) => (l !== null ? (l - 1 + galleryImages.length) % galleryImages.length : null)), []);
  const nextImage = useCallback(() => setLightbox((l) => (l !== null ? (l + 1) % galleryImages.length : null)), []);

  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #C9A96A, transparent)" }} />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A96A]">
              Our Work
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-[#F2EDE4]">
            Gallery
          </h2>
          <p className="font-body text-[#9A9388] mt-4 max-w-md">
            200+ projects across Gig Harbor &amp; greater Seattle. Every image is a real RENCO home.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden"
              onClick={() => openLightbox(i)}
            >
              <div className="relative w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute inset-0 bg-[rgba(14,14,14,0)] group-hover:bg-[rgba(14,14,14,0.3)] transition-colors duration-400" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <div className="w-10 h-10 border border-[#C9A96A] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#C9A96A" strokeWidth="1.5" className="w-5 h-5">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[rgba(8,8,8,0.95)] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-[#9A9388] hover:text-[#F2EDE4] transition-colors"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#9A9388] hover:text-[#C9A96A] transition-colors"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain max-h-[85vh]"
                unoptimized
              />
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#9A9388] hover:text-[#C9A96A] transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-xs text-[#6B6560]">
              {lightbox + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
