# Ogden Construction — SEO Enhancement Guide

**Site:** ogden-construction.com  
**Primary goal:** Rank top 10 for deck-building keywords in Placerville, South Lake Tahoe, El Dorado Hills, and Placerville/Tahoe corridor  
**Prepared:** April 8, 2026

---

## Executive Summary

Ogden Construction has a solid foundation: a Next.js site with location pages, three informational guides, a portfolio, and real Yelp reviews (17 reviews, 4.8 stars). But with only 204 clicks and 21.5K impressions over 12 months — and an average position of 41.7 — the site is barely scratching the surface of its potential.

The good news: the site already ranks for some relevant terms (it's getting impressions), it just isn't ranking high enough to convert those impressions into clicks. The 1% CTR and position ~42 mean Google sees the site but hasn't been given enough reason to place it on page one.

This guide covers the specific changes — technical, on-page, content, local, and off-page — that will move the needle the most, with deck-focused keywords in the Tahoe/Placerville area as the primary target.

---

## 1. Current State Audit

### 1.1 What's Working

- **Location pages exist** for Placerville, South Lake Tahoe, El Dorado Hills, Folsom, Sacramento, Auburn, and Napa Valley at `/locations-we-serve/`. Each has localized FAQs, pricing tiers, and a unique H1.
- **Three guide articles** target high-intent informational queries (deck cost, deck ROI, repair vs. replacement).
- **Schema-friendly structure:** breadcrumbs are present on location pages.
- **Clear service messaging:** the homepage title tag ("Deck Builder in Placerville & South Lake Tahoe") is well-targeted.
- **Yelp profile is active** with 17 reviews and a 4.8 rating, including the Yelp Guaranteed badge.

### 1.2 Critical Problems Found

**Duplicate / orphaned location pages:** The old URL pattern `/locations/california/sacramento` (and others) is still indexed by Google but returns 404 errors. These dead pages waste crawl budget and split any link equity that may have accumulated. Meanwhile, the new `/locations-we-serve/` pages exist but Google may be confused by two competing URL structures.

**Thin, repetitive location page content:** Every location page repeats the same boilerplate phrase — "We help [City] residents turn ideas into reality — on budget and built to last" — six times verbatim. Google recognizes this as thin/duplicate content and is unlikely to rank it. The El Dorado Hills page body text is nearly identical to Placerville's.

**No dedicated deck service pages:** The single `/services` page lumps six distinct services into one page. Competitors like GVD Renovations, Placerville Deck, and Omega Deck Solutions each have dedicated pages for composite decking, Trex decking, wood decks, deck repair, etc. Each of those pages ranks independently for material-specific queries.

**Missing blog / content hub:** The site has three guide articles but no blog index, no ongoing publishing cadence, and no topical authority signals around decks. Competitors like Deome2 Builders and Sidex have rich content libraries.

**No Google Business Profile optimization signals:** The site references a phone number (530-919-7408) that differs from the Yelp listing (530-240-0017). NAP (Name, Address, Phone) consistency is a fundamental local SEO factor.

**Reviews on the site appear fabricated:** The testimonials from "Jordan M.," "Alyssa R.," and "Chris T." appear on every single page of the site but don't match any actual Yelp reviews. Google's helpful content system penalizes sites with inauthentic content. This needs to be addressed.

**No structured data / schema markup visible:** While the site is built in Next.js (which supports JSON-LD natively), there's no evidence of LocalBusiness, Service, FAQ, or Review schema being implemented.

**Yelp description has errors:** The Yelp listing says "Established in 2017" while the website says "since 2008." The Yelp description also has a typo ("untill"). These inconsistencies erode trust signals.

---

## 2. Technical SEO Fixes (Do These First)

### 2.1 Fix the 404 Orphaned Pages

The old `/locations/california/[city]` URLs are still in Google's index but return 404. Set up 301 redirects in your Next.js config:

| Old URL                             | Redirect to                                                 |
| ----------------------------------- | ----------------------------------------------------------- |
| `/locations/california/sacramento`  | `/locations-we-serve/sacramento-deck-builder-construction`  |
| `/locations/california/folsom`      | `/locations-we-serve/folsom-deck-builder-construction`      |
| `/locations/california/napa-valley` | `/locations-we-serve/napa-valley-deck-builder-construction` |
| (Check for all others)              | Corresponding new URL                                       |

In `next.config.js`, add these as permanent redirects. Then submit the updated sitemap to Google Search Console and request re-indexing.

### 2.2 Submit a Clean XML Sitemap

Make sure your sitemap at `/sitemap.xml` only includes live, canonical URLs. Remove any references to the old `/locations/california/` pattern. The sitemap should include every page you want ranked, including all guide articles, location pages, the portfolio, and all future service pages.

### 2.3 Add Structured Data (JSON-LD)

Implement the following schema types across the site:

**Every page — LocalBusiness:**

```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Ogden Construction Inc",
  "url": "https://www.ogden-construction.com",
  "telephone": "+1-530-919-7408",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Placerville",
    "addressRegion": "CA",
    "postalCode": "95667"
  },
  "geo": { ... },
  "areaServed": ["Placerville", "South Lake Tahoe", "El Dorado Hills", "Folsom", "Sacramento"],
  "license": "CA-1042758",
  "priceRange": "$$-$$$$"
}
```

**FAQ pages / FAQ sections — FAQPage schema** for every set of questions on location pages and the homepage. This can generate rich results (expandable FAQ snippets) directly in SERPs.

**Service pages — Service schema** with `provider`, `areaServed`, `serviceType`, and `offers` (price ranges).

**Portfolio page — ImageGallery or CreativeWork schema** with project descriptions.

### 2.4 Page Speed & Core Web Vitals

The site uses Next.js `Image` component with quality=75, which is good. However, verify these items:

- Hero images are served in WebP/AVIF format (the `.webp` extensions are already present — good).
- Largest Contentful Paint (LCP) is under 2.5 seconds. Test with PageSpeed Insights.
- The contact form doesn't load heavy JavaScript bundles that block interaction.
- Enable Next.js ISR (Incremental Static Regeneration) or full static export for all content pages.

### 2.5 Fix NAP Consistency

The phone number on the website is (530) 919-7408 but the Yelp listing shows (530) 240-0017. Pick one primary number and make sure it's identical across:

- Website (header, footer, contact page, every location page)
- Google Business Profile
- Yelp
- Facebook
- Any other directories

Also ensure the business address on all platforms matches exactly. If there's no storefront, use the same service-area configuration everywhere.

---

## 3. On-Page SEO: Page-by-Page Improvements

### 3.1 Homepage

**Current title:** "Deck Builder in Placerville & South Lake Tahoe | Ogden Construction"  
**Assessment:** This is actually pretty good. It targets the primary keyword ("deck builder") and priority locations.

**Improvements:**

- Add a meta description if one isn't set (or improve the existing one). Target something like: "Custom Trex, composite & redwood decks in Placerville & South Lake Tahoe. Licensed CA contractor since 2008. Free estimates — (530) 919-7408."
- The H1 ("Deck Builder & Home Additions Placerville & South Lake Tahoe") is decent but could be tightened. Consider: "Placerville & Tahoe Deck Builder — Custom Trex, Composite & Redwood Decks"
- The intro paragraph mentions too many cities. For SEO, the homepage should hammer Placerville and South Lake Tahoe (priority markets). Let location pages handle the others.

### 3.2 Services Page — Break It Apart

**This is the single highest-impact change you can make.**

Right now, `/services` is one page covering six services. Each service gets a title, one sentence, and a price range. That's not enough content for Google to rank it for any specific query.

**Create dedicated service pages:**

| New URL                          | Target Keyword                                         | Content Needed                                                                            |
| -------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `/services/deck-construction`    | "deck builder Placerville," "custom deck construction" | 1,500+ words on deck types, materials, process, Placerville/Tahoe considerations          |
| `/services/deck-replacement`     | "deck replacement Placerville," "replace old deck"     | 800+ words on when to replace, signs of failure, process, cost range                      |
| `/services/trex-composite-decks` | "Trex deck builder," "composite deck Placerville"      | 1,200+ words specifically about Trex and composite options, warranty, colors, maintenance |
| `/services/redwood-decks`        | "redwood deck builder," "redwood deck Placerville"     | 800+ words on redwood pros/cons for Northern California climate                           |
| `/services/home-additions`       | "home addition contractor Placerville"                 | 1,000+ words on addition types, ADUs, permitting                                          |
| `/services/remodeling`           | "remodeling contractor Placerville"                    | 1,000+ words on remodel types, process                                                    |
| `/services/general-contracting`  | "general contractor Placerville"                       | 800+ words on what GC services include                                                    |

**Why this matters:** Your competitor Omega Deck Solutions (placervilledeckbuilder.com) has separate pages for composite decks, Trex decks, wood decks, pool decks, and custom design — and they rank for material-specific queries. GVD Renovations has city-specific deck builder pages for Placerville AND South Lake Tahoe. Deome2 Builders has individual service pages for deck building, removal, repair, and patios.

By splitting services into dedicated pages, you multiply the number of keyword-targetable entry points from 1 to 7+.

### 3.3 Location Pages — Add Real, Unique Content

The current location pages are a great structural start, but they need unique, substantive content to rank. Google's helpful content update specifically targets location pages with swapped-out city names and identical body copy.

**For each location page, add:**

- **A unique 300–500 word section** about building in that specific area. For Placerville: talk about foothill terrain, El Dorado County building department, typical lot characteristics, slope considerations. For South Lake Tahoe: snow load requirements per TRPA, seasonal building windows, Tahoe-specific permit timelines, altitude considerations for materials.
- **Real project examples from that area.** Link to specific portfolio entries. "We recently completed a 400-sq-ft Trex deck on a sloped lot in Pollock Pines…"
- **Localized pricing context.** You have pricing tiers already; add a sentence about why Tahoe projects tend to cost more (access, snow engineering, shorter building season).
- **Remove the repeated boilerplate.** The "We help [City] residents turn ideas into reality — on budget and built to last" line appears 6 times on some pages. Replace each instance with unique supporting content.

### 3.4 Guide Articles — Strengthen and Expand

The three existing guides are solid topics. Improvements:

**"How Much Does It Cost to Build a Deck?"**

- Add a comparison table: wood vs. composite vs. Trex with cost per sq ft for each.
- Add a "Deck Cost in [Year]" section header with the current year so it stays fresh in search results. Update annually.
- Internal link to the new `/services/deck-construction` and `/services/trex-composite-decks` pages.
- Add an image or diagram showing deck cost breakdown by component (materials, labor, permits, engineering).

**"How Much Does a Deck Add to Home Value?"**

- Cite NAR (National Association of Realtors) data or Remodeling Magazine's Cost vs. Value report for the Pacific region.
- Add a Placerville/Tahoe-specific angle: "In mountain communities, a well-built deck can be especially valuable because outdoor living space is a top buyer priority."

**"Deck Repair vs. Replacement"**

- Add a visual checklist or decision flowchart.
- Include photos of common repair scenarios from your actual projects.

### 3.5 Portfolio Page — Make It Work Harder

The portfolio currently has project cards with titles, locations, and brief descriptions. To improve SEO:

- **Add individual project pages** (or at minimum, expandable detail sections) with 100–200 words per project describing the scope, materials used, challenges, and outcome.
- **Use descriptive alt text** on all portfolio images: "Custom Trex composite deck with black aluminum railings in South Lake Tahoe, CA" rather than generic alt text.
- **Tag projects by city and service type** so they internally link to both location pages and service pages.

---

## 4. Content Strategy: New Pages to Build

### 4.1 Priority Content (Build Within 30 Days)

These pages target keywords where you're already getting impressions but not ranking high enough:

| Page                             | Target Keyword Cluster                                    | Why                                                                              |
| -------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `/services/deck-construction`    | deck builder, custom deck, deck construction + [city]     | Your #1 service needs its own ranking URL                                        |
| `/services/trex-composite-decks` | Trex deck, composite deck + [city]                        | Competitors have dedicated pages; you mention Trex but have no dedicated content |
| `/services/redwood-decks`        | redwood deck + [city]                                     | Redwood is a major differentiator in the foothills/Tahoe market                  |
| `/trex-vs-redwood-deck`          | Trex vs redwood, composite vs wood deck                   | High-search-volume comparison query; no competitor in your market owns this      |
| `/deck-permits-el-dorado-county` | deck permit Placerville, building permit El Dorado County | Extremely local, low-competition, high-intent keyword                            |

### 4.2 Secondary Content (Build Within 60 Days)

| Page                             | Target Keyword Cluster                            | Why                                               |
| -------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `/best-deck-materials-for-tahoe` | best decking for snow, deck materials Tahoe       | Tahoe-specific content nobody else is writing     |
| `/snow-load-deck-design-tahoe`   | snow load deck, Tahoe deck engineering            | Technical, long-tail, positions you as the expert |
| `/hillside-deck-construction`    | hillside deck, sloped lot deck builder            | Highly relevant to Placerville/foothills terrain  |
| `/services/deck-replacement`     | deck replacement, replace old deck + [city]       | Separate from new construction; different intent  |
| `/services/home-additions`       | home addition, room addition + [city]             | Secondary service but high-value keyword          |
| `/services/adu-guest-house`      | ADU builder Placerville, guest house construction | ADU demand is surging in California               |

### 4.3 Ongoing Blog Content (Monthly)

Start a blog at `/blog` and publish 2–4 posts per month. Focus on topics that demonstrate expertise and target long-tail keywords:

**Deck-focused topics (priority):**

- "What to Know Before Building a Deck in El Dorado County"
- "Trex Transcend vs. Trex Select: Which Is Right for Your Placerville Home?"
- "How Long Does It Take to Build a Deck? A Realistic Timeline"
- "5 Signs Your Deck Needs to Be Replaced (Not Just Repaired)"
- "Deck Railing Options: Cable, Composite, Aluminum, and Hog Panel Compared"
- "Do You Need a Permit to Build a Deck in Placerville?"
- "Best Deck Designs for Sloped Lots in the Sierra Foothills"
- "How to Prepare Your Tahoe Deck for Winter"
- "Deck Staining and Sealing Guide for Northern California"
- "Multi-Level Deck Ideas for Mountain Homes"

**Broader construction topics (secondary):**

- "ADU Building Requirements in El Dorado County [Current Year]"
- "How to Choose a General Contractor in Placerville"
- "New Home Construction Timeline: What to Expect"

Each blog post should be 800–1,500 words, include 2–3 internal links to service or location pages, and target one primary keyword cluster.

---

## 5. Local SEO: Google Business Profile & Citations

### 5.1 Google Business Profile Optimization

This is probably the fastest path to more leads. If the GBP isn't fully optimized, you're leaving free traffic on the table. Make sure:

- **Primary category:** "Deck Builder" (not "General Contractor" — that's a secondary category)
- **Secondary categories:** General Contractor, Home Builder, Remodeling Contractor
- **Business description:** 750 characters covering deck building, Placerville, South Lake Tahoe, Trex/composite/redwood, and the license number.
- **Service area:** Set all priority cities (Placerville, South Lake Tahoe, El Dorado Hills, Folsom, Sacramento, Cameron Park, Pollock Pines)
- **Services listed:** Add each service with a description and price range.
- **Photos:** Upload 20+ high-quality project photos with descriptive filenames (e.g., `trex-deck-south-lake-tahoe.jpg`). Google prioritizes listings with recent photos.
- **Posts:** Publish a GBP post weekly — completed project photos, seasonal tips, or special offers. These appear directly in local search results.
- **Q&A:** Pre-populate the Q&A section with your most common questions (pulled from your FAQ sections).

### 5.2 Get Real Google Reviews

Yelp reviews don't help Google rankings. You need reviews on Google specifically. The business has 17 Yelp reviews but likely very few Google reviews.

- After every completed project, send a direct link to the Google review page.
- Aim for 2–3 new Google reviews per month.
- Respond to every review (positive and negative) within 48 hours.
- Don't ask for specific star ratings — just make it easy for happy customers to leave a review.

### 5.3 Fix Citation Consistency

Audit and correct your business information on these platforms:

- Google Business Profile
- Yelp (fix "Established in 2017" to match your actual founding date; fix the phone number; fix the "untill" typo)
- Facebook business page
- Apple Maps
- Bing Places
- Better Business Bureau
- Angi / HomeAdvisor
- Houzz
- Nextdoor business page
- California CSLB listing (verify license #CA-1042758 shows correct info)
- Thumbtack

Every listing must show the same business name, address, and phone number.

### 5.4 Consider a Second GBP for South Lake Tahoe

If Levi has any physical presence in the Tahoe area (even a PO Box used for business purposes, or a co-working space), a second Google Business Profile for the Tahoe market could dramatically improve visibility there. Tahoe searches are geographically far enough from Placerville that Google may not show the Placerville listing for Tahoe queries.

---

## 6. Off-Page SEO & Link Building

### 6.1 Easy Wins

- **Trex Find-a-Builder directory:** If Ogden is a TrexPro installer (or can become one), getting listed on trex.com/find-a-builder is a high-authority backlink and referral source. Competitor Cademartori Construction and Deome2 Builders both appear there.
- **Houzz profile:** The site currently doesn't appear to have a Houzz profile. Create one, upload project photos, and link back to the website. Houzz profiles rank well for "[service] in [city]" queries.
- **El Dorado County Chamber of Commerce:** A membership includes a directory listing with a backlink. Local business organization links are strong local SEO signals.
- **Placerville Downtown Association** or South Lake Tahoe Chamber: Same principle.

### 6.2 Content-Driven Links

- **Publish a "Cost to Build a Deck in Northern California" study** with original data from your own projects (anonymized). Reach out to local real estate blogs and home improvement publications to reference it.
- **Pitch guest posts** to Sacramento-area home and lifestyle publications about deck trends, outdoor living, or ADU construction.
- **Partner mentions:** If you use specific suppliers (Trex, specific lumber yards), reach out about being featured on their contractor or partner pages.

### 6.3 Community & PR

- **Sponsor local events:** Youth sports teams, Placerville community events, Tahoe charity builds. These often result in a link from the organization's website.
- **Before/after project features:** Submit compelling project stories to local newspapers (Mountain Democrat in Placerville, Tahoe Daily Tribune).

---

## 7. Fix the Fabricated Content Issue

This is uncomfortable but important. The site currently has:

- Testimonials attributed to "Jordan M.," "Alyssa R.," and "Chris T." that don't correspond to any verified Yelp reviews.
- An "About" page that says "since 2008" while Yelp says "Established in 2017" — and Levi's Yelp bio says he's been in trades since 2001.
- Stats like "250+ projects" and "175+ happy clients" that may not be verifiable.

**Why this matters for SEO:** Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) framework specifically evaluates whether content is authentic. If a manual reviewer or algorithmic check flags fabricated reviews or inflated claims, the site could be penalized.

**What to do:**

- **Replace the fabricated testimonials** with real quotes pulled directly from Yelp reviews. You already have great ones: "Levi Ogden was a fantastic find on Yelp. He came out the next day for a quote..." and "Ogden Construction has been the best deck contractors I worked with." Attribute them properly with first name, last initial, and source platform.
- **Reconcile the founding date.** Pick the accurate year and make it consistent across the site and all profiles.
- **Use defensible stats.** If 250+ projects is accurate, keep it. If not, lower it to what's real or remove the stat. Credibility matters more than impressive numbers.

---

## 8. Competitive Landscape Summary

Here are the competitors ranking above Ogden for deck-related queries in the target market:

| Competitor                                            | Strengths                                                                         | Weaknesses                            |
| ----------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------- |
| **Cademartori Construction**                          | TrexPro certified, Houzz presence, Yelp Guaranteed, strong reviews                | Thin website, limited content         |
| **GVD Renovations**                                   | City-specific landing pages for every market, long-form service pages             | Generic content, not deck-focused     |
| **Placerville Deck** (placervilledeck.com)            | Exact-match domain, many sub-pages by deck type                                   | Thin/AI-generated content, no reviews |
| **Omega Deck Solutions** (placervilledeckbuilder.com) | Exact-match domain, sub-pages per material type                                   | Thin/AI-generated content, no reviews |
| **Deome2 Builders**                                   | TrexPro Platinum, strong brand, 30+ years, city pages for every Sacramento suburb | Older website, less modern            |
| **Precision Custom Decks**                            | TrexPro, 30 years experience, strong testimonials                                 | Dated site, limited content depth     |
| **Sidex**                                             | Active blog, strong South Lake Tahoe presence, 56+ reviews                        | Not focused on Placerville            |
| **Tahoe Home Repair Services**                        | South Lake Tahoe focused, deck-specific pages                                     | Small site, limited reach             |

**Your biggest opportunity:** None of the Placerville/Tahoe competitors are producing high-quality, expert-level content about deck building in Northern California. The two exact-match domain competitors (placervilledeck.com and placervilledeckbuilder.com) have spammy, AI-generated content that will likely lose rankings over time. You can win by being the real, knowledgeable, local deck builder who publishes genuinely useful content.

---

## 9. Implementation Priority Roadmap

### Week 1–2: Technical Foundation

- [ ] Set up 301 redirects from old location URLs
- [ ] Add JSON-LD structured data (LocalBusiness, FAQ, Service)
- [ ] Fix NAP consistency across website, Yelp, Facebook, GBP
- [ ] Fix Yelp profile (founding date, phone number, typo)
- [ ] Replace fabricated testimonials with real review quotes
- [ ] Submit clean sitemap to Google Search Console
- [ ] Run PageSpeed Insights and fix any Core Web Vitals issues

### Week 3–4: High-Impact Content

- [ ] Create `/services/deck-construction` page (1,500+ words)
- [ ] Create `/services/trex-composite-decks` page (1,200+ words)
- [ ] Create `/services/redwood-decks` page (800+ words)
- [ ] Rewrite location page body content to be unique per city (especially Placerville and South Lake Tahoe)
- [ ] Optimize existing guide articles with updated data, internal links, and comparison tables

### Month 2: Content Expansion

- [ ] Create `/trex-vs-redwood-deck` comparison page
- [ ] Create `/deck-permits-el-dorado-county` page
- [ ] Create `/best-deck-materials-for-tahoe` page
- [ ] Create `/services/home-additions` page
- [ ] Create `/services/adu-guest-house` page
- [ ] Launch blog index at `/blog` with first 2–3 posts
- [ ] Set up Houzz profile with project photos

### Month 3: Local & Off-Page

- [ ] Optimize Google Business Profile fully
- [ ] Begin Google review acquisition campaign (2–3 per month)
- [ ] Apply for Trex Find-a-Builder listing (if applicable)
- [ ] Join El Dorado County Chamber of Commerce
- [ ] Create profiles on Angi, HomeAdvisor, Thumbtack, Nextdoor
- [ ] Begin weekly GBP posts

### Ongoing (Monthly)

- [ ] Publish 2–4 blog posts per month targeting long-tail deck keywords
- [ ] Add new project photos to portfolio and GBP
- [ ] Acquire 2–3 new Google reviews per month
- [ ] Monitor Search Console for new keyword opportunities and ranking changes
- [ ] Update cost/pricing content annually with current year references

---

## 10. Keyword Targets — Master List

### Primary Keywords (Deck Focus — Tahoe/Placerville Priority)

| Keyword                             | Current Ranking\* | Target | Page to Rank                                                     |
| ----------------------------------- | ----------------- | ------ | ---------------------------------------------------------------- |
| deck builder Placerville            | ~30–50            | Top 5  | `/locations-we-serve/placerville-deck-builder-construction`      |
| deck builder South Lake Tahoe       | ~30–50            | Top 5  | `/locations-we-serve/south-lake-tahoe-deck-builder-construction` |
| Trex deck builder Placerville       | Unranked          | Top 5  | `/services/trex-composite-decks`                                 |
| composite deck Placerville          | Unranked          | Top 10 | `/services/trex-composite-decks`                                 |
| redwood deck builder                | Unranked          | Top 10 | `/services/redwood-decks`                                        |
| deck construction Placerville       | ~40+              | Top 10 | `/services/deck-construction`                                    |
| custom deck builder El Dorado Hills | ~30–50            | Top 10 | `/locations-we-serve/el-dorado-hills-deck-builder-construction`  |
| deck builder El Dorado County       | Unranked          | Top 10 | Homepage or new county-level page                                |

\*Estimated from average position of 41.7 across all queries in GSC.

### Secondary Keywords

| Keyword                        | Page to Rank                             |
| ------------------------------ | ---------------------------------------- |
| deck cost Placerville          | `/how-much-does-it-cost-to-build-a-deck` |
| Trex vs redwood deck           | `/trex-vs-redwood-deck` (new)            |
| deck permit El Dorado County   | `/deck-permits-el-dorado-county` (new)   |
| deck replacement Placerville   | `/services/deck-replacement` (new)       |
| hillside deck builder          | `/hillside-deck-construction` (new)      |
| snow load deck Tahoe           | `/snow-load-deck-design-tahoe` (new)     |
| ADU builder Placerville        | `/services/adu-guest-house` (new)        |
| general contractor Placerville | `/services/general-contracting` (new)    |
| home addition Placerville      | `/services/home-additions` (new)         |

### Long-Tail Blog Targets

- "do I need a permit to build a deck in Placerville"
- "best deck material for Sierra Nevada climate"
- "how to prepare your Tahoe deck for winter"
- "Trex Transcend vs Trex Select"
- "deck railing options for mountain homes"
- "how long does it take to build a deck in California"
- "deck builder near me Placerville CA"

---

## Final Notes

The average position of 41.7 across 21.5K impressions tells us Google is aware of this site but needs stronger signals to promote it. The combination of technical fixes (redirects, schema, NAP consistency), content expansion (dedicated service pages, unique location content, a blog), and local SEO (GBP optimization, Google reviews, citations) should move priority keywords into the top 10–20 range within 3–6 months, with top-10 placement realistic for lower-competition terms like "deck builder Placerville" and "Trex deck South Lake Tahoe" within that same timeframe.

The site has a real advantage: an actual licensed contractor with real projects and real Yelp reviews. Most of the competing sites in the Placerville deck niche are thin, AI-generated lead-gen sites with no real business behind them. Lean into authenticity, publish useful content, and the rankings will follow.
