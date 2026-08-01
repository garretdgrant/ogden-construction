import Image from "next/image";
import Link from "next/link";
import type { ServiceGalleryImage } from "@/app/services/data/services";
import { ServicePlaceholder } from "@/components/services/ServicePlaceholder";

type ServiceGalleryProps = {
  images: ServiceGalleryImage[];
};

export const ServiceGallery = ({ images }: ServiceGalleryProps) => {
  const isDevelopment = process.env.NODE_ENV !== "production";

  if (!images.length) {
    if (!isDevelopment) {
      return null;
    }

    return (
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <ServicePlaceholder
            title="Project gallery pending"
            message="Add 3-6 service-specific project photos once final selections are ready for this page."
          />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 texture-deck-boards">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Project Gallery
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-accent" />
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Recent builds, details, and finished spaces related to this service.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image) => (
            <div
              key={`${image.src}-${image.alt}`}
              className="overflow-hidden rounded-3xl border-2 border-stone-200 bg-white shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-72 w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            View the Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};
