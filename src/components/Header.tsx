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

  const locations = [
    "Placerville",
    "El Dorado Hills",
    "Folsom",
    "Auburn",
    "Tahoe",
    "Napa Valley",
    "Sacramento",
  ];

  return (
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
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button className="p-2 focus:outline-none">
                    <Menu className="h-6 w-6 text-primary" />
                    <span className="sr-only">Open menu</span>
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white w-[250px] pt-12">
                  <nav className="flex flex-col space-y-6">
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
                          className={`flex items-center space-x-3 hover:text-accent ${isActive(href)}`}
                        >
                          {icon}
                          <span className="text-lg">{label}</span>
                        </Link>
                      </SheetClose>
                    ))}

                    {/* Mobile Locations Dropdown */}
                    <div className="relative">
                      <div className="flex items-center space-x-3 cursor-pointer">
                        <MapPin className="h-5 w-5" />
                        <span className="text-lg">Locations</span>
                      </div>
                      <div className="pl-8 mt-2 flex flex-col space-y-2">
                        {locations.map((location) => (
                          <Link
                            key={location}
                            href={`/locations/california/${location.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-primary/80 hover:text-accent transition-colors text-base py-1"
                          >
                            {location}
                          </Link>
                        ))}
                      </div>
                    </div>

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
          <nav className="hidden md:flex items-center space-x-8">
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
                className={`flex items-center space-x-1 hover:text-accent ${isActive(href)}`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}

            {/* Desktop Locations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-accent focus:outline-none">
                <MapPin className="h-4 w-4" />
                <span>Locations</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#fafaf9] border border-gray-100 shadow-md rounded-md py-2 mt-1 min-w-[160px]">
                {locations.map((location) => (
                  <DropdownMenuItem key={location} asChild>
                    <Link
                      href={`/locations/california/${location.toLowerCase().replace(/\s+/g, "-")}`}
                      className="px-4 py-2 text-sm text-primary hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {location}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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
  );
};
