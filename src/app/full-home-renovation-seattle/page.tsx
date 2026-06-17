import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full Home Renovation Seattle | RENCO LLC — Licensed Contractor",
  description:
    "Complete home renovations in Seattle & greater King County. One contractor, one vision. 200+ projects completed. 5.0★ rated. Get your free estimate.",
};

export default function FullHomeRenovationSeattle() {
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
          Seattle &amp; King County, WA
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6" style={{ color: "#F2EDE4" }}>
          Full Home Renovation<br />
          <span style={{ color: "#C9A96A" }}>Seattle</span>
        </h1>
        <p className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#9A9388" }}>
          Transforming a whole home takes more than skill — it takes a contractor you
          can trust with your biggest investment. RENCO has completed 200+ projects
          across Seattle and King County, with a 5.0★ reputation that speaks for itself.
          One team. One vision. Your home, reimagined.
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
          Why Seattle Homeowners Trust RENCO for Whole-Home Renovations
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "One Contractor, Every Phase",
              body:
                "Managing multiple contractors is a full-time job most homeowners don't have time for. RENCO handles your kitchen, bathrooms, living spaces, and exterior under one contract — one schedule, one budget, zero chaos.",
            },
            {
              title: "200+ Completed Projects",
              body:
                "We've renovated craftsman bungalows in Ballard, mid-century homes on Mercer Island, and new builds in Bellevue. That experience translates to better problem-solving, faster timelines, and fewer surprises for you.",
            },
            {
              title: "Transparent Process, Start to Finish",
              body:
                "Before a single wall comes down, you'll have a detailed scope, a clear timeline, and a fixed price you can rely on. We communicate proactively and document every decision — because big renovations deserve big accountability.",
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
            What a RENCO Full Home Renovation Includes
          </h2>
          <p className="font-body mb-10" style={{ color: "#9A9388" }}>
            Whether you&rsquo;re refreshing a recently purchased fixer-upper or finally
            overhauling the home you&rsquo;ve lived in for years, RENCO covers every room and
            every trade — so you don&rsquo;t have to.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Full kitchen remodels — layout, cabinets, countertops, appliances",
              "Primary and secondary bathroom renovations",
              "Open-concept conversions and structural wall removal",
              "Flooring throughout — hardwood, tile, LVP",
              "Interior doors, trim, baseboards, and millwork",
              "Painting — interior and exterior",
              "Exterior siding, windows, and entry door replacement",
              "Deck and outdoor living additions",
              "Electrical panel upgrades and full rewires",
              "All permits, inspections, and code compliance",
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
          Your Seattle Home Deserves a Full Transformation
        </h2>
        <p className="font-body text-lg mb-10" style={{ color: "#9A9388" }}>
          Don&rsquo;t settle for a patched-together renovation with five different contractors.
          RENCO handles your full home renovation under one roof — and we stand behind
          every square foot of it. Let&rsquo;s talk about your vision.
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
