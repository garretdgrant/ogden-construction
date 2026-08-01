export type OgdenPageKind =
  | "home"
  | "service"
  | "location"
  | "guide"
  | "portfolio"
  | "about"
  | "contact";

export type OgdenLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type OgdenMetadata = {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImagePath?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  focusKeyword: string;
  supportingKeywords: string[];
};

export type OgdenSeoIntent = {
  primaryIntent: string;
  geographicFocus: string[];
  pageOwns: string[];
  pageDoesNotOwn: string[];
};

export type OgdenBusinessDetails = {
  legalName: string;
  displayName: string;
  foundedYear: number;
  licenseLabel: string;
  licenseNumber: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  serviceAreaLabel: string;
  serviceAreas: string[];
  hours: Array<{
    days: string;
    hours: string;
  }>;
};

export type OgdenHero = {
  eyebrow: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
  primaryCta: OgdenLink;
  secondaryCta: OgdenLink;
  trustItems: string[];
};

export type OgdenContentBlock =
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
        href?: string;
        ctaLabel?: string;
      }>;
    }
  | {
      type: "location-grid";
      locations: Array<{
        name: string;
        text: string;
        href: string;
      }>;
      footerLink?: OgdenLink;
    }
  | {
      type: "project-grid";
      projects: Array<{
        title: string;
        location: string;
        text: string;
        href: string;
        ctaLabel: string;
      }>;
      footerLink?: OgdenLink;
    }
  | {
      type: "steps";
      steps: Array<{
        title: string;
        text: string;
      }>;
    }
  | {
      type: "stats";
      stats: Array<{
        value: string;
        label: string;
      }>;
    }
  | {
      type: "review-grid";
      reviews: Array<{
        quote: string;
        name: string;
        location: string;
        project: string;
      }>;
      links?: OgdenLink[];
    }
  | {
      type: "callout";
      title: string;
      text: string;
      primaryCta: OgdenLink;
      secondaryCta?: OgdenLink;
    };

export type OgdenSection = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  surface?: "default" | "muted" | "contrast";
  blocks: OgdenContentBlock[];
};

export type OgdenFaq = {
  question: string;
  answer: string;
};

export type OgdenLeadForm = {
  title: string;
  description: string;
  submitLabel: string;
  privacyText: string;
};

export type OgdenPageData = {
  kind: OgdenPageKind;
  slug: string;
  pageHref: string;
  dateModified: string;
  metadata: OgdenMetadata;
  seoIntent: OgdenSeoIntent;
  business: OgdenBusinessDetails;
  hero: OgdenHero;
  anchorLinks?: OgdenLink[];
  sections: OgdenSection[];
  faqs?: OgdenFaq[];
  faqTitle?: string;
  leadForm?: OgdenLeadForm;
  finalCta: {
    eyebrow?: string;
    title: string;
    text: string;
    primaryCta: OgdenLink;
    secondaryCta?: OgdenLink;
  };
};
