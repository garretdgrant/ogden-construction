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

function buildHomepagePerson(metadataBase: URL) {
  const person = buildLeviOgdenPersonNode(metadataBase);

  return {
    "@type": person["@type"],
    "@id": person["@id"],
    name: person.name,
    url: person.url,
    jobTitle: person.jobTitle,
    description: person.description,
    image: person.image,
    knowsAbout: person.knowsAbout,
  };
}

function buildHomepageBusiness(metadataBase: URL) {
  const business = buildCanonicalLocalBusinessNode(metadataBase);

  return {
    ...business,
    founder: buildHomepagePerson(metadataBase),
    hasOfferCatalog: {
      ...business.hasOfferCatalog,
      itemListElement: business.hasOfferCatalog.itemListElement.map(
        (offer) => ({
          "@type": offer["@type"],
          itemOffered: {
            "@type": offer.itemOffered["@type"],
            name: offer.itemOffered.name,
          },
        }),
      ),
    },
  };
}

function buildHomepageWebsite(metadataBase: URL) {
  const website = buildCanonicalWebsiteNode(metadataBase);

  return {
    "@type": website["@type"],
    "@id": website["@id"],
    name: website.name,
    url: website.url,
    description: website.description,
  };
}

export function buildOgdenPageSchema(data: OgdenPageData) {
  const metadataBase = getMetadataBase();
  const { websiteId } = getSchemaEntityIds(metadataBase);
  const pageUrl = buildCanonicalUrl(data.pageHref, metadataBase);
  const webpageId = `${pageUrl}#webpage`;
  const faqId = `${pageUrl}#faq`;
  const primaryImageId = `${pageUrl}#primaryimage`;
  const heroImageUrl = buildOgImageUrl(data.hero.image.src, metadataBase);
  const emitsCanonicalEntities = data.kind === "about";
  const mainEntityReferences = [
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

  if (data.kind === "home") {
    const homepageFaq = faq
      ? {
          "@type": faq["@type"],
          "@id": faq["@id"],
          url: faq.url,
          mainEntity: faq.mainEntity,
        }
      : undefined;

    return {
      "@context": schemaContext,
      "@type": "HomePage",
      "@id": webpageId,
      url: pageUrl,
      name: data.metadata.title,
      description: data.metadata.description,
      inLanguage: "en-US",
      dateModified: `${data.dateModified}T00:00:00Z`,
      isPartOf: buildHomepageWebsite(metadataBase),
      primaryImageOfPage: primaryImage,
      mainEntity: [
        buildHomepageBusiness(metadataBase),
        ...(homepageFaq ? [homepageFaq] : []),
      ],
    };
  }

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
