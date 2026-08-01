import type { OgdenPageData } from "@/lib/ogden-page.types";
import {
  buildCanonicalLocalBusinessNode,
  buildCanonicalWebsiteNode,
  buildCanonicalUrl,
  buildLeviOgdenPersonNode,
  buildOgImageUrl,
  getLocalBusinessReferenceJsonLd,
  getMetadataBase,
  getSchemaEntityIds,
  getWebsiteReferenceJsonLd,
} from "@/lib/metadata";

const schemaContext = "https://schema.org";

const webPageTypes = {
  home: "HomePage",
  service: "WebPage",
  location: "WebPage",
  guide: "WebPage",
  portfolio: "CollectionPage",
  about: "AboutPage",
  contact: "ContactPage",
} as const;

export function buildOgdenPageSchema(data: OgdenPageData) {
  const metadataBase = getMetadataBase();
  const { businessId, websiteId } = getSchemaEntityIds(metadataBase);
  const pageUrl = buildCanonicalUrl(data.pageHref, metadataBase);
  const webpageId = `${pageUrl}#webpage`;
  const faqId = `${pageUrl}#faq`;
  const primaryImageId = `${pageUrl}#primaryimage`;
  const heroImageUrl = buildOgImageUrl(data.hero.image.src, metadataBase);
  const emitsCanonicalEntities = data.kind === "home" || data.kind === "about";
  const mainEntityReferences = [
    ...(data.kind === "home" ? [{ "@id": businessId }] : []),
    ...(data.faqs?.length ? [{ "@id": faqId }] : []),
  ];

  const webpage = {
    "@type": webPageTypes[data.kind],
    "@id": webpageId,
    url: pageUrl,
    name: data.metadata.title,
    description: data.metadata.description,
    inLanguage: "en-US",
    dateModified: `${data.dateModified}T00:00:00Z`,
    isPartOf: getWebsiteReferenceJsonLd(metadataBase),
    about: getLocalBusinessReferenceJsonLd(metadataBase),
    publisher: getLocalBusinessReferenceJsonLd(metadataBase),
    primaryImageOfPage: {
      "@id": primaryImageId,
    },
    ...(mainEntityReferences.length
      ? { mainEntity: mainEntityReferences }
      : {}),
  };

  const primaryImage = {
    "@type": "ImageObject",
    "@id": primaryImageId,
    url: heroImageUrl,
    contentUrl: heroImageUrl,
    width: data.hero.image.width,
    height: data.hero.image.height,
    caption: data.hero.image.caption,
    description: data.hero.image.alt,
    representativeOfPage: true,
  };

  const faq = data.faqs?.length
    ? {
        "@type": "FAQPage",
        "@id": faqId,
        url: `${pageUrl}#frequently-asked-questions`,
        isPartOf: { "@id": websiteId },
        mainEntityOfPage: { "@id": webpageId },
        mainEntity: data.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : undefined;

  return {
    "@context": schemaContext,
    "@graph": [
      ...(emitsCanonicalEntities
        ? [
            buildCanonicalLocalBusinessNode(metadataBase),
            buildCanonicalWebsiteNode(metadataBase),
            buildLeviOgdenPersonNode(metadataBase),
          ]
        : []),
      webpage,
      primaryImage,
      ...(faq ? [faq] : []),
    ],
  };
}
