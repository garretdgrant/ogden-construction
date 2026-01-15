import Link from "next/link";

const areas = [
  {
    name: "Placerville",
    href: "/locations-we-serve/placerville-deck-builder-construction",
    featured: true,
  },
  {
    name: "South Lake Tahoe",
    href: "/locations-we-serve/south-lake-tahoe-deck-builder-construction",
    featured: true,
  },
  {
    name: "El Dorado Hills",
    href: "/locations-we-serve/el-dorado-hills-deck-builder-construction",
    featured: true,
  },
  {
    name: "Folsom",
    href: "/locations-we-serve/folsom-deck-builder-construction",
    featured: true,
  },
  {
    name: "Sacramento",
    href: "/locations-we-serve/sacramento-deck-builder-construction",
    featured: true,
  },
  { name: "Cameron Park", href: null, featured: false },
  { name: "Pollock Pines", href: null, featured: false },
  { name: "Camino", href: null, featured: false },
];

export const ServiceArea = () => {
  return (
    <section
      id="service-area"
      className="py-24 bg-stone-50 texture-wood relative overflow-hidden"
    >
      {/* Decorative map-inspired background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-accent rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 border-2 border-accent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section header */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
            Service Area & Credentials
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Ogden Construction is a licensed and insured contractor serving
            homeowners across Placerville, South Lake Tahoe, and the greater El
            Dorado and Sacramento counties. We specialize in decks, additions,
            and custom builds with local, code-compliant expertise and
            straightforward project timelines.
          </p>

          {/* Location badges with enhanced design */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {areas.map((area, index) =>
              area.href ? (
                <Link
                  key={area.name}
                  href={area.href}
                  className={`group rounded-lg bg-white px-6 py-3 font-medium text-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${
                    area.featured
                      ? "border-accent/20 hover:border-accent"
                      : "border-stone-200 hover:border-primary"
                  } opacity-0 animate-scale-in stagger-${Math.min(index + 1, 6)}`}
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-accent group-hover:scale-110 transition-transform"
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
                    {area.name}
                  </span>
                </Link>
              ) : (
                <span
                  key={area.name}
                  className={`rounded-lg bg-white px-6 py-3 font-medium text-gray-700 shadow-md border-2 border-stone-200 opacity-0 animate-scale-in stagger-${Math.min(index + 1, 6)}`}
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-gray-400"
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
                    {area.name}
                  </span>
                </span>
              ),
            )}
          </div>

          {/* Featured markets callout */}
          <div className="rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-accent/20 p-8 mb-8 shadow-lg">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
              Priority Markets
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {areas
                .filter((a) => a.featured)
                .map((area, index, arr) => (
                  <span key={area.name}>
                    <Link
                      href={area.href!}
                      className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
                    >
                      {area.name}
                    </Link>
                    {index < arr.length - 1 &&
                      (index === arr.length - 2 ? ", and " : ", ")}
                  </span>
                ))}
            </p>
          </div>

          {/* CTA button */}
          <Link
            href="/locations-we-serve"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] group"
          >
            View all service areas
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
