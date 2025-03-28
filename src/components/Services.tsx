import {
  Home,
  Hammer,
  PaintBucket,
  Construction,
  Wrench,
  LayoutList,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Home,
    title: "Deck Construction",
    description:
      "Build the perfect outdoor space with durable, stylish deck construction tailored to your home and lifestyle.",
  },
  {
    icon: Construction,
    title: "Deck Replacement",
    description:
      "Replace aging or damaged decks with safe, modern solutions that boost curb appeal and outdoor enjoyment.",
  },
  {
    icon: LayoutList,
    title: "New Structure Construction",
    description:
      "From garages to workshops, we bring your custom structure ideas to life with expert craftsmanship.",
  },
  {
    icon: Hammer,
    title: "Guest House & ADU Construction",
    description:
      "Expand your property’s value and function with custom-built guest houses and accessory dwelling units.",
  },
  {
    icon: PaintBucket,
    title: "Building Additions",
    description:
      "Seamlessly expand your living space with room additions designed to match your home’s character.",
  },
  {
    icon: Wrench,
    title: "Remodeling",
    description:
      "Upgrade your home inside and out with comprehensive remodeling services built for comfort and style.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
