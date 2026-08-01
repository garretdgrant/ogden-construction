import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { RelatedLink, ServiceData } from "@/app/services/data/services";
import { getServiceBySlug } from "@/app/services/data/services";

type RelatedServicesProps = {
  relatedServices: string[];
  relatedGuides?: RelatedLink[];
};

export const RelatedServices = ({
  relatedServices,
  relatedGuides,
}: RelatedServicesProps) => {
  const siblingServices = relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is ServiceData => Boolean(service));

  if (!siblingServices.length && !relatedGuides?.length) {
    return null;
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {siblingServices.length ? (
          <>
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <h2 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
                Related Services
              </h2>
              <div className="mx-auto mt-6 h-1 w-24 bg-accent" />
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {siblingServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group overflow-hidden rounded-3xl border-2 border-stone-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl"
                >
                  <Image
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    width={1200}
                    height={700}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-gray-700">{service.summary}</p>
                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-accent">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : null}

        {relatedGuides?.length ? (
          <div className={siblingServices.length ? "mt-16" : ""}>
            <div className="mx-auto mb-8 max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Related Guides
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="rounded-2xl border-2 border-stone-200 bg-stone-50 p-6 shadow-lg transition-all duration-300 hover:border-accent hover:bg-white hover:shadow-xl"
                >
                  <h3 className="text-lg font-semibold text-primary">
                    {guide.title}
                  </h3>
                  {guide.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">
                      {guide.description}
                    </p>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};
