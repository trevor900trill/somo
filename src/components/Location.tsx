
import { MapPin, Phone, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WavyDivider = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
    fill="currentColor"
  >
    <path d="M1440,100H0V0c0,0,203.4,89.5,720,89.5S1440,0,1440,0V100z"></path>
  </svg>
);

const locations = [
    {
        name: "Ruiru",
        address: "Vishnu Industrial Park, Ruiru",
        phone: "0729 243881",
        hours: "Open ⋅ Closes 5pm",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.948842491101!2d36.96729407496556!3d-1.1395097290625946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMDgnMjIuMiJTIDM2wrA1OCcxMS41IkU!5e0!3m2!1sen!2ske!4v1722426339194!5m2!1sen!2ske"
    },
    {
        name: "Arusha",
        address: "Arusha, Tanzania",
        phone: "+255 758 086 441",
        hours: "Open ⋅ Closes 5pm",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.983633682971!2d36.6793379749729!3d-3.3818147723464373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjInNTQuNSJTIDM2wrA0MCc1NC45IkU!5e0!3m2!1sen!2sus!4v1620352054538!5m2!1sen!2sus"
    }
]

export function Location() {
  return (
    <section id="location" className="relative w-full bg-secondary text-foreground">
        <WavyDivider className="absolute top-0 left-0 w-full h-12 md:h-16 lg:h-20 -translate-y-full text-secondary" />
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <div className="max-w-6xl mx-auto">
                <Tabs defaultValue="Ruiru" className="w-full">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-headline font-bold tracking-tight mb-4">
                            <span className="text-primary">Find</span> Us
                        </h2>
                        <TabsList>
                            {locations.map(location => (
                                <TabsTrigger key={location.name} value={location.name}>{location.name}</TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {locations.map(location => (
                        <TabsContent key={location.name} value={location.name}>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <div className="space-y-4 text-muted-foreground">
                                        <div className="flex items-start gap-4">
                                            <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-bold text-foreground text-lg">Address</h3>
                                                <p>{location.address}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-bold text-foreground text-lg">Phone</h3>
                                                <p>{location.phone}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-bold text-foreground text-lg">Hours</h3>
                                                <p>{location.hours}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                                    <iframe
                                        src={location.mapSrc}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Tengeneza Na Somo Location - ${location.name}`}
                                    ></iframe>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
      </div>
    </section>
  );
}
