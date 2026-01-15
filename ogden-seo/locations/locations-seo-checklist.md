# Locations SEO Plan

Scope: `/locations-we-serve` index and location detail pages at `/locations-we-serve/<city>-deck-builder-construction`.

## 1) Baseline Audit & Inventory

- [x] Capture current location index and detail page structure.
- [x] Confirm metadata (title/description, canonical, OG/Twitter) for index and a sample location page.
- [ ] Review structured data present (LocalBusiness) and validate via Rich Results Test.
- [x] Check existing internal links from index to each location page.
- [ ] Collect performance baseline (Lighthouse mobile/desktop; LCP, CLS, TBT).

## 2) Metadata & SERP Optimization

- [x] Ensure city-specific meta titles follow: “{City} Deck Builder | Composite, Redwood & Outdoor Construction | Ogden Construction”.
- [x] Ensure meta descriptions include city + materials + CTA.
- [x] Confirm canonical URLs match each location slug.
- [ ] Verify Open Graph image, title, and description reflect location messaging.

## 3) Headings & Content Structure

- [x] H1 includes city + deck builder intent.
- [x] Add local relevance block (city-specific conditions).
- [x] Add materials + climate considerations (especially Tahoe/snow markets).
- [x] Add pricing expectations block (3 tiers, city-adjusted).
- [x] Keep decks as primary service; GC services secondary.
- [x] Add portfolio references (city if available).

## 4) Conversion & Trust Signals

- [x] Ensure top CTA is visible (quote/consult).
- [x] Ensure bottom CTA present.
- [x] Add trust signals (license/insured, years, local reputation).
- [x] Add testimonial/reputation signals on location pages.

## 5) Local SEO Signals

- [x] Add internal links to portfolio, guides, pricing, and contact on each location page.
- [x] Link back to location hub `/locations-we-serve`.
- [x] Add links to nearby cities (already present via “See More Locations”).

## 6) Structured Data Enhancements

- [x] Add BreadcrumbList to each city and locations index page.
- [x] Add BreadcrumbList schema for location pages.
- [x] Add FAQPage schema when FAQs are added.
- [x] Ensure LocalBusiness schema is present and URL matches location path.
- [x] Consider WebPage subtype for location pages if needed.

## 7) Media & Performance

- [ ] Use city-specific or relevant hero images.
- [x] Ensure images use `next/image` with correct `sizes` and priority as needed.
- [ ] Convert heavy images to WebP/AVIF where possible.
- [ ] Reduce any unused CSS/JS or heavy client components on location pages.

## 8) Accessibility & UX

- [ ] Verify color contrast for headings and CTAs.
- [x] Ensure headings and CTA buttons are keyboard accessible.
- [x] Check alt text for all location images.

## 9) Internal Linking Strategy

- [x] Use contextual links with anchors like “Deck builder in {city}”.
- [x] Link to portfolio, materials/pricing guides, and nearby cities.

## 10) QA & Validation

- [ ] Run `pnpm lint`.
- [ ] Run Lighthouse checks (mobile/desktop) and document improvements.
- [ ] Validate schema (LocalBusiness, FAQ, Breadcrumbs, WebPage).
- [ ] Manual QA across breakpoints.

## 11) Post-Launch Monitoring

- [ ] Track GSC impressions/clicks for each city page.
- [ ] Monitor ranking changes for “{city} deck builder”.
- [ ] Track conversions from location pages.
