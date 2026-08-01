import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ToasterProvider } from "@/components/ToasterProvider";
import { getMetadataBase, siteMetadata } from "@/lib/metadata";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: siteMetadata.name,
    template: "%s | Ogden Construction",
  },
  applicationName: siteMetadata.name,
  description: siteMetadata.defaultDescription,
  openGraph: {
    type: "website",
    siteName: siteMetadata.name,
    images: [
      {
        url: siteMetadata.defaultOgImage,
        alt: siteMetadata.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteMetadata.defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Layout>{children}</Layout>
        <ToasterProvider />
      </body>
    </html>
  );
}
