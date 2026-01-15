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
    <section
      id="projects"
      className="py-24 bg-white texture-deck-boards relative overflow-hidden"
    >
      {/* Decorative wood plank accents */}
      <div className="absolute top-20 right-0 w-2 h-40 bg-gradient-to-b from-accent/10 to-transparent rotate-3 blur-sm"></div>
      <div className="absolute bottom-40 left-0 w-2 h-32 bg-gradient-to-t from-accent/10 to-transparent -rotate-2 blur-sm"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Explore recent builds across the Sierra Foothills and greater
            Sacramento area. See the{" "}
            <Link
              href="/portfolio"
              className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
            >
              full project portfolio
            </Link>{" "}
            for more before-and-after work.
          </p>

          {/* Enhanced badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2 rounded-lg bg-stone-50 px-5 py-3 shadow-sm border border-stone-200">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">Before/after transformations</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-stone-50 px-5 py-3 shadow-sm border border-stone-200">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">
                Budget ranges shared during consults
              </span>
            </div>
          </div>
        </div>
        {/* Project grid with sophisticated hover effects */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <Link
              key={index}
              href="/portfolio"
              className={`group block opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              <Card className="overflow-hidden cursor-pointer border-none shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                <CardContent className="p-0 relative">
                  {/* Image container with overlay effects */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay that shifts on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500"></div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-accent/60 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  </div>

                  {/* Project info with enhanced typography */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-playfair font-bold text-2xl text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-white/90 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {project.location}
                      </p>
                      <span className="text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                        View
                        <svg
                          className="w-4 h-4"
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
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA with enhanced styling */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-10 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl group"
          >
            View the full portfolio
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
