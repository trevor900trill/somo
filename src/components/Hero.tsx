import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 flex items-center justify-start">
      <Image
        src="/images/hero-background.png"
        alt="A chef standing on the right against a bright, whitish kitchen background, with empty space on the left."
        fill
        className="object-cover object-center"
        data-ai-hint="chef cooking"
        priority
      />
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-2xl flex flex-col items-start space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-headline font-bold tracking-tight text-primary md:text-7xl lg:text-8xl">
              Tengeneza na Somo
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              Circular Shared Production Hubs
            </p>
          </div>
          <p className="text-lg md:text-xl text-foreground/80">
            This model allows small businesses and entrepreneurs to access high-quality equipment without the burden of upfront capital costs, fostering innovation and production flexibility. Our hubs eliminate the traditional barriers of high capital investment, making quality production accessible to everyone and reducing post harvest losses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button asChild size="lg" className="rounded-sm">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe-aGTobKLbQcikibwjluTWEGvQbh7BZITQsw-uFuw40U3AxQ/viewform?vc=0&c=0&w=1&flr=0" target="_blank">Book A Session</Link>
            </Button>
            <Button asChild size="lg" variant="link" className="text-foreground">
              <Link href="#contact">Contact Us <ArrowRightCircle className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
