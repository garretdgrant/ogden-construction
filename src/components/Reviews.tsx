import Link from "next/link";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    quote:
      "Our Tahoe deck rebuild was on schedule and the craftsmanship is outstanding. The team was clean, respectful, and communicative the whole way.",
    name: "Jordan M.",
    location: "South Lake Tahoe, CA",
    project: "Deck rebuild + railing upgrade",
  },
  {
    quote:
      "From design to permits to final walkthrough, everything was clear and organized. The new addition blends perfectly with the house.",
    name: "Alyssa R.",
    location: "Placerville, CA",
    project: "Home addition + exterior updates",
  },
  {
    quote:
      "We wanted a Trex deck that could handle hot summers and heavy use. The result is beautiful and feels rock solid.",
    name: "Chris T.",
    location: "Folsom, CA",
    project: "Trex composite deck",
  },
];

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

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${testimonial.project}`}
                className={`group h-full border-none bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden opacity-0 animate-scale-in stagger-${index + 1}`}
              >
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/40 via-accent to-accent/40"></div>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>

                {/* Quote mark decoration */}
                <div className="absolute top-16 left-6 text-6xl font-playfair text-accent/5 leading-none pointer-events-none">
                  "
                </div>

                <CardContent className="flex h-full flex-col text-left relative z-10 p-8">
                  {/* Star rating with enhanced styling */}
                  <div className="mb-6 flex items-center gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="h-5 w-5 drop-shadow-sm"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote text with enhanced typography */}
                  <p className="flex-1 text-gray-700 leading-relaxed text-lg mb-6 relative pl-2">
                    "{testimonial.quote}"
                  </p>

                  {/* Author info with enhanced design */}
                  <div className="border-t-2 border-stone-100 pt-6">
                    <div className="flex items-start gap-4">
                      {/* Decorative initial circle */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-xl font-playfair font-bold text-accent">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-primary text-lg font-playfair mb-1">
                          {testimonial.name}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <svg
                            className="w-4 h-4 text-accent/60 flex-shrink-0"
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
                          <span>{testimonial.location}</span>
                        </div>
                        <p className="text-sm text-gray-500 italic">
                          {testimonial.project}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
