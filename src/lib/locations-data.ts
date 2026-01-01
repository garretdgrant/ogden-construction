export type LocationData = {
  id: string;
  name: string;
  region: string;
  postalCode?: string;
  description: string;
  seoDescription: string;
  seoCopy: string[];
  highlights: string[];
};

export const LOCATIONS: LocationData[] = [
  {
    id: "placerville",
    name: "Placerville",
    region: "California",
    postalCode: "95667",
    description:
      "Custom decks, additions, and remodels built with mountain-town durability and local know-how.",
    seoDescription:
      "Ogden Construction builds custom decks and home additions in Placerville, CA. Trusted craftsmanship for foothill homes and hillside lots.",
    seoCopy: [
      "Placerville homeowners need construction that stands up to changing seasons and hillside terrain. Our team designs decks and additions that fit the contours of your property and the style of your home.",
      "From historic neighborhoods to newer builds on the edge of town, we handle the details that keep projects smooth: permitting, inspections, and reliable scheduling. You get a clear scope, consistent communication, and clean job sites.",
      "If you are planning a new deck, home addition, or full remodel in Placerville, we bring the experience and craftsmanship to make it last.",
    ],
    highlights: [
      "Decks designed for slope and elevation changes",
      "Experience with foothill weather and materials",
      "Local permitting and inspection knowledge",
      "Clear timelines and responsive communication",
    ],
  },
  {
    id: "el-dorado-hills",
    name: "El Dorado Hills",
    region: "California",
    description:
      "Modern decks and home additions tailored for upscale neighborhoods and scenic views.",
    seoDescription:
      "Ogden Construction serves El Dorado Hills with custom decks, remodels, and additions designed for view lots and modern homes.",
    seoCopy: [
      "El Dorado Hills projects often demand clean lines, premium materials, and smart outdoor layouts. We build custom decks and additions that elevate the view and complement contemporary architecture.",
      "Our process keeps the project organized from design through completion. We coordinate inspections, manage jobsite logistics, and deliver the finishes you expect in a high standard neighborhood.",
      "For decks, remodels, and additions in El Dorado Hills, count on a local team that understands the expectations of the community.",
    ],
    highlights: [
      "Designs that maximize outdoor views",
      "Premium finishes and clean craftsmanship",
      "Well-managed schedules and inspections",
      "Experienced with hillside construction",
    ],
  },
  {
    id: "folsom",
    name: "Folsom",
    region: "California",
    description:
      "Family-friendly decks, additions, and remodels built for long-term durability.",
    seoDescription:
      "Ogden Construction builds decks, additions, and remodels in Folsom, CA. Trusted construction for growing households and active lifestyles.",
    seoCopy: [
      "Folsom homeowners often want outdoor spaces that feel like an extension of the home. We build decks and additions that support entertaining, family time, and everyday use.",
      "Our team focuses on structural integrity, clean finishes, and straightforward communication. You get a detailed plan, dependable progress updates, and a jobsite that stays tidy.",
      "From deck rebuilds to larger home additions, we help Folsom clients improve comfort and value.",
    ],
    highlights: [
      "Family-focused outdoor living designs",
      "Durable materials for high-traffic use",
      "Transparent scopes and pricing",
      "Experienced local project management",
    ],
  },
  {
    id: "auburn",
    name: "Auburn",
    region: "California",
    description:
      "Outdoor living upgrades and additions built for foothill terrain and weather.",
    seoDescription:
      "Ogden Construction serves Auburn with custom decks and additions that handle foothill conditions and complex lots.",
    seoCopy: [
      "Auburn properties range from wooded lots to ridge-top homes with unique terrain. We design decks and additions that match the site conditions and withstand foothill weather.",
      "We bring experience navigating site access, drainage concerns, and permit requirements while keeping the build organized and on track.",
      "If you are planning a deck or addition in Auburn, our team delivers craftsmanship you can count on.",
    ],
    highlights: [
      "Site-aware deck and addition planning",
      "Foothill climate material selection",
      "Permitting and inspection coordination",
      "Reliable jobsite management",
    ],
  },
  {
    id: "tahoe",
    name: "South Lake Tahoe",
    region: "California",
    description:
      "High-elevation deck builds and remodels designed for snow loads and scenic settings.",
    seoDescription:
      "Ogden Construction builds decks and additions in South Lake Tahoe with materials and framing designed for mountain conditions.",
    seoCopy: [
      "Tahoe homes face heavy snow loads, moisture, and freeze-thaw cycles. We build decks and additions with framing, fasteners, and surfaces suited to the mountain climate.",
      "Our team understands access challenges and seasonal scheduling, keeping projects realistic and communication clear throughout the build.",
      "For Tahoe deck builds, additions, and remodels, we deliver durable work that matches the pace of the region.",
    ],
    highlights: [
      "Snow-load aware deck engineering",
      "Mountain-grade materials and finishes",
      "Seasonal scheduling experience",
      "Clean, organized job sites",
    ],
  },
  {
    id: "napa-valley",
    name: "Napa Valley",
    region: "California",
    description:
      "Refined outdoor structures and additions built with a focus on craftsmanship and detail.",
    seoDescription:
      "Ogden Construction brings custom decks and home additions to Napa Valley with refined craftsmanship and thoughtful design.",
    seoCopy: [
      "Napa Valley homeowners value clean finishes and long-lasting materials. We build decks and additions that feel intentional and blend with the surrounding landscape.",
      "We manage the full process from planning to inspections so you get a smooth build with consistent communication.",
      "From outdoor entertaining spaces to major additions, our team delivers craftsmanship that respects the property.",
    ],
    highlights: [
      "Refined finishes and detail work",
      "Designs that complement the landscape",
      "Reliable scheduling and follow-through",
      "Local permitting coordination",
    ],
  },
  {
    id: "sacramento",
    name: "Sacramento",
    region: "California",
    description:
      "Decks, additions, and remodels built for busy households and hot summers.",
    seoDescription:
      "Ogden Construction builds decks and additions in Sacramento, CA. Durable construction with clear communication and dependable crews.",
    seoCopy: [
      "Sacramento homeowners want projects that are efficient and built to last. We design decks and additions with shade, airflow, and durable materials that handle the heat.",
      "Our team keeps projects on schedule and maintains clear expectations around scope, timing, and jobsite cleanup.",
      "For Sacramento decks, remodels, and additions, we deliver craftsmanship that improves comfort and long-term value.",
    ],
    highlights: [
      "Heat-appropriate materials and layouts",
      "Efficient schedules and steady progress",
      "Durable construction for daily use",
      "Clear scope and project updates",
    ],
  },
];

export function getLocationById(id: string) {
  return LOCATIONS.find((location) => location.id === id);
}

export function getOtherLocations(id: string) {
  return LOCATIONS.filter((location) => location.id !== id);
}
