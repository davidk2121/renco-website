import type { Metadata } from "next";
import Link from "next/link";

const description =
  "When do you need a permit to remodel in Washington State? King vs. Pierce County processes, why unpermitted work hurts at resale, and how RENCO handles permits for you.";
const title =
  "Do You Need a Permit to Remodel in Washington State? | RENCO LLC";
const url = "https://renco.co/blog/remodel-permits-washington";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog/remodel-permits-washington",
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
  headline: "Do You Need a Permit to Remodel in Washington State?",
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
      name: "Remodel Permits in Washington",
      item: url,
    },
  ],
};

export default function RemodelPermitsWashington() {
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
          / Homeowner Guide
        </p>

        <p className="font-body text-sm mb-3" style={{ color: "#6B6560" }}>
          June 20, 2026
        </p>
        <h1
          className="font-display text-3xl md:text-4xl leading-tight mb-8"
          style={{ color: "#F2EDE4" }}
        >
          Do You Need a Permit to Remodel in Washington State?
        </h1>

        <div
          className="font-body text-base leading-relaxed space-y-6"
          style={{ color: "#9A9388" }}
        >
          <p>
            It&rsquo;s the question homeowners hope has an easy answer — and mostly, it
            does: <em style={{ color: "#F2EDE4" }}>if your remodel touches plumbing,
            electrical, or structure, you need a permit.</em> Here&rsquo;s how it
            actually works in Washington, how King and Pierce County differ, and
            why skipping permits is the most expensive money you&rsquo;ll ever
            &ldquo;save.&rdquo;
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            When Permits Are Required
          </h2>
          <p>
            Washington cities and counties enforce the state-adopted building
            codes, and the triggers are consistent almost everywhere:
          </p>
          <ul className="space-y-3 list-none pl-0">
            {[
              "Moving, adding, or replacing plumbing lines (not just swapping a faucet)",
              "New circuits, panel work, or relocated outlets and switches — most electrical beyond a like-for-like fixture swap",
              "Removing or modifying any wall, especially load-bearing ones",
              "Adding or enlarging windows and exterior doors",
              "Water heater replacement, new gas lines, and ductwork changes",
              "Additions, garage conversions, decks over 18 inches, and roof structure changes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: "#C9A96A", flexShrink: 0, marginTop: "2px" }}>✦</span>
                {item}
              </li>
            ))}
          </ul>
          <p>
            What generally <em style={{ color: "#F2EDE4" }}>doesn&rsquo;t</em> need a
            permit: paint, flooring, cabinets in the same location, trim,
            countertops, and direct like-for-like fixture replacement. In other
            words, a cosmetic refresh is usually permit-free; a real remodel
            almost never is.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            King County vs. Pierce County: What&rsquo;s Different
          </h2>
          <p>
            If you&rsquo;re inside Seattle city limits, permits go through the
            Seattle Department of Construction and Inspections (SDCI) — the most
            involved process in the region, with online submittal, plan review
            for anything structural, and busy inspection calendars. Suburban King
            County cities (Bellevue, Renton, Kirkland) each run their own permit
            desks with generally faster turnarounds; unincorporated King County
            goes through the county permitting division.
          </p>
          <p>
            On the Pierce County side — including Gig Harbor, Tacoma, and
            University Place — the process is typically simpler and quicker.
            Simple trade permits (plumbing, electrical) are often same-day or
            same-week, and full remodel permits usually clear review in a few
            weeks rather than a few months. Note that electrical permits in much
            of Washington run through the state Department of Labor &amp;
            Industries rather than the city — one more moving piece a good
            contractor tracks for you.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            Why Unpermitted Work Bites You at Resale
          </h2>
          <p>
            Here&rsquo;s where the &ldquo;we&rsquo;ll just skip the permit&rdquo; math falls
            apart. Washington&rsquo;s seller disclosure form (Form 17) asks directly
            whether work was done without permits — and lying on it creates
            legal liability. Buyers&rsquo; inspectors flag remodeled spaces with no
            permit history, appraisers may not count unpermitted square footage,
            and lenders and insurers can balk. In a hot market you might lose
            negotiating leverage; in a slow one you might lose the sale. Worst
            case, a county can require you to open walls to prove the work meets
            code — years after the remodel. A few hundred dollars in permit fees
            buys you a paper trail that protects your largest asset.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            How RENCO Handles Permits
          </h2>
          <p>
            Simply put: you never touch the paperwork. We determine what your
            project needs, prepare and submit the applications, coordinate any
            engineering, schedule every inspection, and meet the inspector on
            site. Because we work in these jurisdictions constantly — from
            Seattle&rsquo;s SDCI to the Gig Harbor and Pierce County permit desks —
            we know what each reviewer wants to see, which keeps approvals
            moving and your{" "}
            <Link href="/full-home-renovation-seattle" style={{ color: "#C9A96A" }}>
              renovation
            </Link>{" "}
            on schedule. When your project closes out, every permit is finaled
            and documented, so your remodel is an asset at resale instead of a
            liability.
          </p>

          <h2 className="font-display text-2xl mt-10 mb-3" style={{ color: "#F2EDE4" }}>
            The Bottom Line
          </h2>
          <p>
            If a contractor suggests skipping permits to save you money, that
            tells you everything about how they&rsquo;ll handle the parts of your
            project you can&rsquo;t see. Permits aren&rsquo;t red tape — they&rsquo;re
            independent verification that your home was built safely. Insist on
            them, and hire someone who treats them as routine.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-14 p-8 rounded-lg text-center"
          style={{ background: "#111111", border: "1px solid #2a2a2a" }}
        >
          <h3 className="font-display text-2xl mb-3" style={{ color: "#F2EDE4" }}>
            Remodel Right, Permits Included
          </h3>
          <p className="font-body mb-6" style={{ color: "#9A9388" }}>
            Every RENCO project in King and Pierce County includes full permit
            handling — applications, inspections, and final sign-off. Get a free
            estimate and let us deal with the paperwork.
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
