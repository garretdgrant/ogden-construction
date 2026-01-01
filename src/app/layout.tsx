import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ToasterProvider } from "@/components/ToasterProvider";
import { buildPageMetadata } from "@/lib/metadata";

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

export async function generateMetadata() {
  return buildPageMetadata({
    title:
      "Ogden Construction Inc - Premier Deck Builders & Home Additions in Placerville, CA",
    description:
      "Expert deck construction, home additions, and remodeling services in Placerville, Folsom, Sacramento, and Tahoe. Serving El Dorado and Sacramento counties with top-rated craftsmanship.",
    path: "/",
  });
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
