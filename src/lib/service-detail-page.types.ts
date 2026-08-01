export type ServiceDetailCustomSection = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  surface?: "default" | "muted" | "contrast";
  placement?: "after-overview" | "before-faqs" | "before-contact";
  blocks: Array<
    | {
        type: "paragraph";
        text: string;
      }
    | {
        type: "heading";
        text: string;
      }
    | {
        type: "unordered-list";
        items: string[];
      }
    | {
        type: "icon-list";
        items: Array<{
          title: string;
          text: string;
        }>;
      }
    | {
        type: "card-grid";
        cards: Array<{
          title: string;
          text: string;
          href?: `/${string}`;
          ctaLabel?: string;
        }>;
      }
    | {
        type: "callout";
        title: string;
        text: string;
        cta?: {
          label: string;
          href: `/${string}`;
        };
      }
  >;
};

/** Reusable data model for Ogden Construction service-detail pages. */
export type ServiceDetailPageData = {
  kind: "service";
  template: "service-detail";
  slug: string;
  pageHref: `/${string}`;
  dateModified: `${number}-${number}-${number}`;
  metadata: {
    title: string;
    description: string;
    canonicalPath: `/${string}`;
    ogTitle: string;
    ogDescription: string;
    ogImagePath: `/${string}`;
    ogImageAlt: string;
    ogImageWidth: number;
    ogImageHeight: number;
    focusKeyword: string;
    supportingKeywords: string[];
  };
  seoIntent: {
    primaryIntent: string;
    geographicFocus: string[];
    pageOwns: string[];
    pageDoesNotOwn: string[];
    supportingTopics: string[];
  };
  structuredData: {
    schemaType: "Service";
    serviceName: string;
    serviceType: string;
    providerName: string;
    areaServed: string[];
    includeBreadcrumbSchema: boolean;
    includeFaqSchema: boolean;
  };
  business: {
    legalName: string;
    displayName: string;
    foundedYear: number;
    licenseLabel: string;
    licenseNumber: string;
    phoneDisplay: string;
    phoneHref: `tel:${string}`;
    email: string;
    emailHref: `mailto:${string}`;
    serviceAreaLabel: string;
  };
  breadcrumbs: Array<{
    label: string;
    href: `/${string}` | "/";
  }>;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: {
      src: `/${string}`;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };
    primaryCta: {
      label: string;
      href: `/${string}`;
    };
    secondaryCta: {
      label: string;
      href: `/${string}`;
    };
    trustItems: string[];
  };
  anchorLinks?: Array<{
    label: string;
    href: `#${string}`;
  }>;
  customSections?: ServiceDetailCustomSection[];
  overview?: {
    id: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: Array<{
      title: string;
      text: string;
    }>;
  };
  serviceTypes?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      summary: string;
      details: string[];
    }>;
  };
  choices?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      summary: string;
      considerations: string[];
      bestFor?: string;
    }>;
    callout?: {
      title: string;
      text: string;
      cta: {
        label: string;
        href: `/${string}`;
      };
    };
  };
  capabilities?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  planningFactors?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  process?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{
      title: string;
      text: string;
    }>;
  };
  scopeFactors?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
    resourceLink: {
      label: string;
      href: `/${string}`;
    };
  };
  projects?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      location: string;
      summary: string;
      highlights: string[];
      href: `/${string}`;
      ctaLabel: string;
    }>;
    footerLink: {
      label: string;
      href: `/${string}`;
    };
  };
  serviceAreas?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      name: string;
      text: string;
      href: `/${string}`;
    }>;
    footerLink: {
      label: string;
      href: `/${string}`;
    };
  };
  relatedResources?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      text: string;
      href: `/${string}`;
      ctaLabel: string;
    }>;
  };
  faqTitle?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  leadForm?: {
    title: string;
    description: string;
    projectTypeLabel: string;
    projectTypeOptions: string[];
    requestedFields: Array<
      | "name"
      | "email"
      | "phone"
      | "location"
      | "timeline"
      | "budget"
      | "details"
      | "photos"
    >;
    submitLabel: string;
    privacyText: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: {
      label: string;
      href: `/${string}`;
    };
    secondaryCta: {
      label: string;
      href: `/${string}`;
    };
  };
};
