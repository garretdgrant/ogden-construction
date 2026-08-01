import { services } from "@/app/services/data/services";
import { ogdenHomepageData } from "@/lib/ogden-homepage.data";

export type ImageSitemapImage = {
  src: string;
  alt: string;
};

export type ImageSitemapEntry = {
  path: string;
  lastmod?: string;
  images: ImageSitemapImage[];
};

function uniqueLocalImages(
  images: Array<ImageSitemapImage | undefined>,
): ImageSitemapImage[] {
  const seen = new Set<string>();

  return images.filter((image): image is ImageSitemapImage => {
    if (!image?.src.startsWith("/") || seen.has(image.src)) {
      return false;
    }

    seen.add(image.src);
    return true;
  });
}

const homepageEntry: ImageSitemapEntry = {
  path: ogdenHomepageData.pageHref,
  lastmod: ogdenHomepageData.dateModified,
  images: uniqueLocalImages([
    {
      src: ogdenHomepageData.hero.image.src,
      alt: ogdenHomepageData.hero.image.alt,
    },
  ]),
};

const serviceEntries: ImageSitemapEntry[] = services.map((service) => ({
  path: `/services/${service.slug}`,
  images: uniqueLocalImages([
    {
      src: service.heroImage,
      alt: service.heroImageAlt,
    },
    ...service.sections.map((section) => section.image),
    ...service.gallery,
  ]),
}));

export const imageSitemapEntries: ImageSitemapEntry[] = [
  homepageEntry,
  ...serviceEntries,
].filter((entry) => entry.images.length > 0);
