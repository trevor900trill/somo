
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Search, Factory, Layers } from 'lucide-react';

const otherServices = [
  {
    icon: Search,
    title: 'Technical Training on Product Formulation',
    description:
      'We offer specialized training that focuses on product formulation, teaching participants the science and techniques behind creating effective and market-ready products. This training covers the entire formulation process from concept to execution.',
  },
  {
    icon: Factory,
    title: 'KEBS Facilitation Process',
    description:
      'We assist businesses in navigating the Kenya Bureau of Standards (KEBS) certification process, ensuring that their products meet local and international quality standards. This support is crucial for compliance and market acceptance.',
  },
  {
    icon: Layers,
    title: 'Raw Material Sourcing and Packaging Material',
    description: 'We offers guidance on sourcing high-quality raw materials and packaging solutions. Our network of suppliers ensures that businesses have access to sustainable and cost-effective options that enhance product quality and branding.',
  }
];

export function Services() {
  const servicesImage = PlaceHolderImages.find((p) => p.id === 'baking-cookies');

  return (
    <section id="services" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-secondary rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                  <h2 className="text-4xl font-headline font-bold tracking-tighter text-foreground">
                      Services We <span className="text-primary">Provide</span>
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                      We offer a wide range of services to meet all your production needs:
                  </p>
              </div>
              {servicesImage && (
                  <div className="flex justify-center">
                      <Image
                          src={servicesImage.imageUrl}
                          alt={servicesImage.description}
                          width={550}
                          height={367}
                          className="rounded-xl object-cover shadow-lg"
                          data-ai-hint={servicesImage.imageHint}
                      />
                  </div>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative md:-mt-24 group cursor-pointer">
                <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-2xl space-y-4 relative overflow-hidden h-full transition-all duration-300 group-hover:scale-105">
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/20" />
                    <div className="w-16 h-16 rounded-full bg-white mb-4 flex items-center justify-center transition-colors duration-300">
                      {/* Icon can go here if needed */}
                    </div>
                    <h3 className="text-2xl font-bold font-headline">Pay-Per-Use Machines</h3>
                    <p className="text-primary-foreground/90 text-sm">
                    This model allows small businesses and entrepreneurs to access high-quality equipment without the burden of upfront capital costs, fostering innovation and production flexibility. We offer entrepreneurs industrial-grade manufacturing equipment through a processing-as-a-service model.
                    </p>
                </div>
              </div>
              {otherServices.map((service) => (
                  <div key={service.title} className="group flex flex-col items-start text-left gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl cursor-pointer">
                      <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md transition-colors duration-300 group-hover:bg-primary">
                              <service.icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-white" />
                          </div>
                      </div>
                      <div className="space-y-2">
                          <h4 className="text-lg font-bold">{service.title}</h4>
                          <p className="text-muted-foreground text-sm">{service.description}</p>
                      </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
