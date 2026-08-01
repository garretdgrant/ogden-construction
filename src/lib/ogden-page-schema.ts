import type { OgdenPageData } from "@/lib/ogden-page.types";
import type { ServiceDetailPageData } from "@/lib/service-detail-page.types";
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

function buildServicePageBusiness(metadataBase: URL) {
  const business = buildCanonicalLocalBusinessNode(metadataBase);

  return {
    "@type": business["@type"],
    "@id": business["@id"],
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    description: business.description,
    foundingDate: business.foundingDate,
    email: business.email,
    telephone: business.telephone,
    priceRange: business.priceRange,
    address: business.address,
    areaServed: business.areaServed,
    openingHoursSpecification: business.openingHoursSpecification,
    contactPoint: business.contactPoint,
    founder: buildHomepagePerson(metadataBase),
    identifier: business.identifier,
    sameAs: business.sameAs,
    logo: business.logo,
    image: business.image,
  };
}

function buildServicePageEntity(
  data: OgdenPageData,
  metadataBase: URL,
  pageUrl: string,
) {
  const serviceCards =
    data.sections
      .find((section) => section.id === "residential-services")
      ?.blocks.flatMap((block) =>
        block.type === "card-grid" ? block.cards : [],
      ) ?? [];

  return {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: data.hero.title,
    description: data.hero.description,
    url: pageUrl,
    serviceType: serviceCards.length
      ? serviceCards.map((card) => card.title)
      : data.hero.title,
    provider: buildServicePageBusiness(metadataBase),
    areaServed: data.business.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    ...(serviceCards.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            "@id": `${pageUrl}#service-catalog`,
            name: `${data.business.displayName} Residential Construction Services`,
            numberOfItems: serviceCards.length,
            itemListElement: serviceCards.map((card) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: card.title,
                description: card.text,
              },
            })),
          },
        }
      : {}),
  };
}

type SupportedPageData = OgdenPageData | ServiceDetailPageData;

function isServiceDetailPageData(
  data: SupportedPageData,
): data is ServiceDetailPageData {
  return "template" in data && data.template === "service-detail";
}

function buildServiceDetailPageSchema(data: ServiceDetailPageData) {
  const metadataBase = getMetadataBase();
  const { websiteId } = getSchemaEntityIds(metadataBase);
  const pageUrl = buildCanonicalUrl(data.pageHref, metadataBase);
  const webpageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const faqId = `${pageUrl}#faq`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const primaryImageId = `${pageUrl}#primaryimage`;
  const heroImageUrl = buildOgImageUrl(data.hero.image.src, metadataBase);
  const includesFaq = Boolean(
    data.structuredData.includeFaqSchema && data.faqs?.length,
  );
  const includesBreadcrumb = data.structuredData.includeBreadcrumbSchema;

  const primaryImage = {
    "@type": "ImageObject",
    "@id": primaryImageId,
    url: heroImageUrl,
    contentUrl: heroImageUrl,
    width: data.hero.image.width,
    height: data.hero.image.height,
    ...(data.hero.image.caption ? { caption: data.hero.image.caption } : {}),
    description: data.hero.image.alt,
    representativeOfPage: true,
  };

  const service = {
    "@type": data.structuredData.schemaType,
    "@id": serviceId,
    name: data.structuredData.serviceName,
    serviceType: data.structuredData.serviceType,
    description: data.hero.description,
    url: pageUrl,
    provider: {
      ...buildServicePageBusiness(metadataBase),
      name: data.structuredData.providerName,
    },
    areaServed: data.structuredData.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    image: { "@id": primaryImageId },
    mainEntityOfPage: { "@id": webpageId },
  };

  const faq = includesFaq
    ? {
        "@type": "FAQPage",
        "@id": faqId,
        url: `${pageUrl}#frequently-asked-questions`,
        isPartOf: { "@id": websiteId },
        mainEntityOfPage: { "@id": webpageId },
        mainEntity: data.faqs!.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : undefined;

  const breadcrumb = includesBreadcrumb
    ? {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: data.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.label,
          item: buildCanonicalUrl(crumb.href, metadataBase),
        })),
      }
    : undefined;

  const webpage = {
    "@type": "WebPage",
    "@id": webpageId,
    url: pageUrl,
    name: data.metadata.title,
    description: data.metadata.description,
    inLanguage: "en-US",
    dateModified: `${data.dateModified}T00:00:00Z`,
    isPartOf: getWebsiteReferenceJsonLd(metadataBase),
    about: getLocalBusinessReferenceJsonLd(metadataBase),
    publisher: getLocalBusinessReferenceJsonLd(metadataBase),
    primaryImageOfPage: { "@id": primaryImageId },
    mainEntity: [
      { "@id": serviceId },
      ...(includesFaq ? [{ "@id": faqId }] : []),
    ],
    ...(includesBreadcrumb ? { breadcrumb: { "@id": breadcrumbId } } : {}),
  };

  return {
    "@context": schemaContext,
    "@graph": [
      webpage,
      primaryImage,
      service,
      ...(faq ? [faq] : []),
      ...(breadcrumb ? [breadcrumb] : []),
    ],
  };
}

export function buildOgdenPageSchema(data: SupportedPageData) {
  if (isServiceDetailPageData(data)) {
    return buildServiceDetailPageSchema(data);
  }

  const metadataBase = getMetadataBase();
  const { websiteId } = getSchemaEntityIds(metadataBase);
  const pageUrl = buildCanonicalUrl(data.pageHref, metadataBase);
  const webpageId = `${pageUrl}#webpage`;
  const faqId = `${pageUrl}#faq`;
  const serviceId = `${pageUrl}#service`;
  const primaryImageId = `${pageUrl}#primaryimage`;
  const heroImageUrl = buildOgImageUrl(data.hero.image.src, metadataBase);
  const emitsCanonicalEntities = data.kind === "about";
  const mainEntityReferences = [
    ...(data.kind === "service" ? [{ "@id": serviceId }] : []),
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

  if (data.kind === "service") {
    const servicePageFaq = faq
      ? {
          "@type": faq["@type"],
          "@id": faq["@id"],
          url: faq.url,
          mainEntity: faq.mainEntity,
        }
      : undefined;

    return {
      "@context": schemaContext,
      "@type": webPageTypes[data.kind],
      "@id": webpageId,
      url: pageUrl,
      name: data.metadata.title,
      description: data.metadata.description,
      inLanguage: "en-US",
      dateModified: `${data.dateModified}T00:00:00Z`,
      isPartOf: buildHomepageWebsite(metadataBase),
      primaryImageOfPage: primaryImage,
      mainEntity: [
        buildServicePageEntity(data, metadataBase, pageUrl),
        ...(servicePageFaq ? [servicePageFaq] : []),
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
