// src/components/QuoteRequestForm.tsx
"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const QuoteRequestForm = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const res = await fetch("/api/email", {
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
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            className="w-full"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
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
      {/*
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Service Interested In
        </label>
        <Select>
          <SelectTrigger id="service" className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="outdoor">Deck / Outdoor Living</SelectItem>
            <SelectItem value="new">New Construction</SelectItem>
            <SelectItem value="addition">Home Addition</SelectItem>
            <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Approximate Budget
        </label>
        <Select>
          <SelectTrigger id="budget" className="w-full">
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under10k">Under $10,000</SelectItem>
            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
            <SelectItem value="over100k">Over $100,000</SelectItem>
            <SelectItem value="unsure">Not Sure Yet</SelectItem>
          </SelectContent>
        </Select>
      </div> */}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Project Details
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please tell us about your project, timeline, and any specific requirements."
          className="w-full min-h-[150px]"
          required
        />
      </div>

      <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
        Submit Quote Request
      </Button>
    </form>
  );
};
