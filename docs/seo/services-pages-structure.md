# Service Pages Template — Implementation Spec

> **Purpose:** Break the monolithic `/services` page into dedicated service pages, each targeting specific keywords. This doc gives your coding agent everything needed to scaffold the template and routing — content will be written separately.
>
> **Site:** ogden-construction.com (Next.js, `_next/image` confirms App Router or Pages Router with next/image)
> **Current state:** `/services` lists 6 services inline. No individual service routes exist yet.

---

## 1. Routing Structure

Use dynamic routing with a shared template. All service pages live under `/services/[slug]`.

```
app/
  services/
    page.tsx                    ← existing services index (keep, but update links)
    [slug]/
      page.tsx                  ← dynamic service page template
    data/
      services.ts               ← all service page content/config lives here
```

The `/services` index page stays as the overview hub. Each service card on it should now link to its dedicated page instead of anchoring to the same page.

---

## 2. Service Data Schema

Define all service pages in a single data file. This is the source of truth — when you're ready to add a new service page, you just add an entry here.

```ts
// app/services/data/services.ts

export interface ServiceFAQ {
  question: string;
  answer: string; // can contain basic HTML or markdown
}

export interface ServiceGalleryImage {
  src: string;        // path in /public/images/services/
  alt: string;
  width: number;
  height: number;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceData {
  // — Routing & Meta —
  slug: string;
  title: string;                     // H1 on the page
  metaTitle: string;                 // <title> tag — target keyword + brand
  metaDescription: string;           // 150-160 chars, keyword-rich
  ogImage?: string;                  // social share image path

  // — Hero —
  heroImage: string;                 // path in /public/images/services/
  heroImageAlt: string;
  heroSubheading: string;            // 1-2 sentence hook below H1
  priceRange: string;                // e.g. "$15,000 – $50,000+"

  // — Content Sections (filled in later) —
  introContent: string;              // HTML string — 2-3 paragraphs of intro
  sections: ContentSection[];        // main body content blocks

  // — Structured Pieces —
  materialHighlights?: MaterialCard[];
  process?: ProcessStep[];           // override global process if service-specific
  faqs: ServiceFAQ[];                // 4-6 per page, unique to service
  gallery: ServiceGalleryImage[];    // 3-6 project photos

  // — Internal Linking —
  relatedServices: string[];         // slugs of related service pages
  relatedGuides?: RelatedLink[];     // links to /guides/ content
  ctaText?: string;                  // override default CTA copy

  // — SEO —
  defined as jsonLd?: object;        // optional override for JSON-LD
}

export interface ContentSection {
  id: string;                        // anchor link target
  heading: string;                   // H2
  content: string;                   // HTML string
  image?: ServiceGalleryImage;       // optional inline image
  imagePosition?: "left" | "right";
}

export interface MaterialCard {
  name: string;                      // e.g. "Trex Transcend"
  description: string;
  pros: string[];
  cons: string[];
  image?: string;
}

export interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}
```

---

## 3. Starter Service Entries

Populate `services.ts` with placeholder entries for each planned page. Content fields are empty strings — they'll be filled in during the copywriting phase.

```ts
export const services: ServiceData[] = [
  {
    slug: "deck-construction",
    title: "Custom Deck Construction",
    metaTitle:
      "Custom Deck Builder in Placerville & South Lake Tahoe | Ogden Construction",
    metaDescription: "",
    heroImage: "/images/services/deck-construction-hero.webp",
    heroImageAlt: "Custom deck under construction in Placerville, CA",
    heroSubheading: "",
    priceRange: "$15,000 – $50,000+",
    introContent: "",
    sections: [],
    faqs: [],
    gallery: [],
    relatedServices: [
      "deck-replacement",
      "trex-composite-decks",
      "redwood-decks",
    ],
  },
  {
    slug: "deck-replacement",
    title: "Deck Replacement",
    metaTitle: "Deck Replacement in Placerville & Tahoe | Ogden Construction",
    metaDescription: "",
    heroImage: "/images/services/deck-replacement-hero.webp",
    heroImageAlt: "Old deck being replaced with new composite decking",
    heroSubheading: "",
    priceRange: "$12,000 – $45,000+",
    introContent: "",
    sections: [],
    faqs: [],
    gallery: [],
    relatedServices: ["deck-construction", "trex-composite-decks"],
  },
  {
    slug: "trex-composite-decks",
    title: "Trex & Composite Decks",
    metaTitle:
      "Trex Deck Builder Placerville & South Lake Tahoe | Ogden Construction",
    metaDescription: "",
    heroImage: "/images/services/trex-composite-hero.webp",
    heroImageAlt: "Trex composite deck with mountain views in South Lake Tahoe",
    heroSubheading: "",
    priceRange: "$20,000 – $55,000+",
    introContent: "",
    sections: [],
    materialHighlights: [],
    faqs: [],
    gallery: [],
    relatedServices: ["deck-construction", "redwood-decks"],
  },
  {
    slug: "redwood-decks",
    title: "Redwood Decks",
    metaTitle:
      "Redwood Deck Builder in Placerville & Tahoe | Ogden Construction",
    metaDescription: "",
    heroImage: "/images/services/redwood-decks-hero.webp",
    heroImageAlt: "Redwood deck with hog panel railings in Tahoe",
    heroSubheading: "",
    priceRange: "$18,000 – $50,000+",
    introContent: "",
    sections: [],
    faqs: [],
    gallery: [],
    relatedServices: ["deck-construction", "trex-composite-decks"],
  },
  {
    slug: "home-additions",
    title: "Home Additions & ADUs",
    metaTitle:
      "Home Addition Contractor Placerville & El Dorado County | Ogden Construction",
    metaDescription: "",
    heroImage: "/images/services/home-additions-hero.webp",
    heroImageAlt: "Home addition project in Placerville, CA",
    heroSubheading: "",
    priceRange: "$80,000 – $400,000+",
    introContent: "",
    sections: [],
    faqs: [],
    gallery: [],
    relatedServices: ["remodeling", "general-contracting"],
  },
  {
    slug: "remodeling",
    title: "Remodeling",
    metaTitle:
      "Remodeling Contractor Placerville & South Lake Tahoe | Ogden Construction",
    metaDescription: "",
    heroImage: "/images/services/remodeling-hero.webp",
    heroImageAlt: "Kitchen remodeling project by Ogden Construction",
    heroSubheading: "",
    priceRange: "Varies by scope",
    introContent: "",
    sections: [],
    faqs: [],
    gallery: [],
    relatedServices: ["home-additions", "general-contracting"],
  },
  {
    slug: "general-contracting",
    title: "General Contracting",
    metaTitle:
      "General Contractor Placerville & El Dorado County | Ogden Construction",
    metaDescription: "",
    heroImage: "/images/services/general-contracting-hero.webp",
    heroImageAlt: "Ogden Construction crew on a residential job site",
    heroSubheading: "",
    priceRange: "Varies by project",
    introContent: "",
    sections: [],
    faqs: [],
    gallery: [],
    relatedServices: ["home-additions", "remodeling"],
  },
];

// Helper to look up by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

// Get all slugs for generateStaticParams
export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
```

---

## 4. Dynamic Page Template

`app/services/[slug]/page.tsx` — this is the shared layout every service page renders through.

### 4.1 Static Generation

```ts
import { getAllServiceSlugs, getServiceBySlug } from "../data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Pre-render all service pages at build time
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: service.ogImage ? [service.ogImage] : [],
      url: `https://www.ogden-construction.com/services/${service.slug}`,
    },
  };
}
```

### 4.2 Page Section Order

The template renders these sections top to bottom. Each is a separate component. When content fields are empty, the section should either render a placeholder (dev mode) or be skipped (production).

```
┌─────────────────────────────────────────────┐
│  Breadcrumb                                 │
│  Home > Services > {service.title}          │
├─────────────────────────────────────────────┤
│  Hero Section                               │
│  ┌───────────────────────────────────────┐  │
│  │  Background: service.heroImage        │  │
│  │  H1: service.title                    │  │
│  │  Subheading: service.heroSubheading   │  │
│  │  Price badge: service.priceRange      │  │
│  │  CTA: "Get a Free Estimate"           │  │
│  │  CTA: "Call (530) 919-7408"           │  │
│  └───────────────────────────────────────┘  │
├─────────────────────────────────────────────┤
│  Intro Content                              │
│  2-3 paragraphs from service.introContent   │
│  + on-page anchor nav (jump links to        │
│    each section.id below)                   │
├─────────────────────────────────────────────┤
│  Content Sections (mapped from sections[])  │
│  Each renders:                              │
│    H2 heading                               │
│    HTML content                             │
│    Optional image (left or right aligned)   │
├─────────────────────────────────────────────┤
│  Material Highlights (if materialHighlights │
│  exists — mainly for deck material pages)   │
│  Card grid showing material pros/cons       │
├─────────────────────────────────────────────┤
│  Project Gallery                            │
│  Responsive grid from service.gallery[]     │
│  Links back to /portfolio for full gallery  │
├─────────────────────────────────────────────┤
│  Process Section                            │
│  Reuse existing 4-step process component    │
│  from homepage/services index OR override   │
│  with service.process[] if defined          │
├─────────────────────────────────────────────┤
│  FAQ Accordion                              │
│  Renders service.faqs[] with FAQ schema     │
│  markup (JSON-LD)                           │
├─────────────────────────────────────────────┤
│  Related Services                           │
│  Card row linking to sibling service pages  │
│  Pulled from service.relatedServices[]      │
├─────────────────────────────────────────────┤
│  CTA / Contact Section                      │
│  Reuse the existing contact form section    │
│  from the services index / homepage         │
├─────────────────────────────────────────────┤
│  JSON-LD Script (in <head> via metadata)    │
│  Service schema + FAQ schema + LocalBusiness│
└─────────────────────────────────────────────┘
```

---

## 5. Components to Build

These are new components for the service page template. Reuse existing site components (header, footer, contact form, process steps) wherever possible.

| Component         | File                                      | Notes                                                                                                     |
| ----------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `Breadcrumb`      | `components/Breadcrumb.tsx`               | `Home > Services > {title}`. Use schema.org BreadcrumbList JSON-LD.                                       |
| `ServiceHero`     | `components/services/ServiceHero.tsx`     | Full-width hero with overlay text, price badge, two CTAs. Match existing hero pattern from homepage.      |
| `AnchorNav`       | `components/services/AnchorNav.tsx`       | Sticky or inline jump-link bar generated from `sections[].id`. Optional — skip if only 2-3 sections.      |
| `ContentSection`  | `components/services/ContentSection.tsx`  | Renders one `ContentSection` item. Alternating image layout.                                              |
| `MaterialCards`   | `components/services/MaterialCards.tsx`   | Grid of material comparison cards with pros/cons lists. Only renders if `materialHighlights` has entries. |
| `ServiceGallery`  | `components/services/ServiceGallery.tsx`  | Responsive image grid using `next/image`. Lightbox optional.                                              |
| `FAQAccordion`    | `components/services/FAQAccordion.tsx`    | Accessible accordion. Injects FAQ JSON-LD into page head.                                                 |
| `RelatedServices` | `components/services/RelatedServices.tsx` | Horizontal card row, pulls title + slug + heroImage from sibling service entries.                         |
| `ServiceJsonLd`   | `components/services/ServiceJsonLd.tsx`   | Generates combined JSON-LD script: Service, FAQPage, BreadcrumbList, LocalBusiness.                       |

---

## 6. JSON-LD Structured Data

Every service page should output this in the `<head>`:

```jsonc
// Combined JSON-LD — output as a single <script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "{service.title}",
    "description": "{service.metaDescription}",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ogden Construction Inc",
      "telephone": "(530) 919-7408",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Placerville",
        "addressRegion": "CA",
      },
      "url": "https://www.ogden-construction.com",
    },
    "areaServed": [
      { "@type": "City", "name": "Placerville" },
      { "@type": "City", "name": "South Lake Tahoe" },
      { "@type": "City", "name": "El Dorado Hills" },
      { "@type": "City", "name": "Folsom" },
      { "@type": "City", "name": "Sacramento" },
    ],
    "url": "https://www.ogden-construction.com/services/{slug}",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // mapped from service.faqs[]
      {
        "@type": "Question",
        "name": "{faq.question}",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "{faq.answer}",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ogden-construction.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.ogden-construction.com/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "{service.title}",
        "item": "https://www.ogden-construction.com/services/{slug}",
      },
    ],
  },
]
```

---

## 7. Update the Services Index

After the template is built, update `/services/page.tsx`:

- Each service card should link to `/services/{slug}` instead of staying on-page.
- Keep the overview page as a hub — short descriptions, price ranges, and "Learn more →" links.
- Add an `<h2>` and brief intro paragraph above the service grid for SEO.

---

## 8. Image Placeholders

Create the following directory and placeholder structure. Actual images will be added during content creation.

```
public/
  images/
    services/
      deck-construction-hero.webp
      deck-replacement-hero.webp
      trex-composite-hero.webp
      redwood-decks-hero.webp
      home-additions-hero.webp
      remodeling-hero.webp
      general-contracting-hero.webp
```

For now, you can reuse existing project photos from the portfolio or use a solid-color placeholder. The hero images should be optimized at ~1920×800 for desktop, served via `next/image` with `priority` on above-fold heroes.

---

## 9. Internal Linking Updates

Once service pages exist, update links site-wide:

| Location                                                    | Current                      | Updated                           |
| ----------------------------------------------------------- | ---------------------------- | --------------------------------- |
| Homepage service cards                                      | All link to `/services`      | Each links to `/services/{slug}`  |
| Services index cards                                        | Anchor or same-page          | Each links to `/services/{slug}`  |
| Footer (if services listed)                                 | `/services`                  | Individual pages or keep hub link |
| Location pages (e.g. `/locations-we-serve/placerville-...`) | Mention services generically | Link to specific service pages    |

---

## 10. Sitemap & Robots

Make sure `next-sitemap` or your sitemap config picks up the new `/services/[slug]` routes. Each service page should appear in `sitemap.xml` with:

```xml
<url>
  <loc>https://www.ogden-construction.com/services/deck-construction</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## 11. Checklist Before Content

Use this to confirm the template is wired up before filling in copy:

- [ ] `/services/deck-construction` renders the template with placeholder content
- [ ] All 7 service slugs resolve without 404
- [ ] Metadata (title, description, OG) renders correctly per slug
- [ ] Breadcrumb displays and links work
- [ ] Hero image loads with `next/image` optimization
- [ ] FAQ accordion expands/collapses with keyboard support
- [ ] JSON-LD validates at https://validator.schema.org
- [ ] Related services cards link to correct sibling pages
- [ ] Contact form section renders and submits correctly
- [ ] Mobile responsive — hero, content sections, gallery, FAQ all work at 375px
- [ ] Services index page cards now link to individual pages
- [ ] Homepage service cards now link to individual pages
- [ ] New routes appear in sitemap.xml
- [ ] Lighthouse score stays above 90 (performance, accessibility)
