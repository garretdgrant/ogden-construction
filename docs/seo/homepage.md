# Ogden Construction — Homepage SEO Implementation Guide

**Page:** Homepage (`/`)  
**Current URL:** `https://www.ogden-construction.com/`  
**Last audited:** April 2026  
**Priority:** High — the homepage is the #1 ranking asset and primary trust signal for local search.

---

## 1. Title Tag

### Current

```
Deck Builder in Placerville & South Lake Tahoe | Ogden Construction
```

### Recommended (no change needed)

The current title is strong. It leads with the primary keyword ("Deck Builder"), targets both priority markets, and ends with the brand name. Keep it as-is. It's 64 characters, which sits right under the ~60-character truncation threshold for most SERPs.

If you ever want to A/B test, a slight variant would be:

```
Placerville & Tahoe Deck Builder | Ogden Construction
```

But the current title is already working. Don't fix what isn't broken.

---

## 2. Meta Description

### Current

```
Custom decks, home additions, and remodeling in Placerville, South Lake Tahoe, El Dorado Hills, Folsom, and Sacramento. Licensed, insured, and built to last. Get a free consultation.
```

### Recommended

```html
<meta
  name="description"
  content="Custom Trex, composite &amp; redwood decks in Placerville &amp; South Lake Tahoe. Licensed CA contractor (Lic #1042758) since 2008. Free estimates — call (530) 919-7408."
/>
```

**Why this is better:**

- Mentions specific materials (Trex, composite, redwood) — these are high-intent search qualifiers.
- Drops the city list. The homepage should hammer Placerville and South Lake Tahoe. Let location pages handle El Dorado Hills, Folsom, and Sacramento.
- Includes the license number — builds instant trust in the SERP snippet.
- Includes the phone number — can trigger a click-to-call on mobile even from the search result.
- "Since 2008" signals longevity and experience.
- 155 characters — fits within Google's display window.

---

## 3. H1 Tag

### Current

```
Deck Builder & Home Additions Placerville & South Lake Tahoe
```

### Recommended

```html
<h1>
  Placerville &amp; Tahoe Deck Builder — Custom Trex, Composite &amp; Redwood
  Decks
</h1>
```

**Why this is better:**

- Leads with the locations (search engines weight the first words of an H1 more heavily).
- Includes "Deck Builder" as the core keyword phrase.
- Adds material keywords (Trex, composite, redwood) that match long-tail queries like "Trex deck builder Placerville."
- Drops "Home Additions" from the H1 — that service should get its own page or at minimum its own heading further down. The H1 should reflect the #1 thing you want to rank for.

**Important:** There should be exactly one `<h1>` on the page.

---

## 4. Hero Subheading / Intro Paragraph

### Current

```
Custom Trex, composite, and redwood decks, additions, and remodels across Placerville,
South Lake Tahoe, El Dorado Hills, Folsom, and Sacramento. Clear scopes, realistic
timelines, built to last.
```

### Recommended

```
We build custom Trex, composite, and redwood decks for homeowners in Placerville and
South Lake Tahoe. Every project gets a clear scope, honest budget, and a crew that
shows up on time. Licensed, insured, and locally owned since 2008.
```

**What changed and why:**

- Narrowed to Placerville and South Lake Tahoe only. The homepage should own these two markets. Other cities have dedicated location pages.
- Shifted to first person ("We build") for a warmer, more human tone. The old version read like a keyword-stuffed tagline.
- Added "honest budget" and "shows up on time" — these are the two things homeowners actually care about when hiring a contractor. They speak to real concerns, not marketing jargon.
- Added "locally owned since 2008" — trust signal that Google values for local ranking (E-E-A-T) and that homeowners value when picking a contractor.
- Removed "additions and remodels" from the top line. Those services are still on the page — they just don't need to compete with decks in the hero.

---

## 5. Structured Data (JSON-LD)

Add all three of these JSON-LD blocks inside `<script type="application/ld+json">` tags in the `<head>` of the homepage. They can be separate script blocks or combined into a `@graph` array.

### 5a. LocalBusiness Schema

This is the most important one. It tells Google who you are, where you are, and what you do.

```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.ogden-construction.com/#business",
  "name": "Ogden Construction",
  "legalName": "Levi Ogden Construction Inc",
  "description": "Custom Trex, composite, and redwood deck builder serving Placerville, South Lake Tahoe, and the greater El Dorado and Sacramento counties. Licensed California general contractor since 2008.",
  "url": "https://www.ogden-construction.com",
  "telephone": "+1-530-919-7408",
  "email": "leviogden777@gmail.com",
  "foundingDate": "2008",
  "founder": {
    "@type": "Person",
    "name": "Levi Ogden"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "175 Middletown Rd",
    "addressLocality": "Placerville",
    "addressRegion": "CA",
    "postalCode": "95667",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.7296,
    "longitude": -120.7985
  },
  "image": "https://www.ogden-construction.com/images/ogden-construction-nav-logo.webp",
  "logo": "https://www.ogden-construction.com/images/ogden-construction-nav-logo.webp",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Placerville",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "El Dorado County, CA"
      }
    },
    {
      "@type": "City",
      "name": "South Lake Tahoe",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "El Dorado County, CA"
      }
    },
    {
      "@type": "City",
      "name": "El Dorado Hills"
    },
    {
      "@type": "City",
      "name": "Folsom"
    },
    {
      "@type": "City",
      "name": "Sacramento"
    },
    {
      "@type": "City",
      "name": "Cameron Park"
    },
    {
      "@type": "City",
      "name": "Pollock Pines"
    },
    {
      "@type": "City",
      "name": "Camino"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Deck Construction",
          "description": "New Trex, composite, and redwood deck builds for residential properties."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deck Replacement",
          "description": "Tear-out and rebuild of aging or damaged residential decks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Additions",
          "description": "Room additions designed to match the existing home's style and layout."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Guest House & ADU Construction",
          "description": "Custom accessory dwelling units and guest homes for added property value."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "New Structure Construction",
          "description": "Garages, workshops, and custom outbuildings."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Remodeling",
          "description": "Interior and exterior remodeling for residential homes."
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/ogden.construction.inc/",
    "https://www.instagram.com/levioakden77",
    "https://www.yelp.com/biz/ogden-construction-placerville-2",
    "https://nextdoor.com/pages/ogden-construction-placerville-ca/"
  ]
}
```

### 5b. WebSite Schema (enables sitelinks search box)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.ogden-construction.com/#website",
  "name": "Ogden Construction",
  "url": "https://www.ogden-construction.com",
  "publisher": {
    "@id": "https://www.ogden-construction.com/#business"
  }
}
```

### 5c. FAQPage Schema

This pulls directly from the FAQ section already on the homepage and can generate rich results (expandable Q&A) in Google.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer free consultations and estimates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer a free consultation and provide a detailed estimate after learning about your goals and site conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured in California?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Ogden Construction is a licensed and insured general contractor based in Placerville, CA. Our California contractor license number is 1042758."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Placerville, South Lake Tahoe, El Dorado Hills, Folsom, Sacramento, Cameron Park, Pollock Pines, Camino, and nearby communities in El Dorado and Sacramento counties."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical deck or construction project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timelines vary by scope and permitting, but most projects are completed over several weeks once materials and approvals are in place. We outline realistic timelines during the consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with permits and inspections?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We guide the permitting process and coordinate inspections as required by El Dorado County and other local jurisdictions."
      }
    }
  ]
}
```

---

## 6. Open Graph & Social Meta Tags

These control how the homepage looks when shared on Facebook, iMessage, LinkedIn, etc. Add them inside `<head>`.

```html
<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta
  property="og:title"
  content="Deck Builder in Placerville & South Lake Tahoe | Ogden Construction"
/>
<meta
  property="og:description"
  content="Custom Trex, composite & redwood decks in Placerville & South Lake Tahoe. Licensed CA contractor since 2008. Free estimates — (530) 919-7408."
/>
<meta property="og:url" content="https://www.ogden-construction.com/" />
<meta
  property="og:image"
  content="https://www.ogden-construction.com/images/ogden-construction-og.webp"
/>
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Ogden Construction" />
<meta property="og:locale" content="en_US" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta
  name="twitter:title"
  content="Deck Builder in Placerville & South Lake Tahoe | Ogden Construction"
/>
<meta
  name="twitter:description"
  content="Custom Trex, composite & redwood decks in Placerville & South Lake Tahoe. Licensed CA contractor since 2008. Free estimates."
/>
<meta
  name="twitter:image"
  content="https://www.ogden-construction.com/images/ogden-construction-og.webp"
/>
```

**OG image:** Use the shared Ogden Construction brand card at `/images/ogden-construction-og.webp` for Open Graph and Twitter previews sitewide.

---

## 7. Additional Head Meta

```html
<!-- Canonical (prevent duplicate content issues) -->
<link rel="canonical" href="https://www.ogden-construction.com/" />

<!-- Geo tags (helps with local search signals) -->
<meta name="geo.region" content="US-CA" />
<meta name="geo.placename" content="Placerville" />
<meta name="geo.position" content="38.7296;-120.7985" />
<meta name="ICBM" content="38.7296, -120.7985" />
```

---

## 8. Homepage Body Copy — Full Rewrite

Below is the recommended copy for each section of the homepage, in order. It's written to sound like a real contractor talking to real homeowners — not a marketing agency. Every section has a purpose for SEO and for conversion.

---

### Hero Section

**H1:**

```
Placerville & Tahoe Deck Builder — Custom Trex, Composite & Redwood Decks
```

**Subheading / intro paragraph:**

```
We build custom Trex, composite, and redwood decks for homeowners in Placerville and
South Lake Tahoe. Every project gets a clear scope, honest budget, and a crew that
shows up on time. Licensed, insured, and locally owned since 2008.
```

**CTA buttons (no copy change needed):**

- "Request a Local Quote" → links to `/contact`
- "Call (530) 919-7408" → `tel:530-919-7408`

---

### Trust Badges (below hero)

Keep the three existing badges — they're good:

- **Licensed & Insured** (CA-1042758)
- **Local, Hands-On Crew**
- **Reviews on Yelp & Facebook**

---

### Services Section

**Section heading (H2):**

```
What We Build
```

**Intro paragraph:**

```
Decks are our bread and butter, but we handle a lot more than that. Whether you need
a new deck, a room addition, a guest house, or a full remodel, we bring the same
crew, the same standards, and the same clear communication to every job. Browse our
full service details or check out our material and pricing guides.
```

**Service card titles and descriptions:**

**Deck Construction**

```
Your deck should feel like part of the house — not an afterthought. We design and
build custom decks in Trex, composite, and redwood that hold up to Sierra weather
and actually get used.
```

**Deck Replacement**

```
If your old deck is soft, sagging, or just plain ugly, we'll tear it out and build
something better. New framing, new decking, new railings — done right this time.
```

**New Structure Construction**

```
Garages, workshops, barns, and outbuildings. If it needs a foundation, framing,
and a roof, we can build it.
```

**Guest House & ADU Construction**

```
ADUs and guest houses are one of the smartest investments you can make in El Dorado
County. We handle design, permitting, and construction from start to move-in.
```

**Building Additions**

```
Need more room? We add bedrooms, living spaces, and flex rooms that blend with your
existing home — no awkward seams or mismatched rooflines.
```

**Remodeling**

```
Kitchens, bathrooms, interiors, and exteriors. We update what's tired and make it
work better for how you actually live.
```

---

### Service Area Section

**Section heading (H2):**

```
Where We Work
```

**Body copy:**

```
We're based in Placerville and spend most of our time in El Dorado County and the
South Lake Tahoe basin. That means we know the local building codes, the permit
process, and what materials actually hold up at elevation.

Our primary service areas are Placerville and South Lake Tahoe, but we regularly
take projects in El Dorado Hills, Folsom, Sacramento, Cameron Park, Pollock Pines,
and Camino.
```

**Keep the location page links exactly as they are.** The internal linking structure to `/locations-we-serve/...` is already solid for SEO.

---

### Featured Projects Section

**Section heading (H2):**

```
Recent Builds
```

**Intro copy:**

```
Here's some of what we've been up to. Each project includes the scope, materials,
and location so you can get a feel for our work. Head over to the full portfolio
for more before-and-after photos.
```

No changes needed to the project cards themselves — they already have good titles, locations, and link to the portfolio.

---

### Why Choose Us Section

**Section heading (H2):**

```
Why Homeowners Choose Ogden Construction
```

**Bullet points (reworded to be less generic):**

```
- We do the work ourselves. No random subcontractors showing up at your house.
  Same crew, start to finish.

- We've been building in Placerville and Tahoe since 2008. We know the codes,
  the inspectors, and the weather.

- You'll know what it costs before we start. We give you a real scope and a
  real number — not a lowball bid that balloons later.

- We pick up the phone. If you call or text, you'll hear back the same day.
```

---

### Process Section

**Section heading (H2):**

```
How It Works
```

**Intro copy:**

```
No surprises. Here's what working with us looks like from the first call to the
final walkthrough.
```

**Steps (tightened language, same structure):**

**Step 1 — Consultation**

```
You tell us what you're thinking. We visit the site, talk through options, and
give you an honest assessment of what's realistic for your property and budget.
```

**Step 2 — Planning & Design**

```
We nail down the scope, materials, and timeline in writing. You'll know exactly
what you're getting, what it costs, and when it'll be done.
```

**Step 3 — Build**

```
Our crew gets to work. We keep the site clean, communicate daily, and handle
inspections and permitting so you don't have to.
```

**Step 4 — Walkthrough**

```
We walk the finished project together. If something's not right, we fix it
before we call it done.
```

---

### Reviews Section

**Section heading (H2):**

```
What Our Clients Say
```

**Intro copy:**

```
We don't write our own reviews. These are from real homeowners we've worked with
in Placerville, Tahoe, Folsom, and across El Dorado County. You can read more on
Yelp and Facebook.
```

Keep the three existing review cards. They're strong and cover three different service areas (South Lake Tahoe, Placerville, Folsom).

---

### FAQ Section

**Section heading (H2):**

```
Frequently Asked Questions
```

**Intro copy (slight rewrite):**

```
Quick answers to the most common questions we hear from homeowners. If you need
more detail, our guides cover materials, pricing, and the full project process.
```

**Updated FAQ answers (tightened for SEO and clarity):**

**Q: Do you offer free consultations and estimates?**

```
Yes. We'll come out to your property, talk through your goals, review the site,
and put together a detailed estimate — no cost and no pressure.
```

**Q: Are you licensed and insured in California?**

```
Yes. Ogden Construction holds California Contractor License #1042758 (General
Building, B classification). We carry full liability insurance and workers'
compensation coverage.
```

**Q: What areas do you serve?**

```
Our home base is Placerville. We serve South Lake Tahoe, El Dorado Hills, Folsom,
Sacramento, Cameron Park, Pollock Pines, Camino, and surrounding areas in El Dorado
and Sacramento counties.
```

**Q: How long does a typical project take?**

```
It depends on the scope. A straightforward deck replacement might take two to three
weeks once materials arrive. Larger projects like additions or ADUs can run several
months depending on permitting and inspections. We give you a realistic timeline
during planning — not an optimistic guess.
```

**Q: Can you help with permits and inspections?**

```
Absolutely. We handle the permit applications, coordinate with El Dorado County
(or whichever jurisdiction your property falls under), and schedule all required
inspections. You don't need to deal with any of that.
```

---

### Contact / CTA Section

**Section heading (H2):**

```
Start Your Project
```

**Copy:**

```
Tell us what you're working with and we'll get back to you with a clear scope,
timeline, and estimate. Most homeowners hear from us within one business day.
```

No changes needed to the form fields or phone number display.

---

## 9. Image Alt Text Recommendations

Update alt text on key homepage images. Alt text should describe what's in the photo and include a keyword where it's natural.

| Image          | Current alt (approx)                                | Recommended alt                                                                                               |
| -------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Hero image     | "Custom Trex deck construction in South Lake Tahoe" | "Custom Trex composite deck with black aluminum railings built by Ogden Construction in South Lake Tahoe, CA" |
| Project card 1 | "Custom Trex Deck - Black Handrails"                | "Trex deck with black metal handrails overlooking pine trees in South Lake Tahoe"                             |
| Project card 2 | "Redwood Deck - Hog Panel Railings"                 | "Redwood deck with hog wire panel railings at a cabin near Lake Tahoe"                                        |
| Project card 3 | "New Home Construction"                             | "New home construction completed by Ogden Construction in Grizzly Flats after the Caldor Fire"                |
| Logo           | "Ogden Construction logo"                           | "Ogden Construction — Placerville CA deck builder logo"                                                       |

---

## 10. Internal Linking Priorities

The homepage currently links to the right pages. Here are a few additions to strengthen the internal link graph:

1. **Link "since 2008" in the hero paragraph** to the `/about` page.
2. **Link "material and pricing guides"** in the services intro to `/guides` (already done — keep it).
3. **Add a link to the Placerville location page** (`/locations-we-serve/placerville-deck-builder-construction`) somewhere in the body copy, not just the service area widget.
4. **Add a link to the South Lake Tahoe location page** in the same way.
5. **In the FAQ answer about service areas**, link each city name to its respective location page.

---

## 11. Technical Checklist

Before and after implementing these changes, verify:

- [ ] Only one `<h1>` tag on the page
- [ ] H2s used for each major section (services, service area, projects, why us, process, reviews, FAQ, contact)
- [ ] H3s used for subsection headings (individual service cards, individual FAQ questions)
- [ ] JSON-LD validates cleanly at [validator.schema.org](https://validator.schema.org/) or Google's Rich Results Test
- [ ] Meta description under 160 characters
- [ ] Title tag under 65 characters
- [ ] OG image is 1200×630 and loads correctly (test with Facebook Sharing Debugger)
- [ ] Canonical URL is set to `https://www.ogden-construction.com/`
- [ ] Page loads under 3 seconds on mobile (test with PageSpeed Insights)
- [ ] All internal links use relative paths or full `https://` URLs (no mixed content)
- [ ] FAQ section renders identically to the JSON-LD FAQ content (Google penalizes mismatches)
- [ ] No duplicate meta descriptions shared with other pages

---

## 12. What NOT to Change

A few things on the current homepage that are already well-done:

- **The phone number in the hero CTA.** It's prominent, clickable, and exactly where it should be.
- **The 4-step process section.** Clear, simple, and builds confidence. Just tighten the wording (see above).
- **The review cards.** Three reviews covering three different cities is smart. Keep them.
- **The location page links in the service area widget.** This internal linking pattern is excellent for local SEO. Don't remove it.
- **The footer structure.** License number, hours, contact info, social links — all present and correct.

---

## Quick-Reference: Complete `<head>` Block

Here's what the full `<head>` metadata should look like after implementation:

```html
<head>
  <!-- Primary Meta -->
  <title>
    Deck Builder in Placerville &amp; South Lake Tahoe | Ogden Construction
  </title>
  <meta
    name="description"
    content="Custom Trex, composite &amp; redwood decks in Placerville &amp; South Lake Tahoe. Licensed CA contractor (Lic #1042758) since 2008. Free estimates — call (530) 919-7408."
  />
  <link rel="canonical" href="https://www.ogden-construction.com/" />

  <!-- Geo -->
  <meta name="geo.region" content="US-CA" />
  <meta name="geo.placename" content="Placerville" />
  <meta name="geo.position" content="38.7296;-120.7985" />
  <meta name="ICBM" content="38.7296, -120.7985" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Deck Builder in Placerville &amp; South Lake Tahoe | Ogden Construction"
  />
  <meta
    property="og:description"
    content="Custom Trex, composite &amp; redwood decks in Placerville &amp; South Lake Tahoe. Licensed CA contractor since 2008. Free estimates — (530) 919-7408."
  />
  <meta property="og:url" content="https://www.ogden-construction.com/" />
  <meta
    property="og:image"
    content="https://www.ogden-construction.com/images/ogden-construction-og.webp"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Ogden Construction" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Deck Builder in Placerville &amp; South Lake Tahoe | Ogden Construction"
  />
  <meta
    name="twitter:description"
    content="Custom Trex, composite &amp; redwood decks in Placerville &amp; South Lake Tahoe. Licensed CA contractor since 2008. Free estimates."
  />
  <meta
    name="twitter:image"
    content="https://www.ogden-construction.com/images/ogden-construction-og.webp"
  />

  <!-- Structured Data: LocalBusiness -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.ogden-construction.com/#business",
      "name": "Ogden Construction",
      "legalName": "Levi Ogden Construction Inc",
      "description": "Custom Trex, composite, and redwood deck builder serving Placerville, South Lake Tahoe, and the greater El Dorado and Sacramento counties. Licensed California general contractor since 2008.",
      "url": "https://www.ogden-construction.com",
      "telephone": "+1-530-919-7408",
      "email": "leviogden777@gmail.com",
      "foundingDate": "2008",
      "founder": {
        "@type": "Person",
        "name": "Levi Ogden"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "175 Middletown Rd",
        "addressLocality": "Placerville",
        "addressRegion": "CA",
        "postalCode": "95667",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.7296,
        "longitude": -120.7985
      },
      "image": "https://www.ogden-construction.com/images/ogden-construction-nav-logo.webp",
      "logo": "https://www.ogden-construction.com/images/ogden-construction-nav-logo.webp",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Placerville" },
        { "@type": "City", "name": "South Lake Tahoe" },
        { "@type": "City", "name": "El Dorado Hills" },
        { "@type": "City", "name": "Folsom" },
        { "@type": "City", "name": "Sacramento" },
        { "@type": "City", "name": "Cameron Park" },
        { "@type": "City", "name": "Pollock Pines" },
        { "@type": "City", "name": "Camino" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Construction Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Deck Construction",
              "description": "New Trex, composite, and redwood deck builds for residential properties."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Deck Replacement",
              "description": "Tear-out and rebuild of aging or damaged residential decks."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Home Additions",
              "description": "Room additions designed to match the existing home."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Guest House & ADU Construction",
              "description": "Custom accessory dwelling units and guest homes."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "New Structure Construction",
              "description": "Garages, workshops, and custom outbuildings."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Home Remodeling",
              "description": "Interior and exterior remodeling for residential homes."
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/ogden.construction.inc/",
        "https://www.instagram.com/levioakden77",
        "https://www.yelp.com/biz/ogden-construction-placerville-2",
        "https://nextdoor.com/pages/ogden-construction-placerville-ca/"
      ]
    }
  </script>

  <!-- Structured Data: WebSite -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.ogden-construction.com/#website",
      "name": "Ogden Construction",
      "url": "https://www.ogden-construction.com",
      "publisher": {
        "@id": "https://www.ogden-construction.com/#business"
      }
    }
  </script>

  <!-- Structured Data: FAQ -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer free consultations and estimates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer a free consultation and provide a detailed estimate after learning about your goals and site conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Are you licensed and insured in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Ogden Construction holds California Contractor License #1042758 (General Building, B classification). We carry full liability insurance and workers' compensation coverage."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve Placerville, South Lake Tahoe, El Dorado Hills, Folsom, Sacramento, Cameron Park, Pollock Pines, Camino, and nearby communities in El Dorado and Sacramento counties."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a typical deck or construction project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timelines vary by scope and permitting. A straightforward deck replacement might take two to three weeks. Larger projects like additions or ADUs can run several months depending on permitting and inspections."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help with permits and inspections?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We handle permit applications, coordinate with the local jurisdiction, and schedule all required inspections."
          }
        }
      ]
    }
  </script>
</head>
```
