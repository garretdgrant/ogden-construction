import type { OgdenPageData } from "@/lib/ogden-page.types";
import {
  SITE_CONTACT_EMAIL,
  SITE_CONTACT_EMAIL_HREF,
} from "@/lib/site-contact";

export const ogdenHomepageData = {
  kind: "home",
  slug: "home",
  pageHref: "/",
  dateModified: "2026-08-01",
  metadata: {
    title: "Deck Builder in El Dorado County | Ogden Construction",
    description:
      "Ogden Construction builds custom Trex, composite, and redwood decks across Placerville, Tahoe, El Dorado Hills, Folsom, and Sacramento. Request a free consultation.",
    canonicalPath: "/",
    ogTitle: "Custom Deck Builder in El Dorado County | Ogden Construction",
    ogDescription:
      "Custom deck construction, replacement, and repair for homes across El Dorado County, Lake Tahoe, and the greater Sacramento area.",
    ogImagePath: "/images/ogden-construction-og.webp",
    ogImageAlt:
      "Ogden Construction custom deck builder in El Dorado County, Tahoe, and Sacramento",
    ogImageWidth: 1100,
    ogImageHeight: 578,
    focusKeyword: "deck builder El Dorado County",
    supportingKeywords: [
      "custom deck builder",
      "deck contractor",
      "deck construction",
      "deck replacement",
      "deck repair",
      "Trex deck builder",
      "composite deck builder",
      "redwood deck builder",
      "Placerville deck builder",
      "South Lake Tahoe deck builder",
    ],
  },
  seoIntent: {
    primaryIntent:
      "Help homeowners find and hire a local contractor for custom deck construction, replacement, and repair.",
    geographicFocus: [
      "El Dorado County",
      "Placerville",
      "South Lake Tahoe",
      "El Dorado Hills",
      "Folsom",
      "Greater Sacramento",
    ],
    pageOwns: [
      "Ogden Construction",
      "Ogden Construction Inc",
      "deck builder El Dorado County",
      "custom deck builder in the Sierra foothills",
      "regional deck contractor",
      "deck construction company",
    ],
    pageDoesNotOwn: [
      "Sacramento deck builder",
      "Folsom deck builder",
      "El Dorado Hills deck builder",
      "South Lake Tahoe deck builder",
      "deck building cost",
      "deck repair vs replacement",
    ],
  },
  business: {
    legalName: "Ogden Construction Inc.",
    displayName: "Ogden Construction",
    foundedYear: 2008,
    licenseLabel: "California contractor license",
    licenseNumber: "1042758",
    phoneDisplay: "(530) 919-7408",
    phoneHref: "tel:+15309197408",
    email: SITE_CONTACT_EMAIL,
    emailHref: SITE_CONTACT_EMAIL_HREF,
    serviceAreaLabel: "El Dorado County, Lake Tahoe, and Greater Sacramento",
    serviceAreas: [
      "Placerville",
      "South Lake Tahoe",
      "El Dorado Hills",
      "Folsom",
      "Sacramento",
      "Cameron Park",
      "Pollock Pines",
      "Camino",
      "Auburn",
    ],
    hours: [
      {
        days: "Monday–Friday",
        hours: "8:00 AM–5:00 PM",
      },
      {
        days: "Saturday",
        hours: "By appointment",
      },
      {
        days: "Sunday",
        hours: "Closed",
      },
    ],
  },
  hero: {
    eyebrow:
      "Placerville-based contractor · Serving Northern California since 2008",
    title: "Custom Deck Builder in El Dorado County",
    description:
      "Ogden Construction designs and builds custom decks for homes in Placerville, Lake Tahoe, El Dorado Hills, Folsom, Sacramento, and nearby communities. We build with Trex, composite, and redwood, with clear planning from the first visit to the final walkthrough.",
    image: {
      src: "/images/projects/south-lake-tahoe-trex-deck.webp",
      alt: "Custom Trex deck with black railings built by Ogden Construction in South Lake Tahoe",
      width: 1000,
      height: 750,
      caption: "A finished Trex deck project in South Lake Tahoe.",
    },
    primaryCta: {
      label: "Request a Free Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Recent Deck Builds",
      href: "/portfolio",
    },
    trustItems: [
      "CA License #1042758",
      "Licensed, insured, and bonded",
      "Local, hands-on crew",
      "Serving the region since 2008",
    ],
  },
  anchorLinks: [
    {
      label: "Deck Services",
      href: "#deck-services",
    },
    {
      label: "Materials",
      href: "#deck-materials",
    },
    {
      label: "Service Areas",
      href: "#service-areas",
    },
    {
      label: "Projects",
      href: "#recent-projects",
    },
    {
      label: "Process",
      href: "#our-process",
    },
    {
      label: "FAQs",
      href: "#frequently-asked-questions",
    },
  ],
  sections: [
    {
      id: "local-deck-builder",
      eyebrow: "Deck construction built around your property",
      title: "Custom Decks for Foothill, Mountain, and Valley Homes",
      blocks: [
        {
          type: "paragraph",
          text: "A good deck should fit the home, the land, and the way your family uses the space. Ogden Construction builds new decks, replaces worn decks, and repairs damaged structures across El Dorado County, Lake Tahoe, and the greater Sacramento area.",
        },
        {
          type: "paragraph",
          text: "Local projects can bring very different needs. A level yard in Folsom is not the same as a steep foothill lot or a high-elevation home near Tahoe. We plan the framing, footings, drainage, stairs, railings, and decking around the site instead of using the same plan for every home.",
        },
        {
          type: "icon-list",
          items: [
            {
              title: "Site-specific planning",
              text: "The layout starts with your home, grade, access, views, and how you want to use the deck.",
            },
            {
              title: "Material guidance",
              text: "We help you compare Trex, other composite options, and redwood based on upkeep, look, and budget.",
            },
            {
              title: "Clear project scope",
              text: "You get a defined plan for materials, major work, timing, and next steps before construction begins.",
            },
            {
              title: "Code-focused construction",
              text: "We build with safety, structural support, railings, stairs, and local requirements in mind.",
            },
          ],
        },
      ],
    },
    {
      id: "deck-services",
      eyebrow: "Our services",
      title: "Deck Construction, Replacement, and Repair",
      description:
        "Decks are our main focus, with broader residential construction services available when your project calls for more.",
      blocks: [
        {
          type: "card-grid",
          cards: [
            {
              title: "New Deck Construction",
              text: "Build a custom ground-level, raised, hillside, or multi-level deck that fits your home and outdoor space.",
              href: "/services",
              ctaLabel: "Explore deck construction",
            },
            {
              title: "Deck Replacement and Rebuilds",
              text: "Replace an aging or unsafe deck with new framing, decking, stairs, and railings built for long-term use.",
              href: "/services",
              ctaLabel: "Explore deck replacement",
            },
            {
              title: "Deck Repair and Restoration",
              text: "Address damaged boards, railings, stairs, dry rot, and structural concerns before they become larger problems.",
              href: "/deck-repair-vs-replacement",
              ctaLabel: "Compare repair and replacement",
            },
            {
              title: "Home Additions",
              text: "Add useful living space with an addition planned to fit the style and structure of your existing home.",
              href: "/services",
              ctaLabel: "View addition services",
            },
            {
              title: "ADUs and Guest Houses",
              text: "Create a separate living space, guest house, workshop, or other custom structure on your property.",
              href: "/services",
              ctaLabel: "View construction services",
            },
            {
              title: "Remodeling and Custom Builds",
              text: "Update indoor and outdoor spaces with one local crew managing the work from planning through completion.",
              href: "/services",
              ctaLabel: "View all services",
            },
          ],
        },
      ],
    },
    {
      id: "deck-materials",
      eyebrow: "Decking options",
      title: "Trex, Composite, and Redwood Decks",
      description:
        "The best material depends on the look you want, the amount of upkeep you prefer, and the conditions around your home.",
      surface: "muted",
      blocks: [
        {
          type: "card-grid",
          cards: [
            {
              title: "Trex and Composite Decking",
              text: "A lower-maintenance option with many colors, board styles, and railing choices. Composite can be a strong fit for homeowners who do not want regular staining.",
              href: "/portfolio",
              ctaLabel: "See composite deck projects",
            },
            {
              title: "Redwood Decking",
              text: "A natural wood option with a warm look that fits many foothill and mountain homes. Redwood needs routine care but can be cleaned, stained, and refinished over time.",
              href: "/portfolio",
              ctaLabel: "See redwood deck projects",
            },
            {
              title: "Railings, Stairs, and Finishes",
              text: "Complete the deck with metal, composite, wood, or hog-panel railings, plus stairs, trim, fascia, and other useful details.",
              href: "/portfolio",
              ctaLabel: "View finished builds",
            },
          ],
        },
        {
          type: "callout",
          title: "Not sure which decking material fits your home?",
          text: "We can review the site, talk through upkeep and budget, and help you compare options before the final scope is set.",
          primaryCta: {
            label: "Schedule a Consultation",
            href: "/contact",
          },
          secondaryCta: {
            label: "Browse Deck Guides",
            href: "/guides",
          },
        },
      ],
    },
    {
      id: "service-areas",
      eyebrow: "Local deck contractor",
      title: "Serving El Dorado County, Tahoe, and Greater Sacramento",
      description:
        "Ogden Construction is based in Placerville and serves homeowners across the Sierra foothills, Lake Tahoe, and nearby Sacramento communities.",
      blocks: [
        {
          type: "location-grid",
          locations: [
            {
              name: "Placerville",
              text: "Custom decks, replacements, and residential construction for foothill homes, sloped lots, and nearby communities.",
              href: "/locations-we-serve/placerville-deck-builder-construction",
            },
            {
              name: "South Lake Tahoe",
              text: "Deck construction planned for mountain weather, snow loads, elevation, moisture, and seasonal conditions.",
              href: "/locations-we-serve/south-lake-tahoe-deck-builder-construction",
            },
            {
              name: "El Dorado Hills",
              text: "Outdoor living projects for hillside homes, view lots, larger yards, and custom residential spaces.",
              href: "/locations-we-serve/el-dorado-hills-deck-builder-construction",
            },
            {
              name: "Folsom",
              text: "Trex, composite, and redwood decks planned for strong sun, hot summers, and everyday family use.",
              href: "/locations-we-serve/folsom-deck-builder-construction",
            },
            {
              name: "Sacramento",
              text: "Custom deck construction, replacement, and repair for homes across the Sacramento area.",
              href: "/locations-we-serve/sacramento-deck-builder-construction",
            },
            {
              name: "Auburn",
              text: "Deck and outdoor construction for foothill properties, uneven terrain, and indoor-outdoor living.",
              href: "/locations-we-serve/auburn-deck-builder-construction",
            },
          ],
          footerLink: {
            label: "View All Locations We Serve",
            href: "/locations-we-serve",
          },
        },
      ],
    },
    {
      id: "recent-projects",
      eyebrow: "Recent work",
      title: "Deck and Construction Projects Built for Local Homes",
      description:
        "See real examples of the materials, layouts, railings, and finishes used on recent Ogden Construction projects.",
      blocks: [
        {
          type: "project-grid",
          projects: [
            {
              title: "Custom Trex Deck With Black Railings",
              location: "Tahoe, California",
              text: "A composite deck project with clean lines, dark railings, and a finish designed for a mountain setting.",
              href: "/portfolio",
              ctaLabel: "View the project",
            },
            {
              title: "Redwood Deck With Hog-Panel Railings",
              location: "Tahoe, California",
              text: "A redwood deck that pairs a natural wood surface with open railings and wide outdoor views.",
              href: "/portfolio",
              ctaLabel: "View the project",
            },
            {
              title: "New Home Construction",
              location: "Grizzly Flats, California",
              text: "A larger residential build that shows the crew's experience beyond decks and outdoor structures.",
              href: "/portfolio",
              ctaLabel: "View the project",
            },
          ],
          footerLink: {
            label: "Browse the Full Portfolio",
            href: "/portfolio",
          },
        },
      ],
    },
    {
      id: "why-ogden-construction",
      eyebrow: "Why homeowners choose Ogden Construction",
      title: "A Local Crew With Clear Communication",
      surface: "contrast",
      blocks: [
        {
          type: "icon-list",
          items: [
            {
              title: "Serving the region since 2008",
              text: "Ogden Construction was founded in Placerville and has worked across El Dorado and Sacramento counties for years.",
            },
            {
              title: "Licensed, insured, and bonded",
              text: "Ogden Construction Inc. operates under California contractor license #1042758.",
            },
            {
              title: "Hands-on project leadership",
              text: "The team stays involved from the first site visit through the final walkthrough.",
            },
            {
              title: "Built for local conditions",
              text: "Plans account for foothill slopes, Tahoe weather, valley heat, access, drainage, and the needs of the home.",
            },
            {
              title: "Straightforward planning",
              text: "We discuss materials, scope, timing, and major cost factors before the build begins.",
            },
            {
              title: "Residential construction experience",
              text: "The crew handles decks as well as additions, remodels, ADUs, guest houses, and custom structures.",
            },
          ],
        },
        {
          type: "stats",
          stats: [
            {
              value: "2008",
              label: "Year founded",
            },
            {
              value: "250+",
              label: "Projects completed",
            },
            {
              value: "175+",
              label: "Happy clients",
            },
            {
              value: "4.9",
              label: "Average rating shown by Ogden Construction",
            },
          ],
        },
      ],
    },
    {
      id: "our-process",
      eyebrow: "How the process works",
      title: "From the First Visit to the Final Walkthrough",
      description:
        "A clear process helps prevent surprises and keeps the project moving.",
      blocks: [
        {
          type: "steps",
          steps: [
            {
              title: "1. Consultation and Site Review",
              text: "We listen to your goals, look at the property, and discuss the type of project that may fit the space.",
            },
            {
              title: "2. Scope, Materials, and Budget",
              text: "We review the layout, decking, railings, access, major cost factors, and the work included in the project.",
            },
            {
              title: "3. Planning and Approvals",
              text: "We help coordinate plans, permits, engineering, and inspections when the project requires them.",
            },
            {
              title: "4. Construction and Walkthrough",
              text: "The crew completes the build, keeps the site organized, and reviews the finished work with you.",
            },
          ],
        },
      ],
    },
    {
      id: "deck-planning-guides",
      eyebrow: "Plan with better information",
      title: "Deck Cost, Repair, and Home Value Guides",
      description:
        "Use these guides to understand common choices before you request a project estimate.",
      surface: "muted",
      blocks: [
        {
          type: "card-grid",
          cards: [
            {
              title: "How Much Does It Cost to Build a Deck?",
              text: "See common Northern California deck price ranges and the factors that can raise or lower the final cost.",
              href: "/how-much-does-it-cost-to-build-a-deck",
              ctaLabel: "Read the cost guide",
            },
            {
              title: "Deck Repair vs. Replacement",
              text: "Learn which types of damage may be repaired and when a full rebuild can be the better long-term choice.",
              href: "/deck-repair-vs-replacement",
              ctaLabel: "Compare your options",
            },
            {
              title: "How Much Value Can a Deck Add?",
              text: "Review the ways a deck may improve outdoor living, buyer appeal, and the usefulness of the home.",
              href: "/how-much-does-a-deck-add-to-home-value",
              ctaLabel: "Read the home value guide",
            },
          ],
        },
      ],
    },
    {
      id: "about-ogden-construction",
      eyebrow: "Local experience",
      title: "Built in Placerville and Led by Levi Ogden",
      blocks: [
        {
          type: "paragraph",
          text: "Levi Ogden founded Ogden Construction Inc. in 2008 to provide dependable deck and residential construction services for local homeowners. The company grew from a small, hands-on operation while keeping the same focus on direct communication, careful work, and respect for the property.",
        },
        {
          type: "paragraph",
          text: "Today, the crew works on custom decks, replacements, additions, remodels, and larger residential builds across Placerville, Tahoe, El Dorado Hills, Folsom, Sacramento, and nearby communities.",
        },
        {
          type: "callout",
          title: "Meet the team behind the work",
          text: "Learn more about Levi Ogden, the company story, local experience, and the standards used on every project.",
          primaryCta: {
            label: "About Ogden Construction",
            href: "/about",
          },
          secondaryCta: {
            label: "View Recent Projects",
            href: "/portfolio",
          },
        },
      ],
    },
    {
      id: "homeowner-reviews",
      eyebrow: "Homeowner feedback",
      title: "What Local Clients Say",
      description:
        "Homeowners often mention the crew's communication, organization, respect for the property, and finished work.",
      blocks: [
        {
          type: "review-grid",
          reviews: [
            {
              quote:
                "Our Tahoe deck rebuild was on schedule and the craftsmanship is outstanding. The team was clean, respectful, and communicative the whole way.",
              name: "Jordan M.",
              location: "South Lake Tahoe, CA",
              project: "Deck rebuild and railing upgrade",
            },
            {
              quote:
                "From design to permits to final walkthrough, everything was clear and organized. The new addition blends perfectly with the house.",
              name: "Alyssa R.",
              location: "Placerville, CA",
              project: "Home addition and exterior updates",
            },
            {
              quote:
                "We wanted a Trex deck that could handle hot summers and heavy use. The result is beautiful and feels rock solid.",
              name: "Chris T.",
              location: "Folsom, CA",
              project: "Trex composite deck",
            },
          ],
        },
      ],
    },
  ],
  faqTitle: "Deck Builder Frequently Asked Questions",
  faqs: [
    {
      question: "What areas does Ogden Construction serve?",
      answer:
        "Ogden Construction serves Placerville, South Lake Tahoe, El Dorado Hills, Folsom, Sacramento, Cameron Park, Pollock Pines, Camino, Auburn, and nearby communities. Contact the team to confirm service for your address.",
    },
    {
      question: "Do you build new decks and replace old decks?",
      answer:
        "Yes. The crew builds new custom decks and replaces older decks that are worn, damaged, unsafe, or no longer fit the home. The scope may include framing, decking, stairs, railings, and related structural work.",
    },
    {
      question: "What deck materials do you work with?",
      answer:
        "Ogden Construction works with Trex, other composite decking, and redwood. The team can help you compare appearance, upkeep, heat, weather exposure, and budget before you choose.",
    },
    {
      question: "Can you repair a damaged deck?",
      answer:
        "Yes. Repair work may include damaged boards, stairs, railings, dry rot, and structural concerns. The crew will review the condition of the deck and explain whether repair or replacement makes more sense.",
    },
    {
      question: "Can you help with deck permits and inspections?",
      answer:
        "Yes. Ogden Construction can help coordinate plans, permits, engineering, and inspections when they are required for the project.",
    },
    {
      question: "How much does it cost to build a deck?",
      answer:
        "Many deck projects fall between $15,000 and $50,000 or more. The final cost depends on size, materials, site access, framing, stairs, railings, demolition, permits, engineering, and property conditions. A site review is needed for an accurate estimate.",
    },
    {
      question: "How long does a deck project take?",
      answer:
        "Most full deck builds take several weeks once materials and approvals are ready. The exact schedule depends on the size of the deck, site conditions, permitting, material lead times, weather, and the amount of structural work.",
    },
    {
      question: "Is Ogden Construction licensed and insured?",
      answer:
        "Yes. Ogden Construction Inc. is licensed, insured, and bonded. The California contractor license number is 1042758.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes. You can request a free consultation to discuss your goals, location, project type, and next steps. A detailed estimate can be prepared after the team understands the site and scope.",
    },
  ],
  leadForm: {
    title: "Tell Us About Your Project",
    description:
      "Share your contact information and a few project details. The team will follow up to discuss the site, scope, and next step.",
    submitLabel: "Request a Free Consultation",
    privacyText:
      "Your information will only be used to respond to your project request.",
  },
  finalCta: {
    eyebrow: "Start with a local site review",
    title: "Ready to Plan Your Deck or Construction Project?",
    text: "Tell Ogden Construction what you want to build and where the property is located. The team will review your goals and help you understand the next step.",
    primaryCta: {
      label: "Request a Free Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: "View the Portfolio",
      href: "/portfolio",
    },
  },
} satisfies OgdenPageData;
