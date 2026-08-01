"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  className?: string;
  idPrefix?: string;
  privacyText?: string;
  submitLabel?: string;
};

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-lg border-2 border-stone-200 bg-white px-4 text-base text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-accent focus:ring-2 focus:ring-accent/20";

export function ContactForm({
  className,
  idPrefix,
  privacyText = "We respect your privacy. Your information will only be used to respond to your project request.",
  submitLabel = "Start Your Free Consultation",
}: ContactFormProps) {
  const generatedId = useId().replace(/:/g, "");
  const prefix = idPrefix ?? `contact-${generatedId}`;
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(
          typeof result?.error === "string"
            ? result.error
            : "There was a problem sending your message.",
        );
      }

      form.reset();
      router.push("/contact/thank-you");
    } catch (error) {
      toast({
        title: "We could not send your message",
        description:
          error instanceof Error
            ? error.message
            : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${prefix}-company`}>Company</label>
        <input
          id={`${prefix}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor={`${prefix}-name`}
          className="text-sm font-semibold text-stone-800"
        >
          Full Name
        </label>
        <Input
          id={`${prefix}-name`}
          name="name"
          autoComplete="name"
          placeholder="John Smith"
          className={fieldClassName}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${prefix}-email`}
            className="text-sm font-semibold text-stone-800"
          >
            Email Address
          </label>
          <Input
            id={`${prefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="john@example.com"
            className={fieldClassName}
            required
          />
        </div>

        <div>
          <label
            htmlFor={`${prefix}-phone`}
            className="text-sm font-semibold text-stone-800"
          >
            Phone Number
          </label>
          <Input
            id={`${prefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(530) 555-0123"
            className={fieldClassName}
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={`${prefix}-message`}
          className="text-sm font-semibold text-stone-800"
        >
          Project Details
        </label>
        <Textarea
          id={`${prefix}-message`}
          name="message"
          placeholder="Tell us about your project, location, and ideal timeline."
          className={`${fieldClassName} min-h-36 resize-y py-3`}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 font-bold text-white shadow-lg shadow-accent/15 transition hover:-translate-y-0.5 hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-5 w-5" aria-hidden="true" />
        )}
        {isSubmitting ? "Sending message..." : submitLabel}
      </Button>

      <p className="text-center text-xs leading-5 text-stone-500">
        {privacyText}
      </p>
    </form>
  );
}
