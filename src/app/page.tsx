import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import Script from "next/script";
import { buildPageMetadata, getLocalBusinessJsonLd } from "@/lib/metadata";

export async function generateMetadata() {
  return buildPageMetadata({
    title:
      "Ogden Construction | Deck Builders & Home Additions in Placerville, Folsom & Sacramento",
    description:
      "Expert deck construction, home additions, and remodeling services in Placerville, Folsom, El Dorado Hills, Sacramento, and Tahoe. Built to last. Trusted by homeowners across El Dorado and Sacramento counties.",
    path: "/",
  });
}

export default function HomePage() {
  const jsonLd = getLocalBusinessJsonLd();
  return (
    <>
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Contact />
      </main>
    </>
  );
}
