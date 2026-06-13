"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: "bathroom",
    label: "01",
    title: "Bathroom Remodel",
    tagline: "Our specialty.",
    body: "From a single vanity update to a full spa transformation — custom tile work, walk-in showers, soaking tubs, radiant floors. We handle every detail from demo to final grout seal.",
    features: ["Custom Tile & Stone", "Walk-in Showers", "Vanity & Cabinetry", "Plumbing & Fixtures", "Radiant Heated Floors"],
    hero: true,
  },
  {
    id: "kitchen",
    label: "02",
    title: "Kitchen Remodel",
    tagline: "Where families gather.",
    body: "Custom cabinetry, countertops, islands, and layout redesigns that make your kitchen the heart of your home again.",
    features: ["Custom Cabinetry", "Countertops & Islands", "Layout Redesign", "Appliance Integration"],
    hero: false,
  },
  {
    id: "exterior",
    label: "03",
    title: "Exterior Remodel",
    tagline: "First impressions matter.",
    body: "Siding, windows, doors, and exterior finishes that elevate your home's curb appeal and protect it from the Pacific Northwest elements.",
    features: ["Siding & Trim", "Windows & Doors", "Decks & Patios", "Painting & Staining"],
    hero: false,
  },
  {
    id: "fullhome",
    label: "04",
    title: "Full-Home Renovation",
    tagline: "Start fresh.",
    body: "Complete interior and exterior renovations. We coordinate every trade so you don't have to — one point of contact, one vision, one finished home.",
    features: ["Full Interior Buildout", "Multi-Room Coordination", "Project Management", "Design Consultation"],
    hero: false,
  },
];

function ServiceIcon({ id }: { id: string }) {
  const icons: Record<string, React.ReactNode> = {
    bathroom: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <path d="M4 12h16M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8" />
        <path d="M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
        <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2" />
      </svg>
    ),
    kitchen: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="5" rx="1"/>
        <path d="M2 8v13M22 8v13M2 21h20M7 3v5M17 3v5"/>
        <circle cx="12" cy="14" r="3"/>
      </svg>
    ),
    exterior: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <path d="M3 21h18M5 21V9M19 21V9M2 10l10-7 10 7"/>
        <rect x="9" y="15" width="6" height="6"/>
      </svg>
    ),
    fullhome: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
        <path d="M2 10l10-7 10 7v11H2V10z"/>
        <path d="M9 21V13h6v8"/>
        <path d="M12 3v4M8 7h8"/>
      </svg>
    ),
  };
  return icons[id] || null;
}

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-36" style={{ background: "#141414" }}>
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
              What We Build
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-[#F2EDE4]">
            Services
          </h2>
        </motion.div>

        {/* Hero service card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative mb-4 border border-[rgba(201,169,106,0.15)] p-8 md:p-12 hover:border-[rgba(201,169,106,0.4)] transition-all duration-500 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #161614 100%)" }}
        >
          {/* Gold corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <div className="absolute top-0 right-0 w-full h-full" style={{ background: "radial-gradient(circle at top right, #C9A96A, transparent)" }} />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="text-[#C9A96A]">
                  <ServiceIcon id="bathroom" />
                </div>
                <span className="font-body text-xs tracking-[0.25em] uppercase text-[#C9A96A]">
                  Primary Service
                </span>
              </div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-7xl font-light text-[rgba(201,169,106,0.1)]">01</span>
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-light text-[#F2EDE4] leading-tight mb-2">
                Bathroom Remodel
              </h3>
              <p className="font-body text-sm tracking-wider uppercase text-[#C9A96A] mb-5">Our specialty.</p>
              <p className="font-body text-[#9A9388] leading-relaxed max-w-md">
                {services[0].body}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {services[0].features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-4 h-px" style={{ background: "#C9A96A" }} />
                  <span className="font-body text-sm text-[#9A9388]">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Secondary services */}
        <div className="grid md:grid-cols-3 gap-4">
          {services.slice(1).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-[rgba(201,169,106,0.1)] p-6 md:p-8 hover:border-[rgba(201,169,106,0.3)] transition-all duration-500 cursor-default"
              style={{ background: "#1a1a1a" }}
            >
              <div className="text-[#C9A96A] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                <ServiceIcon id={service.id} />
              </div>
              <div className="font-display text-5xl font-light text-[rgba(201,169,106,0.08)] mb-2">
                {service.label}
              </div>
              <h3 className="font-display text-2xl font-light text-[#F2EDE4] leading-tight mb-1">
                {service.title}
              </h3>
              <p className="font-body text-xs tracking-wider uppercase text-[#6B6560] mb-4">{service.tagline}</p>
              <p className="font-body text-sm text-[#9A9388] leading-relaxed">{service.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
