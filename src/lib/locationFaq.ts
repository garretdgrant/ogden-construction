import type { FaqItem } from "@/lib/faq";

const locationFaqMap: Record<string, FaqItem[]> = {
  placerville: [
    {
      question: "Do you build custom decks in Placerville?",
      answer:
        "Yes — we design and build custom decks throughout Placerville and the surrounding foothill communities. Placerville lots often involve elevation changes, slopes, or hillside sections, so we tailor framing and foundations to the terrain.",
    },
    {
      question: "What decking materials work best in Placerville?",
      answer:
        "Redwood is popular because it looks natural and performs well in the foothills. Composite materials such as Trex are also growing in popularity for lower maintenance and longer lifespan.",
    },
    {
      question: "How much does a deck cost in Placerville?",
      answer:
        "Most deck projects range from $15,000–$45,000+, depending on size, material, and whether the build involves stairs or hillside supports. We provide detailed estimates during the design phase.",
    },
    {
      question: "Do you handle dry rot repairs in Placerville?",
      answer:
        "Yes — dry rot is common in older decks and structural framing. We can repair or replace damaged sections or recommend a full rebuild if needed.",
    },
    {
      question: "Do you offer more than just deck building?",
      answer:
        "Yes — we’re a licensed general contractor and also offer remodeling, outdoor living spaces, pergolas, fencing, and residential construction services.",
    },
    {
      question: "Do you handle permits for Placerville projects?",
      answer:
        "Yes — we can manage the permitting process and city requirements for your project.",
    },
  ],
  "el-dorado-hills": [
    {
      question: "Do you build decks in El Dorado Hills?",
      answer:
        "Yes — we frequently work in El Dorado Hills, including lakefront and hillside properties. Decks in this area often prioritize views and outdoor living features.",
    },
    {
      question:
        "What are the most popular decking materials in El Dorado Hills?",
      answer:
        "Composite decking is common for its clean look and low maintenance. Redwood and Trex are also popular options.",
    },
    {
      question: "Do you build outdoor living spaces in El Dorado Hills?",
      answer:
        "Yes — many clients in El Dorado Hills pair deck projects with pergolas, patio structures, or remodels that extend usable outdoor space.",
    },
    {
      question: "How much does a deck cost in El Dorado Hills?",
      answer:
        "Most builds fall in the $20,000–$60,000+ range depending on material, elevation, and finishes.",
    },
    {
      question: "Do HOA rules affect deck projects in El Dorado Hills?",
      answer:
        "Some neighborhoods have HOA requirements related to materials, color, and setbacks. We help clients navigate approvals when needed.",
    },
  ],
  folsom: [
    {
      question: "Do you build custom decks in Folsom?",
      answer:
        "Yes — we offer deck construction and general contracting services throughout Folsom. Many Folsom projects prioritize backyard upgrades and modern outdoor living.",
    },
    {
      question: "What materials do you recommend for Folsom deck builds?",
      answer:
        "Composite decking is popular in Folsom for its clean lines and minimal maintenance. Redwood remains a classic and cost-effective option.",
    },
    {
      question: "Can you work with HOAs in Folsom?",
      answer:
        "Yes — many neighborhoods in Folsom have HOA rules for outdoor construction. We can help review and coordinate approvals when required.",
    },
    {
      question: "Do you offer remodels or repairs in Folsom?",
      answer:
        "Yes — we handle remodels, dry rot repairs, outdoor structures, and other residential construction services in addition to deck building.",
    },
    {
      question: "What is the typical deck budget in Folsom?",
      answer:
        "Most Folsom deck projects fall between $18,000–$55,000+ depending on layout and materials.",
    },
  ],
  auburn: [
    {
      question: "Do you build decks in Auburn?",
      answer:
        "Yes — we serve Auburn and the surrounding foothill communities. Auburn projects often involve elevations and hillside considerations.",
    },
    {
      question: "What materials perform well in Auburn’s climate?",
      answer:
        "Redwood and composite materials both hold up well in Auburn. Composite offers increased longevity and lower maintenance, especially in shaded or moisture-prone areas.",
    },
    {
      question: "Do you build hillside decks in Auburn?",
      answer:
        "Yes — hillside decks are common in Auburn. We design framing and foundations to match the slope and meet structural requirements.",
    },
    {
      question: "Do you offer repairs and remodels in Auburn?",
      answer:
        "Yes — in addition to decks, we handle remodels, dry rot repair, pergolas, outdoor living, and general residential construction.",
    },
    {
      question: "How much does a deck cost in Auburn?",
      answer:
        "Most projects range from $18,000–$50,000+, depending on slope, materials, and complexity.",
    },
  ],
  tahoe: [
    {
      question: "Do you build decks in South Lake Tahoe?",
      answer:
        "Yes — we build decks throughout South Lake Tahoe. Tahoe projects often require snow load, moisture, and elevation considerations that impact framing and material selection.",
    },
    {
      question: "What decking materials work best in Tahoe?",
      answer:
        "Composite decking performs very well due to moisture resistance and low maintenance. Trex is a popular option. Redwood can be used but typically requires more maintenance.",
    },
    {
      question: "Do Tahoe decks require special structural supports?",
      answer:
        "Yes — snow load and elevation can require additional framing, hardware, and engineering considerations. We factor these into design and permitting.",
    },
    {
      question: "Do you handle permits for Tahoe deck projects?",
      answer:
        "Yes — we help manage the permitting process and coordinate requirements for Tahoe builds.",
    },
    {
      question: "How much does a deck cost in South Lake Tahoe?",
      answer:
        "Due to climate and materials, Tahoe projects often fall in the $25,000–$80,000+ range.",
    },
    {
      question: "Do you offer repairs in Tahoe?",
      answer:
        "Yes — we handle repairs, tear-downs, rebuilds, and upgrades based on code or weather damage.",
    },
  ],
  "napa-valley": [
    {
      question: "Do you build custom decks in Napa Valley?",
      answer:
        "Yes — we provide deck construction and outdoor living upgrades throughout Napa and surrounding wine country communities.",
    },
    {
      question: "What makes Napa Valley deck projects unique?",
      answer:
        "Views and outdoor living spaces are priorities for many Napa clients. Composite materials are common for long-term aesthetics and minimal upkeep.",
    },
    {
      question: "Do you build pergolas and outdoor structures in Napa?",
      answer:
        "Yes — pergolas, patio structures, and outdoor expansions are popular additions to deck builds in Napa Valley.",
    },
    {
      question: "What are typical costs for Napa deck projects?",
      answer:
        "Most Napa Valley projects fall in the $25,000–$65,000+ range depending on size, finishes, and materials.",
    },
    {
      question:
        "Do you offer remodels and general contracting services in Napa?",
      answer:
        "Yes — we are a general contractor and can take on residential remodels, upgrades, and other construction work.",
    },
  ],
  sacramento: [
    {
      question: "Do you build decks in Sacramento?",
      answer:
        "Yes — we offer deck construction and general contracting services throughout Sacramento and surrounding neighborhoods.",
    },
    {
      question: "What materials are popular for Sacramento deck projects?",
      answer:
        "Composite decking is popular due to Sacramento’s hot summers and low maintenance needs. Redwood remains a classic choice for natural wood aesthetics.",
    },
    {
      question: "Do you offer deck repairs and remodels in Sacramento?",
      answer:
        "Yes — we handle repairs, dry rot replacements, remodels, and upgrades.",
    },
    {
      question: "What is the typical budget for a Sacramento deck build?",
      answer:
        "Most Sacramento projects range from $15,000–$45,000+ based on size and materials.",
    },
    {
      question: "Do you build more than just decks in Sacramento?",
      answer:
        "Yes — as a licensed general contractor, we also build outdoor living spaces, pergolas, fencing, and handle remodels.",
    },
  ],
};

export function getLocationFaqItems(id: string): FaqItem[] {
  return locationFaqMap[id] ?? [];
}
