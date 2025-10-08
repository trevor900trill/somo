import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full pt-48 pb-24 md:pt-56 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl flex flex-col items-start space-y-8">
          <h1 className="text-6xl font-headline font-bold tracking-tight text-primary md:text-7xl lg:text-8xl">
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
