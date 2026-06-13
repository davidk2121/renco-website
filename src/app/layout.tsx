import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RENCO LLC — Bathroom & Home Remodeling | Gig Harbor & Seattle",
  description: "Premium bathroom and home remodeling in Gig Harbor & greater Seattle. 5.0★ Google rating, 200+ projects. Licensed, faith-rooted craftsmanship. Get your free estimate today.",
  keywords: "bathroom remodel Gig Harbor, home renovation Seattle, kitchen remodel Pierce County, RENCO LLC",
  openGraph: {
    title: "RENCO LLC — Where Craftsmanship Meets Purpose",
    description: "Premium bathroom & home remodeling in Gig Harbor & greater Seattle. 5.0★ · 200+ Projects · Licensed & Insured.",
    type: "website",
    locale: "en_US",
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
  "@type": "LocalBusiness",
  name: "RENCO LLC",
  description: "Premium bathroom and home remodeling contractor serving Gig Harbor and the greater Seattle area.",
  telephone: "+12533892606",
  email: "david@renco.co",
  url: "https://renco.co",
  areaServed: [
    { "@type": "City", name: "Gig Harbor" },
    { "@type": "State", name: "Washington" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "WA",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "19",
  },
  priceRange: "$$$",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full antialiased" style={{ background: '#0E0E0E', color: '#F2EDE4' }}>
        {children}
      </body>
    </html>
  );
}
