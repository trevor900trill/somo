
'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const newsletterImage = PlaceHolderImages.find(p => p.id === 'newsletter-image');
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

  if (!newsletterImage) return null;

  return (
    <section id="newsletter" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-secondary rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-primary font-semibold font-headline text-2xl">Subscribe Now</p>
              <h2 className="text-4xl font-headline font-bold tracking-tight text-foreground">
                Subscriber To <span className="text-primary">Our</span> Newsletter
              </h2>
              <form 
                onSubmit={handleSubscribe} 
                className="flex items-center bg-white p-2 rounded-xl shadow-inner max-w-md"
              >
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Enter Address" 
                  className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                  required
                />
                <Button type="submit" className="rounded-lg">Subscribe</Button>
              </form>
              <p className="text-sm text-muted-foreground">
                Already a member? <Link href="#" className="font-semibold text-primary hover:underline">Sign In</Link>
              </p>
            </div>
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[4/3] max-w-2xl">
                <Image 
                  src={newsletterImage.imageUrl}
                  alt={newsletterImage.description}
                  fill
                  className="rounded-2xl object-cover shadow-lg"
                  data-ai-hint={newsletterImage.imageHint}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
