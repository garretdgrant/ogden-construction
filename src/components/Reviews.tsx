import Link from "next/link";

const reviewLinks = [
  {
    name: "Yelp Reviews",
    href: "https://www.yelp.com/biz/ogden-construction-placerville-2",
  },
  {
    name: "Facebook Reviews",
    href: "https://www.facebook.com/ogden.construction.inc/",
  },
];

export const Reviews = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Homeowner Reviews
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          See what local homeowners say about working with Ogden Construction.
          Read verified reviews on the platforms below.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {reviewLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
