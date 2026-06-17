import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remodeling Blog | RENCO LLC",
  description:
    "Expert tips and guides on bathroom remodeling, kitchen renovations, and home improvement in Gig Harbor and Seattle.",
};

const posts = [
  {
    title: "How Much Does a Bathroom Remodel Cost in Gig Harbor? (2025 Guide)",
    href: "/blog/bathroom-remodel-cost-gig-harbor",
    date: "June 3, 2025",
    excerpt:
      "Costs vary widely depending on scope — from a $5K cosmetic refresh to a $50K+ spa transformation. Here's what Gig Harbor homeowners can realistically expect to pay, and what actually drives the price.",
  },
  {
    title: "How Long Does a Bathroom Remodel Take? A Realistic Timeline",
    href: "/blog/bathroom-remodel-timeline",
    date: "May 20, 2025",
    excerpt:
      "Most bathroom remodels take 3–6 weeks from demo to final walkthrough. But the real timeline depends on scope, material lead times, and your contractor's organization. Here's what to expect at each phase.",
  },
  {
    title: "10 Questions to Ask Before Hiring a Home Remodeling Contractor",
    href: "/blog/questions-to-ask-contractor",
    date: "May 8, 2025",
    excerpt:
      "Not all contractors are created equal. Before you sign anything, ask these ten questions — they'll help you separate the professionals from the ones you'll regret hiring.",
  },
];

export default function BlogIndex() {
  return (
    <div style={{ background: "#0E0E0E", color: "#F2EDE4", minHeight: "100vh" }}>
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

      {/* Page Header */}
      <section className="px-6 py-16 text-center max-w-3xl mx-auto">
        <p className="font-body text-sm tracking-widest uppercase mb-4" style={{ color: "#C9A96A" }}>
          Resources
        </p>
        <h1 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "#F2EDE4" }}>
          Remodeling Blog
        </h1>
        <p className="font-body text-lg" style={{ color: "#9A9388" }}>
          Honest guides on bathroom remodeling, kitchen renovations, and home improvement
          — written by the RENCO team for Gig Harbor and Seattle homeowners.
        </p>
      </section>

      {/* Posts */}
      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <article
              key={post.href}
              className="p-8 rounded-lg"
              style={{ background: "#111111", border: "1px solid #2a2a2a" }}
            >
              <p className="font-body text-sm mb-2" style={{ color: "#6B6560" }}>
                {post.date}
              </p>
              <h2 className="font-display text-2xl mb-3" style={{ color: "#F2EDE4" }}>
                <Link href={post.href} style={{ color: "#F2EDE4" }}>
                  {post.title}
                </Link>
              </h2>
              <p className="font-body mb-5 leading-relaxed" style={{ color: "#9A9388" }}>
                {post.excerpt}
              </p>
              <Link
                href={post.href}
                className="font-body text-sm font-semibold"
                style={{ color: "#C9A96A" }}
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-16 text-center" style={{ background: "#111111" }}>
        <p className="font-body text-lg mb-4" style={{ color: "#9A9388" }}>
          Ready to start your project? RENCO estimates are always free.
        </p>
        <Link
          href="/#estimate"
          className="font-body inline-block px-8 py-4 rounded"
          style={{ background: "#C9A96A", color: "#0E0E0E", fontWeight: 700 }}
        >
          Get Your Free Estimate
        </Link>
      </section>
    </div>
  );
}
