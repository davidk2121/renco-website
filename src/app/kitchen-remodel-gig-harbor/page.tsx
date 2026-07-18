import type { Metadata } from "next";
import Link from "next/link";

const title = "Kitchen Remodel Gig Harbor | RENCO LLC — Local & Trusted";
const description =
  "Kitchen remodeling in Gig Harbor, WA by a local family-owned contractor. Open layouts, custom cabinetry, islands built for entertaining & view homes. 5.0★ on Google.";
const url = "https://renco.co/kitchen-remodel-gig-harbor";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/kitchen-remodel-gig-harbor",
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
  serviceType: "Kitchen Remodeling",
  name: "Kitchen Remodel in Gig Harbor",
  description,
  provider: {
    "@type": "GeneralContractor",
    name: "RENCO LLC",
    telephone: "+12533892606",
    url: "https://renco.co",
  },
  areaServed: [
    { "@type": "City", name: "Gig Harbor" },
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
      name: "Kitchen Remodel Gig Harbor",
      item: url,
    },
  ],
};

const faqs = [
  {
    q: "How much does a kitchen remodel cost in Gig Harbor?",
    a: "Most full kitchen remodels in Gig Harbor land between $40,000 and $80,000, depending on cabinetry, appliances, and whether the layout changes. A cosmetic refresh — new counters, backsplash, paint, and hardware — can come in well under that, while high-end custom kitchens with layout changes run higher. We give every homeowner a detailed, itemized estimate for free.",
  },
  {
    q: "Can you open up a closed-off kitchen to take advantage of our view?",
    a: "Very often, yes — and it's one of the most requested projects in Gig Harbor. Many homes here have water or mountain views that a wall between the kitchen and living room blocks entirely. We evaluate whether the wall is load-bearing, engineer a beam if needed, pull the Pierce County permits, and open the space safely.",
  },
  {
    q: "Can we live in our house during the kitchen remodel?",
    a: "Almost all of our Gig Harbor clients do. We set up a temporary kitchen space, seal off the work zone with dust barriers, keep water and power interruptions short and scheduled, and clean up daily. A typical full kitchen takes 6 to 10 weeks, and we keep you posted at every phase.",
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

export default function KitchenRemodelGigHarbor() {
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
          Gig Harbor, WA
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6" style={{ color: "#F2EDE4" }}>
          Kitchen Remodel<br />
          <span style={{ color: "#C9A96A" }}>Gig Harbor</span>
        </h1>
        <p className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#9A9388" }}>
          In Gig Harbor, the kitchen is where life happens — family dinners, holiday
          crowds, coffee with a view of the harbor. RENCO is your local, family-owned
          remodeler, building kitchens made for gathering: open layouts, generous
          islands, and craftsmanship that holds up to real life.
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
          Why Gig Harbor Families Choose RENCO for Their Kitchens
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "We Live Here Too",
              body:
                "RENCO is based in Gig Harbor. Vitaliy and David raise their families here, shop at the same grocery stores, and run into clients at the harbor. When your remodeler is a neighbor, accountability isn't a policy — it's personal.",
            },
            {
              title: "Kitchens Built for Entertaining",
              body:
                "Big islands with seating, walk-in pantries, beverage stations, and sight lines that keep the cook in the conversation. We design for the way Gig Harbor families actually host — from Sunday dinners to graduation parties.",
            },
            {
              title: "View Homes Are Our Sweet Spot",
              body:
                "A kitchen that turns its back on a Puget Sound view is a wasted kitchen. We reorient layouts, enlarge openings, and place windows and sinks so the water is part of your everyday — engineered, permitted, and done right.",
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
            What&rsquo;s Included in a RENCO Kitchen Remodel
          </h2>
          <p className="font-body mb-10" style={{ color: "#9A9388" }}>
            From first sketch to final walkthrough, one local team manages your entire
            kitchen — design, demo, trades, permits, and finish work.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Layout redesign and wall removal for open-concept living",
              "Custom and semi-custom cabinetry, built to the ceiling",
              "Oversized islands with seating, storage, and prep space",
              "Quartz, quartzite, and natural stone countertops",
              "Full-height tile backsplashes and statement range walls",
              "Appliance placement, gas, and electrical for pro-style ranges",
              "Walk-in pantries, coffee bars, and beverage centers",
              "Hardwood, LVP, and tile flooring installed seamlessly",
              "Layered lighting — recessed, pendant, and under-cabinet",
              "Pierce County permits and inspections handled by RENCO",
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
          Gig Harbor Kitchen Remodel FAQs
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
          Let&rsquo;s Build the Kitchen Your Home Deserves
        </h2>
        <p className="font-body text-lg mb-10" style={{ color: "#9A9388" }}>
          Your neighbors already trust us — 5.0★ on Google, 200+ projects, and a
          reputation built right here in Gig Harbor. Walk us through your kitchen and
          we&rsquo;ll give you a clear, honest estimate at no cost.
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
            <Link href="/kitchen-remodel-seattle" style={{ color: "#C9A96A" }}>
              Kitchen Remodeling in Seattle
            </Link>
          </li>
          <li>
            <Link href="/bathroom-remodel-gig-harbor" style={{ color: "#C9A96A" }}>
              Bathroom Remodeling in Gig Harbor
            </Link>
          </li>
          <li>
            <Link href="/blog/kitchen-remodel-cost-seattle" style={{ color: "#C9A96A" }}>
              How Much Does a Kitchen Remodel Cost? (2026 Guide)
            </Link>
          </li>
          <li>
            <Link href="/blog/questions-to-ask-contractor" style={{ color: "#C9A96A" }}>
              10 Questions to Ask Before Hiring a Contractor
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
