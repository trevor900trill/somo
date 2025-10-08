import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  if (!heroImage) return null;

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-start text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage.imageUrl})` }}
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="max-w-2xl flex flex-col items-start space-y-8">
          <h1 className="text-6xl font-headline font-bold tracking-tight text-primary md:text-7xl lg:text-8xl">
            CIRCULAR SHARED PRODUCTION HUB
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Providing entrepreneurs and small businesses with affordable, pay-per-use access to professional-grade manufacturing equipment. Our hubs eliminate the traditional barriers of high capital investment, making quality production accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button asChild size="lg" className="rounded-sm">
              <Link href="#">Book A Session</Link>
            </Button>
            <Button asChild size="lg" variant="link" className="text-white">
              <Link href="#">Contact Us <ArrowRightCircle className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
