import type { Metadata } from "next";
import Link from "next/link";

const title = "Bathroom Remodel Seattle & King County | RENCO LLC";
const description =
  "Bathroom remodeling for Seattle condos, townhomes & houses. Space-smart design, Seattle permit expertise, custom tile & walk-in showers. Licensed WA contractor, 5.0★.";
const url = "https://renco.co/bathroom-remodel-seattle";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/bathroom-remodel-seattle",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url,
    siteName: "RENCO LLC",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bathroom Remodeling",
  name: "Bathroom Remodel in Seattle & King County",
  description,
  provider: {
    "@type": "GeneralContractor",
    name: "RENCO LLC",
    telephone: "+12533892606",
    url: "https://renco.co",
  },
  areaServed: [
    { "@type": "City", name: "Seattle" },
    { "@type": "AdministrativeArea", name: "King County" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://renco.co" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bathroom Remodel Seattle",
      item: url,
    },
  ],
};

const faqs = [
  {
    q: "Can you remodel a bathroom in a Seattle condo or townhome?",
    a: "Yes. Condo and townhome bathrooms are a specialty — we coordinate with your HOA or building management, follow building rules on work hours and elevator use, protect common areas, and design around shared plumbing stacks. Small-footprint bathrooms often gain the most from a smart remodel: better storage, a walk-in shower, and finishes that make the room feel twice the size.",
  },
  {
    q: "Do bathroom remodels in Seattle require a permit?",
    a: "Most do. The Seattle Department of Construction and Inspections (SDCI) requires permits whenever plumbing or electrical work goes beyond a simple fixture swap. RENCO handles the SDCI application, plumbing and electrical permits, and inspection scheduling, so your remodel is fully documented — something that matters a lot when you sell in Seattle's market.",
  },
  {
    q: "How long does a Seattle bathroom remodel take?",
    a: "A typical full bathroom remodel runs 3 to 5 weeks once materials are on site. Condo projects can add a little time for building logistics, and Seattle permit review adds lead time up front — which is why we get the paperwork moving while your tile and fixtures are on order, so the schedule stays tight.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BathroomRemodelSeattle() {
  return (
    <div style={{ background: "#0E0E0E", color: "#F2EDE4", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
          Seattle &amp; King County
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6" style={{ color: "#F2EDE4" }}>
          Bathroom Remodel<br />
          <span style={{ color: "#C9A96A" }}>Seattle &amp; King County</span>
        </h1>
        <p className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#9A9388" }}>
          From Capitol Hill condos to Ballard townhomes to single-family homes in
          West Seattle, square footage is precious in this city. RENCO designs and
          builds bathrooms that use every inch — and we handle the Seattle permit
          process so you don&rsquo;t have to learn it the hard way.
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
          Why Seattle Homeowners Choose RENCO
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Space Optimization Is Our Craft",
              body:
                "Seattle bathrooms are rarely big — so design matters more here than almost anywhere. Wall-hung vanities, recessed niches, curbless showers, and pocket doors can transform a 5x8 bathroom without moving a single wall. We design for how the space actually lives.",
            },
            {
              title: "We Speak SDCI",
              body:
                "Seattle's permitting is more involved than most cities in the region. We know what SDCI wants to see, which projects need plans, and how to keep inspections from stalling your schedule. Your remodel gets done legally, documented, and without permit drama.",
            },
            {
              title: "Condo & Townhome Ready",
              body:
                "HOA approvals, certificates of insurance, protected hallways, quiet hours — multi-family buildings have rules, and we follow them to the letter. Your neighbors barely know we're there; your bathroom says otherwise.",
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
            What&rsquo;s Included in a RENCO Seattle Bathroom Remodel
          </h2>
          <p className="font-body mb-10" style={{ color: "#9A9388" }}>
            One licensed team, one point of contact, one schedule — from the first
            design conversation through the final SDCI inspection sign-off.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Space-planning and layout design for small urban bathrooms",
              "Walk-in and curbless showers with frameless glass",
              "Wall-hung vanities and built-in storage that free up floor space",
              "Custom tile — large-format, zellige, and natural stone",
              "Full waterproofing systems built for daily use",
              "Plumbing and electrical upgrades to current Seattle code",
              "Ventilation and moisture control for condo and townhome baths",
              "Heated floors, backlit mirrors, and comfort details",
              "HOA coordination and building protection for multi-family projects",
              "SDCI permits and inspections handled start to finish",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-body" style={{ color: "#F2EDE4" }}>
                <span style={{ color: "#C9A96A", marginTop: "2px", flexShrink: 0 }}>✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-12" style={{ color: "#F2EDE4" }}>
          Seattle Bathroom Remodel FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="p-6 rounded-lg"
              style={{ background: "#161616", border: "1px solid #2a2a2a" }}
            >
              <summary className="font-display text-lg cursor-pointer" style={{ color: "#C9A96A" }}>
                {f.q}
              </summary>
              <p className="font-body mt-4 leading-relaxed" style={{ color: "#9A9388" }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl mb-6" style={{ color: "#F2EDE4" }}>
          Make Every Square Foot Count
        </h2>
        <p className="font-body text-lg mb-10" style={{ color: "#9A9388" }}>
          A well-designed bathroom is one of the highest-return upgrades in Seattle
          real estate — and one you get to enjoy every single day. Tell us about
          your space and we&rsquo;ll give you a free, detailed estimate.
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
          to see everything we do.
        </p>
      </section>

      {/* Related links */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <h2 className="font-display text-xl mb-5" style={{ color: "#F2EDE4" }}>
          Related Reading
        </h2>
        <ul className="space-y-3 font-body">
          <li>
            <Link href="/bathroom-remodel-tacoma" style={{ color: "#C9A96A" }}>
              Bathroom Remodeling in Tacoma
            </Link>
          </li>
          <li>
            <Link href="/full-home-renovation-seattle" style={{ color: "#C9A96A" }}>
              Full-Home Renovation in Seattle
            </Link>
          </li>
          <li>
            <Link href="/blog/remodel-permits-washington" style={{ color: "#C9A96A" }}>
              Do You Need a Permit to Remodel in Washington?
            </Link>
          </li>
          <li>
            <Link href="/blog/bathroom-remodel-timeline" style={{ color: "#C9A96A" }}>
              How Long Does a Bathroom Remodel Take?
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
