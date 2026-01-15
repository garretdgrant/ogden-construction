import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/lib/testimonials";

type TestimonialCardsProps = {
  items: Testimonial[];
  heading?: string;
  description?: string;
};

export const TestimonialCards = ({
  items,
  heading,
  description,
}: TestimonialCardsProps) => {
  return (
    <div>
      {heading ? (
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            {heading}
          </h2>
          {description ? <p className="text-secondary">{description}</p> : null}
        </div>
      ) : null}
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((testimonial, index) => (
          <Card
            key={`${testimonial.name}-${testimonial.project ?? "testimonial"}`}
            className={`group h-full border-none bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden opacity-0 animate-scale-in stagger-${index + 1}`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/40 via-accent to-accent/40"></div>
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="absolute top-16 left-6 text-6xl font-playfair text-accent/5 leading-none pointer-events-none">
              "
            </div>

            <CardContent className="flex h-full flex-col text-left relative z-10 p-8">
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

              <p className="flex-1 text-gray-700 leading-relaxed text-lg mb-6 relative pl-2">
                "{testimonial.quote}"
              </p>

              <div className="border-t-2 border-stone-100 pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-xl font-playfair font-bold text-accent">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-primary text-lg font-playfair mb-1">
                      {testimonial.name}
                    </p>
                    {testimonial.location ? (
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
                    ) : null}
                    {testimonial.project ? (
                      <p className="text-sm text-gray-500 italic">
                        {testimonial.project}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
