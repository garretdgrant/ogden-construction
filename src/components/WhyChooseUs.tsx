import { Check } from "lucide-react";
import { Card } from "./ui/card";

const reasons = [
  "From the first nail to the final creative touches, we transform your home",
  "Top-rated construction service provider in Placerville and surrounding areas",
  "Modern, unique, and comfortable living spaces tailored to your lifestyle",
  "Professional crew dedicated to quality and customer satisfaction",
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
