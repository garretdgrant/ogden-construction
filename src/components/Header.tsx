"use client";

import { useState } from "react";
import {
  Home,
  Hammer,
  Image as ImageIcon,
  Users,
  Phone,
  Menu,
  MapPin,
  ChevronDown,
  BookOpen,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path ? "text-accent font-semibold" : "";

  const moreLinks = [
    {
      href: "/locations-we-serve",
      label: "Locations We Serve",
      icon: <MapPin className="h-4 w-4" />,
    },
    {
      href: "/guides",
      label: "Guides",
      icon: <BookOpen className="h-4 w-4" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-stone-200 shadow-sm">
      {/* Subtle decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <div className="flex items-center group">
              {/* Enhanced hammer icon with glow effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-accent/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Hammer className="h-8 w-8 text-accent mr-3 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <Link
                href="/"
                className="text-2xl font-playfair font-bold text-primary tracking-tight hover:text-accent transition-colors duration-300"
              >
                Ogden Construction
              </Link>
            </div>
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
                  className="bg-white w-[280px] pt-12 border-l-2 border-stone-200"
                >
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/40 via-accent to-accent/40"></div>

                  <nav className="flex flex-col space-y-4">
                    {[
                      {
                        href: "/",
                        label: "Home",
                        icon: <Home className="h-5 w-5" />,
                      },
                      {
                        href: "/services",
                        label: "Services",
                        icon: <Hammer className="h-5 w-5" />,
                      },
                      {
                        href: "/portfolio",
                        label: "Portfolio",
                        icon: <ImageIcon className="h-5 w-5" />,
                      },
                      {
                        href: "/about",
                        label: "About",
                        icon: <Users className="h-5 w-5" />,
                      },
                    ].map(({ href, label, icon }) => (
                      <SheetClose asChild key={href}>
                        <Link
                          href={href}
                          className={`group flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300 font-medium ${isActive(href)}`}
                        >
                          <span className="group-hover:scale-110 transition-transform duration-300">
                            {icon}
                          </span>
                          <span className="text-lg">{label}</span>
                        </Link>
                      </SheetClose>
                    ))}

                    {/* Mobile More section */}
                    <div className="pt-2 border-t border-stone-200">
                      <div className="flex items-center space-x-3 px-3 py-2 text-gray-500 text-sm font-medium">
                        <ChevronDown className="h-4 w-4" />
                        <span>More</span>
                      </div>
                      <div className="pl-6 mt-2 flex flex-col space-y-2">
                        {moreLinks.map(({ href, label, icon }) => (
                          <SheetClose asChild key={href}>
                            <Link
                              href={href}
                              className={`group flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300 font-medium ${isActive(href)}`}
                            >
                              <span className="group-hover:scale-110 transition-transform duration-300">
                                {icon}
                              </span>
                              <span className="text-base">{label}</span>
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>

                    {/* Contact CTA - highlighted */}
                    <SheetClose asChild>
                      <Link
                        href="/contact"
                        className={`group flex items-center justify-center space-x-3 p-4 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg mt-6 ${isActive("/contact")}`}
                      >
                        <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-lg">Contact Us</span>
                      </Link>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              {
                href: "/",
                label: "Home",
                icon: <Home className="h-4 w-4" />,
              },
              {
                href: "/services",
                label: "Services",
                icon: <Hammer className="h-4 w-4" />,
              },
              {
                href: "/portfolio",
                label: "Portfolio",
                icon: <ImageIcon className="h-4 w-4" />,
              },
              {
                href: "/about",
                label: "About",
                icon: <Users className="h-4 w-4" />,
              },
            ].map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className={`group flex items-center space-x-2 font-medium text-gray-700 hover:text-accent transition-all duration-300 relative ${isActive(href)}`}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
                <span>{label}</span>
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}

            {/* Desktop More Dropdown with enhanced styling */}
            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center space-x-2 font-medium text-gray-700 hover:text-accent transition-all duration-300 focus:outline-none relative">
                <span>More</span>
                <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-2 border-stone-200 shadow-xl rounded-lg py-2 mt-2 min-w-[200px]">
                {moreLinks.map(({ href, label, icon }) => (
                  <DropdownMenuItem key={href} asChild>
                    <Link
                      href={href}
                      className={`group flex items-center gap-3 px-4 py-3 text-base text-gray-700 hover:bg-accent/10 hover:text-accent transition-all duration-300 relative ${isActive(href)}`}
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {icon}
                      </span>
                      <span>{label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contact"
              className={`group flex items-center space-x-2 px-6 py-2.5 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${isActive("/contact")}`}
            >
              <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
