import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
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

type LocalBusinessOverrides = {
  address?: PostalAddress;
  areaServed?: Place[];
  description?: string;
  id?: string;
  imagePath?: string;
  name?: string;
  url?: string;
};

const PRODUCTION_URL = "https://www.ogden-construction.com";
const SITE_NAME = "Ogden Construction";
const BUSINESS_NAME = "Ogden Construction";
const DEFAULT_OG_IMAGE = "/og-image.jpg";
const ABOUT_OG_IMAGE = "/images/about/ogdenTruck.jpg";
const EMAIL = "info@ogden-construction.com";
const PHONE = "+1-530-919-7408";

const SERVICE_TYPES = [
  "Deck Building",
  "Home Additions",
  "General Contracting",
];

const AREA_SERVED: Place[] = [
  { "@type": "Place", name: "Placerville" },
  { "@type": "Place", name: "El Dorado Hills" },
  { "@type": "Place", name: "Folsom" },
  { "@type": "Place", name: "Cameron Park" },
  { "@type": "Place", name: "South Lake Tahoe" },
  { "@type": "Place", name: "Pollock Pines" },
  { "@type": "Place", name: "Sacramento" },
  { "@type": "Place", name: "Camino" },
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
  contactType: "Customer Support",
  areaServed: ["US"],
  availableLanguage: ["English"],
};

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
  imagePath = DEFAULT_OG_IMAGE,
  type = "website",
}: PageMetadataInput): Metadata {
  const metadataBase = getMetadataBase();
  const canonicalUrl = buildCanonicalUrl(path, metadataBase);
  const ogImageUrl = buildOgImageUrl(imagePath, metadataBase);

  return {
    metadataBase,
    title,
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
          width: 1200,
          height: 630,
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

function getBaseUrl(metadataBase = getMetadataBase()): string {
  return metadataBase.toString().replace(/\/$/, "");
}

function buildLocalBusiness(
  overrides: LocalBusinessOverrides = {},
  metadataBase = getMetadataBase(),
) {
  const baseUrl = getBaseUrl(metadataBase);
  const url = overrides.url ?? baseUrl;
  const id = overrides.id ?? `${url}/#localbusiness`;

  return {
    "@type": "LocalBusiness",
    "@id": id,
    name: overrides.name ?? BUSINESS_NAME,
    url,
    email: EMAIL,
    telephone: PHONE,
    serviceType: SERVICE_TYPES,
    contactPoint: CONTACT_POINT,
    hasMap: "https://www.google.com/maps/place/Placerville,+CA",
    founder: {
      "@type": "Person",
      name: "Levi Ogden",
      url: `${baseUrl}/about`,
    },
    address: overrides.address ?? ADDRESS,
    areaServed: overrides.areaServed ?? AREA_SERVED,
    openingHoursSpecification: OPENING_HOURS,
    description: overrides.description ?? BASE_DESCRIPTION,
    sameAs: SAME_AS,
    image: buildOgImageUrl(
      overrides.imagePath ?? DEFAULT_OG_IMAGE,
      metadataBase,
    ),
    priceRange: "$$",
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    ...buildLocalBusiness(),
  };
}

export function getAboutJsonLd() {
  const metadataBase = getMetadataBase();
  const baseUrl = getBaseUrl(metadataBase);
  const url = `${baseUrl}/about`;

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": url,
    name: "About Ogden Construction",
    url,
    mainEntity: buildLocalBusiness(
      {
        imagePath: ABOUT_OG_IMAGE,
      },
      metadataBase,
    ),
  };
}

export function getServicesJsonLd() {
  const metadataBase = getMetadataBase();
  const baseUrl = getBaseUrl(metadataBase);
  const url = `${baseUrl}/services`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#services`,
    name: "Ogden Construction Services",
    url,
    mainEntityOfPage: buildLocalBusiness({}, metadataBase),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services Offered by Ogden Construction",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deck Building",
            description:
              "Custom wood and composite decks built to match your home and lifestyle. Servicing Placerville, Tahoe, Folsom, and surrounding areas.",
            areaServed: [
              { "@type": "Place", name: "Placerville" },
              { "@type": "Place", name: "South Lake Tahoe" },
              { "@type": "Place", name: "El Dorado Hills" },
              { "@type": "Place", name: "Folsom" },
              { "@type": "Place", name: "Sacramento" },
            ],
            provider: {
              "@type": "LocalBusiness",
              name: BUSINESS_NAME,
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Additions",
            description:
              "Expand your home with seamless, code-compliant additions—crafted for long-term comfort and value.",
            areaServed: [
              { "@type": "Place", name: "Placerville" },
              { "@type": "Place", name: "South Lake Tahoe" },
              { "@type": "Place", name: "El Dorado Hills" },
              { "@type": "Place", name: "Folsom" },
              { "@type": "Place", name: "Sacramento" },
            ],
            provider: {
              "@type": "LocalBusiness",
              name: BUSINESS_NAME,
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remodeling Services",
            description:
              "Interior and exterior remodeling for kitchens, bathrooms, and entire homes with premium craftsmanship.",
            areaServed: [
              { "@type": "Place", name: "Placerville" },
              { "@type": "Place", name: "South Lake Tahoe" },
              { "@type": "Place", name: "El Dorado Hills" },
              { "@type": "Place", name: "Folsom" },
              { "@type": "Place", name: "Sacramento" },
            ],
            provider: {
              "@type": "LocalBusiness",
              name: BUSINESS_NAME,
            },
          },
        },
      ],
    },
  };
}

export function getPortfolioJsonLd() {
  const metadataBase = getMetadataBase();
  const baseUrl = getBaseUrl(metadataBase);
  const url = `${baseUrl}/portfolio`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl}/#portfolio`,
    name: "Ogden Construction Portfolio",
    url,
    hasPart: [
      {
        "@type": "Project",
        name: "Redwood Deck Replacement",
        description:
          "Demolition and replacement of an aging deck with redwood boards. Completed in South Lake Tahoe, CA with excellent communication and timely execution.",
        locationCreated: {
          "@type": "Place",
          name: "South Lake Tahoe, CA",
        },
        image: buildOgImageUrl(
          "/images/portfolio/redwood-deck.webp",
          metadataBase,
        ),
        dateCreated: "2023",
        creator: {
          "@type": "LocalBusiness",
          name: BUSINESS_NAME,
          url: baseUrl,
        },
      },
      {
        "@type": "Project",
        name: "Twin Bridges Cabin Improvements",
        description:
          "Deck rebuild and driveway leveling project for improved winter access and extended structural support in Twin Bridges, CA.",
        locationCreated: {
          "@type": "Place",
          name: "Twin Bridges, CA",
        },
        image: buildOgImageUrl(
          "/images/portfolio/twin-bridges-cabin.webp",
          metadataBase,
        ),
        dateCreated: "2023",
        creator: {
          "@type": "LocalBusiness",
          name: BUSINESS_NAME,
          url: baseUrl,
        },
      },
      {
        "@type": "Project",
        name: "Full Home Rebuild & Deck Construction",
        description:
          "Ground-up rebuild of a home lost to the Caldor Fire, including inspections, coordination, and custom deck construction in Grizzly Flats, CA.",
        locationCreated: {
          "@type": "Place",
          name: "Grizzly Flats, CA",
        },
        image: buildOgImageUrl(
          "/images/portfolio/guestHouse.webp",
          metadataBase,
        ),
        dateCreated: "2023",
        creator: {
          "@type": "LocalBusiness",
          name: BUSINESS_NAME,
          url: baseUrl,
        },
      },
      {
        "@type": "Project",
        name: "Trex Deck & Retaining Wall Build",
        description:
          "Trex deck installation and retaining wall construction with drainage system in Rescue, CA. Completed efficiently despite challenging weather.",
        locationCreated: {
          "@type": "Place",
          name: "Rescue, CA",
        },
        image: buildOgImageUrl(
          "/images/portfolio/curtisRetainingWall.webp",
          metadataBase,
        ),
        dateCreated: "2023",
        creator: {
          "@type": "LocalBusiness",
          name: BUSINESS_NAME,
          url: baseUrl,
        },
      },
      {
        "@type": "Project",
        name: "Fencing & 2nd Story Deck Project",
        description:
          "Custom fencing with gates and a second-story deck with stairs installed in Placerville, CA. Responsive team adapted seamlessly to changes during construction.",
        locationCreated: {
          "@type": "Place",
          name: "Placerville, CA",
        },
        image: buildOgImageUrl("/images/portfolio/fence.webp", metadataBase),
        dateCreated: "2023",
        creator: {
          "@type": "LocalBusiness",
          name: BUSINESS_NAME,
          url: baseUrl,
        },
      },
    ],
    mainEntityOfPage: buildLocalBusiness({}, metadataBase),
  };
}

export function getContactJsonLd() {
  const metadataBase = getMetadataBase();
  const baseUrl = getBaseUrl(metadataBase);
  const url = `${baseUrl}/contact`;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${baseUrl}/#contact`,
    name: BUSINESS_NAME,
    url,
    mainEntityOfPage: buildLocalBusiness(
      {
        imagePath: ABOUT_OG_IMAGE,
      },
      metadataBase,
    ),
    contactOption: "TollFree",
    areaServed: AREA_SERVED,
    telephone: PHONE,
    email: EMAIL,
    openingHoursSpecification: OPENING_HOURS,
  };
}

export function getLocationJsonLd({
  citySlug,
  cityName,
  description,
  postalCode,
}: {
  citySlug: string;
  cityName: string;
  description?: string;
  postalCode?: string;
}) {
  const metadataBase = getMetadataBase();
  const baseUrl = getBaseUrl(metadataBase);
  const url = `${baseUrl}/locations/california/${citySlug}`;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    name: `Ogden Construction – ${cityName}`,
    url,
    description:
      description ??
      `Ogden Construction builds high-quality custom decks and home additions in ${cityName}, CA. Trusted, licensed, and experienced craftsmanship.`,
    telephone: PHONE,
    image: buildOgImageUrl(DEFAULT_OG_IMAGE, metadataBase),
    areaServed: {
      "@type": "Place",
      name: `${cityName}, CA`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: "CA",
      addressCountry: "US",
      postalCode: postalCode ?? "95667",
    },
    hasMap: `https://www.google.com/maps/search/${encodeURIComponent(
      `${cityName}, CA`,
    )}`,
    priceRange: "$$",
    sameAs: SAME_AS,
  };
}
