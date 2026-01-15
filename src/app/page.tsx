import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Contact } from "@/components/Contact";
import { ServiceArea } from "@/components/ServiceArea";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { HomeFaq } from "@/components/HomeFaq";
import Script from "next/script";
import {
  buildPageMetadata,
  getLocalBusinessJsonLd,
  getHomePageJsonLd,
  getWebSiteJsonLd,
} from "@/lib/metadata";
import { getHomeFaqJsonLd } from "@/lib/homeFaq";

const HOME_TITLE =
  "Deck Builder in Placerville & South Lake Tahoe | Ogden Construction";
const HOME_DESCRIPTION =
  "Custom decks, home additions, and remodeling in Placerville, South Lake Tahoe, El Dorado Hills, Folsom, and Sacramento. Licensed, insured, and built to last. Get a free consultation.";
const HOME_PATH = "/";

export async function generateMetadata() {
  return buildPageMetadata({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    path: HOME_PATH,
  });
}

export default function HomePage() {
  const jsonLd = getLocalBusinessJsonLd();
  const faqJsonLd = getHomeFaqJsonLd();
  const webPageJsonLd = getHomePageJsonLd({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    path: HOME_PATH,
  });
  const webSiteJsonLd = getWebSiteJsonLd();
  return (
    <>
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <Script
        id="webpage-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <Hero />
        <Services />
        <ServiceArea />
        <Projects />
        <WhyChooseUs />
        <Process />
        <Reviews />
        <HomeFaq />
        <Contact />
      </main>
    </>
  );
}
