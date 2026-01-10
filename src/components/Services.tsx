import {
  Home,
  Construction,
  HardHat,
  HousePlus,
  Warehouse,
  Drill,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

const services = [
  {
    icon: HardHat,
    title: "Deck Construction",
    description:
      "Build the perfect outdoor space with durable, stylish deck construction tailored to your home and lifestyle.",
  },
  {
    icon: Drill,
    title: "Deck Replacement",
    description:
      "Replace aging or damaged decks with safe, modern solutions that boost curb appeal and outdoor enjoyment.",
  },
  {
    icon: Warehouse,
    title: "New Structure Construction",
    description:
      "From garages to workshops, we bring your custom structure ideas to life with expert craftsmanship.",
  },
  {
    icon: Home,
    title: "Guest House & ADU Construction",
    description:
      "Expand your property’s value and function with custom-built guest houses and accessory dwelling units.",
  },
  {
    icon: Construction,
    title: "Building Additions",
    description:
      "Seamlessly expand your living space with room additions designed to match your home’s character.",
  },
  {
    icon: HousePlus,
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
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          From custom decks to full additions, we deliver durable builds that
          match your home and how you live.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href="/services"
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
            >
              <Card className="border-none shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
};
