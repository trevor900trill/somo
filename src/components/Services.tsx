'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Search, Factory, Layers } from 'lucide-react';

const services = [
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
  const servicesImage = PlaceHolderImages.find((p) => p.id === 'services-image');

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-secondary/50 rounded-[4rem] p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
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
            <div className="flex flex-col gap-10">
              <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-2xl space-y-4 relative overflow-hidden -mt-16">
                <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-white/20" />
                <div className="w-16 h-16 rounded-full bg-white mb-4" />
                <h3 className="text-xl font-bold">Pay-Per-Use Machines</h3>
                <p className="text-primary-foreground/90">
                  This model allows small businesses and entrepreneurs to access high-quality equipment without the burden of upfront capital costs, fostering innovation and production flexibility. We offer entrepreneurs industrial-grade manufacturing equipment through a processing-as-a-service model.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
                  {services.slice(0, 2).map((service) => (
                      <div key={service.title} className="flex flex-col gap-4 items-start">
                          <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                                  <service.icon className="w-8 h-8 text-primary" />
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
      </div>
    </section>
  );
}
