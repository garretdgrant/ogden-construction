import { Contact } from "@/components/Contact";
import Script from "next/script";
import { buildPageMetadata, getContactJsonLd } from "@/lib/metadata";

export async function generateMetadata() {
  return buildPageMetadata({
    title:
      "Contact Ogden Construction | Free Consultations in El Dorado County",
    description:
      "Reach out to Ogden Construction for expert deck building, home additions, and remodeling services in Placerville and nearby towns. Call or request a quote today.",
    path: "/contact",
    imagePath: "/images/about/ogdenTruck.jpg",
  });
}

export default function ContactPage() {
  const jsonLd = getContactJsonLd();
  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Contact />
    </>
  );
}
