import Image from "next/image";
import type { ContentSection as ServiceContentSection } from "@/app/services/data/services";
import { richTextToHtml } from "@/lib/service-pages";

type ContentSectionProps = {
  section: ServiceContentSection;
  index: number;
};

export const ContentSection = ({ section, index }: ContentSectionProps) => {
  const imageOnLeft = section.imagePosition
    ? section.imagePosition === "left"
    : index % 2 === 1;

  return (
    <section
      id={section.id}
      className="py-16 odd:bg-white even:bg-stone-50 texture-wood-planks"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          {section.image && imageOnLeft ? (
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl border-2 border-stone-200 bg-white shadow-xl">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  width={section.image.width}
                  height={section.image.height}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ) : null}

          <div
            className={`space-y-6 ${section.image && imageOnLeft ? "order-1 lg:order-2" : ""}`}
          >
            <div className="w-24 h-1 bg-accent" />
            <h2 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
              {section.heading}
            </h2>
            <div
              className="prose prose-lg max-w-none text-gray-700 prose-headings:text-primary prose-a:text-accent prose-strong:text-primary"
              dangerouslySetInnerHTML={{
                __html: richTextToHtml(section.content),
              }}
            />
          </div>

          {section.image && !imageOnLeft ? (
            <div>
              <div className="overflow-hidden rounded-3xl border-2 border-stone-200 bg-white shadow-xl">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  width={section.image.width}
                  height={section.image.height}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
