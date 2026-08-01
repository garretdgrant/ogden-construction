"use client";

import type { ReactNode } from "react";
import { ClipboardCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ContactModalTriggerProps = {
  children: ReactNode;
  className?: string;
};

export function ContactModalTrigger({
  children,
  className,
}: ContactModalTriggerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={className}>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100vh-2rem)] max-w-2xl overflow-y-auto border-stone-200 bg-[#f7f2e9] p-0 shadow-2xl sm:rounded-2xl">
        <div className="border-b border-stone-200 bg-stone-900 px-6 py-7 text-white sm:px-8">
          <DialogHeader>
            <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-amber-300 text-stone-900">
              <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <DialogTitle className="font-playfair text-3xl font-bold text-white">
              Tell Us About Your Project
            </DialogTitle>
            <DialogDescription className="max-w-xl pt-2 leading-6 text-white/70">
              Share a few details and Ogden Construction will follow up about
              your site, scope, and next step.
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="px-6 pb-7 sm:px-8 sm:pb-8">
          <ContactForm submitLabel="Request a Free Consultation" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
