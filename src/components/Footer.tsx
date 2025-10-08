"use client";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const serviceLinks = [
  { href: "#", text: "Technical Training" },
  { href: "#", text: "KEBs Certification" },
  { href: "#", text: "Raw & Packaging Material Sourcing" },
];

const companyLinks = [
  { href: "#services", text: "Services" },
  { href: "#about", text: "About Us" },
  { href: "#testimonials", text: "Testimonials" },
  { href: "#", text: "Shop with Us" },
];

const contactLinks = [
  { href: "tel:+254729243881", text: "+254 729 243 881" },
  { href: "https://www.somoafrica.org", text: "www.somoafrica.org" },
  { href: "#contact", text: "Contact Us" },
  { href: "#", text: "Terms Of Service" },
];

const socialLinks = [
    { href: "#", icon: Instagram },
    { href: "#", icon: Facebook },
    { href: "#", icon: Twitter },
    { href: "#", icon: Youtube },
]

export function Footer() {
  const footerLogo = PlaceHolderImages.find(p => p.id === 'footer-logo');

  return (
    <footer id="contact" className="w-full bg-secondary/30 pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            {footerLogo && (
              <Image
                src={footerLogo.imageUrl}
                alt={footerLogo.description}
                width={150}
                height={150}
                className="rounded-full"
                data-ai-hint={footerLogo.imageHint}
              />
            )}
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-bold text-foreground mb-4">Service</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">QUICK CONTACT</h3>
              <ul className="space-y-3">
                {contactLinks.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-primary hover:text-primary/80">
                        <link.icon className="w-6 h-6" />
                    </Link>
                ))}
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-right">
                Copyright @ 2025 Somo. All rights reserved
            </p>
        </div>
      </div>
    </footer>
  );
}
