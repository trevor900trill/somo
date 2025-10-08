import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  if (!heroImage) return null;

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="container relative z-20 mx-auto px-4 md:px-6 text-center text-primary-foreground">
        <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
            Somo Hub
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Empowering Artisans, Building Futures
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="#services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
