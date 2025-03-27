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
    title: "Home Remodeling",
    description:
      "Transform your living space with our comprehensive home remodeling services, tailored to your lifestyle and preferences.",
  },
  {
    icon: Construction,
    title: "Home Renovations",
    description:
      "Revitalize your home with our expert renovation services that blend modern design with functional living spaces.",
  },
  {
    icon: LayoutList,
    title: "Kitchen Remodeling",
    description:
      "Create the kitchen of your dreams with custom designs, quality materials, and expert craftsmanship.",
  },
  {
    icon: Hammer,
    title: "Bathroom Renovations",
    description:
      "Update your bathrooms with modern fixtures, elegant finishes, and space-efficient designs.",
  },
  {
    icon: PaintBucket,
    title: "Interior & Exterior Painting",
    description:
      "Refresh your home's appearance with our professional painting services for both interior and exterior surfaces.",
  },
  {
    icon: Wrench,
    title: "General Contracting",
    description:
      "Comprehensive contracting services for all your residential construction and improvement needs.",
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
