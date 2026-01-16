"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Phone, Mail, Hammer, MapPin, Send, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Social media icon components
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export const Contact = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        company: formData.get("company"), // honeypot
      }),
    });

    setIsSubmitting(false);

    if (res.ok) {
      form.reset();
      router.push("/contact/thank-you");
    } else {
      const data = await res.json();
      const errorMessage =
        data?.error || "There was a problem sending your message.";

      toast({
        title: "Oops!",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact-section"
      className="relative py-24 bg-gradient-to-b from-stone-50 via-white to-stone-50 overflow-hidden"
    >
      {/* Subtle wood grain background texture */}
      <div className="absolute inset-0 texture-wood opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-4 py-1.5 bg-accent/10 rounded-full mb-4">
            <span className="text-sm font-medium text-accent tracking-wide">
              LET&apos;S BUILD TOGETHER
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Start Your Project Today
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Share your vision and we&apos;ll follow up with a clear scope,
            timeline, and estimate for your home in{" "}
            <span className="font-semibold text-accent">Placerville</span>,{" "}
            <span className="font-semibold text-accent">South Lake Tahoe</span>,
            or the greater{" "}
            <span className="font-semibold text-accent">Sacramento area</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Form Section - Takes up more space */}
          <div className="lg:col-span-3 animate-slide-in-left">
            <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8 md:p-10 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />

              <h3 className="text-2xl font-bold mb-6 text-primary relative">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative">
                {/* Name Field */}
                <div className="relative group">
                  <label
                    htmlFor="name"
                    className={`absolute -top-2.5 left-3 px-2 bg-white text-xs font-medium transition-colors duration-200 ${
                      focusedField === "name" ? "text-accent" : "text-stone-500"
                    }`}
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    className="w-full h-12 border-2 border-stone-200 focus:border-accent focus:ring-accent/20 rounded-lg transition-all duration-200"
                    required
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Honeypot field (hidden from users) */}
                <div className="hidden">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Email & Phone Fields - Side by side on larger screens */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <label
                      htmlFor="email"
                      className={`absolute -top-2.5 left-3 px-2 bg-white text-xs font-medium transition-colors duration-200 ${
                        focusedField === "email"
                          ? "text-accent"
                          : "text-stone-500"
                      }`}
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full h-12 border-2 border-stone-200 focus:border-accent focus:ring-accent/20 rounded-lg transition-all duration-200"
                      required
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div className="relative group">
                    <label
                      htmlFor="phone"
                      className={`absolute -top-2.5 left-3 px-2 bg-white text-xs font-medium transition-colors duration-200 ${
                        focusedField === "phone"
                          ? "text-accent"
                          : "text-stone-500"
                      }`}
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(530) 555-0123"
                      className="w-full h-12 border-2 border-stone-200 focus:border-accent focus:ring-accent/20 rounded-lg transition-all duration-200"
                      required
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <label
                    htmlFor="message"
                    className={`absolute -top-2.5 left-3 px-2 bg-white text-xs font-medium transition-colors duration-200 ${
                      focusedField === "message"
                        ? "text-accent"
                        : "text-stone-500"
                    }`}
                  >
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project... What are you looking to build or remodel?"
                    className="w-full min-h-[160px] border-2 border-stone-200 focus:border-accent focus:ring-accent/20 rounded-lg transition-all duration-200 resize-none"
                    required
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Start Your Free Consultation</span>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>

                {/* Privacy Note */}
                <p className="text-xs text-stone-500 text-center mt-4">
                  We respect your privacy. Your information will never be shared
                  with third parties.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info Section - More compact */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in-right">
            {/* Primary CTA Card */}
            <div className="bg-gradient-to-br from-accent to-accent/90 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <Phone className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Ready to Start Building?
                </h3>
                <p className="text-amber-50 mb-6 text-sm">
                  Call now for immediate assistance
                </p>
                <Button
                  asChild
                  className="w-full bg-white text-accent hover:bg-stone-50 font-semibold h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a
                    href="tel:530-919-7408"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>(530) 919-7408</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-stone-200 p-6">
              <h3 className="text-lg font-bold mb-5 text-primary">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:530-919-7408"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-stone-500 font-medium">Phone</p>
                    <p className="text-sm font-semibold text-stone-700 group-hover:text-accent transition-colors duration-200">
                      (530) 919-7408
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@ogden-construction.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-stone-500 font-medium">Email</p>
                    <p className="text-sm font-semibold text-stone-700 group-hover:text-accent transition-colors duration-200 truncate">
                      info@ogden-construction.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-stone-500 font-medium">
                      Service Area
                    </p>
                    <p className="text-sm font-semibold text-stone-700">
                      El Dorado County & Greater Sacramento
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-stone-200">
                <p className="text-xs text-stone-500 font-medium mb-3">
                  FOLLOW US
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/ogden.construction.inc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-stone-100 hover:bg-accent hover:text-white rounded-lg transition-all duration-200 group"
                    aria-label="Visit our Facebook page"
                  >
                    <FacebookIcon className="h-5 w-5" />
                    <span className="text-xs font-medium hidden sm:inline">
                      Facebook
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/levioakden77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-stone-100 hover:bg-accent hover:text-white rounded-lg transition-all duration-200 group"
                    aria-label="Visit our Instagram profile"
                  >
                    <InstagramIcon className="h-5 w-5" />
                    <span className="text-xs font-medium hidden sm:inline">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-stone-100 rounded-xl p-6 border border-stone-200">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Hammer className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary mb-1">
                    Licensed & Insured
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Professional craftsmanship backed by decades of experience
                    in custom home construction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
