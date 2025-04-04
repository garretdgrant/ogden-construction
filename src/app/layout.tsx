import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ToasterProvider } from "@/components/ToasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.ogden-construction.com";

  return {
    metadataBase: new URL(baseUrl),
    title:
      "Ogden Construction Inc - Premier Deck Builders & Home Additions in Placerville, CA",
    description:
      "Expert deck construction, home additions, and remodeling services in Placerville, Folsom, Sacramento, and Tahoe. Serving El Dorado and Sacramento counties with top-rated craftsmanship.",
    alternates: {
      canonical: `${baseUrl}/`,
    },
    openGraph: {
      title: "Ogden Construction Inc - Expert Deck Builders & Home Remodelers",
      description:
        "Specializing in custom decks, home additions, and remodeling services across Placerville, Folsom, Sacramento, and Tahoe. Trusted construction company in El Dorado and Sacramento counties.",
      url: baseUrl,
      siteName: "Ogden Construction",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1000,
          height: 750,
          alt: "Ogden Construction Logo",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Ogden Construction Inc - Custom Decks & Home Additions in Placerville, CA",
      description:
        "Providing top-quality deck construction, home additions, and remodeling services in Placerville, Folsom, Sacramento, and Tahoe. Your trusted local construction experts.",
      images: [`${baseUrl}/og-image.jpg`],
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.ogden-construction.com/#localbusiness",
        name: "Ogden Construction",
        url: "https://www.ogden-construction.com",
        email: "info@ogden-construction.com",
        telephone: "+1-530-919-7408",
        serviceType: ["Deck Building", "Home Additions", "General Contracting"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-530-919-7408",
          contactType: "Customer Support",
          areaServed: ["US"],
          availableLanguage: ["English"],
        },
        hasMap: "https://www.google.com/maps/place/Placerville,+CA",
        founder: {
          "@type": "Person",
          name: "Levi Ogden",
          url: "https://www.ogden-construction.com/about",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Placerville",
          addressRegion: "CA",
          postalCode: "95667",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "Place", name: "Placerville" },
          { "@type": "Place", name: "El Dorado Hills" },
          { "@type": "Place", name: "Folsom" },
          { "@type": "Place", name: "Cameron Park" },
          { "@type": "Place", name: "South Lake Tahoe" },
          { "@type": "Place", name: "Pollock Pines" },
          { "@type": "Place", name: "Sacramento" },
          { "@type": "Place", name: "Camino" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        description:
          "Ogden Construction is a licensed and insured contractor based in Placerville, CA. We specialize in custom decks, remodels, and new home construction throughout El Dorado County and the surrounding areas.",
        sameAs: [
          "https://www.facebook.com/ogden.construction.inc/",
          "https://www.instagram.com/levioakden77",
          "https://www.yelp.com/biz/ogden-construction-placerville-2",
        ],
        image: "https://www.ogden-construction.com/og-image.jpg",
        priceRange: "$$",
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
        <ToasterProvider />
      </body>
    </html>
  );
}
