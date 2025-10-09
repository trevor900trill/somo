
import { MapPin, Phone, Clock } from "lucide-react";

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

export function Location() {
  return (
    <section id="location" className="relative w-full bg-secondary text-foreground">
        <WavyDivider className="absolute top-0 left-0 w-full h-12 md:h-16 lg:h-20 -translate-y-full text-secondary" />
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-6xl md:text-7xl font-headline font-bold tracking-tight">
                            <span className="text-primary">Find</span> Us
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground text-lg">Address</h3>
                                    <p>Vishnu Industrial Park, Ruiru</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground text-lg">Phone</h3>
                                    <p>0729 243881</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground text-lg">Hours</h3>
                                    <p>Open ⋅ Closes 5pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.948842491101!2d36.96729407496556!3d-1.1395097290625946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMDgnMjIuMiJTIDM2wrA1OCcxMS41IkU!5e0!3m2!1sen!2ske!4v1722426339194!5m2!1sen!2ske"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Tengeneza Na Somo Location"
                        ></iframe>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
}
