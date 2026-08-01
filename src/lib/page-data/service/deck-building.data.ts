import {
  SITE_CONTACT_EMAIL,
  SITE_CONTACT_EMAIL_HREF,
} from "@/lib/site-contact";

export type ServiceDetailCustomSection = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  surface?: "default" | "muted" | "contrast";
  placement?: "after-overview" | "before-faqs" | "before-contact";
  blocks: Array<
    | {
        type: "paragraph";
        text: string;
      }
    | {
        type: "heading";
        text: string;
      }
    | {
        type: "unordered-list";
        items: string[];
      }
    | {
        type: "icon-list";
        items: Array<{
          title: string;
          text: string;
        }>;
      }
    | {
        type: "card-grid";
        cards: Array<{
          title: string;
          text: string;
          href?: `/${string}`;
          ctaLabel?: string;
        }>;
      }
    | {
        type: "callout";
        title: string;
        text: string;
        cta?: {
          label: string;
          href: `/${string}`;
        };
      }
  >;
};

/**
 * Reusable contract for Ogden Construction service-detail pages.
 * Move this type to a shared service-detail-page.types.ts file when the
 * second service-detail page is added.
 */
export type ServiceDetailPageData = {
  kind: "service";
  template: "service-detail";
  slug: string;
  pageHref: `/${string}`;
  dateModified: `${number}-${number}-${number}`;
  metadata: {
    title: string;
    description: string;
    canonicalPath: `/${string}`;
    ogTitle: string;
    ogDescription: string;
    ogImagePath: `/${string}`;
    ogImageAlt: string;
    ogImageWidth: number;
    ogImageHeight: number;
    focusKeyword: string;
    supportingKeywords: string[];
  };
  seoIntent: {
    primaryIntent: string;
    geographicFocus: string[];
    pageOwns: string[];
    pageDoesNotOwn: string[];
    supportingTopics: string[];
  };
  structuredData: {
    schemaType: "Service";
    serviceName: string;
    serviceType: string;
    providerName: string;
    areaServed: string[];
    includeBreadcrumbSchema: boolean;
    includeFaqSchema: boolean;
  };
  business: {
    legalName: string;
    displayName: string;
    foundedYear: number;
    licenseLabel: string;
    licenseNumber: string;
    phoneDisplay: string;
    phoneHref: `tel:${string}`;
    email: string;
    emailHref: `mailto:${string}`;
    serviceAreaLabel: string;
  };
  breadcrumbs: Array<{
    label: string;
    href: `/${string}` | "/";
  }>;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: {
      src: `/${string}`;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };
    primaryCta: {
      label: string;
      href: `/${string}`;
    };
    secondaryCta: {
      label: string;
      href: `/${string}`;
    };
    trustItems: string[];
  };
  anchorLinks?: Array<{
    label: string;
    href: `#${string}`;
  }>;
  customSections?: ServiceDetailCustomSection[];
  overview?: {
    id: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: Array<{
      title: string;
      text: string;
    }>;
  };
  serviceTypes?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      summary: string;
      details: string[];
    }>;
  };
  choices?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      summary: string;
      considerations: string[];
      bestFor?: string;
    }>;
    callout?: {
      title: string;
      text: string;
      cta: {
        label: string;
        href: `/${string}`;
      };
    };
  };
  capabilities?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  planningFactors?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  process?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{
      title: string;
      text: string;
    }>;
  };
  scopeFactors?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
    resourceLink: {
      label: string;
      href: `/${string}`;
    };
  };
  projects?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      location: string;
      summary: string;
      highlights: string[];
      href: `/${string}`;
      ctaLabel: string;
    }>;
    footerLink: {
      label: string;
      href: `/${string}`;
    };
  };
  serviceAreas?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      name: string;
      text: string;
      href: `/${string}`;
    }>;
    footerLink: {
      label: string;
      href: `/${string}`;
    };
  };
  relatedResources?: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      text: string;
      href: `/${string}`;
      ctaLabel: string;
    }>;
  };
  faqTitle?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  leadForm?: {
    title: string;
    description: string;
    projectTypeLabel: string;
    projectTypeOptions: string[];
    requestedFields: Array<
      | "name"
      | "email"
      | "phone"
      | "location"
      | "timeline"
      | "budget"
      | "details"
      | "photos"
    >;
    submitLabel: string;
    privacyText: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: {
      label: string;
      href: `/${string}`;
    };
    secondaryCta: {
      label: string;
      href: `/${string}`;
    };
  };
};

const deckBuildingCustomSections: ServiceDetailCustomSection[] = [
  {
    id: "deck-design-planning",
    eyebrow: "Custom Deck Design",
    title: "Plan the Deck Around How You Will Use It",
    description:
      "A custom deck should fit the home and make outdoor time easier. Thinking through daily use early helps shape the size, layout, stairs, railings, and material choices.",
    surface: "muted",
    placement: "after-overview",
    blocks: [
      {
        type: "paragraph",
        text: "Before the layout is set, it helps to decide what you want the deck to do. Some homeowners need a simple place to sit outside. Others need room for meals, gatherings, stairs, or better access to a sloped yard.",
      },
      {
        type: "card-grid",
        cards: [
          {
            title: "Everyday Outdoor Living",
            text: "Create a comfortable space for seating, relaxing, and spending more time outside.",
          },
          {
            title: "Dining and Grilling",
            text: "Plan enough room for a table, grill, walking paths, and safe movement between the house and yard.",
          },
          {
            title: "Views and Elevated Space",
            text: "Use an elevated or second-story deck to make the most of a view while planning the supports, stairs, and railings together.",
          },
          {
            title: "Better Yard Access",
            text: "Add stairs and landings that create a clear path between the home, deck, and lower yard.",
          },
          {
            title: "Sloped Properties",
            text: "Use a custom layout to work with uneven ground instead of losing useful outdoor space.",
          },
          {
            title: "Separate Activity Areas",
            text: "Create clear zones for seating, meals, gathering, and moving through the deck without making the layout feel crowded.",
          },
        ],
      },
      {
        type: "icon-list",
        items: [
          {
            title: "Size and Traffic Flow",
            text: "The deck should have enough room for furniture and activities without blocking doors, stairs, or walkways.",
          },
          {
            title: "Height and Access",
            text: "Deck height affects stairs, railings, support, views, and the way the deck connects to the home.",
          },
          {
            title: "Sun and Weather",
            text: "Sun exposure, heat, snow, and moisture can affect board color, surface feel, upkeep, and material choice.",
          },
          {
            title: "Views and Privacy",
            text: "The layout and railing style can help protect a view, create privacy, or balance both goals.",
          },
          {
            title: "Long-Term Maintenance",
            text: "Think about how much cleaning, staining, or routine care you want to handle after the deck is built.",
          },
        ],
      },
    ],
  },
  {
    id: "choosing-a-deck-builder",
    eyebrow: "Hiring a Deck Contractor",
    title: "What to Look for in a Custom Deck Builder",
    description:
      "The right deck contractor should understand more than the surface boards. A complete deck project also involves the site, structure, stairs, railings, drainage, access, and connection to the home.",
    surface: "default",
    placement: "before-contact",
    blocks: [
      {
        type: "paragraph",
        text: "Before choosing a contractor, compare the full project plan instead of looking at one number alone. A clear estimate should explain what is included and how the proposed deck fits the property.",
      },
      {
        type: "icon-list",
        items: [
          {
            title: "A Current Contractor License",
            text: "Confirm that the contractor is properly licensed for the work and provides clear business information.",
          },
          {
            title: "A Site-Specific Plan",
            text: "The contractor should review the home, slope, access, drainage, existing structures, and intended use before setting the scope.",
          },
          {
            title: "Clear Material Options",
            text: "You should understand the appearance, upkeep, weather concerns, and major cost differences between the materials being considered.",
          },
          {
            title: "A Complete Written Scope",
            text: "The proposal should make it clear whether framing, decking, stairs, railings, demolition, disposal, and finish details are included.",
          },
          {
            title: "Real Project Examples",
            text: "Completed work can show whether the contractor has experience with the materials, deck heights, terrain, and property conditions involved in your project.",
          },
          {
            title: "A Clear Approval Process",
            text: "The contractor should explain how plans, permits, engineering, and inspections will be handled when they apply.",
          },
          {
            title: "Consistent Communication",
            text: "Homeowners should know who is managing the project, how decisions are made, and how changes will be discussed.",
          },
        ],
      },
      {
        type: "callout",
        title: "See the work before starting your project",
        text: "Browse completed Trex, redwood, elevated, second-story, and mountain deck projects by Ogden Construction.",
        cta: {
          label: "View the Deck Portfolio",
          href: "/portfolio",
        },
      },
    ],
  },
];

export const deckBuildingPageData = {
  kind: "service",
  template: "service-detail",
  slug: "deck-building",
  pageHref: "/services/deck-building",
  dateModified: "2026-08-01",
  metadata: {
    title: "Custom Deck Builder in Northern California | Ogden Construction",
    description:
      "Plan a custom Trex, composite, or redwood deck with Ogden Construction, serving El Dorado County, Lake Tahoe, and Greater Sacramento.",
    canonicalPath: "/services/deck-building",
    ogTitle: "Custom Deck Building | Ogden Construction",
    ogDescription:
      "Custom deck design and construction for foothill, mountain, and valley homes across Northern California.",
    ogImagePath: "/images/services/services-hero.webp",
    ogImageAlt: "Finished custom deck overlooking Lake Tahoe at sunset",
    ogImageWidth: 1200,
    ogImageHeight: 800,
    focusKeyword: "custom deck builder",
    supportingKeywords: [
      "deck builder",
      "deck contractor",
      "deck builders near me",
      "deck contractors near me",
      "custom deck construction",
      "deck construction",
      "deck installation",
      "composite deck builder",
      "Trex deck builder",
      "redwood deck builder",
      "elevated deck construction",
      "hillside deck builder",
    ],
  },
  seoIntent: {
    primaryIntent:
      "Help a homeowner choose and hire Ogden Construction to plan and build a new custom deck.",
    geographicFocus: [
      "El Dorado County",
      "Lake Tahoe",
      "Greater Sacramento",
      "Northern California",
    ],
    pageOwns: [
      "custom deck builder",
      "deck builder",
      "deck contractor",
      "deck builders near me",
      "deck contractors near me",
      "custom deck construction",
      "new deck construction",
      "deck installation",
      "composite deck builder",
      "Trex deck builder",
      "redwood deck builder",
      "elevated and hillside deck construction",
      "second-story deck construction",
    ],
    pageDoesNotOwn: [
      "Sacramento deck builder searches assigned to the Sacramento location page",
      "Folsom deck builder searches assigned to the Folsom location page",
      "South Lake Tahoe deck builder searches assigned to the South Lake Tahoe location page",
      "El Dorado Hills deck builder searches assigned to the El Dorado Hills location page",
      "Placerville deck builder searches assigned to the Placerville location page",
      "commercial deck repair and replacement searches assigned to a separate service page",
      "deck cost and price searches assigned to the deck cost guide",
      "repair versus replacement decision searches assigned to the repair guide",
      "detailed Trex versus redwood versus composite comparison searches assigned to a future guide",
    ],
    supportingTopics: [
      "Trex and composite decking",
      "redwood decking",
      "ground-level decks",
      "elevated and hillside decks",
      "second-story decks",
      "deck stairs and railings",
      "deck framing and footings",
      "site access and drainage",
      "deck planning and permits",
      "deck-building process",
    ],
  },
  structuredData: {
    schemaType: "Service",
    serviceName: "Custom Deck Building",
    serviceType: "Custom deck design and construction",
    providerName: "Ogden Construction Inc.",
    areaServed: ["El Dorado County", "Lake Tahoe", "Greater Sacramento"],
    includeBreadcrumbSchema: true,
    includeFaqSchema: true,
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
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Custom Deck Building", href: "/services/deck-building" },
  ],
  hero: {
    eyebrow: "Custom Deck Construction",
    title: "Custom Deck Building for Northern California Homes",
    description:
      "Ogden Construction designs and builds Trex, composite, and redwood decks for homes across El Dorado County, Lake Tahoe, and Greater Sacramento. Each deck is planned around the home, the property, and the way the space will be used.",
    image: {
      src: "/images/services/services-hero.webp",
      alt: "Finished custom deck overlooking Lake Tahoe at sunset",
      width: 1200,
      height: 800,
      caption: "A finished custom deck built for a Northern California home.",
    },
    primaryCta: {
      label: "Request a Free Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Recent Deck Projects",
      href: "/portfolio",
    },
    trustItems: [
      "Serving the region since 2008",
      "California contractor license 1042758",
      "Licensed, insured, and bonded",
      "Local, hands-on project leadership",
    ],
  },
  anchorLinks: [
    { label: "Overview", href: "#deck-building-overview" },
    { label: "Design", href: "#deck-design-planning" },
    { label: "Deck Types", href: "#deck-types" },
    { label: "Materials", href: "#decking-materials" },
    { label: "Planning", href: "#regional-planning" },
    { label: "Process", href: "#deck-building-process" },
    { label: "Projects", href: "#deck-projects" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "FAQs", href: "#frequently-asked-questions" },
    { label: "Choosing a Builder", href: "#choosing-a-deck-builder" },
    { label: "Contact", href: "#contact" },
  ],
  customSections: deckBuildingCustomSections,
  overview: {
    id: "deck-building-overview",
    eyebrow: "Built Around the Property",
    title: "A Custom Deck Starts With More Than a Floor Plan",
    paragraphs: [
      "A good deck should feel like part of the home. The size, height, stairs, railings, and materials should match the property and support the way your family wants to use the space.",
      "Ogden Construction starts by looking at the house, grade, access, views, drainage, and existing structures. From there, the team helps shape a clear deck construction plan instead of forcing the same layout onto every home.",
    ],
    highlights: [
      {
        title: "Site-Specific Planning",
        text: "The layout is shaped around the home, slope, access, views, and outdoor use.",
      },
      {
        title: "Clear Material Choices",
        text: "Compare Trex, other composite decking, and redwood based on look, upkeep, weather, and budget.",
      },
      {
        title: "Complete Deck Scope",
        text: "Plan the framing, decking, stairs, railings, trim, and related structural work as one project.",
      },
      {
        title: "Hands-On Management",
        text: "Ogden Construction stays involved from the first site review through the final walkthrough.",
      },
    ],
  },
  serviceTypes: {
    id: "deck-types",
    eyebrow: "Deck Construction Options",
    title: "Custom Decks for Yards, Slopes, and Elevated Homes",
    description:
      "The right deck type depends on the home, the land, and how people will move through the space. Ogden Construction builds several deck styles across the region.",
    items: [
      {
        title: "Ground-Level and Backyard Decks",
        summary:
          "Create a useful outdoor area for dining, seating, grilling, and time with family or friends.",
        details: [
          "Layouts planned around doors, walkways, and yard access",
          "Space for seating, tables, grills, and everyday use",
          "Material choices based on sun, weather, upkeep, and budget",
        ],
      },
      {
        title: "Elevated and Hillside Decks",
        summary:
          "Add outdoor space to a sloped lot or raised home while planning for access, support, drainage, and views.",
        details: [
          "Site review for slope, grade, and construction access",
          "Framing and support planned around the approved design",
          "Stairs and railings included in the full deck scope",
        ],
      },
      {
        title: "Second-Story Decks and Exterior Stairs",
        summary:
          "Connect an upper floor to an outdoor living space with a deck, stair system, and safe railing plan.",
        details: [
          "Access planned around the home and existing openings",
          "Exterior stairs designed as part of the deck layout",
          "Railings and edge details chosen for safety and appearance",
        ],
      },
      {
        title: "Custom and Multi-Level Deck Layouts",
        summary:
          "Use different levels or zones to work with the land and create separate areas for gathering, dining, or enjoying the view.",
        details: [
          "Layouts shaped around grade changes and usable space",
          "Clear paths between doors, stairs, seating, and yard areas",
          "One coordinated plan for framing, surfaces, railings, and trim",
        ],
      },
    ],
  },
  choices: {
    id: "decking-materials",
    eyebrow: "Materials and Finishes",
    title: "Trex, Composite, and Redwood Decking",
    description:
      "Decking affects the look, upkeep, surface feel, and long-term care of the finished deck. Ogden Construction helps homeowners compare the choices before the final scope is set.",
    items: [
      {
        title: "Trex and Composite Decking",
        summary:
          "Composite decking is a lower-maintenance choice with many colors, board styles, and finish options.",
        considerations: [
          "Does not need regular staining like natural wood",
          "Offers a consistent look across the deck surface",
          "Color and heat should be considered for sunny properties",
          "Upfront cost is often higher than basic wood decking",
        ],
        bestFor:
          "Homeowners who want less routine upkeep and a consistent finished look.",
      },
      {
        title: "Redwood Decking",
        summary:
          "Redwood gives a deck a warm, natural look that fits many foothill and mountain homes.",
        considerations: [
          "Can be cleaned, stained, and refinished over time",
          "Needs routine care to protect its appearance",
          "Board tone and grain create a natural wood finish",
          "Maintenance needs depend on sun, moisture, and exposure",
        ],
        bestFor:
          "Homeowners who prefer real wood and are comfortable with regular care.",
      },
      {
        title: "Railings and Finish Details",
        summary:
          "Railings, stairs, fascia, and trim complete the deck and affect how the whole project looks and functions.",
        considerations: [
          "Wood, metal, composite, and hog-panel railing styles may fit different homes",
          "Open railing designs can help preserve outdoor views",
          "Stair width, landings, and access should be planned early",
          "Finish details should match the deck material and home exterior",
        ],
        bestFor:
          "Every deck project that needs a complete and well-planned finish.",
      },
    ],
    callout: {
      title: "Not sure which decking material fits your home?",
      text: "A site review gives you a chance to compare appearance, upkeep, weather exposure, and major cost factors before choosing the final material.",
      cta: {
        label: "Schedule a Consultation",
        href: "/contact",
      },
    },
  },
  capabilities: {
    id: "deck-details",
    eyebrow: "More Than Deck Boards",
    title: "The Details That Make a Deck Work",
    description:
      "A finished deck depends on the structure below it and the way each part connects. These details should be planned together, not added as an afterthought.",
    items: [
      {
        title: "Framing and Support",
        text: "The framing plan responds to deck height, layout, property conditions, and the approved project documents.",
      },
      {
        title: "Footings and Site Conditions",
        text: "Slope, soil, drainage, and access can affect how the deck is supported and how the work is staged.",
      },
      {
        title: "Stairs and Landings",
        text: "Stairs should provide a clear path between the home, deck, and yard while fitting the overall layout.",
      },
      {
        title: "Railings and Guards",
        text: "Railing design affects safety, views, style, and how open or private the finished space feels.",
      },
      {
        title: "Drainage and Water Movement",
        text: "The plan should account for runoff, nearby grade, and the way water moves around the home and deck.",
      },
      {
        title: "Home and Deck Transitions",
        text: "Door access, siding, trim, steps, and the connection to the house need careful planning for a clean finished result.",
      },
    ],
  },
  planningFactors: {
    id: "regional-planning",
    eyebrow: "Built for Local Conditions",
    title: "Deck Planning for Valley, Foothill, and Mountain Homes",
    description:
      "Northern California properties can face very different weather and site conditions. The plan should match the property instead of using one standard answer for every home.",
    items: [
      {
        title: "Foothill Slopes and Uneven Ground",
        text: "Grade changes can affect deck height, stairs, supports, drainage, material delivery, and jobsite access.",
      },
      {
        title: "Lake Tahoe Weather",
        text: "Snow, moisture, freeze-thaw cycles, elevation, and seasonal access can shape materials, structural planning, and scheduling.",
      },
      {
        title: "Sacramento and Folsom Heat",
        text: "Strong sun and hot summers can affect board color, surface heat, shade, and long-term material care.",
      },
      {
        title: "Tight or Limited Access",
        text: "Narrow yards, steep driveways, nearby homes, and limited staging space can change how materials and crews reach the work area.",
      },
      {
        title: "Existing Deck Removal",
        text: "When an old structure is present, demolition, disposal, hidden damage, and the condition of the home connection may affect the scope.",
      },
      {
        title: "Plans, Permits, and Engineering",
        text: "Requirements depend on the deck and location. Ogden Construction can help coordinate the needed steps around the approved scope.",
      },
    ],
  },
  process: {
    id: "deck-building-process",
    eyebrow: "What to Expect",
    title: "From the First Site Visit to the Final Walkthrough",
    description:
      "A clear process helps homeowners make decisions early and gives the crew a practical plan to follow during construction.",
    steps: [
      {
        title: "Consultation and Site Review",
        text: "Discuss your goals, look at the property, review access and grade, and identify the type of deck that may fit the home.",
      },
      {
        title: "Layout, Materials, and Scope",
        text: "Work through the deck size, height, materials, stairs, railings, demolition, and major site factors that belong in the project.",
      },
      {
        title: "Plans and Approvals",
        text: "When the project requires plans, permits, engineering, or inspections, those steps are coordinated before and during the build.",
      },
      {
        title: "Construction and Final Review",
        text: "The crew completes the approved work, keeps the site organized, and walks through the finished deck with the homeowner.",
      },
    ],
  },
  scopeFactors: {
    id: "project-scope",
    eyebrow: "Planning the Budget",
    title: "What Changes the Scope of a Deck Project?",
    description:
      "No two deck estimates are the same. The final scope depends on the design, materials, property, and amount of structural work needed.",
    items: [
      "Overall deck size and shape",
      "Deck height and number of levels",
      "Trex, composite, or redwood material choice",
      "Framing, footings, and structural complexity",
      "Number and layout of stairs and landings",
      "Railing style and finish details",
      "Slope, drainage, and jobsite access",
      "Removal and disposal of an existing deck",
      "Plans, permits, engineering, and inspections when required",
    ],
    resourceLink: {
      label: "Read the Northern California Deck Cost Guide",
      href: "/how-much-does-it-cost-to-build-a-deck",
    },
  },
  projects: {
    id: "deck-projects",
    eyebrow: "Real Local Work",
    title: "Recent Deck Projects by Ogden Construction",
    description:
      "These completed projects show different materials, property types, and construction needs across Tahoe and the Sierra foothills.",
    items: [
      {
        title: "Redwood Deck Replacement",
        location: "South Lake Tahoe, CA",
        summary:
          "An aging deck was removed and rebuilt with high-grade redwood for a renewed outdoor space at a mountain home.",
        highlights: [
          "Redwood deck installation",
          "Full demolition and rebuild",
          "Mountain property",
        ],
        href: "/portfolio",
        ctaLabel: "View the Project",
      },
      {
        title: "Trex Deck and Retaining Wall Build",
        location: "Rescue, CA",
        summary:
          "A worn front porch was replaced with Trex composite decking and added joist support. The project also included a retaining wall and drainage work.",
        highlights: [
          "Trex composite decking",
          "Reinforced joist structure",
          "Retaining wall and drainage",
        ],
        href: "/portfolio",
        ctaLabel: "View the Project",
      },
      {
        title: "Fencing and Second-Story Deck Project",
        location: "Placerville, CA",
        summary:
          "The work included custom fencing, gates, a second-story deck, and an exterior stair system.",
        highlights: [
          "Second-story deck",
          "Exterior stairs",
          "Custom fencing and gates",
        ],
        href: "/portfolio",
        ctaLabel: "View the Project",
      },
      {
        title: "Twin Bridges Cabin Improvements",
        location: "Twin Bridges, CA",
        summary:
          "A mountain cabin received a deck rebuild along with driveway and retaining wall work to improve the property and winter access.",
        highlights: [
          "Cabin deck rebuild",
          "Mountain access planning",
          "Retaining wall extension",
        ],
        href: "/portfolio",
        ctaLabel: "View the Project",
      },
    ],
    footerLink: {
      label: "Browse the Full Portfolio",
      href: "/portfolio",
    },
  },
  serviceAreas: {
    id: "service-areas",
    eyebrow: "Where We Build",
    title: "Custom Deck Construction Across Northern California",
    description:
      "Ogden Construction serves homeowners from the Sacramento region through the Sierra foothills and Lake Tahoe communities.",
    items: [
      {
        name: "Placerville",
        text: "Custom decks for foothill homes, sloped lots, wooded properties, and nearby El Dorado County communities.",
        href: "/locations-we-serve/placerville-deck-builder-construction",
      },
      {
        name: "South Lake Tahoe",
        text: "Deck construction planned around mountain weather, snow, moisture, elevation, and seasonal site access.",
        href: "/locations-we-serve/south-lake-tahoe-deck-builder-construction",
      },
      {
        name: "El Dorado Hills",
        text: "Outdoor living decks for hillside homes, view properties, larger yards, and custom residential spaces.",
        href: "/locations-we-serve/el-dorado-hills-deck-builder-construction",
      },
      {
        name: "Folsom",
        text: "Trex, composite, and redwood decks planned for strong sun, hot summers, and regular family use.",
        href: "/locations-we-serve/folsom-deck-builder-construction",
      },
      {
        name: "Sacramento",
        text: "Custom deck construction for valley homes where heat, sun exposure, shade, and outdoor use guide material choices.",
        href: "/locations-we-serve/sacramento-deck-builder-construction",
      },
      {
        name: "Auburn",
        text: "Deck and outdoor construction for foothill properties with uneven terrain, drainage needs, and changing access conditions.",
        href: "/locations-we-serve/auburn-deck-builder-construction",
      },
    ],
    footerLink: {
      label: "View All Locations We Serve",
      href: "/locations-we-serve",
    },
  },
  relatedResources: {
    id: "related-resources",
    eyebrow: "Plan With Better Information",
    title: "Deck Guides and Related Services",
    description:
      "Review common cost factors, compare repair with replacement, or browse recent work before starting your consultation.",
    items: [
      {
        title: "Deck Cost Guide",
        text: "See common Northern California deck price ranges and the factors that can change the final project cost.",
        href: "/how-much-does-it-cost-to-build-a-deck",
        ctaLabel: "Read the Cost Guide",
      },
      {
        title: "Deck Repair vs. Replacement",
        text: "Learn which types of damage may be repaired and when rebuilding the deck may be the better long-term choice.",
        href: "/deck-repair-vs-replacement",
        ctaLabel: "Compare the Options",
      },
      {
        title: "Deck Project Portfolio",
        text: "See completed redwood, Trex, elevated, and mountain deck projects from across the service area.",
        href: "/portfolio",
        ctaLabel: "View Recent Work",
      },
      {
        title: "All Construction Services",
        text: "Explore deck work, additions, ADUs, remodeling, custom builds, and other residential construction services.",
        href: "/services",
        ctaLabel: "Explore All Services",
      },
    ],
  },
  faqTitle: "Custom Deck Builder Frequently Asked Questions",
  faqs: [
    {
      question: "What types of custom decks does Ogden Construction build?",
      answer:
        "Ogden Construction builds ground-level, elevated, hillside, second-story, and custom multi-level decks. The final layout depends on the home, grade, access, views, and how the outdoor space will be used.",
    },
    {
      question: "Do you build Trex, composite, and redwood decks?",
      answer:
        "Yes. Ogden Construction works with Trex, other composite decking, and redwood. The team can help you compare appearance, upkeep, sun exposure, weather, and budget before choosing a material.",
    },
    {
      question: "Can you build an elevated or second-story deck?",
      answer:
        "Yes. Ogden Construction has completed elevated and second-story deck work with exterior stairs and railings. These projects need careful planning around height, access, support, and the connection to the home.",
    },
    {
      question: "Can stairs and railings be included in the deck project?",
      answer:
        "Yes. Stairs, landings, railings, fascia, trim, and related details can be planned as part of the full deck scope. The options depend on the layout, height, style, and approved project plan.",
    },
    {
      question: "How do I choose between redwood and composite decking?",
      answer:
        "Redwood offers a natural wood look and can be refinished, but it needs routine care. Composite costs more upfront in many cases, but it needs less regular maintenance. The best choice depends on the look, upkeep, weather, and budget you prefer.",
    },
    {
      question: "What affects the cost of building a custom deck?",
      answer:
        "The main factors include deck size, height, layout, materials, framing, stairs, railings, slope, access, demolition, and any plans, permits, engineering, or inspections required for the project.",
    },
    {
      question: "Can Ogden Construction help with permits and inspections?",
      answer:
        "Yes. Ogden Construction can help coordinate plans, permits, engineering, and inspections when they are required. The exact process depends on the property, deck design, and local jurisdiction.",
    },
    {
      question: "How long does a custom deck project take?",
      answer:
        "The schedule depends on the deck size, site conditions, design, approvals, material lead times, weather, and structural work. Ogden Construction reviews these factors before setting the project schedule.",
    },
    {
      question: "What areas does Ogden Construction serve?",
      answer:
        "The main service area includes El Dorado County, Lake Tahoe, and Greater Sacramento. Key communities include Placerville, South Lake Tahoe, El Dorado Hills, Folsom, Sacramento, Auburn, Cameron Park, Pollock Pines, and Camino.",
    },
    {
      question:
        "Does Ogden Construction also repair or replace existing decks?",
      answer:
        "Yes. Ogden Construction can review older decks for damaged boards, stairs, railings, rot, and structural concerns. The condition of the full structure helps determine whether repair or replacement makes more sense.",
    },
  ],
  leadForm: {
    title: "Tell Us About Your Deck Project",
    description:
      "Share the property location, the type of deck you are planning, and any details or photos that can help Ogden Construction understand the site.",
    projectTypeLabel: "What type of deck project are you planning?",
    projectTypeOptions: [
      "New custom deck",
      "Elevated or hillside deck",
      "Second-story deck",
      "Trex or composite deck",
      "Redwood deck",
      "Deck replacement",
      "Not sure yet",
    ],
    requestedFields: [
      "name",
      "email",
      "phone",
      "location",
      "timeline",
      "budget",
      "details",
      "photos",
    ],
    submitLabel: "Request a Free Consultation",
    privacyText:
      "We respect your privacy. Your information will only be used to respond to your project request.",
  },
  finalCta: {
    eyebrow: "Start With a Local Site Review",
    title: "Ready to Plan a Custom Deck for Your Home?",
    text: "Tell Ogden Construction what you want to build and where the property is located. The team will review your goals and help you understand the next step.",
    primaryCta: {
      label: "Request a Free Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: "View the Deck Portfolio",
      href: "/portfolio",
    },
  },
} satisfies ServiceDetailPageData;
