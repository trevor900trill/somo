import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "./ui/button";
import Link from "next/link";

const missionPoints = [
    {
        text: 'We evaluate your production needs and match you with the right equipment and support services.'
    },
    {
        text: 'Our experienced team provides hands-on guidance and technical training to help you master new production techniques and optimize your manufacturing processes.'
    },
    {
        text: 'we connect you with market opportunities, helping you scale your business and reach new customers through our network.'
    }
]

const TargetIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary flex-shrink-0 mt-1">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
    </svg>
)


export function AboutUs() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'who-we-are-image');

  if (!aboutImage) return null;

  return (
    <section id="about" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="flex items-center justify-center">
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={600}
              height={400}
              className="overflow-hidden rounded-xl object-cover object-center shadow-lg"
              data-ai-hint={aboutImage.imageHint}
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-bold tracking-tight">
              <span className="text-primary">Who</span> We Are?
            </h2>
            <p className="text-muted-foreground md:text-lg">
              We are committed to delivering comprehensive production solutions that enhance your production journey. Our facility has a mission, including:
            </p>
            <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <TargetIcon />
                        <span className="text-muted-foreground">{point.text}</span>
                    </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="rounded-sm border-2 border-foreground">
                <Link href="#about">Learn More About Us</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
