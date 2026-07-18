import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0E0E0E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://renco.co"),
  title: "RENCO LLC — Bathroom & Home Remodeling | Gig Harbor & Seattle",
  description: "Premium bathroom and home remodeling in Gig Harbor & greater Seattle. 5.0★ Google rating, 200+ projects. Licensed, faith-rooted craftsmanship. Get your free estimate today.",
  keywords: "bathroom remodel Gig Harbor, home renovation Seattle, kitchen remodel Pierce County, RENCO LLC",
  authors: [{ name: "RENCO LLC" }],
  creator: "RENCO LLC",
  publisher: "RENCO LLC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RENCO LLC — Where Craftsmanship Meets Purpose",
    description: "Premium bathroom & home remodeling in Gig Harbor & greater Seattle. 5.0★ · 200+ Projects · Licensed & Insured.",
    type: "website",
    locale: "en_US",
    url: "https://renco.co",
    siteName: "RENCO LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "RENCO LLC — Bathroom & Home Remodeling",
    description: "Premium remodeling in Gig Harbor & Seattle. 5.0★ Google · 200+ Projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness"],
  "@id": "https://renco.co/#business",
  name: "RENCO LLC",
  description: "Premium bathroom and home remodeling contractor serving Gig Harbor and the greater Seattle area.",
  telephone: "+12533892606",
  email: "david@renco.co",
  url: "https://renco.co",
  image: "https://renco.co/og-image.png",
  sameAs: [
    "https://www.google.com/maps/search/?api=1&query=RENCO+LLC+Gig+Harbor",
    "https://www.instagram.com/rencollc/",
    "https://www.facebook.com/rencobiz",
  ],
  areaServed: [
    { "@type": "City", name: "Gig Harbor" },
    { "@type": "City", name: "Tacoma" },
    { "@type": "City", name: "Seattle" },
    { "@type": "AdministrativeArea", name: "King County" },
    { "@type": "AdministrativeArea", name: "Pierce County" },
    { "@type": "State", name: "Washington" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "5800 Soundview Dr Unit 2, Bldg C",
    addressLocality: "Gig Harbor",
    addressRegion: "WA",
    postalCode: "98335",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.3073,
    longitude: -122.5793,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  founder: [
    { "@type": "Person", name: "Vitaliy" },
    { "@type": "Person", name: "David" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "19",
  },
  priceRange: "$$$",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a bathroom remodel take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most bathroom remodels take 2–4 weeks depending on scope. We give you a precise timeline before we start — and we stick to it.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle permits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We pull all required permits and handle every inspection. You don't have to manage any of that.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fully licensed in Washington State and fully insured. We carry general liability and workers' comp so you're protected.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use subcontractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — for specialized trades like tile, electrical, and plumbing. Every partner has been vetted over years of working together. Vitaliy and David are on-site personally to oversee all work and make sure the standard never slips.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Gig Harbor, Tacoma, and the greater Seattle area — King and Pierce County.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out our quick estimate form or call David directly at 253-389-2606. We'll respond within 24 hours.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full antialiased" style={{ background: '#0E0E0E', color: '#F2EDE4' }}>
        {children}
      </body>
    </html>
  );
}
