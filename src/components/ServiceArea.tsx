import Link from "next/link";

const areas = [
  "Placerville",
  "El Dorado Hills",
  "Folsom",
  "Sacramento",
  "South Lake Tahoe",
  "Cameron Park",
  "Pollock Pines",
  "Camino",
];

export const ServiceArea = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Service Area & Credentials
          </h2>
          <p className="text-gray-700 mb-8">
            Ogden Construction is a licensed and insured contractor serving
            homeowners across El Dorado and Sacramento counties. We specialize
            in decks, additions, and custom builds with local, code-compliant
            expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            View all service areas
          </Link>
        </div>
      </div>
    </section>
  );
};
