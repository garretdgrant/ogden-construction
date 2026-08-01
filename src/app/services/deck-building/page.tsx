import type { Metadata } from "next";
import { OgdenPageStructuredData } from "@/components/ogden-page/OgdenPageStructuredData";
import { ServiceDetailPageTemplate } from "@/components/ogden-page/ServiceDetailPageTemplate";
import { deckBuildingPageData } from "@/lib/page-data/service/deck-building.data";
import { buildOgdenPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildOgdenPageMetadata(deckBuildingPageData);

export default function DeckBuildingPage() {
  return (
    <>
      <OgdenPageStructuredData data={deckBuildingPageData} />
      <ServiceDetailPageTemplate data={deckBuildingPageData} />
    </>
  );
}
