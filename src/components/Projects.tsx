import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

// TODO: Update to real projects
const projects = [
  {
    image: "/images/projects/trexTahoeSquoosh.jpg",
    title: "Custom Trex Deck - Black Handrails",
    location: "Tahoe, CA",
  },
  {
    image: "/images/projects/redwoodMainSquoosh.jpg",
    title: "Redwood Deck - Hog Panel Railings",
    location: "Tahoe, CA",
  },
  {
    image: "/images/projects/newHomeMainSquoosh.jpg",
    title: "New Home Construction",
    location: "Grizzly Flats, CA",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore recent builds across the Sierra Foothills and greater
          Sacramento area.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href="/portfolio"
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <Card className="overflow-hidden cursor-pointer">
                <CardContent className="p-0 relative">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.location}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            View the full portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};
