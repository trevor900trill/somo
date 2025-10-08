import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRightCircle } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  if (!heroImage) return null;

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-start pt-20">
      <div className="absolute inset-0 bg-white/70 z-10" />
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="container relative z-20 mx-auto px-4 md:px-6 text-left">
        <div className="max-w-xl flex flex-col items-start space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl">
            CIRCULAR SHARED PRODUCTION HUB
          </h1>
          <p className="text-lg md:text-xl text-foreground/90">
            Providing entrepreneurs and small businesses with affordable, pay-per-use access to professional-grade manufacturing equipment. Our hubs eliminate the traditional barriers of high capital investment, making quality production accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button asChild size="lg" className="rounded-sm">
              <Link href="#">Book A Session</Link>
            </Button>
            <Button asChild size="lg" variant="link" className="text-foreground">
              <Link href="#">Contact Us <ArrowRightCircle className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
