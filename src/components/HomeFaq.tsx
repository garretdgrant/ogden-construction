import { FaqSection } from "@/components/FaqSection";
import { homeFaqItems } from "@/lib/homeFaq";

export const HomeFaq = () => {
  return (
    <FaqSection
      items={homeFaqItems}
      heading="Frequently Asked Questions"
      description="Quick answers to common questions about planning a deck, addition, or remodeling project with our team. Visit our guides for materials, pricing, and process tips."
      ctaHref="/guides"
      ctaLabel="Explore Guides"
    />
  );
};
