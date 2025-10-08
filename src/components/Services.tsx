import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Package, Store } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Technical Training",
    description: "Hands-on workshops and training sessions to refine your skills and master new techniques in your craft.",
  },
  {
    icon: Package,
    title: "Raw Material Sourcing",
    description: "Access to high-quality, sustainably sourced raw materials at competitive prices, delivered right to your workshop.",
  },
  {
    icon: Store,
    title: "Market Access",
    description: "Connect with a broader customer base through our online marketplace and retail partnerships.",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm font-medium text-accent-foreground/80">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            What We Offer
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Somo Hub provides a comprehensive suite of services designed to support artisans at every stage of their business.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center bg-background shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-primary pt-6">
              <CardHeader className="items-center p-0">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
