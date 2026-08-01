import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { ServiceData } from "@/app/services/data/services";
import { getServiceHeroSubheading } from "@/lib/service-pages";

type ServiceHeroProps = {
  service: ServiceData;
};

export const ServiceHero = ({ service }: ServiceHeroProps) => {
  const subheading = getServiceHeroSubheading(service);

  return (
    <section className="relative min-h-[68vh] overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Image
          src={service.heroImage}
          alt={service.heroImageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/40" />
      </div>

      <div className="absolute inset-0 z-0 opacity-25">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                rgba(139, 69, 19, 0.05) 0px,
                transparent 1px,
                transparent 3px,
                rgba(139, 69, 19, 0.08) 4px,
                transparent 5px,
                transparent 12px
              )
            `,
          }}
        />
      </div>

      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-16 left-10 h-32 w-1 rotate-12 bg-accent/10 blur-sm" />
      <div className="absolute bottom-28 left-24 h-24 w-1 -rotate-6 bg-accent/15 blur-sm" />

      <div className="container relative z-10 mx-auto flex min-h-[68vh] items-center px-4 py-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent opacity-0 animate-fade-up">
            Services
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-[1.1] text-white opacity-0 animate-fade-up stagger-1 md:text-6xl lg:text-7xl">
            {service.title}
          </h1>
          <p className="mb-8 max-w-3xl text-xl font-light leading-relaxed text-white/95 opacity-0 animate-fade-up stagger-2 md:text-2xl">
            {subheading}
          </p>

          <div className="mb-10 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm opacity-0 animate-fade-up stagger-3">
            Typical investment:{" "}
            <span className="ml-2 text-accent">{service.priceRange}</span>
          </div>

          <div className="flex flex-col gap-3 opacity-0 animate-fade-up stagger-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="#contact-section"
              className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-accent/90 hover:shadow-xl sm:w-auto"
            >
              {service.ctaText ?? "Get a Free Estimate"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="tel:530-919-7408"
              className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white/80 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:text-primary hover:shadow-xl sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (530) 919-7408
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
