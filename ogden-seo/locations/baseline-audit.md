# Locations Baseline Audit (Step 1)

Scope: `/locations-we-serve` index and location detail pages at `/locations-we-serve/<city>-deck-builder-construction`.

## Pages Reviewed

- Index: `src/app/locations-we-serve/page.tsx`
- Sample detail: `src/app/locations-we-serve/south-lake-tahoe-deck-builder-construction/page.tsx`

## Locations Index (Current)

**Route:** `/locations-we-serve`

**Headings & Structure**

- H1: “Locations We Serve in Northern California”
- Intro copy references Sierra foothills + Tahoe.
- Grid of location cards with name, description, and highlights.

**CTAs & Links**

- Card CTA: “View {city}” linking to `/locations-we-serve/${location.pageSlug}`.

**Metadata & Schema**

- Metadata: `buildPageMetadata` with title/description and canonical `/locations-we-serve`.
- JSON-LD: `getWebPageJsonLd` (WebPage).

## Location Detail Page (Current)

**Route example:** `/locations-we-serve/south-lake-tahoe-deck-builder-construction`

**Headings & Structure**

- H1: “High-Quality Construction for Homes & Businesses in {city}”
- H2: “Expert Construction Services in {city}”
- H2: “Why {city} Homeowners Choose Ogden Construction”
- H2: “Local Details” + “See More Locations”
- H2: “Let’s Build Something Great in {city}”

**Content Signals**

- Local description pulled from `locations-data`.
- Highlights list rendered as cards.
- Local details include service area and postal code.
- No city-specific materials/climate/pricing blocks yet.
- No FAQ section yet.
- No trust/testimonial block on location pages.

**CTAs & Links**

- Top CTA: “Request a Free Quote” (`/contact`).
- Bottom CTA: “Schedule Your Consultation” (`/contact`).
- Internal links to other locations via `pageSlug`.
- No direct link back to the locations hub.

**Media**

- Hero image uses `/og-image.jpg` (generic; not city-specific).

**Metadata & Schema**

- Metadata: `buildPageMetadata` with title “Deck Builder in {city} | Ogden Construction”, description from `seoDescription`, canonical `/locations-we-serve/<slug>`.
- JSON-LD: `getLocationJsonLd` (LocalBusiness).
- Breadcrumb schema: not present.
- FAQ schema: not present.

## Internal Linking (Current)

- Index page links to each location detail page.
- Location detail page links to other locations and `/contact`.
- No links yet to portfolio, guides, or pricing pages from detail pages.
- No links to the locations hub from detail pages.

## Performance Baseline

- Lighthouse baseline not captured.

## Notes / Gaps Identified (Baseline Only)

- No FAQ block or FAQPage schema on location pages.
- No breadcrumb UI or BreadcrumbList schema.
- No pricing expectations block.
- No materials/climate considerations block.
- No portfolio references/links on location pages.
- Generic hero image on location pages (not city-specific).
