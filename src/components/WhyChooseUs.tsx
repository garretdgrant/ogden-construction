import { Check } from "lucide-react";
import { Card } from "./ui/card";

const reasons = [
  "Precision craftsmanship from foundation to finish — we build it right the first time", // updated
  "Locally trusted across Placerville, Folsom, El Dorado Hills, Tahoe, and Sacramento", // updated
  "Custom decks, additions, and new builds tailored to your vision and lifestyle", // updated
  "Tight-knit, professional team committed to quality, communication, and timelines", // updated
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Why Choose Us
        </h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-6 flex items-start space-x-4 border-none shadow-lg"
            >
              <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">{reason}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
