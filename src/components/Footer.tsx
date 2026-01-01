// src/components/Footer.tsx
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
              Serving Placerville, Folsom, El Dorado Hills, Cameron Park,
              Sacramento, Tahoe, and surrounding communities
            </p>
            <p className="mb-2">License #: CA-1042758</p>
            <p>Fully insured and bonded</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">(530) 919-7408</p>
            <p className="mb-2">info@ogden-construction.com</p>
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
              <img
                src="https://www.edcwebdesign.com/logo.png"
                alt="EDC Web Design Logo"
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
