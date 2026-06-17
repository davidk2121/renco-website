export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="bg-[#0E0E0E] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div className="flex flex-col gap-6">
          <p className="text-xs font-body uppercase tracking-widest text-[#C9A96A]">
            Service Area
          </p>
          <div>
            <h2 className="font-display text-4xl text-[#F2EDE4]">
              We Come To You.
            </h2>
            <p className="font-display italic text-[#C9A96A] mt-2 text-lg">
              Wherever you are.
            </p>
          </div>
          <p className="font-body text-[#9A9388] leading-relaxed">
            Based in Gig Harbor and proudly serving the greater Seattle area.
            If you&apos;re in King or Pierce County, we&apos;ve got you covered.
          </p>
          <a
            href="tel:+12533892606"
            className="font-body text-[#C9A96A] hover:text-[#F2EDE4] transition-colors w-fit"
          >
            Call 253-389-2606
          </a>
        </div>

        {/* Right side — primary areas */}
        <div className="flex flex-col gap-4">
          <div className="border border-[rgba(201,169,106,0.4)] bg-[rgba(201,169,106,0.04)] px-6 py-5">
            <p className="text-xs font-body uppercase tracking-widest text-[#C9A96A] mb-1">
              Home Base
            </p>
            <p className="font-display text-2xl text-[#F2EDE4]">Gig Harbor</p>
          </div>
          <div className="border border-[rgba(201,169,106,0.2)] px-6 py-5">
            <p className="text-xs font-body uppercase tracking-widest text-[#6B6560] mb-1">
              Also Serving
            </p>
            <p className="font-display text-2xl text-[#F2EDE4]">
              Greater Seattle Area
            </p>
            <p className="font-body text-sm text-[#9A9388] mt-1">
              King &amp; Pierce County
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
