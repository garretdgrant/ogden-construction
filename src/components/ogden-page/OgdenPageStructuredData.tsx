import { buildOgdenPageSchema } from "@/lib/ogden-page-schema";
import type { OgdenPageData } from "@/lib/ogden-page.types";
import type { ServiceDetailPageData } from "@/lib/page-data/service/deck-building.data";

type OgdenPageStructuredDataProps = {
  data: OgdenPageData | ServiceDetailPageData;
};

export function OgdenPageStructuredData({
  data,
}: OgdenPageStructuredDataProps) {
  const schema = buildOgdenPageSchema(data);
  const serializedSchema = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      id={`${data.slug}-page-jsonld`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedSchema }}
    />
  );
}
