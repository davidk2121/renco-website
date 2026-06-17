import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bathroom Remodel Gig Harbor | RENCO LLC — 5.0★ Rated",
  description:
    "Expert bathroom remodeling in Gig Harbor, WA. Custom tile, walk-in showers, vanities & more. Licensed, family-owned, 5.0★ on Google. Free estimate.",
};

export default function BathroomRemodelGigHarbor() {
  return (
    <div style={{ background: "#0E0E0E", color: "#F2EDE4", minHeight: "100vh" }}>
      {/* Header Nav */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
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

      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <p className="font-body text-sm tracking-widest uppercase mb-4" style={{ color: "#C9A96A" }}>
          Gig Harbor, WA
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6" style={{ color: "#F2EDE4" }}>
          Bathroom Remodel<br />
          <span style={{ color: "#C9A96A" }}>Gig Harbor</span>
        </h1>
        <p className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#9A9388" }}>
          Your bathroom should feel like a retreat — not an afterthought. RENCO brings
          expert craftsmanship, clean project management, and a 5.0★ track record to
          every bathroom remodel in Gig Harbor and the surrounding Peninsula.
        </p>
        <Link
          href="/#estimate"
          className="font-body inline-block px-8 py-4 rounded text-base"
          style={{ background: "#C9A96A", color: "#0E0E0E", fontWeight: 700 }}
        >
          Get Free Estimate
        </Link>
      </section>

      {/* Why RENCO */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-14" style={{ color: "#F2EDE4" }}>
          Why Gig Harbor Homeowners Choose RENCO
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "5.0★ on Google — Every Review",
              body:
                "We've earned a perfect rating across 19+ verified Google reviews. Our reputation is built project by project, homeowner by homeowner. We don't cut corners and we don't disappear after the check clears.",
            },
            {
              title: "Licensed, Insured & Local",
              body:
                "RENCO is a Washington State licensed contractor. We know Gig Harbor's permit process, local inspectors, and what it takes to build right for the Pacific Northwest climate. No out-of-state crews, no surprises.",
            },
            {
              title: "Family-Owned, Faith-Driven",
              body:
                "We treat your home the way we'd treat our own. Every detail matters to us — because we believe the work we do is a reflection of who we are. Honest pricing, clear timelines, zero disappearing acts.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-lg"
              style={{ background: "#161616", border: "1px solid #2a2a2a" }}
            >
              <h3 className="font-display text-xl mb-3" style={{ color: "#C9A96A" }}>
                {item.title}
              </h3>
              <p className="font-body text-base leading-relaxed" style={{ color: "#9A9388" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Included */}
      <section className="px-6 py-20" style={{ background: "#111111" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: "#F2EDE4" }}>
            What&rsquo;s Included in a RENCO Bathroom Remodel
          </h2>
          <p className="font-body mb-10" style={{ color: "#9A9388" }}>
            From a simple refresh to a full spa transformation, we handle every phase
            in-house so you deal with one team, one schedule, and one point of contact.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Custom tile work — floors, walls, and shower surrounds",
              "Walk-in showers with frameless glass enclosures",
              "Freestanding and built-in soaking tubs",
              "Floating and custom vanities with quartz/marble tops",
              "Heated tile floors and radiant heat systems",
              "Full plumbing relocations and fixture upgrades",
              "Recessed lighting, exhaust fans, and electrical work",
              "Waterproofing and moisture barrier installation",
              "Niche shelves, built-in storage, and accessibility features",
              "Permits pulled and inspections managed by RENCO",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-body" style={{ color: "#F2EDE4" }}>
                <span style={{ color: "#C9A96A", marginTop: "2px", flexShrink: 0 }}>✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl mb-6" style={{ color: "#F2EDE4" }}>
          Ready to Transform Your Bathroom?
        </h2>
        <p className="font-body text-lg mb-10" style={{ color: "#9A9388" }}>
          Gig Harbor homeowners trust RENCO for bathroom remodels that hold up, look
          stunning, and get done on time. Let&rsquo;s talk about your project — estimates
          are always free and there&rsquo;s no pressure.
        </p>
        <Link
          href="/#estimate"
          className="font-body inline-block px-10 py-4 rounded text-base mb-6"
          style={{ background: "#C9A96A", color: "#0E0E0E", fontWeight: 700 }}
        >
          Get Your Free Estimate
        </Link>
        <p className="font-body text-sm" style={{ color: "#6B6560" }}>
          Or{" "}
          <Link href="/" style={{ color: "#C9A96A" }}>
            return to the RENCO homepage
          </Link>{" "}
          to see our full range of services.
        </p>
      </section>
    </div>
  );
}
