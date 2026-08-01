import type { Crumb } from "@/lib/breadcrumbs";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumbs";
import {
  buildCanonicalUrl,
  buildOgImageUrl,
  getLocalBusinessJsonLd,
  getMetadataBase,
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
  const baseUrl = metadataBase.toString().replace(/\/$/, "");
  const pageUrl = buildCanonicalUrl(path, metadataBase);
  const imageUrl = buildOgImageUrl(
    service.ogImage ?? service.heroImage,
    metadataBase,
  );

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: getServiceMetaDescription(service),
    provider: {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
    },
    areaServed: [
      { "@type": "City", name: "Placerville" },
      { "@type": "City", name: "South Lake Tahoe" },
      { "@type": "City", name: "El Dorado Hills" },
      { "@type": "City", name: "Folsom" },
      { "@type": "City", name: "Sacramento" },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    image: imageUrl,
    url: pageUrl,
    ...(service.jsonLd ?? {}),
  };

  const combinedJsonLd = [
    serviceJsonLd,
    getLocalBusinessJsonLd(),
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
