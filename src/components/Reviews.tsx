import Link from "next/link";
import { TestimonialCards } from "@/components/TestimonialCards";
import { homeTestimonials } from "@/lib/testimonials";

const reviewLinks = [
  {
    name: "Yelp Reviews",
    href: "https://www.yelp.com/biz/ogden-construction-placerville-2",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
        <path d="M12.5 7h-1v5.59l4.71 2.77.75-1.23-4.46-2.63z" />
      </svg>
    ),
  },
  {
    name: "Facebook Reviews",
    href: "https://www.facebook.com/ogden.construction.inc/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-24 bg-stone-50 diagonal-divider relative overflow-hidden"
    >
      {/* Decorative quote marks */}
      <div className="absolute top-12 left-12 text-9xl font-playfair text-accent/5 leading-none">
        "
      </div>
      <div className="absolute bottom-12 right-12 text-9xl font-playfair text-accent/5 leading-none rotate-180">
        "
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
            Homeowner Reviews
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
            See what local homeowners say about working with Ogden Construction.
            Read verified reviews on the platforms below or{" "}
            <a
              href="#contact-section"
              className="font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4 decoration-2 decoration-accent/30 hover:decoration-accent/60"
            >
              request a quote
            </a>
            .
          </p>

          <div className="mb-12">
            <TestimonialCards items={homeTestimonials} />
          </div>

          {/* Enhanced review platform buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {reviewLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-5 font-semibold text-primary shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-accent/20 hover:border-accent min-w-[240px] opacity-0 animate-scale-in stagger-${index + 1}`}
              >
                <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <span className="text-lg">{link.name}</span>
                <svg
                  className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            ))}
          </div>

          {/* Trust indicator */}
          <div className="mt-12 inline-flex items-center gap-3 rounded-full bg-white/60 backdrop-blur-sm border border-accent/20 px-6 py-3 shadow-md">
            <svg
              className="w-5 h-5 text-accent"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Verified Reviews from Real Homeowners
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
