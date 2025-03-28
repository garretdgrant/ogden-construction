import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ToasterProvider } from "@/components/ToasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://ogden-construction.com",
  ),
  title:
    "Ogden Construction Inc - Premier Deck Builders & Home Additions in Placerville, CA",
  description:
    "Expert deck construction, home additions, and remodeling services in Placerville, Folsom, Sacramento, and Tahoe. Serving El Dorado and Sacramento counties with top-rated craftsmanship.",
  openGraph: {
    title: "Ogden Construction Inc - Expert Deck Builders & Home Remodelers",
    description:
      "Specializing in custom decks, home additions, and remodeling services across Placerville, Folsom, Sacramento, and Tahoe. Trusted construction company in El Dorado and Sacramento counties.",
    url: "https://ogden-construction.com",
    siteName: "Ogden Construction",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
  },
  other: {
    // preload LCP image
    rel: "preload",
    as: "image",
    href: "/images/about/ogdenTruck.jpg",
  },
};

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
