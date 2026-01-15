export type Testimonial = {
  quote: string;
  name: string;
  location?: string;
  project?: string;
};

export const homeTestimonials: Testimonial[] = [
  {
    quote:
      "Our Tahoe deck rebuild was on schedule and the craftsmanship is outstanding. The team was clean, respectful, and communicative the whole way.",
    name: "Jordan M.",
    location: "South Lake Tahoe, CA",
    project: "Deck rebuild + railing upgrade",
  },
  {
    quote:
      "From design to permits to final walkthrough, everything was clear and organized. The new addition blends perfectly with the house.",
    name: "Alyssa R.",
    location: "Placerville, CA",
    project: "Home addition + exterior updates",
  },
  {
    quote:
      "We wanted a Trex deck that could handle hot summers and heavy use. The result is beautiful and feels rock solid.",
    name: "Chris T.",
    location: "Folsom, CA",
    project: "Trex composite deck",
  },
];

export const locationTestimonials: Testimonial[] = [
  {
    quote: "Fast, organized, and great communication from start to finish.",
    name: "Taylor H.",
    project: "Deck rebuild",
  },
  {
    quote:
      "The craftsmanship is excellent and the crew kept our property spotless.",
    name: "Morgan L.",
    project: "Composite deck",
  },
  {
    quote:
      "Clear timeline, realistic budget, and the final result exceeded expectations.",
    name: "Jamie S.",
    project: "Outdoor addition",
  },
];
