const cities = [
  "Gig Harbor",
  "Tacoma",
  "Seattle",
  "Bellevue",
  "Kirkland",
  "Redmond",
  "Renton",
  "Auburn",
  "Federal Way",
  "Puyallup",
  "Bonney Lake",
  "Sumner",
  "Kent",
  "Burien",
  "Tukwila",
  "Issaquah",
  "Sammamish",
  "Mercer Island",
];

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="bg-[#0E0E0E] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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
            RENCO serves homeowners across Gig Harbor, Tacoma, and the greater
            Seattle area. If you&apos;re in King or Pierce County, we&apos;ve
            got you covered.
          </p>
          <a
            href="tel:+12533892606"
            className="font-body text-[#C9A96A] hover:text-[#F2EDE4] transition-colors w-fit"
          >
            Call 253-389-2606
          </a>
        </div>

        {/* Right side — city pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {cities.map((city) => (
            <span
              key={city}
              className="border border-[rgba(201,169,106,0.2)] hover:border-[rgba(201,169,106,0.5)] px-4 py-2 text-sm font-body text-[#9A9388] hover:text-[#C9A96A] transition-all rounded-full text-center"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
