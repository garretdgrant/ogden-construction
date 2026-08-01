import type { Metadata } from "next";
import { OgdenPageStructuredData } from "@/components/ogden-page/OgdenPageStructuredData";
import { OgdenPageTemplate } from "@/components/ogden-page/OgdenPageTemplate";
import { buildOgdenPageMetadata } from "@/lib/metadata";
import { servicesPageData } from "@/lib/services.data";

export const metadata: Metadata = buildOgdenPageMetadata(servicesPageData);

export default function ServicesPage() {
  return (
    <>
      <OgdenPageStructuredData data={servicesPageData} />
      <OgdenPageTemplate data={servicesPageData} />
    </>
  );
}
