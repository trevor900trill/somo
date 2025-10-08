"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Amina Yusuf",
    title: "Potter",
    quote: "Somo Hub transformed my small hobby into a real business. The training and access to materials were game-changers for me.",
  },
  {
    id: "testimonial-2",
    name: "David Chen",
    title: "Woodworker",
    quote: "Finding a market for my work was always the hardest part. Somo Hub connected me with buyers I could never have reached on my own.",
  },
  {
    id: "testimonial-3",
    name: "Maria Garcia",
    title: "Jewelry Designer",
    quote: "The community at Somo Hub is incredible. It's so inspiring to be surrounded by other talented artisans and supportive staff.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm font-medium text-accent-foreground/80">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            From Our Community
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Hear what artisans are saying about their experience with Somo Hub.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = PlaceHolderImages.find(p => p.id === testimonial.id);
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                  <div className="p-4">
                    <Card className="h-full shadow-lg bg-background">
                      <CardContent className="flex flex-col justify-between items-start gap-6 p-8 h-full">
                        <blockquote className="text-lg italic leading-relaxed text-foreground/80 border-l-4 border-accent pl-4">
                          “{testimonial.quote}”
                        </blockquote>
                        <div className="flex items-center gap-4 pt-4">
                          <Avatar className="h-14 w-14">
                            {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                            <AvatarFallback>{testimonial.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
