import type { OgdenPageData } from "@/lib/ogden-page.types";
import {
  SITE_CONTACT_EMAIL,
  SITE_CONTACT_EMAIL_HREF,
} from "@/lib/site-contact";

export const servicesPageData = {
  kind: "service",
  slug: "services",
  pageHref: "/services",
  dateModified: "2026-08-01",
  metadata: {
    title: "Residential Construction Services | Ogden Construction",
    description:
      "Explore Ogden Construction services for custom decks, deck repair, additions, ADUs, remodeling, and new builds across Northern California.",
    canonicalPath: "/services",
    focusKeyword: "Ogden Construction services",
    supportingKeywords: [
      "residential construction services",
      "custom deck construction",
      "deck repair and replacement",
      "home additions",
      "ADU construction",
      "residential remodeling",
      "custom home construction",
    ],
  },
  seoIntent: {
    primaryIntent:
      "Help homeowners understand the residential construction services Ogden Construction offers and choose the right next step for their project.",
    geographicFocus: [
      "El Dorado County",
      "Lake Tahoe",
      "Greater Sacramento",
      "Northern California",
    ],
    pageOwns: [
      "Ogden Construction services",
      "Ogden Construction company services",
      "residential construction services offered by Ogden Construction",
      "Ogden Construction decks additions remodels and new builds",
      "broad service navigation for Ogden Construction",
    ],
    pageDoesNotOwn: [
      "generic deck builder and deck contractor searches assigned to a dedicated deck-building service page",
      "commercial deck repair and replacement searches assigned to a dedicated repair service page",
      "Sacramento deck builder searches",
      "South Lake Tahoe deck builder searches",
      "El Dorado Hills deck builder searches",
      "Folsom deck builder and deck repair searches",
      "Placerville deck builder searches",
      "deck cost and pricing questions assigned to the deck cost guide",
      "repair versus replacement decision searches assigned to the deck repair guide",
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
      { days: "Monday–Friday", hours: "8:00 AM–5:00 PM" },
      { days: "Saturday", hours: "By appointment" },
      { days: "Sunday", hours: "Closed" },
    ],
  },
  hero: {
    eyebrow: "Decks, Additions, Remodels, and New Builds",
    title: "Residential Construction Services for Northern California Homes",
    description:
      "Ogden Construction helps homeowners plan and build custom decks, repairs, additions, ADUs, remodels, and new homes across El Dorado County, Lake Tahoe, and Greater Sacramento.",
    image: {
      src: "/images/services/services-hero.webp",
      alt: "Custom deck overlooking Lake Tahoe at sunset",
      width: 1200,
      height: 800,
      caption: "A finished outdoor deck overlooking Lake Tahoe.",
    },
    primaryCta: {
      label: "Request a Free Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Recent Projects",
      href: "/portfolio",
    },
    trustItems: [
      "Serving Northern California since 2008",
      "California contractor license 1042758",
      "Licensed, insured, and bonded",
      "Local service across El Dorado County, Tahoe, and Greater Sacramento",
    ],
  },
  anchorLinks: [
    { label: "Services", href: "#residential-services" },
    { label: "Project Management", href: "#project-management" },
    { label: "Local Planning", href: "#regional-planning" },
    { label: "Recent Work", href: "#recent-projects" },
    { label: "Process", href: "#our-process" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "FAQs", href: "#frequently-asked-questions" },
    { label: "Contact", href: "#contact" },
  ],
  sections: [
    {
      id: "residential-services",
      eyebrow: "Find the Right Service",
      title: "Residential Construction Services Built Around Your Project",
      description:
        "Decks are a leading part of our work, but we also take on larger residential projects from additions and ADUs to remodels and ground-up builds.",
      surface: "default",
      blocks: [
        {
          type: "paragraph",
          text: "Every project starts with the same question: what are you trying to improve? You may need a safer deck, more living space, a separate guest unit, or a full rebuild. Ogden Construction reviews the property, listens to your goals, and helps define a clear scope before work begins.",
        },
        {
          type: "card-grid",
          cards: [
            {
              title: "Custom Deck Construction",
              text: "Plan a new deck around the way you use your home. Ogden Construction builds wood, composite, Trex, elevated, hillside, and second-story decks with stairs, railings, and outdoor living details suited to the property.",
              href: "/services/deck-building",
              ctaLabel: "Explore Deck Building",
            },
            {
              title: "Deck Repair and Replacement",
              text: "Loose boards, aging railings, rot, moisture damage, and weak framing can affect comfort and safety. We can review the existing deck and help determine whether focused repairs or a full replacement makes more sense.",
              href: "/deck-repair-vs-replacement",
              ctaLabel: "Compare Repair and Replacement",
            },
            {
              title: "Room and Home Additions",
              text: "Add useful space without losing the character of your home. Addition projects may include expanded living areas, bedrooms, primary suites, attached structures, or other changes that need to connect cleanly with the existing house.",
              href: "/contact",
              ctaLabel: "Discuss an Addition",
            },
            {
              title: "ADUs and Guest Houses",
              text: "Create a separate space for guests, family, work, or flexible living. Ogden Construction can help organize the project around the site, access, utilities, plans, materials, and the way the new structure will be used.",
              href: "/contact",
              ctaLabel: "Discuss an ADU",
            },
            {
              title: "Residential Remodeling",
              text: "Remodeling can improve how rooms connect, how the home functions, and how the finished space feels. We focus on well-planned residential work where layout, structure, materials, and construction details need to come together.",
              href: "/contact",
              ctaLabel: "Discuss a Remodel",
            },
            {
              title: "Custom Homes and Rebuilds",
              text: "For ground-up homes, cabins, and major rebuilds, Ogden Construction can help carry the project from planning into active construction. The work may include trade coordination, inspections, site decisions, and a new deck or exterior features.",
              href: "/portfolio",
              ctaLabel: "View Completed Work",
            },
          ],
        },
      ],
    },
    {
      id: "project-management",
      eyebrow: "General Contracting",
      title: "One Team to Help Keep the Project Moving",
      description:
        "A general contractor does more than build. The role is to keep the scope, people, materials, site work, and decisions moving in the same direction.",
      surface: "muted",
      blocks: [
        {
          type: "paragraph",
          text: "Ogden Construction uses a hands-on approach from the first site visit through the final walkthrough. The exact level of support depends on the project, but the goal stays simple: give you a clear plan, organize the work, and keep communication open as the build moves forward.",
        },
        {
          type: "icon-list",
          items: [
            {
              title: "Scope and Budget Planning",
              text: "We review the project goals, existing conditions, material choices, and major cost drivers before construction starts.",
            },
            {
              title: "Design and Engineering Coordination",
              text: "When plans or engineering are needed, we help keep the design team and construction work aligned around the approved scope.",
            },
            {
              title: "Permits and Inspections",
              text: "Permit and inspection needs vary by project and location. We can help coordinate the required steps as part of the construction plan.",
            },
            {
              title: "Materials and Trade Scheduling",
              text: "We organize material orders and the people needed for each phase so the project can move in a practical order.",
            },
            {
              title: "Jobsite Management",
              text: "The crew follows the agreed scope while keeping the site organized and sharing updates when decisions or changes come up.",
            },
            {
              title: "Final Review",
              text: "At the end of the build, we walk through the work with you and review the completed project together.",
            },
          ],
        },
      ],
    },
    {
      id: "regional-planning",
      eyebrow: "Built for the Region",
      title: "Planning for Valley Heat, Foothill Terrain, and Mountain Weather",
      description:
        "Northern California homes face very different site and weather conditions. The right plan depends on where the property sits and how the finished space will be used.",
      surface: "default",
      blocks: [
        {
          type: "icon-list",
          items: [
            {
              title: "Greater Sacramento",
              text: "Strong sun and hot summers can shape deck materials, shade needs, surface temperatures, and long-term maintenance choices.",
            },
            {
              title: "El Dorado County and the Foothills",
              text: "Slopes, drainage, elevation changes, and access can affect foundations, framing, stairs, material delivery, and the overall scope.",
            },
            {
              title: "Lake Tahoe and Mountain Communities",
              text: "Snow, moisture, freeze-thaw cycles, elevation, and seasonal access may affect planning, structural details, materials, and scheduling.",
            },
            {
              title: "Existing Homes and Additions",
              text: "Additions and remodels need to connect with the current structure. Early review helps uncover layout, access, and construction issues before work begins.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "These factors do not lead to the same answer on every property. A site visit helps Ogden Construction understand the conditions, discuss options, and build a scope that fits the home instead of forcing a standard plan onto it.",
        },
      ],
    },
    {
      id: "planning-resources",
      eyebrow: "Start with Clear Information",
      title: "Helpful Resources for Deck and Construction Planning",
      description:
        "Use these pages to review completed work, understand common deck cost factors, and think through repair versus replacement before your consultation.",
      surface: "muted",
      blocks: [
        {
          type: "card-grid",
          cards: [
            {
              title: "Deck Cost Guide",
              text: "Learn how size, materials, height, stairs, railings, site access, and structural needs can affect the cost of a new deck.",
              href: "/how-much-does-it-cost-to-build-a-deck",
              ctaLabel: "Read the Cost Guide",
            },
            {
              title: "Deck Repair or Replacement",
              text: "Review the signs that may point to a repair, a larger structural problem, or the need for a full deck replacement.",
              href: "/deck-repair-vs-replacement",
              ctaLabel: "Read the Repair Guide",
            },
            {
              title: "Construction Portfolio",
              text: "See real deck, cabin, retaining wall, fencing, and home construction work completed across the region.",
              href: "/portfolio",
              ctaLabel: "Browse the Portfolio",
            },
          ],
        },
      ],
    },
    {
      id: "recent-projects",
      eyebrow: "Real Local Work",
      title: "Projects Across Tahoe and the Sierra Foothills",
      description:
        "The projects below show the range of work Ogden Construction takes on, from deck replacement to mountain access improvements and a full home rebuild.",
      surface: "default",
      blocks: [
        {
          type: "project-grid",
          projects: [
            {
              title: "Redwood Deck Replacement",
              location: "South Lake Tahoe, CA",
              text: "An aging deck was removed and replaced with a high-grade redwood deck, giving the mountain home a renewed outdoor space.",
              href: "/portfolio",
              ctaLabel: "View the Project",
            },
            {
              title: "Twin Bridges Cabin Improvements",
              location: "Twin Bridges, CA",
              text: "The work included a cabin deck rebuild, driveway leveling, a retaining wall extension, and improvements to winter access.",
              href: "/portfolio",
              ctaLabel: "View the Project",
            },
            {
              title: "Full Home Rebuild and Deck Construction",
              location: "Grizzly Flats, CA",
              text: "This ground-up rebuild after the Caldor Fire included project support, inspections, construction work, and a new deck.",
              href: "/portfolio",
              ctaLabel: "View the Project",
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
      id: "our-process",
      eyebrow: "What to Expect",
      title: "A Clear Path from the First Visit to the Final Walkthrough",
      description:
        "The details change from one job to the next, but every project benefits from clear decisions before the crew begins building.",
      surface: "muted",
      blocks: [
        {
          type: "steps",
          steps: [
            {
              title: "Consultation and Site Review",
              text: "We listen to your goals, look at the property, discuss the type of work, and identify the next information needed to shape the project.",
            },
            {
              title: "Scope, Plans, and Budget",
              text: "We work through the project scope, material choices, site factors, and planning needs so you have a clearer picture of the work ahead.",
            },
            {
              title: "Scheduling and Construction",
              text: "Once the project is ready, the crew follows the plan, manages the active work, and keeps you informed as construction moves forward.",
            },
            {
              title: "Inspection and Final Walkthrough",
              text: "Required inspections are coordinated as the work progresses, followed by a final review of the completed project with the homeowner.",
            },
          ],
        },
      ],
    },
    {
      id: "why-ogden",
      eyebrow: "Local Experience",
      title: "Straightforward Service Backed by Real Construction Work",
      description:
        "Homeowners need more than a list of services. They need to know who is responsible for the work and how the project will be handled.",
      surface: "contrast",
      blocks: [
        {
          type: "stats",
          stats: [
            {
              value: "2008",
              label: "Year Ogden Construction was founded",
            },
            {
              value: "1042758",
              label: "California contractor license number",
            },
            {
              value: "3",
              label:
                "Core regions served: El Dorado County, Lake Tahoe, and Greater Sacramento",
            },
          ],
        },
        {
          type: "icon-list",
          items: [
            {
              title: "Licensed, Insured, and Bonded",
              text: "Ogden Construction is a California contractor serving homeowners across the listed Northern California service area.",
            },
            {
              title: "Hands-On Construction Management",
              text: "The work is organized around a clear scope, active jobsite management, and direct communication throughout the project.",
            },
            {
              title: "Experience Across Project Types",
              text: "The portfolio includes decks, retaining walls, fencing, cabin improvements, guest-house work, and a full home rebuild.",
            },
            {
              title: "Local Service Area",
              text: "The team works across Placerville, Tahoe, El Dorado Hills, Folsom, Sacramento, and nearby communities.",
            },
          ],
        },
      ],
    },
    {
      id: "service-areas",
      eyebrow: "Where We Work",
      title: "Residential Construction Services Across Northern California",
      description:
        "Ogden Construction serves homeowners from the Sacramento region through the Sierra foothills and Lake Tahoe communities.",
      surface: "default",
      blocks: [
        {
          type: "location-grid",
          locations: [
            {
              name: "Placerville",
              text: "Decks, additions, remodels, and residential construction for foothill homes, sloped properties, and changing seasonal conditions.",
              href: "/locations-we-serve/placerville-deck-builder-construction",
            },
            {
              name: "South Lake Tahoe",
              text: "Deck and construction planning for mountain homes where snow, moisture, elevation, and seasonal access can shape the project.",
              href: "/locations-we-serve/south-lake-tahoe-deck-builder-construction",
            },
            {
              name: "El Dorado Hills",
              text: "Custom decks, additions, and residential upgrades designed around views, outdoor living, and hillside properties.",
              href: "/locations-we-serve/el-dorado-hills-deck-builder-construction",
            },
            {
              name: "Folsom",
              text: "Deck construction, repair, and residential improvements planned for strong sun, hot summers, and everyday outdoor use.",
              href: "/locations-we-serve/folsom-deck-builder-construction",
            },
            {
              name: "Sacramento",
              text: "Decks and residential construction for valley homes, with attention to heat, sun exposure, shade, and durable material choices.",
              href: "/locations-we-serve/sacramento-deck-builder-construction",
            },
          ],
          footerLink: {
            label: "View All Locations We Serve",
            href: "/locations-we-serve",
          },
        },
      ],
    },
  ],
  faqTitle: "Questions About Ogden Construction Services",
  faqs: [
    {
      question:
        "What types of construction projects does Ogden Construction take on?",
      answer:
        "Ogden Construction works on custom decks, deck repair and replacement, room additions, ADUs and guest houses, residential remodeling, custom homes, and larger rebuilds. The best way to confirm fit is to share your location, project type, and goals during a consultation.",
    },
    {
      question: "What areas does Ogden Construction serve?",
      answer:
        "The main service area includes El Dorado County, Lake Tahoe, and Greater Sacramento. Listed communities include Placerville, South Lake Tahoe, El Dorado Hills, Folsom, Sacramento, Cameron Park, Pollock Pines, Camino, and Auburn.",
    },
    {
      question: "Does Ogden Construction handle permits and inspections?",
      answer:
        "Ogden Construction can help coordinate permits and required inspections as part of the project plan. The exact process depends on the work, property, and local jurisdiction.",
    },
    {
      question: "Can Ogden Construction help with design or engineering?",
      answer:
        "When a project needs plans or engineering, Ogden Construction can help coordinate those parts of the work and use the approved documents to guide construction. The exact team depends on the project scope.",
    },
    {
      question: "Can an older deck be repaired instead of replaced?",
      answer:
        "Sometimes. Isolated board, railing, or finish problems may be repairable, while widespread rot, weak framing, or failing supports may point to replacement. A site review is the best way to understand the condition of the full structure.",
    },
    {
      question: "What decking materials does Ogden Construction work with?",
      answer:
        "Ogden Construction builds with redwood, composite decking, and Trex products. The right choice depends on the look you want, the site, local weather, maintenance needs, and the overall project scope.",
    },
    {
      question: "How does the consultation process start?",
      answer:
        "Share your project type, location, goals, and any useful details or photos. Ogden Construction can then discuss the site, the likely planning steps, and whether an on-site review is the right next move.",
    },
    {
      question:
        "Does Ogden Construction take on remodeling and new construction as well as decks?",
      answer:
        "Yes. Decks are a leading service, but the company also works on additions, ADUs, guest houses, residential remodeling, custom homes, and major rebuilds.",
    },
  ],
  leadForm: {
    title: "Tell Us About Your Project",
    description:
      "Share the project type, property location, goals, and any site details you already know. We will use that information to understand the work and plan the next conversation.",
    submitLabel: "Request a Free Consultation",
    privacyText:
      "We respect your privacy. Your information will only be used to respond to your project request.",
  },
  finalCta: {
    eyebrow: "Start with a Clear Conversation",
    title: "Not Sure Which Construction Service Fits Your Project?",
    text: "Tell us what you want to build, repair, or change. Ogden Construction can review the idea, discuss the property, and help you identify a practical next step.",
    primaryCta: {
      label: "Request a Free Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: "Browse the Portfolio",
      href: "/portfolio",
    },
  },
} satisfies OgdenPageData;
