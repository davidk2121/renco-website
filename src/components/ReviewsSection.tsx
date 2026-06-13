"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
  {
    name: "Sweet Softies",
    handle: "Business Owner",
    text: "RENCO transformed our space with a Japandi-inspired kitchen and flooring remodel — serene, functional, and timeless. The team was professional, communicative, and detail-oriented throughout every phase of the project.",
    rating: 5,
  },
  {
    name: "Kerie Dinehart",
    handle: "Seattle Condo",
    text: "They remodeled our Seattle condo from top to bottom. Responsive, provided clear quotes, and finished ahead of schedule. I couldn't have asked for a smoother experience.",
    rating: 5,
  },
  {
    name: "Jocelyn Lescarbeau",
    handle: "Homeowner",
    text: "I highly recommend Vitaliy, David, and the entire RENCO team. They brought a level of care and professionalism to our home that is genuinely rare. Outstanding in every way.",
    rating: 5,
  },
  {
    name: "Justine Lescarbeau",
    handle: "Homeowner",
    text: "Practical, communicative, and trustworthy — top-notch quality all around. They gave us a fast, detailed quote and delivered exactly what they promised. Will absolutely work with them again.",
    rating: 5,
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C9A96A">
          <path d="M7 0.5l1.8 3.6 4 .58-2.9 2.82.68 3.99L7 9.5l-3.58 1.99.68-3.99L1.2 4.68l4-.58L7 .5z"/>
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-24 md:py-36" style={{ background: "#141414" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #C9A96A, transparent)" }} />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#C9A96A]">
              What Clients Say
            </span>
          </div>

          {/* Badge */}
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-8">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-light text-[#F2EDE4] leading-tight">
                5.0 Stars.
                <br />
                <span className="gold-gradient italic">Every time.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-2 md:mb-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 14 14" fill="#C9A96A">
                    <path d="M7 0.5l1.8 3.6 4 .58-2.9 2.82.68 3.99L7 9.5l-3.58 1.99.68-3.99L1.2 4.68l4-.58L7 .5z"/>
                  </svg>
                ))}
              </div>
              <p className="font-body text-sm text-[#9A9388]">
                19 reviews on Google · 200+ projects completed
              </p>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.google.com/maps/place/RENCO+LLC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs tracking-widest uppercase text-[#C9A96A] border border-[rgba(201,169,106,0.3)] px-4 py-2 hover:bg-[rgba(201,169,106,0.05)] transition-colors"
                >
                  All Reviews
                </a>
                <a
                  href="https://www.google.com/maps/place/RENCO+LLC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs tracking-widest uppercase text-[#6B6560] hover:text-[#C9A96A] transition-colors px-4 py-2"
                >
                  Write a Review
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-7 md:p-8 border border-[rgba(201,169,106,0.1)] hover:border-[rgba(201,169,106,0.25)] transition-all duration-500"
              style={{ background: "#1a1a1a" }}
            >
              <StarRating count={review.rating} />
              <blockquote className="font-body text-[#9A9388] leading-relaxed mt-5 mb-6 text-sm md:text-base">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-[rgba(201,169,106,0.08)]">
                <div className="w-8 h-8 rounded-full bg-[rgba(201,169,106,0.1)] flex items-center justify-center">
                  <span className="font-display text-sm text-[#C9A96A]">{review.name[0]}</span>
                </div>
                <div>
                  <div className="font-body text-sm text-[#F2EDE4] font-medium">{review.name}</div>
                  <div className="font-body text-xs text-[#6B6560] tracking-wide">{review.handle}</div>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6B6560]" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
