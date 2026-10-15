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
        className="object-cover object-top"
        data-ai-hint="chef cooking"
        priority
      />
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-2xl flex flex-col items-start space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
              Tengeneza na Somo
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              Circular Shared Production Hubs
            </p>
          </div>
          <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
            <p>
              Tengeneza na Somo is a social enterprise operating shared mini-manufacturing facilities that enable micro and small businesses to access affordable production equipment, technical expertise and value-addition services without the high cost of setting up their own factories.
            </p>
            <p>
              Through a pay-per-use model, Tengeneza provides access to production facilities, technical training, product development, quality assurance, KEBS certification support, packaging solutions, raw material sourcing and market linkages, with a focus on agro-processing, cosmetics and personal care products.
            </p>
            <p>
              Tengeneza is building a financially sustainable and scalable network of manufacturing hubs that enables entrepreneurs to produce quality, market-ready products, grow their businesses and create jobs, while promoting resource efficiency and sustainable local manufacturing.
            </p>
          </div>
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
