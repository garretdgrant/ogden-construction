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
    <section
      id="services"
      className="py-24 bg-stone-50 texture-wood diagonal-divider relative overflow-hidden"
    >
      {/* Wood plank decorative elements */}
      <div className="absolute top-10 left-0 w-1.5 h-48 bg-gradient-to-b from-transparent via-accent/8 to-transparent rotate-2 blur-sm"></div>
      <div className="absolute bottom-20 right-0 w-1.5 h-56 bg-gradient-to-t from-transparent via-accent/8 to-transparent -rotate-1 blur-sm"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with refined typography */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From custom decks to full additions, we deliver durable builds that
            match your home and how you live. Choose composite, Trex, or redwood
            with clear scope and budget expectations before we build. Browse{" "}
            <Link
              href="/services"
              className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
            >
              full service details
            </Link>{" "}
            or explore{" "}
            <Link
              href="/guides"
              className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
            >
              material and pricing guides
            </Link>
            .
          </p>
        </div>
        {/* Service cards with staggered animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              href="/services"
              className={`group block opacity-0 animate-scale-in stagger-${index + 1}`}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white relative overflow-hidden">
                {/* Decorative accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/60 via-accent to-accent/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <CardHeader className="pb-4">
                  {/* Icon with background circle */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-500"></div>
                    <service.icon className="h-14 w-14 text-accent relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-playfair tracking-tight group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                  {/* Subtle hover indicator */}
                  <div className="mt-4 flex items-center text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA button with enhanced styling */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] group"
          >
            View services & timelines
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
