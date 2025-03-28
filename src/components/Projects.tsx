import { Card, CardContent } from "./ui/card";
import Image from "next/image";

// TODO: Update to real projects
const projects = [
  {
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    title: "Modern Kitchen Remodel",
    location: "Placerville, CA",
  },
  {
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    title: "Complete Home Renovation",
    location: "El Dorado County",
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    title: "Bathroom Transformation",
    location: "Placerville, CA",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
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
          ))}
        </div>
      </div>
    </section>
  );
};
