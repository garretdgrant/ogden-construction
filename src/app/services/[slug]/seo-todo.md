# Service Page Follow-Ups

- Replace the temporary hero placeholders in `public/images/services/*.webp` with final service-specific photography.
  Intended usage: above-the-fold hero image and social sharing image.
  Target size: 1920x800 or wider for hero, with a center-safe crop that also works at 1200x630 for social.
  Prompt: `Photorealistic residential construction photo of a custom deck build in the Sierra foothills near Placerville, California, natural daylight, premium craftsmanship, realistic lumber and rail details, no people looking at camera, no text, wide hero composition.`
- Add final `metaDescription` copy for all 7 service entries in [services.ts](/Users/garretgrant/business/client-projects/ogden-construction/src/app/services/data/services.ts).
- Add `heroSubheading`, `introContent`, and `sections[]` copy for each service page in [services.ts](/Users/garretgrant/business/client-projects/ogden-construction/src/app/services/data/services.ts).
- Add 4-6 unique FAQs per service so the visible accordion and FAQ schema are active for every route.
- Add 3-6 gallery images per service in [services.ts](/Users/garretgrant/business/client-projects/ogden-construction/src/app/services/data/services.ts).
  Intended usage: mid-page project gallery.
  Target size: at least 1600x1200 source images, landscape preferred, no embedded text.
  Prompt: `Photorealistic completed residential deck or remodeling project by a Northern California contractor, clean jobsite, realistic materials, warm natural light, no watermarks, no on-image text.`
- Add `materialHighlights` entries for `trex-composite-decks` once the comparison copy is approved.
- Validate one completed service page in Google Rich Results Test / Schema Validator after FAQs and body copy are added.
- Expand contextual internal links from location and guide pages to specific `/services/{slug}` routes where the surrounding copy clearly supports a precise service match.
