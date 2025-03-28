// src/components/QuoteRequestForm.tsx
"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const QuoteRequestForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote request sent!",
      description:
        "We'll get back to you as soon as possible to discuss your project.",
    });
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
          type="email"
          placeholder="your@email.com"
          className="w-full"
          required
        />
      </div>

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
            <SelectItem value="kitchen">Kitchen Remodel</SelectItem>
            <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
            <SelectItem value="addition">Home Addition</SelectItem>
            <SelectItem value="new">New Construction</SelectItem>
            <SelectItem value="outdoor">Deck / Outdoor Living</SelectItem>
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
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Project Details
        </label>
        <Textarea
          id="message"
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
