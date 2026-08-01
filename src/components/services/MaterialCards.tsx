import Image from "next/image";
import type { MaterialCard } from "@/app/services/data/services";
import { ServicePlaceholder } from "@/components/services/ServicePlaceholder";

type MaterialCardsProps = {
  items?: MaterialCard[];
};

export const MaterialCards = ({ items }: MaterialCardsProps) => {
  const isDevelopment = process.env.NODE_ENV !== "production";

  if (!items) {
    return null;
  }

  if (!items.length) {
    if (!isDevelopment) {
      return null;
    }

    return (
      <section className="bg-stone-50 py-20">
        <div className="container mx-auto px-4">
          <ServicePlaceholder
            title="Material comparison copy pending"
            message="Add pros, cons, and product-specific notes for this service once the material recommendations are finalized."
          />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-stone-50 py-20 texture-wood">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Material Highlights
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-accent" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-3xl border-2 border-stone-200 bg-white shadow-xl"
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={800}
                  height={600}
                  className="h-56 w-full object-cover"
                />
              ) : null}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-primary">
                  {item.name}
                </h3>
                <p className="mt-3 text-gray-700">{item.description}</p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                      Pros
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      {item.pros.map((pro) => (
                        <li key={pro} className="flex gap-2">
                          <span className="text-accent">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
                      Cons
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                      {item.cons.map((con) => (
                        <li key={con} className="flex gap-2">
                          <span className="text-primary/60">-</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
