// come back to refactor shell.tsx to leave layout.tsx as a server side component
"use client";
import { useState } from "react";
import {
  Home,
  Hammer,
  Image as ImageIcon,
  Users,
  Phone,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? "text-accent font-semibold" : "";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between mb-4 md:mb-0">
              <div className="flex items-center">
                <Hammer className="h-7 w-7 text-accent mr-2" />
                <Link href="/" className="text-xl font-bold text-primary">
                  Ogden Construction Inc
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <button className="p-2 focus:outline-none">
                      <Menu className="h-6 w-6 text-primary" />
                      <span className="sr-only">Open menu</span>
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="bg-white w-[250px] pt-12"
                  >
                    <nav className="flex flex-col space-y-6">
                      <SheetClose asChild>
                        <Link
                          href="/"
                          className={`flex items-center space-x-3 hover:text-accent ${isActive("/")}`}
                        >
                          <Home className="h-5 w-5" />
                          <span className="text-lg">Home</span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/services"
                          className={`flex items-center space-x-3 hover:text-accent ${isActive("/services")}`}
                        >
                          <Hammer className="h-5 w-5" />
                          <span className="text-lg">Services</span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/portfolio"
                          className={`flex items-center space-x-3 hover:text-accent ${isActive("/portfolio")}`}
                        >
                          <ImageIcon className="h-5 w-5" />
                          <span className="text-lg">Portfolio</span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/about"
                          className={`flex items-center space-x-3 hover:text-accent ${isActive("/about")}`}
                        >
                          <Users className="h-5 w-5" />
                          <span className="text-lg">About</span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/contact"
                          className={`flex items-center space-x-3 hover:text-accent ${isActive("/contact")}`}
                        >
                          <Phone className="h-5 w-5" />
                          <span className="text-lg">Contact</span>
                        </Link>
                      </SheetClose>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`flex items-center space-x-1 hover:text-accent ${isActive("/")}`}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/services"
                className={`flex items-center space-x-1 hover:text-accent ${isActive("/services")}`}
              >
                <Hammer className="h-4 w-4" />
                <span>Services</span>
              </Link>
              <Link
                href="/portfolio"
                className={`flex items-center space-x-1 hover:text-accent ${isActive("/portfolio")}`}
              >
                <ImageIcon className="h-4 w-4" />
                <span>Portfolio</span>
              </Link>
              <Link
                href="/about"
                className={`flex items-center space-x-1 hover:text-accent ${isActive("/about")}`}
              >
                <Users className="h-4 w-4" />
                <span>About</span>
              </Link>
              <Link
                href="/contact"
                className={`flex items-center space-x-1 hover:text-accent ${isActive("/contact")}`}
              >
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-primary text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Ogden Construction Inc
              </h3>
              <p className="mb-2">
                Serving Placerville, CA and surrounding communities
              </p>
              <p className="mb-2">License #: CA-12345678</p>
              <p>Fully insured and bonded</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">555-123-4567</p>
              <p className="mb-2">info@ogdenconstruction.com</p>
              <p>123 Main Street, Placerville, CA 95667</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p className="mb-2">Monday - Friday: 8AM - 5PM</p>
              <p className="mb-2">Saturday: By appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Ogden Construction Inc. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
