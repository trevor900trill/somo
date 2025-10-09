
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#location", label: "Our Facility" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerLogo = PlaceHolderImages.find(p => p.id === 'footer-logo');


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          {headerLogo && (
            <Image 
              src={headerLogo.imageUrl}
              alt={headerLogo.description}
              width={100}
              height={100}
              className="h-12 w-auto"
            />
          )}
        </Link>

        <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn("text-sm font-medium transition-colors hover:text-foreground", isScrolled || isMenuOpen ? "text-foreground" : "text-white")}
                  prefetch={false}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button asChild className="hidden md:inline-flex rounded-sm">
                <Link href="https://shop.somoafrica.org/_/" target="_blank">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Shop Now
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto flex flex-col gap-4 px-4 pb-4 pt-2 md:px-6">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-accent/50 hover:text-foreground"
                  prefetch={false}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button asChild className="rounded-sm">
              <Link href="https://shop.somoafrica.org/_/" target="_blank" onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Shop Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
