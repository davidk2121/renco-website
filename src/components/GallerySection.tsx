"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const galleryImages = [
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad4c424dfd7288ebe8.jpeg", alt: "Completed bathroom remodel with custom tile shower by RENCO LLC in Gig Harbor" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adab9cea4f91cdaca8.jpeg", alt: "Renovated kitchen with new cabinets and quartz countertops by RENCO LLC" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adc49d37266c7d0ca2.jpeg", alt: "Custom tile work detail in a RENCO bathroom remodel" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad4c424d94ac88ebea.jpeg", alt: "Walk-in shower installation with frameless glass by RENCO LLC" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adc49d376b887d0ca1.jpeg", alt: "New bathroom vanity with quartz top installed by RENCO LLC" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad4c424d7d3788ebe4.jpeg", alt: "Home renovation project interior by RENCO LLC in the Seattle area" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad55c3adcbaa42b331.jpeg", alt: "Interior remodel with modern finishes by RENCO LLC" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad4c424d883288ebe0.jpeg", alt: "New hardwood flooring installed during a RENCO home remodel" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adc04b4e96f7937227.jpeg", alt: "Exterior remodel with new siding by RENCO LLC in Gig Harbor, WA" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad4c424dd0a688ebe9.jpeg", alt: "Full home renovation living space completed by RENCO LLC" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adab9ceab49dcdaca7.jpeg", alt: "Remodeled home interior by RENCO LLC in Pierce County, WA" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987adc04b4e3a60937230.jpeg", alt: "Detailed finish carpentry showing RENCO LLC craftsmanship" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68e987ad15bf074765bc201a.jpeg", alt: "Close-up detail of tile and trim work in a RENCO remodel" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68c9d7999fe3cf6ad334b37e.png", alt: "Completed home remodel project by RENCO LLC in Gig Harbor" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68c9d799a798eaec7919080b.png", alt: "Home improvement project by RENCO LLC in the greater Seattle area" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68c9d7990cfa3268088443c4.png", alt: "Finished room remodel by RENCO LLC, licensed Washington contractor" },
  { src: "https://storage.googleapis.com/msgsndr/7Ejk1dufJ1zPUoyShqBe/media/68c9d7990cfa320e428443c3.png", alt: "Residential remodeling project completed by RENCO LLC" },
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
        <div ref={ref} className="mb-16">
          {/* Eyebrow line + label */}
          <div className="flex items-center gap-4 mb-4">
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
                Our Work
              </motion.span>
            </div>
          </div>

          {/* H2 — clip reveal */}
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-4xl md:text-6xl font-light text-[#F2EDE4] block"
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.85, delay: 0.28, ease: EXPO_OUT }}
            >
              Gallery
            </motion.h2>
          </div>

          <motion.p
            className="font-body text-[#9A9388] mt-4 max-w-md"
            initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
            animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.42, ease: EXPO_OUT }}
          >
            200+ projects across Gig Harbor &amp; greater Seattle. Every image is a real RENCO home.
          </motion.p>
        </div>

        {/* Masonry grid — scale + opacity entrance, stagger per column */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: (i % 4) * 0.1, ease: EXPO_OUT }}
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
