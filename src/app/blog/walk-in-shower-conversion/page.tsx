import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Thinking about converting your tub to a walk-in shower? Costs, timeline, waterproofing done right, and aging-in-place design — a guide for Gig Harbor homeowners.";
const title =
  "Tub-to-Walk-In Shower Conversion: What Gig Harbor Homeowners Should Know | RENCO LLC";
const url = "https://renco.co/blog/walk-in-shower-conversion";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog/walk-in-shower-conversion",
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
  headline:
    "Tub-to-Walk-In Shower Conversion: What Gig Harbor Homeowners Should Know",
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
      name: "Tub-to-Walk-In Shower Conversion",
      item: url,
    },
  ],
};

export default function WalkInShowerConversion() {
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
          / Bathroom Guide
        </p>

        <p className="font-body text-sm mb-3" style={{ color: "#6B6560" }}>
          June 20, 2026
        </p>
        <h1
          className="font-display text-3xl md:text-4xl leading-tight mb-8"
          style={{ color: "#F2EDE4" }}
        >
          Tub-to-Walk-In Shower Conversion: What Gig Harbor Homeowners Should Know
        </h1>

        <div
          className="font-body text-base leading-relaxed space-y-6"
          style={{ color: "#9A9388" }}
        >
          <p>
            It&rsquo;s one of the most common requests we hear on{" "}
            <Link href="/bathroom-remodel-gig-harbor" style={{ color: "#C9A96A" }}>
              bathroom remodels in Gig Harbor
            </Link>
            : &ldquo;Can we get rid of the tub and put in a walk-in shower?&rdquo; The
            short answer is almost always yes — and done well, it&rsquo;s one of the
            best upgrades a bathroom can get. Here&rsquo;s what to know before you
            start.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            Why So Many Homeowners Are Converting
          </h2>
          <ul className="space-y-3 list-none pl-0">
            {[
              "Nobody's using the tub — surveys consistently show most adults shower daily and bathe a few times a year at most",
              "A walk-in shower makes a small bathroom feel dramatically larger, especially with frameless glass",
              "Stepping over a 15-inch tub wall is the single most common fall hazard in the home for older adults",
              "A tiled walk-in shower with a glass enclosure simply looks better — it's the centerpiece of every modern bathroom design",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: "#C9A96A", flexShrink: 0, marginTop: "2px" }}>✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            One caveat: if your home has only one bathroom, keeping at least one
            tub in the house helps resale value for families with young kids. If
            you have two or more bathrooms, convert away — buyers today prefer a
            walk-in shower in the primary bath.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            What a Conversion Costs
          </h2>
          <p>
            In the Gig Harbor and greater Pierce County area, a quality
            tub-to-shower conversion typically runs{" "}
            <em style={{ color: "#F2EDE4" }}>$12,000 to $25,000</em>, depending on
            tile selection, glass, and plumbing changes. A basic conversion with
            a prefab pan and standard tile sits at the lower end; a fully tiled,
            curbless shower with frameless glass, a niche, and a rain head plus
            handheld sits at the top. Beware of &ldquo;one-day bath&rdquo; conversions
            advertised at low prices — an acrylic liner glued over old
            construction hides problems rather than fixing them.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            Timeline: About Two to Three Weeks
          </h2>
          <p>
            A typical conversion takes 2–3 weeks: demo and plumbing rough-in in
            the first few days, then waterproofing, tile, and grout through the
            second week. Frameless glass is measured after tile is complete and
            takes about a week to fabricate — so the glass usually arrives as the
            final step. If you&rsquo;re remodeling the whole bathroom around it,
            see our{" "}
            <Link href="/blog/bathroom-remodel-timeline" style={{ color: "#C9A96A" }}>
              full bathroom remodel timeline guide
            </Link>
            .
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            Waterproofing Is Where Conversions Live or Die
          </h2>
          <p>
            This is the part you can&rsquo;t see in the finished photos — and the
            part that matters most. Tile and grout are not waterproof. Behind
            them there must be a continuous waterproofing system: a properly
            sloped pan, sealed corners and seams, and a membrane (we use
            Schluter-style bonded membranes or liquid-applied systems) that
            carries water to the drain no matter what. In our damp Pacific
            Northwest climate, a shortcut here means rot, mold, and a subfloor
            repair bill a few years down the road. Ask any contractor bidding
            your conversion to explain — specifically — their waterproofing
            system. If the answer is vague, keep looking.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            Designing for Aging in Place
          </h2>
          <p>
            Many Gig Harbor homeowners plan to stay in their homes for decades —
            and a conversion is the perfect moment to build in quiet,
            good-looking safety. A curbless (zero-entry) shower eliminates the
            step entirely. Blocking installed in the walls during framing lets
            grab bars be added later without tearing out tile. A built-in bench,
            a handheld sprayer, and slip-resistant mosaic floor tile round it
            out. None of it looks &ldquo;medical&rdquo; — it just looks like a
            beautifully designed shower that happens to work for every decade of
            your life.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            Do It Once, Do It Right
          </h2>
          <p>
            A tub-to-shower conversion touches plumbing, framing, waterproofing,
            tile, and glass — five trades in a 40-square-foot space. The
            difference between a conversion that lasts thirty years and one that
            leaks in three is entirely in the details you can&rsquo;t see. That&rsquo;s
            exactly the kind of work RENCO builds its 5.0★ reputation on.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-14 p-8 rounded-lg text-center"
          style={{ background: "#111111", border: "1px solid #2a2a2a" }}
        >
          <h3 className="font-display text-2xl mb-3" style={{ color: "#F2EDE4" }}>
            Ready to Lose the Tub?
          </h3>
          <p className="font-body mb-6" style={{ color: "#9A9388" }}>
            RENCO builds fully waterproofed, custom-tiled walk-in showers across
            Gig Harbor, Tacoma, and Pierce County. Estimates are free and
            no-pressure.
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
