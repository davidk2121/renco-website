"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


type FormData = {
  projectType: string;
  timeline: string;
  budget: string;
  name: string;
  phone: string;
  email: string;
  zip: string;
};

const steps = [
  { id: "project", label: "What are we remodeling?" },
  { id: "timeline", label: "What's your timeline?" },
  { id: "budget", label: "What's your budget range?" },
  { id: "name", label: "What's your name?" },
  { id: "contact", label: "How can we reach you?" },
  { id: "location", label: "Where are you located?" },
];

const projectTypes = [
  { value: "bathroom", label: "Bathroom", icon: "🚿" },
  { value: "kitchen", label: "Kitchen", icon: "🍳" },
  { value: "exterior", label: "Exterior", icon: "🏠" },
  { value: "full-home", label: "Full Home", icon: "🏗️" },
];

const timelines = [
  { value: "asap", label: "ASAP", sub: "Ready to start" },
  { value: "1-3mo", label: "1–3 months", sub: "Planning ahead" },
  { value: "3-6mo", label: "3–6 months", sub: "Early stages" },
  { value: "exploring", label: "Just exploring", sub: "No rush" },
];

const budgets = [
  { value: "under-25k", label: "Under $25K" },
  { value: "25-50k", label: "$25K – $50K" },
  { value: "50-100k", label: "$50K – $100K" },
  { value: "100k-plus", label: "$100K+" },
];

export default function LeadForm({ onClose }: { onClose?: () => void }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<FormData>({
    projectType: "",
    timeline: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
    zip: "",
  });

  const progress = ((step + 1) / steps.length) * 100;

  const setField = (field: keyof FormData, value: string) => {
    setData((d) => ({ ...d, [field]: value }));
  };

  const next = () => {
    if (step < steps.length - 1) setStep((s) => s + 1);
    else handleSubmit();
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "renco-website", timestamp: new Date().toISOString() }),
      });
      // Suppress the exit-intent popup once a lead has been captured
      try { sessionStorage.setItem("exitIntentShown", "true"); } catch {}
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const canAdvance = () => {
    if (step === 0) return !!data.projectType;
    if (step === 1) return !!data.timeline;
    if (step === 2) return !!data.budget;
    if (step === 3) return data.name.trim().length > 1;
    if (step === 4) return data.phone.trim().length > 6 || data.email.includes("@");
    if (step === 5) return data.zip.trim().length >= 5;
    return true;
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-8"
      >
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[#C9A96A]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#C9A96A" strokeWidth="1.5" className="w-8 h-8">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h3 className="font-display text-3xl font-light text-[#F2EDE4] mb-3">
          You&rsquo;re on the list.
        </h3>
        <p className="font-body text-[#9A9388] leading-relaxed max-w-sm mx-auto mb-6">
          David will reach out shortly at{" "}
          <a href="tel:+12533892606" className="text-[#C9A96A] hover:underline">253-389-2606</a>.
          We&rsquo;ll talk through your vision and put together a free estimate.
        </p>
        <button
          onClick={onClose}
          className="font-body text-xs tracking-widest uppercase text-[#6B6560] hover:text-[#9A9388] transition-colors"
        >
          Close
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Progress bar */}
      <div className="h-px bg-[rgba(201,169,106,0.1)] mb-8">
        <motion.div
          className="h-full"
          style={{ background: "linear-gradient(90deg, #B8945A, #E2C792)" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Step counter */}
      <div className="flex justify-between items-center mb-8">
        <span className="font-body text-xs tracking-widest uppercase text-[#6B6560]">
          Step {step + 1} of {steps.length}
        </span>
        {onClose && (
          <button
            onClick={onClose}
            className="text-[#6B6560] hover:text-[#9A9388] transition-colors"
            aria-label="Close form"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        )}
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-light text-[#F2EDE4] mb-8">
            {steps[step].label}
          </h3>

          {/* Step 0 — project type */}
          {step === 0 && (
            <div className="grid grid-cols-2 gap-3">
              {projectTypes.map((p) => (
                <button
                  key={p.value}
                  onClick={() => { setField("projectType", p.value); next(); }}
                  className={`p-5 border text-left transition-all duration-300 ${
                    data.projectType === p.value
                      ? "border-[#C9A96A] bg-[rgba(201,169,106,0.06)]"
                      : "border-[rgba(201,169,106,0.15)] hover:border-[rgba(201,169,106,0.4)]"
                  }`}
                >
                  <span className="block text-2xl mb-2">{p.icon}</span>
                  <span className="font-body text-sm text-[#F2EDE4]">{p.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 1 — timeline */}
          {step === 1 && (
            <div className="grid grid-cols-2 gap-3">
              {timelines.map((t) => (
                <button
                  key={t.value}
                  onClick={() => { setField("timeline", t.value); next(); }}
                  className={`p-5 border text-left transition-all duration-300 ${
                    data.timeline === t.value
                      ? "border-[#C9A96A] bg-[rgba(201,169,106,0.06)]"
                      : "border-[rgba(201,169,106,0.15)] hover:border-[rgba(201,169,106,0.4)]"
                  }`}
                >
                  <span className="block font-body text-sm text-[#F2EDE4] mb-1">{t.label}</span>
                  <span className="block font-body text-xs text-[#6B6560]">{t.sub}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 2 — budget */}
          {step === 2 && (
            <div className="grid grid-cols-2 gap-3">
              {budgets.map((b) => (
                <button
                  key={b.value}
                  onClick={() => { setField("budget", b.value); next(); }}
                  className={`p-5 border text-left transition-all duration-300 ${
                    data.budget === b.value
                      ? "border-[#C9A96A] bg-[rgba(201,169,106,0.06)]"
                      : "border-[rgba(201,169,106,0.15)] hover:border-[rgba(201,169,106,0.4)]"
                  }`}
                >
                  <span className="font-body text-sm text-[#F2EDE4]">{b.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 3 — name */}
          {step === 3 && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your full name"
                value={data.name}
                onChange={(e) => setField("name", e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && canAdvance() && next()}
                className="w-full bg-transparent border-b border-[rgba(201,169,106,0.3)] py-3 font-body text-lg text-[#F2EDE4] placeholder-[#3a3530] focus:outline-none focus:border-[#C9A96A] transition-colors"
                autoFocus
              />
            </div>
          )}

          {/* Step 4 — contact */}
          {step === 4 && (
            <div className="space-y-5">
              <input
                type="tel"
                placeholder="Phone number"
                value={data.phone}
                onChange={(e) => setField("phone", e.target.value)}
                className="w-full bg-transparent border-b border-[rgba(201,169,106,0.3)] py-3 font-body text-lg text-[#F2EDE4] placeholder-[#3a3530] focus:outline-none focus:border-[#C9A96A] transition-colors"
                autoFocus
              />
              <input
                type="email"
                placeholder="Email address"
                value={data.email}
                onChange={(e) => setField("email", e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && canAdvance() && next()}
                className="w-full bg-transparent border-b border-[rgba(201,169,106,0.3)] py-3 font-body text-lg text-[#F2EDE4] placeholder-[#3a3530] focus:outline-none focus:border-[#C9A96A] transition-colors"
              />
            </div>
          )}

          {/* Step 5 — location */}
          {step === 5 && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="ZIP code or city"
                value={data.zip}
                onChange={(e) => setField("zip", e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && canAdvance() && next()}
                className="w-full bg-transparent border-b border-[rgba(201,169,106,0.3)] py-3 font-body text-lg text-[#F2EDE4] placeholder-[#3a3530] focus:outline-none focus:border-[#C9A96A] transition-colors"
                autoFocus
              />
              <p className="font-body text-xs text-[#6B6560]">
                We serve Gig Harbor &amp; the greater Seattle area (King / Pierce County).
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation — only show for text steps */}
      {step >= 3 && (
        <div className="flex items-center justify-between mt-10">
          <button
            onClick={back}
            className="font-body text-xs tracking-widest uppercase text-[#6B6560] hover:text-[#9A9388] transition-colors"
          >
            ← Back
          </button>
          <button
            onClick={next}
            disabled={!canAdvance() || submitting}
            className="font-body text-sm tracking-[0.15em] uppercase px-8 py-3 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            style={{
              background: canAdvance() && !submitting ? "linear-gradient(135deg, #B8945A, #E2C792)" : undefined,
              border: !canAdvance() ? "1px solid rgba(201,169,106,0.2)" : undefined,
              color: canAdvance() ? "#0E0E0E" : "#6B6560",
            }}
          >
            {submitting ? "Sending..." : step === steps.length - 1 ? "Submit" : "Continue →"}
          </button>
        </div>
      )}

      {/* Back button for card steps */}
      {step > 0 && step < 3 && (
        <button
          onClick={back}
          className="mt-6 font-body text-xs tracking-widest uppercase text-[#6B6560] hover:text-[#9A9388] transition-colors"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
