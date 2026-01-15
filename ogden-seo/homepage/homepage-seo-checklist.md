# Homepage SEO Plan

Scope: `/` (HomePage) and homepage components in `src/components` plus shared metadata/schema utilities.

## 1) Baseline Audit & Inventory

- [x] Capture current homepage sections, headings, and CTA placements.
- [x] Confirm current metadata (title/description, canonical, OG/Twitter) from `buildPageMetadata`.
- [ ] Review structured data present (LocalBusiness + FAQ) and validate via Rich Results Test.
- [x] Check for existing internal links on homepage to service, portfolio, location, and pricing pages.
- [ ] Collect performance baseline (Lighthouse mobile/desktop; LCP, CLS, TBT).

## 2) Metadata & SERP Optimization

- [x] Refine homepage meta title for local intent + primary service (Placerville, El Dorado, Folsom, Sacramento).
- [x] Refine meta description with clear USP + CTA + service area.
- [x] Confirm canonical URL is set to `/`.
- [x] Verify Open Graph image, title, and description reflect updated homepage messaging.

Notes:

- Meta title/description prioritize South Lake Tahoe as the #2 market after Placerville.

## 3) Headings & Content Structure

- [x] Ensure a single, intent-rich H1 in `Hero` (e.g., “Deck Builder in Placerville & El Dorado County”).
- [x] Review H2 order for logical progression (services, service area, projects, process, reviews, FAQ, contact).
- [x] Add supporting copy blocks where needed to address: materials, pricing expectations, timelines, and location signals.
- [x] Add or refine microcopy for CTAs to align with local intent (quote/schedule/phone).

## 4) Conversion & Trust Signals

- [x] Validate above-the-fold CTA clarity (primary action + phone).
- [x] Add or strengthen trust badges: license, insurance, warranties, years in business.
- [x] Surface review snippets/ratings near the top of the page.
- [x] Highlight before/after outcomes and project cost ranges (if available).
- [x] Confirm contact form usability on mobile and add tap-to-call for phone.

Notes:

- Added a tap-to-call CTA and trust/review badges in the hero to prioritize Tahoe/Placerville conversion.
- Added project highlight chips for before/after and budget ranges, plus a tap-to-call button in the contact panel.

## 5) Local SEO Signals

- [x] Expand Service Area copy to include key cities and counties with natural phrasing.
- [x] Add internal links to top geo pages (Placerville, El Dorado County, Folsom, Tahoe, etc.).
- [x] Add internal links to core service pages and portfolio/guides.

## 6) Structured Data Enhancements

- [x] Add BreadcrumbList schema for homepage (Home only or Home > Section anchors if applicable).
- [ ] Validate LocalBusiness schema fields (NAP, service area, geo, URL, sameAs).
- [x] Ensure FAQ schema matches visible FAQ content.
- [x] Consider adding WebSite + WebPage schema for stronger indexing signals.

Notes:

- Opened the Rich Results Test for the homepage; confirm results and then we can check off LocalBusiness validation.

## 7) Media & Performance

- [ ] Audit hero/portfolio images for LCP; convert to WebP/AVIF and size properly.
- [x] Ensure images use `next/image` with correct `sizes` and priority for hero.
- [x] Confirm fonts are optimized (preload, subset if applicable).
- [ ] Reduce any unused CSS/JS or heavy client components on homepage.

Notes:

- Added responsive `sizes` for project images; hero already uses priority with `next/image`.
- Fonts are loaded via `next/font` with subsets and `display: swap` in `src/app/layout.tsx`.

## 8) Accessibility & UX

- [ ] Verify color contrast for headings and CTAs.
- [x] Ensure headings and CTA buttons are keyboard accessible.
- [x] Check alt text for all homepage images.

Notes:

- Added focus-visible rings to inline/anchor links; buttons remain keyboard accessible.
- All homepage images have descriptive `alt` text.

## 9) Internal Linking Strategy

- [x] Add contextual links in Services/Projects/FAQ to related pages (services, locations, guides).
- [x] Add anchor links for key sections to aid navigation and potential sitelinks.

## 10) QA & Validation

- [ ] Run `pnpm lint`.
- [ ] Run Lighthouse checks (mobile/desktop) and document improvements.
- [ ] Validate schema (LocalBusiness, FAQ, Breadcrumbs, WebSite/WebPage).
- [ ] Manual QA across breakpoints.

## 11) Post-Launch Monitoring

- [ ] Track GSC impressions/clicks for branded + local queries.
- [ ] Track conversions: calls, form submissions, and consult bookings.
- [ ] Update content based on performance insights.
