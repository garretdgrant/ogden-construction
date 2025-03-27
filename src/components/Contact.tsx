"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Phone, Mail, Facebook, Instagram, Hammer } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
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
                <Input placeholder="Your Name" className="w-full" required />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Textarea
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
                <a href="tel:555-123-4567" className="hover:text-accent">
                  555-123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href="mailto:info@ogdenconstruction.com"
                  className="hover:text-accent"
                >
                  info@ogdenconstruction.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-accent" />
                <a
                  href="https://facebook.com/ogdenconstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  Ogden Construction Inc
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-accent" />
                <a
                  href="https://instagram.com/ogdenconstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  @ogdenconstruction
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Hammer className="h-5 w-5 text-accent" />
                <span>Serving Placerville, CA and surrounding communities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
