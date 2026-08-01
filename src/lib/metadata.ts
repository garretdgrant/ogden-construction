import type { Metadata } from "next";
import type { OgdenPageData } from "@/lib/ogden-page.types";
import { SITE_CONTACT_EMAIL } from "@/lib/site-contact";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

type Place = {
  "@type": "Place";
  name: string;
};

type PostalAddress = {
  "@type": "PostalAddress";
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
};

const PRODUCTION_URL = "https://www.ogden-construction.com";
const SITE_NAME = "Ogden Construction";
const BUSINESS_NAME = "Ogden Construction";
const DEFAULT_OG_IMAGE = "/images/ogden-construction-og.webp";
const ABOUT_OG_IMAGE = "/images/about/ogdenTruck.jpg";
const EMAIL = SITE_CONTACT_EMAIL;
const PHONE = "+15309197408";

const SERVICE_TYPES = [
  "Deck Building",
  "Home Additions",
  "General Contracting",
];

const AREA_SERVED: Place[] = [
  { "@type": "Place", name: "El Dorado County" },
  { "@type": "Place", name: "Lake Tahoe" },
  { "@type": "Place", name: "Greater Sacramento" },
  { "@type": "Place", name: "Placerville" },
  { "@type": "Place", name: "El Dorado Hills" },
  { "@type": "Place", name: "Folsom" },
  { "@type": "Place", name: "Cameron Park" },
  { "@type": "Place", name: "South Lake Tahoe" },
  { "@type": "Place", name: "Pollock Pines" },
  { "@type": "Place", name: "Sacramento" },
  { "@type": "Place", name: "Camino" },
  { "@type": "Place", name: "Auburn" },
  { "@type": "Place", name: "Napa Valley" },
];

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
];

const CONTACT_POINT = {
  "@type": "ContactPoint",
  telephone: PHONE,
  email: EMAIL,
  contactType: "customer service",
  areaServed: "US-CA",
  availableLanguage: "English",
};

// Ogden Construction is a service-area business. The public schema identifies
// its home locality without exposing or inventing a private street address.
const ADDRESS: PostalAddress = {
  "@type": "PostalAddress",
  addressLocality: "Placerville",
  addressRegion: "CA",
  postalCode: "95667",
  addressCountry: "US",
};

const SAME_AS = [
  "https://www.facebook.com/ogden.construction.inc/",
  "https://www.instagram.com/levioakden77",
  "https://www.yelp.com/biz/ogden-construction-placerville-2",
];

const BASE_DESCRIPTION =
  "Ogden Construction is a licensed and insured contractor based in Placerville, CA. We specialize in custom decks, remodels, and new home construction throughout El Dorado County and the surrounding areas.";

export const siteMetadata = {
  name: SITE_NAME,
  productionUrl: PRODUCTION_URL,
  defaultDescription: BASE_DESCRIPTION,
  defaultOgImage: DEFAULT_OG_IMAGE,
} as const;

export function getMetadataBase(): URL {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : PRODUCTION_URL;

  return new URL(baseUrl);
}

export function buildCanonicalUrl(
  path: string,
  metadataBase = getMetadataBase(),
): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, metadataBase).toString();
}

export function buildOgImageUrl(
  path: string,
  metadataBase = getMetadataBase(),
): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, metadataBase).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetadataInput): Metadata {
  const metadataBase = getMetadataBase();
  const canonicalUrl = buildCanonicalUrl(path, metadataBase);
  const ogImageUrl = buildOgImageUrl(DEFAULT_OG_IMAGE, metadataBase);

  return {
    metadataBase,
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageUrl,
          width: 1100,
          height: 578,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export function buildOgdenPageMetadata(data: OgdenPageData): Metadata {
  const metadataBase = getMetadataBase();
  const canonicalUrl = buildCanonicalUrl(
    data.metadata.canonicalPath,
    metadataBase,
  );
  const imageUrl = buildOgImageUrl(DEFAULT_OG_IMAGE, metadataBase);
  const ogTitle = data.metadata.ogTitle ?? data.metadata.title;
  const ogDescription =
    data.metadata.ogDescription ?? data.metadata.description;
  const imageDimensions =
    data.metadata.ogImageWidth && data.metadata.ogImageHeight
      ? {
          width: data.metadata.ogImageWidth,
          height: data.metadata.ogImageHeight,
        }
      : {};

  return {
    metadataBase,
    title: {
      absolute: data.metadata.title,
    },
    description: data.metadata.description,
    keywords: [data.metadata.focusKeyword, ...data.metadata.supportingKeywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          ...imageDimensions,
          alt: data.metadata.ogImageAlt ?? ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [imageUrl],
    },
  };
}

function getBaseUrl(metadataBase = getMetadataBase()): string {
  return metadataBase.toString().replace(/\/$/, "");
}

export function getSchemaEntityIds(metadataBase = getMetadataBase()) {
  const baseUrl = getBaseUrl(metadataBase);

  return {
    baseUrl,
    businessId: `${baseUrl}/#localbusiness`,
    websiteId: `${baseUrl}/#website`,
    personId: `${baseUrl}/about#levi-ogden`,
    logoId: `${baseUrl}/#logo`,
  };
}

export function getLocalBusinessReferenceJsonLd(
  metadataBase = getMetadataBase(),
) {
  return { "@id": getSchemaEntityIds(metadataBase).businessId };
}

export function getWebsiteReferenceJsonLd(metadataBase = getMetadataBase()) {
  return { "@id": getSchemaEntityIds(metadataBase).websiteId };
}

export function getLeviOgdenReferenceJsonLd(metadataBase = getMetadataBase()) {
  return { "@id": getSchemaEntityIds(metadataBase).personId };
}

export function buildCanonicalLocalBusinessNode(
  metadataBase = getMetadataBase(),
) {
  const { baseUrl, businessId, logoId } = getSchemaEntityIds(metadataBase);

  return {
    "@type": ["LocalBusiness", "GeneralContractor"],
    "@id": businessId,
    name: BUSINESS_NAME,
    legalName: "Ogden Construction Inc.",
    url: baseUrl,
    description: BASE_DESCRIPTION,
    foundingDate: "2008",
    email: EMAIL,
    telephone: PHONE,
    priceRange: "$$",
    address: ADDRESS,
    areaServed: AREA_SERVED,
    openingHoursSpecification: OPENING_HOURS,
    contactPoint: CONTACT_POINT,
    founder: getLeviOgdenReferenceJsonLd(metadataBase),
    identifier: {
      "@type": "PropertyValue",
      name: "California contractor license",
      value: "1042758",
    },
    sameAs: SAME_AS,
    logo: {
      "@type": "ImageObject",
      "@id": logoId,
      url: buildOgImageUrl(
        "/images/ogden-construction-nav-logo.webp",
        metadataBase,
      ),
      contentUrl: buildOgImageUrl(
        "/images/ogden-construction-nav-logo.webp",
        metadataBase,
      ),
      width: 1536,
      height: 1024,
      caption: "Ogden Construction logo",
    },
    image: [
      buildOgImageUrl(DEFAULT_OG_IMAGE, metadataBase),
      buildOgImageUrl(ABOUT_OG_IMAGE, metadataBase),
      buildOgImageUrl("/images/about/levi-deck.webp", metadataBase),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ogden Construction Services",
      itemListElement: SERVICE_TYPES.map((serviceType) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceType,
          provider: getLocalBusinessReferenceJsonLd(metadataBase),
          areaServed: AREA_SERVED,
        },
      })),
    },
  };
}

export function buildCanonicalWebsiteNode(metadataBase = getMetadataBase()) {
  const { baseUrl, websiteId } = getSchemaEntityIds(metadataBase);

  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: baseUrl,
    description: BASE_DESCRIPTION,
    publisher: getLocalBusinessReferenceJsonLd(metadataBase),
  };
}

export function buildLeviOgdenPersonNode(metadataBase = getMetadataBase()) {
  const { baseUrl, personId } = getSchemaEntityIds(metadataBase);
  const imageUrl = buildOgImageUrl("/images/about/levi.jpg", metadataBase);

  return {
    "@type": "Person",
    "@id": personId,
    name: "Levi Ogden",
    url: `${baseUrl}/about`,
    jobTitle: "Owner & General Contractor",
    description:
      "Levi Ogden founded Ogden Construction Inc. in 2008 and leads its residential deck and construction work across Northern California.",
    image: {
      "@type": "ImageObject",
      "@id": `${personId}-image`,
      url: imageUrl,
      contentUrl: imageUrl,
      width: 956,
      height: 960,
      caption: "Levi Ogden, owner and general contractor",
    },
    mainEntityOfPage: { "@id": `${baseUrl}/about#webpage` },
    worksFor: getLocalBusinessReferenceJsonLd(metadataBase),
    knowsAbout: [
      "Custom deck construction",
      "Deck replacement and repair",
      "Home additions",
      "Residential remodeling",
      "General contracting",
    ],
  };
}

export function getAboutJsonLd() {
  const metadataBase = getMetadataBase();
  const { baseUrl } = getSchemaEntityIds(metadataBase);
  const url = `${baseUrl}/about`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildCanonicalLocalBusinessNode(metadataBase),
      buildCanonicalWebsiteNode(metadataBase),
      buildLeviOgdenPersonNode(metadataBase),
      {
        "@type": "AboutPage",
        "@id": `${url}#webpage`,
        name: "About Ogden Construction",
        url,
        description:
          "Learn about Ogden Construction, founder Levi Ogden, and the company's residential construction experience in Northern California.",
        isPartOf: getWebsiteReferenceJsonLd(metadataBase),
        about: [
          getLocalBusinessReferenceJsonLd(metadataBase),
          getLeviOgdenReferenceJsonLd(metadataBase),
        ],
        mainEntity: getLocalBusinessReferenceJsonLd(metadataBase),
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: buildOgImageUrl(ABOUT_OG_IMAGE, metadataBase),
        },
      },
    ],
  };
}

export function getServicesJsonLd() {
  const metadataBase = getMetadataBase();
  const { baseUrl } = getSchemaEntityIds(metadataBase);
  const url = `${baseUrl}/services`;
  const catalogId = `${url}#service-catalog`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: "Ogden Construction Services",
        url,
        description:
          "Deck building, home addition, remodeling, and general contracting services from Ogden Construction.",
        isPartOf: getWebsiteReferenceJsonLd(metadataBase),
        about: getLocalBusinessReferenceJsonLd(metadataBase),
        mainEntity: { "@id": catalogId },
      },
      {
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: "Construction Services Offered by Ogden Construction",
        itemListElement: SERVICE_TYPES.map((serviceType) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceType,
            provider: getLocalBusinessReferenceJsonLd(metadataBase),
            areaServed: AREA_SERVED,
          },
        })),
      },
    ],
  };
}

export function getPortfolioJsonLd() {
  const metadataBase = getMetadataBase();
  const { baseUrl } = getSchemaEntityIds(metadataBase);
  const url = `${baseUrl}/portfolio`;

  const projects = [
    {
      name: "Redwood Deck Replacement",
      description:
        "Demolition and replacement of an aging deck with redwood boards in South Lake Tahoe, CA.",
      location: "South Lake Tahoe, CA",
      imagePath: "/images/portfolio/redwood-deck.webp",
      dateCreated: "2023",
    },
    {
      name: "Twin Bridges Cabin Improvements",
      description:
        "Deck rebuild and driveway leveling project in Twin Bridges, CA.",
      location: "Twin Bridges, CA",
      imagePath: "/images/portfolio/twin-bridges-cabin.webp",
      dateCreated: "2023",
    },
    {
      name: "Full Home Rebuild & Deck Construction",
      description:
        "Ground-up home rebuild and custom deck construction in Grizzly Flats, CA.",
      location: "Grizzly Flats, CA",
      imagePath: "/images/portfolio/guestHouse.webp",
      dateCreated: "2023",
    },
    {
      name: "Trex Deck & Retaining Wall Build",
      description:
        "Trex deck, retaining wall, and drainage construction in Rescue, CA.",
      location: "Rescue, CA",
      imagePath: "/images/portfolio/curtisRetainingWall.webp",
      dateCreated: "2023",
    },
    {
      name: "Fencing & 2nd Story Deck Project",
      description:
        "Custom fencing, gates, and a second-story deck in Placerville, CA.",
      location: "Placerville, CA",
      imagePath: "/images/portfolio/fence.webp",
      dateCreated: "2023",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    name: "Ogden Construction Portfolio",
    url,
    isPartOf: getWebsiteReferenceJsonLd(metadataBase),
    about: getLocalBusinessReferenceJsonLd(metadataBase),
    hasPart: projects.map((project, index) => ({
      "@type": "Project",
      "@id": `${url}#project-${index + 1}`,
      name: project.name,
      description: project.description,
      locationCreated: {
        "@type": "Place",
        name: project.location,
      },
      image: buildOgImageUrl(project.imagePath, metadataBase),
      dateCreated: project.dateCreated,
      creator: getLocalBusinessReferenceJsonLd(metadataBase),
    })),
  };
}

export function getContactJsonLd() {
  const metadataBase = getMetadataBase();
  const { baseUrl } = getSchemaEntityIds(metadataBase);
  const url = `${baseUrl}/contact`;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#webpage`,
    name: "Contact Ogden Construction",
    url,
    description:
      "Contact Ogden Construction about a deck, addition, remodeling, or residential construction project.",
    isPartOf: getWebsiteReferenceJsonLd(metadataBase),
    about: getLocalBusinessReferenceJsonLd(metadataBase),
    mainEntity: getLocalBusinessReferenceJsonLd(metadataBase),
  };
}

export function getWebPageJsonLd({
  title,
  description,
  path,
  imagePath = DEFAULT_OG_IMAGE,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  type?: "WebPage" | "HomePage";
}) {
  const metadataBase = getMetadataBase();
  const url = buildCanonicalUrl(path, metadataBase);

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    name: title,
    url,
    description,
    image: {
      "@type": "ImageObject",
      url: buildOgImageUrl(imagePath, metadataBase),
    },
    isPartOf: getWebsiteReferenceJsonLd(metadataBase),
    about: getLocalBusinessReferenceJsonLd(metadataBase),
    publisher: getLocalBusinessReferenceJsonLd(metadataBase),
  };
}

export function getHomePageJsonLd({
  title,
  description,
  path,
  imagePath,
}: {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
}) {
  return getWebPageJsonLd({
    title,
    description,
    path,
    imagePath,
    type: "HomePage",
  });
}

export function getWebSiteJsonLd() {
  const metadataBase = getMetadataBase();

  return {
    "@context": "https://schema.org",
    ...buildCanonicalWebsiteNode(metadataBase),
  };
}

export function getLocationJsonLd({
  citySlug,
  cityName,
  description,
  postalCode,
  path,
}: {
  citySlug: string;
  cityName: string;
  description?: string;
  postalCode?: string;
  path: string;
}) {
  const metadataBase = getMetadataBase();
  const url = buildCanonicalUrl(path, metadataBase);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service-${citySlug}`,
    name: `Ogden Construction Services in ${cityName}`,
    url,
    description:
      description ??
      `Ogden Construction provides custom deck and residential construction services in ${cityName}, California.`,
    serviceType: SERVICE_TYPES,
    provider: getLocalBusinessReferenceJsonLd(metadataBase),
    areaServed: {
      "@type": "City",
      name: `${cityName}, California`,
      address: {
        "@type": "PostalAddress",
        addressLocality: cityName,
        addressRegion: "CA",
        addressCountry: "US",
        ...(postalCode ? { postalCode } : {}),
      },
    },
    image: buildOgImageUrl(DEFAULT_OG_IMAGE, metadataBase),
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
}
