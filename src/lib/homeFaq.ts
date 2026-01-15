import { buildFaqJsonLd, type FaqItem } from "@/lib/faq";

export const homeFaqItems: FaqItem[] = [
  {
    question: "Do you offer free consultations and estimates?",
    answer:
      "Yes. We offer a free consultation and provide a detailed estimate after learning about your goals and site conditions.",
  },
  {
    question: "Are you licensed and insured in California?",
    answer:
      "Yes. Ogden Construction is a licensed and insured contractor based in Placerville, CA.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Placerville, South Lake Tahoe, El Dorado Hills, Folsom, Sacramento, and nearby communities in El Dorado and Sacramento counties.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope and permitting, but most projects are completed over several weeks once materials and approvals are in place.",
  },
  {
    question: "Can you help with permits and inspections?",
    answer:
      "Yes. We can help guide permitting and coordinate inspections as required for your project.",
  },
];

export function getHomeFaqJsonLd() {
  return buildFaqJsonLd(homeFaqItems);
}
