import { buildOgdenPageSchema } from "@/lib/ogden-page-schema";
import type { OgdenPageData } from "@/lib/ogden-page.types";

type OgdenPageStructuredDataProps = {
  data: OgdenPageData;
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
