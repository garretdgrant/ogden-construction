# Homepage Baseline Audit (Step 1)

Scope: `src/app/page.tsx` and homepage components in `src/components`.

## Sections & Headings (Current)

Order as rendered on `/`:

1. Hero

- H1: “Custom Decks & Home Construction in Placerville” (`src/components/Hero.tsx`)
- CTAs: “Get a Free Consultation” (scrolls to `#contact-section`), “Request a Quote” (`/contact`)

2. Services

- H2: “Our Services” (`src/components/Services.tsx`)
- Supporting copy: “From custom decks to full additions…”
- CTA links: service cards link to `/services`, “View all services” (`/services`)

3. Service Area & Credentials

- H2: “Service Area & Credentials” (`src/components/ServiceArea.tsx`)
- Supporting copy mentions licensed/insured and counties
- CTA link: “View all service areas” (`/locations`)
- Area chips (non-linked): Placerville, El Dorado Hills, Folsom, Sacramento, South Lake Tahoe, Cameron Park, Pollock Pines, Camino

4. Featured Projects

- H2: “Featured Projects” (`src/components/Projects.tsx`)
- Supporting copy: “Explore recent builds…”
- CTA links: project cards link to `/portfolio`, “View the full portfolio” (`/portfolio`)

5. Why Choose Us

- H2: “Why Choose Us” (`src/components/WhyChooseUs.tsx`)
- Supporting copy + 4 benefit cards

6. Our Process

- H2: “Our Process” (`src/components/Process.tsx`)
- Steps 1–4 listed with H3 titles

7. Homeowner Reviews

- H2: “Homeowner Reviews” (`src/components/Reviews.tsx`)
- CTA links (external): Yelp, Facebook

8. Frequently Asked Questions

- H2: “Frequently Asked Questions” (`src/components/HomeFaq.tsx`)
- 5 FAQ items with H3 question headings

9. Contact

- H2: “Let’s Transform Your Home” (`src/components/Contact.tsx`)
- Contact form (name/email/phone/message)
- Contact info: phone, email, Facebook, Instagram, service area statement

## Homepage Metadata (Current)

From `src/app/page.tsx` with `buildPageMetadata` (`src/lib/metadata.ts`):

- Title: “Deck Builder in Placerville & South Lake Tahoe | Ogden Construction”
- Description: “Custom decks, home additions, and remodeling in Placerville, South Lake Tahoe, El Dorado Hills, Folsom, and Sacramento. Licensed, insured, and built to last. Get a free consultation.”
- Canonical: `/` via `buildPageMetadata`
- Open Graph: default image `/og-image.jpg`, type `website`
- Twitter card: `summary_large_image`

## Structured Data (Current)

From `src/app/page.tsx`:

- LocalBusiness JSON-LD (`getLocalBusinessJsonLd`) with NAP, service areas, hours, sameAs, priceRange.
- FAQPage JSON-LD (`getHomeFaqJsonLd`) matching the visible FAQ list.
- Breadcrumb schema: not present on homepage.

## Internal Links on Homepage

Global nav (`src/components/Header.tsx`):

- `/services`, `/portfolio`, `/about`, `/locations`, `/guides`, `/contact`

Homepage sections:

- Hero: `/contact`
- Services: `/services`
- Service Area: `/locations`
- Projects: `/portfolio`
- Reviews (external): Yelp, Facebook
- Contact info (external): Facebook, Instagram

## CTA Inventory (Homepage)

- Primary hero CTA: “Get a Free Consultation” (scroll to contact)
- Secondary hero CTA: “Request a Quote” (`/contact`)
- Section CTAs: “View all services”, “View all service areas”, “View the full portfolio”
- Reviews CTAs: “Yelp Reviews”, “Facebook Reviews” (external)
- Contact form submission CTA: “Contact Us Today For Your Free Consultation”

## Performance Baseline

- Lighthouse baseline: Not captured yet (needs `pnpm dev` + Lighthouse). No metrics recorded.

## Notes / Gaps Identified (Baseline Only)

- No breadcrumbs schema on homepage.
- No internal links from homepage to pricing or guide content (other than top-nav “Guides”).
- Project cards are placeholder (“TODO: Update to real projects”).
