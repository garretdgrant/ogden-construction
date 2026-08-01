export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceGalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ContentSection {
  id: string;
  heading: string;
  content: string;
  image?: ServiceGalleryImage;
  imagePosition?: "left" | "right";
}

export interface MaterialCard {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  image?: string;
}

export interface RelatedLink {
  title: string;
  href: string;
  description?: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  heroImage: string;
  heroImageAlt: string;
  heroSubheading: string;
  priceRange: string;
  introContent: string;
  sections: ContentSection[];
  materialHighlights?: MaterialCard[];
  process?: ProcessStep[];
  faqs: ServiceFAQ[];
  gallery: ServiceGalleryImage[];
  relatedServices: string[];
  relatedGuides?: RelatedLink[];
  ctaText?: string;
  jsonLd?: Record<string, unknown>;
  featuredOnHome?: boolean;
}

export const services: ServiceData[] = [
  {
    slug: "deck-construction",
    title: "Custom Deck Construction",
    summary:
      "Custom deck design and construction for Placerville, Tahoe, and Sierra foothill homes that need durable framing, clean finishes, and long-term usability.",
    metaTitle:
      "Custom Deck Builder in Placerville & South Lake Tahoe | Ogden Construction",
    metaDescription:
      "Custom deck construction in Placerville and South Lake Tahoe, with redwood and composite options, clear project scopes, and durable builds for foothill and mountain properties.",
    ogImage: "/images/ogden-construction-og.webp",
    heroImage: "/images/services/deck-construction-hero.webp",
    heroImageAlt: "Custom deck under construction in Placerville, CA",
    heroSubheading:
      "We build custom decks that feel integrated with the house, hold up to Sierra weather, and make the outdoor space genuinely usable year-round.",
    priceRange: "$15,000 - $50,000+",
    introContent: `<p>This is placeholder copy meant to show the structure of a finished service page before the final SEO copy is written. The layout, section order, anchor navigation, gallery, FAQs, and related links are all live so you can review the template in a realistic state.</p><p>For custom deck construction, the core pitch is straightforward: homeowners want a deck that looks intentional, drains properly, feels solid underfoot, and fits the way the property is actually used. In Placerville, Tahoe, and the surrounding foothills, that usually means balancing views, grade changes, sun exposure, access, and material choice from the start.</p><p>Ogden Construction&apos;s deck pages will likely lean into practical decision-making, material tradeoffs, and local build constraints rather than generic brochure copy. This sample content takes that tone so you can decide whether the structure and voice feel right before the real copy pass begins.</p>`,
    sections: [
      {
        id: "design-planning",
        heading: "Deck Design That Fits the Property",
        content: `<p>Most deck problems start long before framing. They start when the layout ignores the slope, the access path, the sun pattern, or the way the homeowners actually want to use the space. A good custom deck plan begins with traffic flow, views, stairs, railing layout, and how the deck connects back to the house.</p><p>For hillside and foothill properties, the design phase also has to account for elevation changes, drainage, and usable landing zones. On flatter lots, the focus may shift more toward entertaining zones, shade, and how the deck relates to doors, windows, and yard access.</p>`,
        image: {
          src: "/images/portfolio/portfolio-hero.webp",
          alt: "Custom deck overlooking a wooded Northern California property",
          width: 1600,
          height: 1067,
        },
        imagePosition: "right",
      },
      {
        id: "materials-structure",
        heading: "Structure, Framing, and Material Choices",
        content: `<p>The finished surface gets the attention, but the framing package is what determines whether the deck still feels solid years later. A properly built deck needs the right span logic, hardware, ledger detail, fasteners, and moisture handling for the specific site.</p><p>On the finish side, most homeowners end up weighing low-maintenance composite products against natural wood options like redwood. Composite can reduce upkeep and perform well in high-exposure locations, while redwood brings warmth and character when homeowners want a more traditional look.</p><ul><li>Composite and Trex-style systems for lower maintenance</li><li>Redwood options for a natural wood appearance</li><li>Railing layouts designed around code, sightlines, and daily use</li><li>Stair and landing details that make the deck feel integrated instead of tacked on</li></ul>`,
        image: {
          src: "/images/portfolio/redwood-deck.webp",
          alt: "Finished redwood deck detail with clean railing lines",
          width: 1200,
          height: 900,
        },
        imagePosition: "left",
      },
      {
        id: "permits-site-conditions",
        heading: "Permits, Access, and Site Conditions Matter",
        content: `<p>Deck projects often look simple from the street and complicated once the real conditions are measured. Access for materials, excavation limitations, grade changes, soil conditions, and existing structures can all change the scope quickly.</p><p>This is where a local contractor adds value. You want realistic planning around permitting, inspection timing, demolition if an old deck is coming out, and the sequencing needed to keep the site safe and clean while the build is in progress.</p><p>This sample section is useful because it shows how the service template can support more practical, location-aware copy instead of generic sales language.</p>`,
        image: {
          src: "/images/portfolio/fence.webp",
          alt: "Residential construction site detail showing hillside access constraints",
          width: 1200,
          height: 900,
        },
        imagePosition: "right",
      },
      {
        id: "what-to-expect",
        heading: "What Homeowners Can Expect From a Typical Build",
        content: `<p>A finished deck page will probably need one section that turns the process into something concrete: how the estimate works, what influences price, how long projects typically take, and what is usually included in the build scope.</p><p>For this placeholder version, the goal is just to show how a practical expectation-setting section looks in the template. It gives the page a clearer commercial intent and helps balance the design/material sections with buyer-focused information.</p><p>Most projects include layout review, framing, decking, railing work, stairs where needed, and punch-list cleanup before final walkthrough. Larger projects may also include demolition, structural upgrades, skirting, under-deck storage ideas, or coordination with adjacent hardscape.</p>`,
      },
    ],
    process: [
      {
        title: "Site Walk",
        description:
          "We walk the property, talk through layout goals, and identify the real job constraints before numbers get thrown around.",
      },
      {
        title: "Scope & Materials",
        description:
          "We lock in the size, framing approach, decking material, railing style, and project inclusions so expectations are clear.",
      },
      {
        title: "Build & Inspect",
        description:
          "We handle the construction work, keep the site organized, and move the project through the required inspection steps.",
      },
      {
        title: "Final Walkthrough",
        description:
          "We review the finished deck with you, close out details, and make sure the final result feels solid and complete.",
      },
    ],
    faqs: [
      {
        question: "How much does a custom deck usually cost?",
        answer:
          "<p>For this example page, the planning range is <strong>$15,000 to $50,000+</strong>. Final pricing depends on size, elevation, framing complexity, railing choices, stairs, demolition, access, and material selection.</p>",
      },
      {
        question: "What materials make the most sense in this market?",
        answer:
          "<p>That depends on maintenance tolerance and the look you want. Composite works well for homeowners who want lower upkeep, while redwood is a strong fit when natural wood appearance matters more.</p>",
      },
      {
        question: "Do deck projects usually require permits?",
        answer:
          "<p>Many deck builds do, especially when the structure is attached to the home, elevated, rebuilt, or expanded. Permit requirements depend on the exact scope and jurisdiction.</p>",
      },
      {
        question: "How long does a typical custom deck build take?",
        answer:
          "<p>Smaller straightforward decks may move quickly, while larger hillside or multi-level projects take longer. A realistic timeline has to account for planning, material lead times, inspections, and weather.</p>",
      },
      {
        question:
          "Can you replace an old deck instead of building from scratch?",
        answer:
          "<p>Yes. In some cases the framing can be evaluated and reused, but many replacement jobs make more sense as a full tear-out and rebuild. That decision should be driven by structure, code, and long-term value, not just short-term savings.</p>",
      },
    ],
    gallery: [
      {
        src: "/images/portfolio/portfolio-hero.webp",
        alt: "Completed custom deck project by Ogden Construction",
        width: 1600,
        height: 1067,
      },
      {
        src: "/images/portfolio/redwood-deck.webp",
        alt: "Redwood deck detail with clean finish carpentry",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/projects/south-lake-tahoe-trex-deck.webp",
        alt: "Composite deck project suited for South Lake Tahoe conditions",
        width: 1000,
        height: 750,
      },
    ],
    relatedServices: [
      "deck-replacement",
      "trex-composite-decks",
      "redwood-decks",
    ],
    relatedGuides: [
      {
        title: "How Much Does It Cost to Build a Deck?",
        href: "/how-much-does-it-cost-to-build-a-deck",
        description:
          "Use our planning guide to compare material and project-size cost ranges.",
      },
      {
        title: "How Much Value Does a Deck Add?",
        href: "/how-much-does-a-deck-add-to-home-value",
        description:
          "See how outdoor living upgrades can improve resale appeal and usable space.",
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: "deck-replacement",
    title: "Deck Replacement",
    summary:
      "Deck tear-outs and rebuilds for aging, unsafe, or undersized structures, with updated framing, decking, railings, and code-compliant details.",
    metaTitle: "Deck Replacement in Placerville & Tahoe | Ogden Construction",
    metaDescription: "",
    ogImage: "/images/ogden-construction-og.webp",
    heroImage: "/images/services/deck-replacement-hero.webp",
    heroImageAlt: "Old deck being replaced with new composite decking",
    heroSubheading: "",
    priceRange: "$12,000 - $45,000+",
    introContent: "",
    sections: [],
    faqs: [],
    gallery: [],
    relatedServices: ["deck-construction", "trex-composite-decks"],
    relatedGuides: [
      {
        title: "Deck Repair vs. Replacement",
        href: "/deck-repair-vs-replacement",
        description:
          "Use this guide to weigh repair costs, structural issues, and replacement timing.",
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: "trex-composite-decks",
    title: "Trex & Composite Decks",
    summary:
      "Low-maintenance composite decking systems built for snow, sun, and year-round outdoor use without the upkeep of traditional wood.",
    metaTitle:
      "Trex Deck Builder Placerville & South Lake Tahoe | Ogden Construction",
    metaDescription: "",
    ogImage: "/images/ogden-construction-og.webp",
    heroImage: "/images/services/trex-composite-hero.webp",
    heroImageAlt: "Trex composite deck with mountain views in South Lake Tahoe",
    heroSubheading: "",
    priceRange: "$20,000 - $55,000+",
    introContent: "",
    sections: [],
    materialHighlights: [],
    faqs: [],
    gallery: [],
    relatedServices: ["deck-construction", "redwood-decks"],
    relatedGuides: [
      {
        title: "How Much Does It Cost to Build a Deck?",
        href: "/how-much-does-it-cost-to-build-a-deck",
        description:
          "Compare composite project ranges against framing complexity and site conditions.",
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: "redwood-decks",
    title: "Redwood Decks",
    summary:
      "Natural redwood deck builds for homeowners who want classic wood character, strong curb appeal, and a layout tailored to the property.",
    metaTitle:
      "Redwood Deck Builder in Placerville & Tahoe | Ogden Construction",
    metaDescription: "",
    ogImage: "/images/ogden-construction-og.webp",
    heroImage: "/images/services/redwood-decks-hero.webp",
    heroImageAlt: "Redwood deck with hog panel railings in Tahoe",
    heroSubheading: "",
    priceRange: "$18,000 - $50,000+",
    introContent: "",
    sections: [],
    faqs: [],
    gallery: [],
    relatedServices: ["deck-construction", "trex-composite-decks"],
    relatedGuides: [
      {
        title: "How Much Value Does a Deck Add?",
        href: "/how-much-does-a-deck-add-to-home-value",
        description:
          "Understand how premium outdoor living spaces can affect long-term property value.",
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: "home-additions",
    title: "Home Additions & ADUs",
    summary:
      "Room additions, attached expansions, and ADU-style builds planned to match your existing home and improve everyday function.",
    metaTitle:
      "Home Addition Contractor Placerville & El Dorado County | Ogden Construction",
    metaDescription: "",
    ogImage: "/images/ogden-construction-og.webp",
    heroImage: "/images/services/home-additions-hero.webp",
    heroImageAlt: "Home addition project in Placerville, CA",
    heroSubheading: "",
    priceRange: "$80,000 - $400,000+",
    introContent: "",
    sections: [],
    faqs: [],
    gallery: [],
    relatedServices: ["remodeling", "general-contracting"],
    ctaText: "Talk Through Your Addition",
    featuredOnHome: true,
  },
  {
    slug: "remodeling",
    title: "Remodeling",
    summary:
      "Interior and exterior remodeling projects that improve flow, finishes, and livability while keeping the build organized from demolition to final walkthrough.",
    metaTitle:
      "Remodeling Contractor Placerville & South Lake Tahoe | Ogden Construction",
    metaDescription: "",
    ogImage: "/images/ogden-construction-og.webp",
    heroImage: "/images/services/remodeling-hero.webp",
    heroImageAlt: "Kitchen remodeling project by Ogden Construction",
    heroSubheading: "",
    priceRange: "Varies by scope",
    introContent: "",
    sections: [],
    faqs: [],
    gallery: [],
    relatedServices: ["home-additions", "general-contracting"],
    featuredOnHome: true,
  },
  {
    slug: "general-contracting",
    title: "General Contracting",
    summary:
      "Hands-on general contracting for residential projects that need dependable coordination, clear scheduling, and a builder who stays involved from start to finish.",
    metaTitle:
      "General Contractor Placerville & El Dorado County | Ogden Construction",
    metaDescription: "",
    ogImage: "/images/ogden-construction-og.webp",
    heroImage: "/images/services/general-contracting-hero.webp",
    heroImageAlt: "Ogden Construction crew on a residential job site",
    heroSubheading: "",
    priceRange: "Varies by project",
    introContent: "",
    sections: [],
    faqs: [],
    gallery: [],
    relatedServices: ["home-additions", "remodeling"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export function getFeaturedHomeServices(): ServiceData[] {
  return services.filter((service) => service.featuredOnHome);
}
