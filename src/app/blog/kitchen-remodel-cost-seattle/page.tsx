import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Seattle kitchen remodels range from $20-40K for a refresh to $80K+ for high-end builds. See what drives cost — cabinets, countertops, layout changes, and permits.";
const title =
  "How Much Does a Kitchen Remodel Cost in Seattle? (2026 Guide) | RENCO LLC";
const url = "https://renco.co/blog/kitchen-remodel-cost-seattle";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog/kitchen-remodel-cost-seattle",
  },
  openGraph: {
    title,
    description,
    type: "article",
    url,
    siteName: "RENCO LLC",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How Much Does a Kitchen Remodel Cost in Seattle? (2026 Guide)",
  description,
  image: "https://renco.co/og-image.png",
  datePublished: "2026-06-20",
  author: {
    "@type": "Organization",
    name: "RENCO LLC",
    url: "https://renco.co",
  },
  publisher: {
    "@type": "Organization",
    name: "RENCO LLC",
    logo: {
      "@type": "ImageObject",
      url: "https://renco.co/og-image.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://renco.co" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://renco.co/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kitchen Remodel Cost in Seattle",
      item: url,
    },
  ],
};

export default function KitchenRemodelCostSeattle() {
  return (
    <div style={{ background: "#0E0E0E", color: "#F2EDE4", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
          / Cost Guide
        </p>

        <p className="font-body text-sm mb-3" style={{ color: "#6B6560" }}>
          June 20, 2026
        </p>
        <h1
          className="font-display text-3xl md:text-4xl leading-tight mb-8"
          style={{ color: "#F2EDE4" }}
        >
          How Much Does a Kitchen Remodel Cost in Seattle? (2026 Guide)
        </h1>

        <div
          className="font-body text-base leading-relaxed space-y-6"
          style={{ color: "#9A9388" }}
        >
          <p>
            Kitchen remodels are the most-searched, most-quoted, and most
            misunderstood project in home renovation — and Seattle prices carry
            their own premium on top of national averages. Here&rsquo;s a straight
            answer to what a{" "}
            <Link href="/kitchen-remodel-seattle" style={{ color: "#C9A96A" }}>
              kitchen remodel in Seattle
            </Link>{" "}
            actually costs in 2026, and where every dollar goes.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            The Three Cost Tiers
          </h2>

          <div className="space-y-5">
            <div
              className="p-5 rounded-lg"
              style={{ background: "#161616", border: "1px solid #2a2a2a" }}
            >
              <h3 className="font-display text-lg mb-1" style={{ color: "#C9A96A" }}>
                Refresh — $20,000–$40,000
              </h3>
              <p>
                The kitchen keeps its layout. You get new countertops, a tile
                backsplash, painted or refaced cabinets, updated lighting, new
                sink and faucet, and often new flooring. This is the sweet spot
                for Seattle homeowners whose kitchen works fine but looks fifteen
                years out of date — and it delivers the biggest visual change per
                dollar.
              </p>
            </div>
            <div
              className="p-5 rounded-lg"
              style={{ background: "#161616", border: "1px solid #2a2a2a" }}
            >
              <h3 className="font-display text-lg mb-1" style={{ color: "#C9A96A" }}>
                Mid-Range Remodel — $40,000–$80,000
              </h3>
              <p>
                New semi-custom cabinetry, quartz counters, new appliances, tile
                work, lighting, and flooring — with modest layout tweaks like
                adding an island or relocating the sink within the same wall.
                Most full Seattle kitchen remodels land in this tier. It&rsquo;s a
                complete transformation without the structural work.
              </p>
            </div>
            <div
              className="p-5 rounded-lg"
              style={{ background: "#161616", border: "1px solid #2a2a2a" }}
            >
              <h3 className="font-display text-lg mb-1" style={{ color: "#C9A96A" }}>
                High-End — $80,000+
              </h3>
              <p>
                Custom cabinetry, wall removal for open-concept living, pro-style
                appliance packages, natural stone or quartzite counters, and
                designer lighting. Once you remove a load-bearing wall or move
                gas and plumbing lines, engineering and permit costs stack on
                top of materials — and in older Seattle homes, hidden conditions
                behind walls add contingency.
              </p>
            </div>
          </div>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            Cabinets vs. Countertops vs. Layout: Where the Money Goes
          </h2>
          <p>
            Cabinetry is almost always the single largest line item — typically
            25 to 35 percent of the total budget. Stock cabinets might run
            $8,000–$15,000 installed; custom cabinetry can exceed $40,000 on its
            own. Countertops are the second big swing: laminate is a few thousand
            dollars, quartz commonly runs $4,000–$10,000 installed, and exotic
            quartzite or marble goes well beyond that.
          </p>
          <p>
            But the stealth budget-maker is <em style={{ color: "#F2EDE4" }}>layout</em>.
            Keeping your sink, range, and refrigerator where they are keeps
            plumbing, gas, venting, and electrical costs minimal. Move them —
            or take out a wall — and you add trades, engineering, drywall,
            flooring patches, and permit scope. A good rule: changing the layout
            adds 20 to 40 percent to an otherwise identical kitchen.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            What Else Drives Seattle Kitchen Costs
          </h2>
          <ul className="space-y-3 list-none pl-0">
            {[
              "Labor rates — Seattle trades are among the most expensive in the country, and good crews book out months ahead",
              "Appliances — a builder-grade package is $4K–$8K; a pro-style range and panel-ready fridge can be $20K+ alone",
              "Older homes — pre-1970 houses in Wallingford, Ravenna, or West Seattle often need electrical panel upgrades or plumbing corrections discovered during demo",
              "Material lead times — custom cabinets typically run 8–12 weeks from order, which affects scheduling more than price",
              "Finishes — handmade tile, brass fixtures, and specialty lighting add up faster than most homeowners expect",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: "#C9A96A", flexShrink: 0, marginTop: "2px" }}>✦</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            Don&rsquo;t Forget Permits
          </h2>
          <p>
            In Seattle, kitchen remodels that touch plumbing, electrical, or
            walls need permits through the Seattle Department of Construction
            and Inspections. Budget roughly $1,000–$3,000 for typical kitchen
            permit scope, more if structural plans are required. It&rsquo;s not the
            place to save money: unpermitted kitchen work is one of the most
            common red flags on Seattle home inspections and can stall a sale.
            (More on this in our{" "}
            <Link href="/blog/remodel-permits-washington" style={{ color: "#C9A96A" }}>
              Washington remodel permit guide
            </Link>
            .)
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            How to Budget Smart
          </h2>
          <p>
            Decide your tier first, then pick your splurge. A mid-range kitchen
            with one high-end statement — a stunning island top, a custom range
            wall — reads far more luxurious than a thinly-spread budget. And
            always carry a 10–15 percent contingency, especially in older Seattle
            housing stock. A contractor who scopes carefully up front will need
            less of it; a contractor who bids vague will consume all of it and
            then some.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-14 p-8 rounded-lg text-center"
          style={{ background: "#111111", border: "1px solid #2a2a2a" }}
        >
          <h3 className="font-display text-2xl mb-3" style={{ color: "#F2EDE4" }}>
            Get a Real Number for Your Kitchen
          </h3>
          <p className="font-body mb-6" style={{ color: "#9A9388" }}>
            RENCO provides free, itemized estimates for kitchen remodels across
            Seattle, King County, and the Gig Harbor peninsula. No pressure — just
            a clear scope and an honest price.
          </p>
          <Link
            href="/#estimate"
            className="font-body inline-block px-8 py-4 rounded"
            style={{ background: "#C9A96A", color: "#0E0E0E", fontWeight: 700 }}
          >
            Get Your Free Estimate
          </Link>
        </div>

        {/* Back to blog */}
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
