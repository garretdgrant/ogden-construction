import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ToasterProvider } from "@/components/ToasterProvider";

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
