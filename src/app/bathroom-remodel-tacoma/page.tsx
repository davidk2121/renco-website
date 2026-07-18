import type { Metadata } from "next";
import Link from "next/link";

const title = "Bathroom Remodel Tacoma | RENCO LLC — 5.0★ Rated";
const description =
  "Bathroom remodeling in Tacoma, WA for older homes and dated bathrooms. Custom tile, walk-in showers, modern updates. Licensed Pierce County contractor, 5.0★ on Google.";
const url = "https://renco.co/bathroom-remodel-tacoma";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/bathroom-remodel-tacoma",
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
  name: "Bathroom Remodel in Tacoma",
  description,
  provider: {
    "@type": "GeneralContractor",
    name: "RENCO LLC",
    telephone: "+12533892606",
    url: "https://renco.co",
  },
  areaServed: [
    { "@type": "City", name: "Tacoma" },
    { "@type": "AdministrativeArea", name: "Pierce County" },
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
      name: "Bathroom Remodel Tacoma",
      item: url,
    },
  ],
};

const faqs = [
  {
    q: "How much does a bathroom remodel cost in Tacoma?",
    a: "Most Tacoma bathroom remodels fall between $15,000 and $35,000 for a full mid-range renovation — new tile, shower, vanity, and fixtures. Older Tacoma homes sometimes need updated plumbing or subfloor repair once demo opens the walls, which is why we scope thoroughly up front and give you a real number before work begins.",
  },
  {
    q: "Can you update the original bathroom in an older Tacoma home?",
    a: "Yes — that's a large part of what we do. Many North End, Proctor, and Stadium District homes still have their original cast-iron tubs, galvanized supply lines, and cramped layouts. We modernize the plumbing, waterproofing, and electrical to current code while giving the bathroom a design that fits the character of the house.",
  },
  {
    q: "Do I need a permit for a bathroom remodel in Tacoma?",
    a: "If the project involves plumbing, electrical, or structural changes — which almost every real remodel does — the City of Tacoma requires permits. RENCO pulls the permits, schedules the inspections, and handles the paperwork so the project is fully documented and problem-free at resale.",
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

export default function BathroomRemodelTacoma() {
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
          Tacoma, WA · Pierce County
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6" style={{ color: "#F2EDE4" }}>
          Bathroom Remodel<br />
          <span style={{ color: "#C9A96A" }}>Tacoma</span>
        </h1>
        <p className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#9A9388" }}>
          Tacoma is full of great houses with tired bathrooms. Whether you own a
          1920s Craftsman in the North End or a mid-century rambler near University
          Place, RENCO turns dated, cramped bathrooms into spaces that finally match
          the rest of your home — built right, permitted, and done on schedule.
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
          Why Tacoma Homeowners Trust RENCO
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "We Know Older Housing Stock",
              body:
                "Much of Tacoma was built before 1960 — which means galvanized pipes, knob-and-tube wiring, and layers of previous 'fixes' hiding behind the tile. Our crews expect it, plan for it, and price honestly for it, so demo day doesn't turn into a surprise invoice.",
            },
            {
              title: "Pierce County Is Home Turf",
              body:
                "RENCO is based just across the Narrows in Gig Harbor. We work in Tacoma constantly, know the City of Tacoma permit desk, and show up when we say we will. No Seattle markup, no crew driving in from two counties away.",
            },
            {
              title: "5.0★ Google Rating, 200+ Projects",
              body:
                "Every one of our 19+ Google reviews is five stars. We're a licensed and insured Washington contractor, family-owned by Vitaliy and David, and we build every project like our name is on it — because it is.",
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
            What a RENCO Bathroom Remodel in Tacoma Includes
          </h2>
          <p className="font-body mb-10" style={{ color: "#9A9388" }}>
            One team handles everything from demo to final inspection — especially
            important in older Tacoma homes, where plumbing, electrical, and framing
            often need attention at the same time.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Full demo and haul-away, including old cast-iron tubs",
              "Replacement of aging galvanized and copper supply lines",
              "Modern waterproofing systems behind every shower and tub",
              "Custom tile floors, walls, and shower surrounds",
              "Tub-to-walk-in-shower conversions with glass enclosures",
              "New vanities, quartz tops, and smart storage for small footprints",
              "Updated electrical — GFCI outlets, exhaust fans, recessed lighting",
              "Subfloor repair and leveling where old leaks left damage",
              "Heated floors and comfort upgrades",
              "City of Tacoma permits and inspections managed for you",
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
          Tacoma Bathroom Remodel FAQs
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
          Your Tacoma Bathroom Deserves Better
        </h2>
        <p className="font-body text-lg mb-10" style={{ color: "#9A9388" }}>
          Stop living with the bathroom the previous owner left behind. RENCO gives
          Tacoma homeowners honest scopes, clean job sites, and finished bathrooms
          worth showing off. Estimates are always free.
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

      {/* Related links */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <h2 className="font-display text-xl mb-5" style={{ color: "#F2EDE4" }}>
          Related Reading
        </h2>
        <ul className="space-y-3 font-body">
          <li>
            <Link href="/bathroom-remodel-gig-harbor" style={{ color: "#C9A96A" }}>
              Bathroom Remodeling in Gig Harbor
            </Link>
          </li>
          <li>
            <Link href="/bathroom-remodel-seattle" style={{ color: "#C9A96A" }}>
              Bathroom Remodeling in Seattle &amp; King County
            </Link>
          </li>
          <li>
            <Link href="/blog/walk-in-shower-conversion" style={{ color: "#C9A96A" }}>
              Tub-to-Walk-In Shower Conversion Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/bathroom-remodel-cost-gig-harbor" style={{ color: "#C9A96A" }}>
              How Much Does a Bathroom Remodel Cost?
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
