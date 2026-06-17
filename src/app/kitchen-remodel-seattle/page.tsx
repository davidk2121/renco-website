import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Remodel Seattle & King County | RENCO LLC",
  description:
    "Custom kitchen remodeling in Seattle and King County. Cabinets, countertops, islands & full redesigns. 200+ projects, 5.0★ rated. Get a free estimate.",
};

export default function KitchenRemodelSeattle() {
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
          Kitchen Remodel<br />
          <span style={{ color: "#C9A96A" }}>Seattle</span>
        </h1>
        <p className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#9A9388" }}>
          The kitchen is the heart of your home — and Seattle homeowners deserve a space
          that matches how they actually live. RENCO delivers custom kitchen remodels
          with premium materials, honest pricing, and a 5.0★ reputation built across
          200+ projects.
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
              title: "200+ Projects Completed",
              body:
                "We&rsquo;ve remodeled kitchens across Seattle, Bellevue, Renton, and the Eastside. That depth of experience means we anticipate problems before they arise — and we know exactly how to make a Seattle kitchen work for Pacific Northwest living.",
            },
            {
              title: "One Team. One Vision.",
              body:
                "No juggling five different subcontractors. RENCO manages every phase of your kitchen remodel in-house, so your project stays on schedule and on budget. You have one point of contact from demo day to final walkthrough.",
            },
            {
              title: "Premium Materials, Honest Pricing",
              body:
                "We source quality cabinets, countertops, and hardware and we'll tell you exactly what things cost — before we start. No lowball bids that balloon at rough-in. No surprises on your final invoice.",
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
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "#9A9388" }}
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
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
            Whether you want a targeted upgrade or a full gut-and-rebuild, RENCO handles
            every element of your Seattle kitchen remodel — design through final inspection.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Custom and semi-custom cabinet design & installation",
              "Quartz, marble, granite, and butcher block countertops",
              "Kitchen islands with seating and integrated storage",
              "Full layout redesigns and wall removals",
              "Tile backsplash — subway, zellige, handmade tile",
              "Appliance integration and built-in panel kits",
              "Under-cabinet lighting and recessed ceiling lighting",
              "Plumbing relocations and sink/faucet upgrades",
              "Hardwood, tile, and LVP flooring",
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
          Let&rsquo;s Build Your Dream Kitchen
        </h2>
        <p className="font-body text-lg mb-10" style={{ color: "#9A9388" }}>
          Seattle homeowners deserve a kitchen that&rsquo;s beautiful, functional, and built to
          last. RENCO brings 200+ projects of experience to yours — and every estimate
          is completely free.
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
