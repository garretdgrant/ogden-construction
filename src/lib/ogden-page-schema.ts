import type { OgdenPageData } from "@/lib/ogden-page.types";
import {
  buildCanonicalUrl,
  buildOgImageUrl,
  getMetadataBase,
  siteMetadata,
} from "@/lib/metadata";

const schemaContext = "https://schema.org";

const getBaseUrl = () => getMetadataBase().toString().replace(/\/$/, "");

const getBusinessId = (baseUrl: string) => `${baseUrl}/#localbusiness`;
const getWebsiteId = (baseUrl: string) => `${baseUrl}/#website`;

const webPageTypes = {
  home: "HomePage",
  service: "WebPage",
  location: "WebPage",
  guide: "WebPage",
  portfolio: "CollectionPage",
  about: "AboutPage",
  contact: "ContactPage",
} as const;

const getSchemaDays = (days: string) => {
  if (days === "Monday–Friday") {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  }

  return [days];
};

const to24HourTime = (value: string) => {
  const match = value.trim().match(/^(\d{1,2}):(\d{2})\s(AM|PM)$/);

  if (!match) {
    return undefined;
  }

  const [, rawHour, minutes, meridiem] = match;
  let hour = Number(rawHour);

  if (meridiem === "AM" && hour === 12) {
    hour = 0;
  } else if (meridiem === "PM" && hour !== 12) {
    hour += 12;
  }

  return `${hour.toString().padStart(2, "0")}:${minutes}`;
};

const buildOpeningHours = (data: OgdenPageData) =>
  data.business.hours.flatMap((entry) => {
    const [opensLabel, closesLabel] = entry.hours.split("–");
    const opens = opensLabel ? to24HourTime(opensLabel) : undefined;
    const closes = closesLabel ? to24HourTime(closesLabel) : undefined;

    if (!opens || !closes) {
      return [];
    }

    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: getSchemaDays(entry.days),
        opens,
        closes,
      },
    ];
  });

export function buildOgdenPageSchema(data: OgdenPageData) {
  const baseUrl = getBaseUrl();
  const pageUrl = buildCanonicalUrl(data.pageHref);
  const businessId = getBusinessId(baseUrl);
  const websiteId = getWebsiteId(baseUrl);
  const webpageId = `${pageUrl}#webpage`;
  const faqId = `${pageUrl}#faq`;
  const heroImageUrl = buildOgImageUrl(data.hero.image.src);
  const primaryImageId = `${pageUrl}#primaryimage`;
  const serviceCards = data.sections
    .find((section) => section.id === "deck-services")
    ?.blocks.flatMap((block) =>
      block.type === "card-grid" ? block.cards : [],
    );

  const business = {
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": businessId,
    name: data.business.displayName,
    legalName: data.business.legalName,
    url: baseUrl,
    description: data.metadata.description,
    foundingDate: data.business.foundedYear.toString(),
    email: data.business.email,
    telephone: data.business.phoneHref.replace(/^tel:/, ""),
    image: {
      "@id": primaryImageId,
    },
    logo: {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      url: buildOgImageUrl("/images/ogden-construction-nav-logo.webp"),
    },
    identifier: {
      "@type": "PropertyValue",
      name: data.business.licenseLabel,
      value: data.business.licenseNumber,
    },
    areaServed: data.business.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    openingHoursSpecification: buildOpeningHours(data),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: data.business.phoneHref.replace(/^tel:/, ""),
      email: data.business.email,
      availableLanguage: "English",
      areaServed: "US-CA",
    },
    ...(serviceCards?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Construction Services",
            itemListElement: serviceCards.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.text,
                url: service.href ? buildCanonicalUrl(service.href) : undefined,
                provider: {
                  "@id": businessId,
                },
              },
            })),
          },
        }
      : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: data.business.displayName,
    url: baseUrl,
    description: siteMetadata.defaultDescription,
    publisher: {
      "@id": businessId,
    },
  };

  const webpage = {
    "@type": webPageTypes[data.kind],
    "@id": webpageId,
    url: pageUrl,
    name: data.metadata.title,
    description: data.metadata.description,
    inLanguage: "en-US",
    dateModified: `${data.dateModified}T00:00:00Z`,
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": businessId,
    },
    primaryImageOfPage: {
      "@id": primaryImageId,
    },
    ...(data.faqs?.length
      ? {
          mainEntity: {
            "@id": faqId,
          },
        }
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
        isPartOf: {
          "@id": websiteId,
        },
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
    "@graph": [business, website, webpage, primaryImage, ...(faq ? [faq] : [])],
  };
}
