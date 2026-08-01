// src/components/Footer.tsx
import Image from "next/image";
import {
  SITE_CONTACT_EMAIL,
  SITE_CONTACT_EMAIL_HREF,
} from "@/lib/site-contact";
export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Ogden Construction Inc
            </h3>
            <p className="mb-2">
              Serving Placerville, Tahoe, El Dorado Hills, Folsom, Cameron Park,
              Sacramento, and surrounding communities
            </p>
            <p className="mb-2">License #: CA-1042758</p>
            <p>Fully insured and bonded</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">(530) 919-7408</p>
            <p className="mb-2">
              <a
                href={SITE_CONTACT_EMAIL_HREF}
                className="underline decoration-white/35 underline-offset-4 transition hover:text-amber-300"
              >
                {SITE_CONTACT_EMAIL}
              </a>
            </p>
            <p>
              Available by call, text, or email
              <br />
              whenever you need us.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <p className="mb-2">Monday - Friday: 8AM - 5PM</p>
            <p className="mb-2">Saturday: By appointment</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center flex flex-col items-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Ogden Construction Inc. All rights
            reserved.
          </p>
          <a
            href="https://www.edcwebdesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent transition-colors"
          >
            <div className="flex items-center space-x-4">
              <Image
                src="https://www.edcwebdesign.com/logo.png"
                alt="EDC Web Design Logo"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
              <p>Designed by EDC Web Design</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
