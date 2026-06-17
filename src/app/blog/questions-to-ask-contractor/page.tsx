import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Questions to Ask Before Hiring a Home Remodeling Contractor | RENCO LLC",
  description:
    "Before you sign a remodeling contract, ask these 10 questions. They separate legitimate contractors from the ones you'll regret hiring — and protect your home and your money.",
};

const questions = [
  {
    q: "Are you licensed and insured in Washington State?",
    a: "This is non-negotiable. Washington State requires all general contractors to be licensed through the Department of Labor & Industries. Ask for their contractor registration number and verify it at verify.lni.wa.gov. Also confirm they carry general liability insurance and workers' comp — if an uninsured worker is injured on your property, you could be liable.",
  },
  {
    q: "Do you pull permits?",
    a: "Any structural, plumbing, or electrical work requires a permit in virtually every Washington city and county. A contractor who suggests skipping permits is either cutting corners or protecting themselves at your expense. Unpermitted work creates problems at resale, may void your homeowner's insurance, and can require expensive tear-outs to fix.",
  },
  {
    q: "Who will actually be on-site doing the work?",
    a: "Some contractors sell jobs and then hand them off to crews you've never met. Ask whether the person you're meeting with will be present during the project, and who specifically will be doing each trade. You're trusting someone with your home — know who's walking through the door.",
  },
  {
    q: "Can I see references or verified reviews?",
    a: "Ask for references from recent projects similar to yours, and actually call them. Also look at Google Reviews — prioritize contractors with a high volume of verified reviews over those with a handful of five-stars. A genuine 5.0★ rating across 15+ reviews is more meaningful than two perfect ratings.",
  },
  {
    q: "What's your payment schedule?",
    a: "Legitimate contractors don't require large upfront payments. A standard structure might be: 10% at signing, draws tied to project milestones, and a final payment (10–15%) held until the project is complete and you're satisfied. Never pay more than 50% upfront, and never pay in full before the project is done.",
  },
  {
    q: "How do you handle unexpected costs?",
    a: "Hidden water damage, outdated wiring, or plumbing surprises can surface during demo. A trustworthy contractor will explain upfront how these are handled — in writing. There should be a documented change order process with your written approval required before any additional work proceeds.",
  },
  {
    q: "What's the timeline, and what could delay it?",
    a: "Ask for a written project schedule that includes the major milestones. Then ask what's most likely to push it. A contractor who can answer that question confidently — and honestly — has done this before. Vague answers are a warning sign.",
  },
  {
    q: "Do you use subcontractors?",
    a: "Using licensed subcontractors for electrical and plumbing is normal and legal. What matters is whether the general contractor is responsible for their work, whether those subs are licensed, and whether you as the homeowner are protected if something goes wrong. Get clear answers about who is liable for what.",
  },
  {
    q: "What warranty do you offer?",
    a: "Washington State law requires contractors to stand behind their work, but the specifics vary. Ask what's covered, for how long, and how to request warranty service. A contractor confident in their workmanship will have a clear answer. One who hedges has probably had warranty callbacks they'd rather forget.",
  },
  {
    q: "Will you put everything in writing?",
    a: "A professional contractor will provide a detailed written contract that includes: scope of work, materials specified by make and model, project schedule, payment terms, and a change order process. If a contractor balks at a detailed contract, walk away. The contract protects both of you — a legitimate contractor wants it in writing too.",
  },
];

export default function QuestionsToAskContractor() {
  return (
    <div style={{ background: "#0E0E0E", color: "#F2EDE4", minHeight: "100vh" }}>
      {/* Header Nav */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <Link href="/" className="font-display text-xl" style={{ color: "#C9A96A" }}>
          RENCO LLC
        </Link>
        <Link
          href="/#estimate"
          className="font-body text-sm px-5 py-2 rounded"
          style={{ background: "#C9A96A", color: "#0E0E0E", fontWeight: 600 }}
        >
          Get Free Estimate
        </Link>
      </nav>

      {/* Article */}
      <article className="px-6 py-16 mx-auto" style={{ maxWidth: "700px" }}>
        {/* Breadcrumb */}
        <p className="font-body text-sm mb-8" style={{ color: "#6B6560" }}>
          <Link href="/blog" style={{ color: "#C9A96A" }}>
            Blog
          </Link>{" "}
          / Hiring Guide
        </p>

        <p className="font-body text-sm mb-3" style={{ color: "#6B6560" }}>
          May 8, 2025
        </p>
        <h1
          className="font-display text-3xl md:text-4xl leading-tight mb-8"
          style={{ color: "#F2EDE4" }}
        >
          10 Questions to Ask Before Hiring a Home Remodeling Contractor
        </h1>

        <div className="font-body text-base leading-relaxed space-y-6" style={{ color: "#9A9388" }}>
          <p>
            Hiring a remodeling contractor is one of the biggest decisions a homeowner
            makes. The difference between the right contractor and the wrong one can
            mean the difference between a dream kitchen and a nightmare that takes years
            to resolve. These ten questions will help you find out — before you sign
            anything.
          </p>

          <div className="space-y-6 mt-10">
            {questions.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-lg"
                style={{ background: "#161616", border: "1px solid #2a2a2a" }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="font-display text-2xl leading-none"
                    style={{ color: "#C9A96A", flexShrink: 0, minWidth: "2rem" }}
                  >
                    {i + 1}.
                  </span>
                  <div>
                    <h2 className="font-display text-xl mb-2" style={{ color: "#F2EDE4" }}>
                      {item.q}
                    </h2>
                    <p style={{ color: "#9A9388" }}>{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            RENCO&rsquo;s Answer to All Ten? Yes.
          </h2>
          <p>
            RENCO LLC is a Washington State licensed and insured general contractor.
            We pull every permit, we put everything in writing, we show up when we say
            we will, and we stand behind our work. Our 5.0★ Google rating across 19+
            reviews isn&rsquo;t an accident — it&rsquo;s the result of treating every homeowner
            the way we&rsquo;d want to be treated.
          </p>
          <p>
            If you&rsquo;re vetting contractors for a bathroom remodel, kitchen renovation, or
            full home renovation in Gig Harbor or Seattle, we&rsquo;d welcome the chance to
            answer your questions in person — no obligation, no sales pressure.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-14 p-8 rounded-lg text-center"
          style={{ background: "#111111", border: "1px solid #2a2a2a" }}
        >
          <h3 className="font-display text-2xl mb-3" style={{ color: "#F2EDE4" }}>
            Ask Us Anything — Then Get a Free Estimate
          </h3>
          <p className="font-body mb-6" style={{ color: "#9A9388" }}>
            RENCO is happy to answer every question on this list before you commit to
            anything. Estimates are free, consultations are pressure-free, and
            everything we agree on goes in writing.
          </p>
          <Link
            href="/#estimate"
            className="font-body inline-block px-8 py-4 rounded"
            style={{ background: "#C9A96A", color: "#0E0E0E", fontWeight: 700 }}
          >
            Get Your Free Estimate
          </Link>
        </div>

        <p className="font-body text-sm mt-10" style={{ color: "#6B6560" }}>
          ←{" "}
          <Link href="/blog" style={{ color: "#C9A96A" }}>
            Back to all articles
          </Link>
        </p>
      </article>
    </div>
  );
}
