import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exterior Remodel Gig Harbor & Pierce County | RENCO LLC",
  description:
    "Exterior remodeling in Gig Harbor and Pierce County. Siding, windows, doors, decks. Licensed & insured. 5.0★ Google rating. Free estimate.",
};

export default function ExteriorRemodelGigHarbor() {
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
          Gig Harbor &amp; Pierce County, WA
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6" style={{ color: "#F2EDE4" }}>
          Exterior Remodel<br />
          <span style={{ color: "#C9A96A" }}>Gig Harbor</span>
        </h1>
        <p className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#9A9388" }}>
          Your home&rsquo;s exterior faces Washington&rsquo;s rain, wind, and damp winters every
          single day. RENCO installs exteriors built to perform — and look stunning
          while doing it. Serving Gig Harbor, Pierce County, and the Key Peninsula.
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
          Why Gig Harbor Homeowners Choose RENCO for Exteriors
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Built for the Pacific Northwest",
              body:
                "Gig Harbor's maritime climate demands materials and installation methods that hold up to moisture and temperature swings. We specify the right products for this environment — not whatever's cheapest at the supply house.",
            },
            {
              title: "Licensed, Insured, Permit-Ready",
              body:
                "Every exterior remodel we touch is permitted correctly through Pierce County or Gig Harbor's building department. We manage the paperwork so you don't have to, and inspections pass the first time.",
            },
            {
              title: "Curb Appeal That Adds Real Value",
              body:
                "A RENCO exterior remodel isn't just maintenance — it's an investment. New siding, windows, and a front entry can dramatically increase resale value and make coming home feel like arriving somewhere special.",
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
            Exterior Services We Provide
          </h2>
          <p className="font-body mb-10" style={{ color: "#9A9388" }}>
            From full siding replacements to new decks and entry doors, RENCO handles
            your exterior from the ground up — with the same attention to detail we bring
            to every interior project.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Fiber cement siding (James Hardie) installation & replacement",
              "Wood, LP SmartSide, and composite siding options",
              "Window replacement — vinyl, wood-clad, and fiberglass",
              "Entry door and patio door replacement",
              "Deck construction, replacement, and refinishing",
              "Covered porch and pergola additions",
              "Exterior trim, fascia, and soffit work",
              "Exterior painting and color consultation",
              "Garage door and surround updates",
              "Permits and inspections managed start to finish",
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
          Time to Love Your Home&rsquo;s Exterior Again?
        </h2>
        <p className="font-body text-lg mb-10" style={{ color: "#9A9388" }}>
          Don&rsquo;t let another Gig Harbor winter take a toll on worn siding or drafty
          windows. RENCO delivers exterior remodels that protect, perform, and turn
          heads. Estimates are always free.
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
          to learn more.
        </p>
      </section>
    </div>
  );
}
