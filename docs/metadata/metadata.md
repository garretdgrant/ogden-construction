# Metadata Guide

Authoritative metadata pattern for the App Router build.

## Core helpers

- Location: `src/lib/metadata.ts`
- Use `generateMetadata()` (not a static `metadata` export) on every page.
- Helpers:
  - `getMetadataBase()` — env-aware base URL (localhost vs production).
  - `buildPageMetadata({ title, description, path, imagePath?, type? })` — returns canonical, OG, and Twitter data.
  - `buildCanonicalUrl(path, metadataBase)` / `buildOgImageUrl(path, metadataBase)` — compose URLs safely.
  - Canonical entity builders: `buildCanonicalLocalBusinessNode`, `buildCanonicalWebsiteNode`, and `buildLeviOgdenPersonNode`.
  - Stable references: `getLocalBusinessReferenceJsonLd`, `getWebsiteReferenceJsonLd`, `getLeviOgdenReferenceJsonLd`, and `getSchemaEntityIds`.
  - Page JSON-LD builders: `getAboutJsonLd`, `getServicesJsonLd`, `getPortfolioJsonLd`, `getContactJsonLd`, `getWebPageJsonLd`, and `getLocationJsonLd`.
- OG/Twitter image: use real assets; the default is `/images/ogden-construction-og.webp`.
- Entity rule: emit the full canonical LocalBusiness, WebSite, and Person nodes only on the homepage and About page. All other schemas reference their stable `@id` values.

## Current implementations (reference)

- Homepage: `OgdenPageStructuredData` emits one canonical LocalBusiness/GeneralContractor node, one WebSite node, Levi Ogden's Person node, the HomePage, its primary image, and matching FAQs.
- About: `getAboutJsonLd` emits the same canonical entity nodes plus the AboutPage.
- Service, portfolio, contact, guide, and location schemas reference `https://www.ogden-construction.com/#localbusiness` instead of nesting additional LocalBusiness objects.
- Location detail pages use `Service` plus `areaServed`; they do not claim that each service city is a separate Ogden Construction office.

## How to add metadata

### Static page

```tsx
import { buildPageMetadata, getAboutJsonLd } from "@/lib/metadata";
import Script from "next/script";

export async function generateMetadata() {
  return buildPageMetadata({
    title: "Page Title | EDC Web Design",
    description: "Concise 140–160 char summary.",
    path: "/route-segment",
    // imagePath: "/your-image.webp", // optional
  });
}

export default function Page() {
  const jsonLd = getAboutJsonLd(); // pick the right helper or author a new one
  return (
    <>
      <Script
        id="page-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* page UI */}
    </>
  );
}
```

### Dynamic page

```tsx
import {
  buildPageMetadata,
  getArticleJsonLd,
  getMetadataBase,
} from "@/lib/metadata";
import Script from "next/script";

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = `Title for ${slug} | EDC Web Design`;
  const description = "Page-specific description here.";

  return buildPageMetadata({
    title,
    description,
    path: `/parent/${slug}`,
    type: "article", // when appropriate
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jsonLd = getArticleJsonLd({
    title: `Title for ${slug}`,
    description: "Description",
    slug: `/parent/${slug}`,
    published: new Date().toISOString(),
    metadataBase: getMetadataBase(),
  });

  return (
    <>
      <Script
        id={`jsonld-${slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* page UI */}
    </>
  );
}
```

### Checklist for any page

- Titles 50–60 chars when possible; descriptions ~140–160 chars.
- Canonical must match the route path exactly; use `buildPageMetadata`.
- Reuse `getMetadataBase()` for any absolute URL; never hard-code production URLs.
- Ensure OG/Twitter images exist and use absolute URLs (helpers handle this).
- JSON-LD matches visible page content, and multiple scripts on one page do not emit duplicate entities with competing `@id` values.
- Dynamic routes: derive metadata from params; keep `generateStaticParams` in sync.

## Schema validation status

- 2026-08-01: source-level audit confirms one full LocalBusiness node on the homepage and About page, zero duplicate LocalBusiness nodes in service, portfolio, contact, guide, and location helpers, one connected Levi Ogden Person node on the canonical entity pages, and exactly one FAQPage node on the homepage.
- Google Rich Results Test: pending deployment of the schema changes. Validate the homepage, About page, one service detail page, and one location detail page after deployment.
- The public LocalBusiness address intentionally contains only `Placerville, CA 95667`; no private street address or exact geo coordinates are published.
