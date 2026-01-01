"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Phone, Mail, Facebook, Instagram, Hammer } from "lucide-react";
import { useRouter } from "next/navigation";

export const Contact = () => {
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    <section id="contact-section" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Let&apos;s Transform Your Home
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="w-full"
                  required
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
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90"
              >
                Contact Us Today For Your Free Consultation
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:530-919-7408" className="hover:text-accent">
                  {" "}
                  (530) 919-7408
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href="mailto:info@ogden-construction.com"
                  className="hover:text-accent"
                >
                  info@ogden-construction.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-accent" />
                <a
                  href="https://www.facebook.com/ogden.construction.inc/" // UPDATED
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  Ogden Construction
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-accent" />
                <a
                  href="https://www.instagram.com/levioakden77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  @levioakden77
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Hammer className="h-5 w-5 text-accent" />
                <span>Serving El Dorado County - Greater Sacramento areas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
