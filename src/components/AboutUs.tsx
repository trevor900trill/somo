import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "./ui/button";
import Link from "next/link";

export function AboutUs() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  if (!aboutImage) return null;

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm font-medium text-accent-foreground/80">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Mission to Empower Artisans
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed">
              Somo Hub was founded on a simple principle: to create a thriving ecosystem for artisans. We believe in the power of craft to transform lives and communities. By providing essential resources, training, and market access, we help talented creators turn their passion into a sustainable livelihood.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed">
              Our team is composed of passionate individuals with backgrounds in art, business, and technology, all united by a common goal to support and celebrate craftsmanship.
            </p>
            <Button asChild size="lg">
              <Link href="#contact">Join Our Community</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={500}
              height={650}
              className="overflow-hidden rounded-xl object-cover object-center shadow-2xl aspect-[4/5]"
              data-ai-hint={aboutImage.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
