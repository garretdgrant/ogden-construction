import type { Metadata } from "next";
import { OgdenPageStructuredData } from "@/components/ogden-page/OgdenPageStructuredData";
import { OgdenPageTemplate } from "@/components/ogden-page/OgdenPageTemplate";
import { ogdenHomepageData } from "@/lib/ogden-homepage.data";
import { buildOgdenPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildOgdenPageMetadata(ogdenHomepageData);

export default function HomePage() {
  return (
    <>
      <OgdenPageStructuredData data={ogdenHomepageData} />
      <OgdenPageTemplate data={ogdenHomepageData} />
    </>
  );
}
