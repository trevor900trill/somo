"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Twitter, Instagram, Facebook, Hand } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const { toast } = useToast();

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      reset: () => void;
    };
    const email = target.email.value;
    if (email) {
      toast({
        title: "Subscribed!",
        description: `Thank you for subscribing. We've sent a confirmation to ${email}.`,
      });
      target.reset();
    }
  };

  return (
    <footer id="contact" className="w-full bg-secondary/50 pt-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Hand className="h-7 w-7 text-primary" />
                <span className="text-2xl font-bold">Somo Hub</span>
            </div>
            <p className="max-w-sm text-muted-foreground">
                Empowering artisans with the tools and connections they need to succeed. Your craft, our mission.
            </p>
            <div className="flex gap-4">
                <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground"><Twitter className="h-6 w-6" /></Link>
                <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground"><Instagram className="h-6 w-6" /></Link>
                <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground"><Facebook className="h-6 w-6" /></Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground">
              Get the latest updates on new features, workshops, and artisan stories.
            </p>
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2" onSubmit={handleSubscribe}>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1 bg-background"
                required
                aria-label="Email for newsletter"
              />
              <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>f
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between border-t py-6 sm:flex-row gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Somo Hub. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
