import type { Crumb } from "@/lib/breadcrumbs";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import {
  buildCanonicalUrl,
  buildOgImageUrl,
  getMetadataBase,
  getSchemaEntityIds,
} from "@/lib/metadata";
import { buildFaqJsonLd } from "@/lib/faq";
import { getServiceMetaDescription, stripHtml } from "@/lib/service-pages";
import type { ServiceData } from "@/app/services/data/services";

type ServiceJsonLdProps = {
  service: ServiceData;
  breadcrumbs: Crumb[];
  path: string;
};

export const ServiceJsonLd = ({
  service,
  breadcrumbs,
  path,
}: ServiceJsonLdProps) => {
  const metadataBase = getMetadataBase();
  const { businessId, websiteId } = getSchemaEntityIds(metadataBase);
  const pageUrl = buildCanonicalUrl(path, metadataBase);
  const webpageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const imageUrl = buildOgImageUrl(
    service.ogImage ?? service.heroImage,
    metadataBase,
  );

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name: service.title,
    description: getServiceMetaDescription(service),
    provider: {
      "@id": businessId,
    },
    areaServed: [
      { "@type": "City", name: "Placerville" },
      { "@type": "City", name: "South Lake Tahoe" },
      { "@type": "City", name: "El Dorado Hills" },
      { "@type": "City", name: "Folsom" },
      { "@type": "City", name: "Sacramento" },
    ],
    mainEntityOfPage: {
      "@id": webpageId,
    },
    image: imageUrl,
    url: pageUrl,
    ...(service.jsonLd ?? {}),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": webpageId,
    name: service.metaTitle,
    description: getServiceMetaDescription(service),
    url: pageUrl,
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    mainEntity: { "@id": serviceId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
    },
  };

  const combinedJsonLd = [
    serviceJsonLd,
    webPageJsonLd,
    buildBreadcrumbJsonLd(breadcrumbs, path),
    ...(service.faqs.length
      ? [
          buildFaqJsonLd(
            service.faqs.map((faq) => ({
              question: faq.question,
              answer: stripHtml(faq.answer),
            })),
          ),
        ]
      : []),
  ];

  return (
    <script
      id={`service-jsonld-${service.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedJsonLd) }}
    />
  );
};
