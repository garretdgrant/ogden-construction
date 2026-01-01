# Location Page Strategy (Reusable)

This guide explains how to build a scalable, indexable location page system that works across projects. It assumes a Next.js App Router setup, but the same ideas apply elsewhere.

## Goals

- One unique, indexable URL per location.
- Distinct metadata and on-page copy per location.
- Consistent template that scales to dozens or hundreds of locations.
- Structured data that reinforces local intent.

## Data model

Create a single source of truth for location data. Keep it small but meaningful so each page can be unique.

Suggested fields:

- `id`: URL-safe slug (used in the route segment).
- `name`: Human-readable location name.
- `region`: Optional region or state name.
- `postalCode`: Optional postal/ZIP.
- `description`: Short hero summary.
- `seoDescription`: Meta description.
- `seoCopy`: 2-4 paragraphs of unique copy.
- `highlights`: 3-6 bullet highlights.

Keep the data in a shared module (for example, `src/lib/locations-data.ts`) and add helper methods like `getLocationById`.

## Routing + static generation

Use a dynamic route segment that maps the location `id` to the URL:

- Route: `src/app/locations/[region]/[city]/page.tsx` or similar.
- `generateStaticParams()` returns every `id` so each page is statically generated.

This ensures each location gets its own HTML file for search engines to index.

## Metadata and canonical URLs

Per location, build:

- Unique `title` and `description`.
- Canonical URL that matches the location slug.

Avoid boilerplate metadata; use the location name and unique copy.

## Structured data

Add JSON-LD to reinforce local intent:

- `LocalBusiness` or the most appropriate schema type.
- `url` set to the canonical location URL.
- `areaServed` includes the location name and broader region.

This can be injected with a `Script` tag or via metadata utilities.

## Template structure

Build a consistent template that inserts location data into:

- Hero headline and subcopy.
- Main content copy (`seoCopy` paragraphs).
- Highlight sections or proof points.
- A small "local details" card (region, postal code, or service area).

Even if the layout is shared, the text should vary per location.

## Internal linking

Add a "see more locations" section that links to other locations. This improves crawlability and distributes authority across location pages.

## Uniqueness checklist

Each location page should have:

- Unique URL (`/locations/<region>/<id>`).
- Unique `<title>` and `<meta name="description">`.
- Unique H1 and hero copy.
- 2-4 unique paragraphs of body copy.
- At least one structured data field tied to the location.

## Optional: sitemap and navigation

- Ensure location routes are in the sitemap (or rely on static generation and internal links).
- Include a top-level locations index page to list all locations.

## Common pitfalls

- Reusing the same description or body copy across locations.
- Missing canonical tags or incorrect canonical URLs.
- Forgetting to render JSON-LD with location-specific fields.
- Not linking between locations, making pages harder to discover.
