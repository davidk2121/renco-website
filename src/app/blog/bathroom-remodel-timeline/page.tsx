import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Does a Bathroom Remodel Take? A Realistic Timeline | RENCO LLC",
  description:
    "Most bathroom remodels take 3–6 weeks from demo to final walkthrough. Here's a phase-by-phase breakdown of what to expect — and what causes delays.",
};

const phases = [
  {
    phase: "Planning & Design",
    duration: "2–4 weeks",
    details:
      "Before a single tile is touched, you need a finalized design, material selections, a signed contract, and a permit application submitted. Skipping or rushing this phase is the most common cause of mid-project delays. At RENCO, we don't start demo until every selection is locked in and materials are ordered.",
  },
  {
    phase: "Demolition",
    duration: "1–3 days",
    details:
      "Removing old tile, the vanity, tub or shower surround, and flooring typically takes one to three days depending on bathroom size and complexity. A good demo crew protects your floors and surrounding rooms — this isn't a race.",
  },
  {
    phase: "Rough Work: Plumbing & Electrical",
    duration: "3–5 days",
    details:
      "Any plumbing relocations, new supply/drain rough-in, electrical circuit additions, and exhaust fan wiring happen before walls close. This phase requires a rough inspection from the building department before proceeding — budget time for that inspection appointment.",
  },
  {
    phase: "Tile & Waterproofing",
    duration: "5–10 days",
    details:
      "Waterproofing the shower walls and floor, setting tile, and grouting is the most labor-intensive phase of most bathroom remodels. Large-format tile, intricate patterns, and natural stone all take longer. Don't let anyone rush this phase — waterproofing done wrong becomes a six-figure mold remediation.",
  },
  {
    phase: "Fixtures, Vanity & Finishes",
    duration: "3–5 days",
    details:
      "Setting the vanity and countertop, installing the toilet, hanging mirrors and light fixtures, caulking, and final trim work. This phase is satisfying to watch — the room comes together quickly once tile is cured and ready.",
  },
];

export default function BathroomRemodelTimeline() {
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
          / Timeline Guide
        </p>

        <p className="font-body text-sm mb-3" style={{ color: "#6B6560" }}>
          May 20, 2025
        </p>
        <h1
          className="font-display text-3xl md:text-4xl leading-tight mb-8"
          style={{ color: "#F2EDE4" }}
        >
          How Long Does a Bathroom Remodel Take? A Realistic Timeline
        </h1>

        <div className="font-body text-base leading-relaxed space-y-6" style={{ color: "#9A9388" }}>
          <p>
            The most common timeline expectation we hear from homeowners: &ldquo;Can you get it
            done in two weeks?&rdquo; The realistic answer for most bathroom remodels is{" "}
            <strong style={{ color: "#F2EDE4" }}>3–6 weeks from demo to final walkthrough</strong> —
            and that&rsquo;s if planning is done before the first tool comes out. Here&rsquo;s
            what each phase actually looks like.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-6" style={{ color: "#F2EDE4" }}>
            Phase-by-Phase Breakdown
          </h2>

          <div className="space-y-6">
            {phases.map((item, i) => (
              <div
                key={item.phase}
                className="p-6 rounded-lg"
                style={{ background: "#161616", border: "1px solid #2a2a2a" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="font-display text-sm"
                    style={{ color: "#C9A96A" }}
                  >
                    Phase {i + 1}
                  </span>
                  <span
                    className="font-body text-xs px-2 py-1 rounded"
                    style={{ background: "#0E0E0E", color: "#C9A96A", border: "1px solid #C9A96A" }}
                  >
                    {item.duration}
                  </span>
                </div>
                <h3 className="font-display text-xl mb-2" style={{ color: "#F2EDE4" }}>
                  {item.phase}
                </h3>
                <p style={{ color: "#9A9388" }}>{item.details}</p>
              </div>
            ))}
          </div>

          <div
            className="p-5 rounded-lg mt-4"
            style={{ background: "#1a1a1a", border: "1px solid #C9A96A" }}
          >
            <p className="font-display text-lg" style={{ color: "#C9A96A" }}>
              Total: 3–6 weeks for most projects
            </p>
            <p className="font-body text-sm mt-1" style={{ color: "#9A9388" }}>
              Larger bathrooms, extensive tile work, or layout changes can extend this.
              A primary suite bath with a full tile shower, soaking tub, and dual vanity
              may run 6–8 weeks when done right.
            </p>
          </div>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            What Causes Delays — And How RENCO Prevents Them
          </h2>

          <ul className="space-y-4 list-none pl-0">
            {[
              {
                cause: "Material back-orders",
                fix: "We order all materials before demo begins. No surprises mid-project.",
              },
              {
                cause: "Permit inspection wait times",
                fix: "We submit permit applications during the planning phase so inspections land on schedule.",
              },
              {
                cause: "Scope changes after demo starts",
                fix: "We set scope in detail before starting. Change orders happen occasionally, but they're documented and priced before work proceeds.",
              },
              {
                cause: "Hidden water damage or mold",
                fix: "We always carry a contingency conversation with homeowners upfront. If we find damage during demo, you know about it immediately with options and pricing.",
              },
            ].map((item) => (
              <li key={item.cause} className="flex items-start gap-3">
                <span style={{ color: "#C9A96A", flexShrink: 0, marginTop: "3px" }}>✦</span>
                <span>
                  <strong style={{ color: "#F2EDE4" }}>{item.cause}:</strong> {item.fix}
                </span>
              </li>
            ))}
          </ul>

          <p>
            The contractors who quote 10 days for a full bathroom remodel are either
            skipping phases, cutting corners on cure times, or setting you up for a
            change-order conversation after demo. A realistic timeline protects your
            home and your sanity.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-14 p-8 rounded-lg text-center"
          style={{ background: "#111111", border: "1px solid #2a2a2a" }}
        >
          <h3 className="font-display text-2xl mb-3" style={{ color: "#F2EDE4" }}>
            Want a Timeline for Your Specific Project?
          </h3>
          <p className="font-body mb-6" style={{ color: "#9A9388" }}>
            RENCO provides free estimates that include a realistic project schedule —
            not just a number, but a plan. Serving Gig Harbor, Seattle, and surrounding areas.
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
