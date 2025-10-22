"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-dorells",
    name: "Aloyce Kimata - Dorell's Entreprise",
    quote: "It saved me from overheads like electricity and water. This has sustained my business to this day.",
  },
  {
    id: "testimonial-chinaza",
    name: "Hellen Nderi - Chinaza Sprout",
    quote: "Chinaza Sprouts is growing stronger every day, from our creative designs to the way we connect with customers.",
  },
  {
    id: "testimonial-momix",
    name: "Mary Mumbi - Momix",
    quote: "Momix is growing stronger every day, from the expertise development services offered, we connect with customers.",
  },
  {
    id: "testimonial-dorells",
    name: "Aloyce Kimata - Dorell's Entreprise",
    quote: "It saved me from overheads like electricity and water. This has sustained my business to this day.",
  },
];

export function Testimonials() {
  const featureImage = PlaceHolderImages.find(p => p.id === 'testimonial-feature');

  return (
    <section id="testimonials" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
            {featureImage && (
                <div className="flex justify-center">
                    <Image
                        src={featureImage.imageUrl}
                        alt={featureImage.description}
                        width={500}
                        height={350}
                        className="rounded-2xl object-cover shadow-lg"
                        data-ai-hint={featureImage.imageHint}
                    />
                </div>
            )}
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl font-headline">
                    Testimonials
                </h2>
                <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                    500+ Happy Clients Said To US They Are Satisfied
                </p>
            </div>
        </div>

        <div className="relative mt-12">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => {
                    const image = PlaceHolderImages.find(p => p.id === testimonial.id);
                    return (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="h-full">
                            <div className="relative flex flex-col justify-end text-white p-6 rounded-2xl h-full min-h-[300px] overflow-hidden shadow-lg">
                                {image && (
                                    <Image
                                        src={image.imageUrl}
                                        alt={testimonial.name}
                                        fill
                                        className="absolute inset-0 object-cover -z-10"
                                        data-ai-hint={image.imageHint}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent -z-10" />
                                <div className="relative z-10">
                                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                    <p className="text-sm text-white/80 mt-2">"{testimonial.quote}"</p>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    );
                })}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white border-primary text-primary border-2">
                    <ArrowLeft className="h-6 w-6"/>
                </CarouselPrevious>
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-white border-primary text-primary border-2">
                    <ArrowRight className="h-6 w-6"/>
                </CarouselNext>
            </Carousel>
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="rounded-sm border-2 border-foreground">
                <Link href="#">See more</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
