import { MapPin, Phone, Clock } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4744203603417!2d36.96929213888892!3d-1.1395097289893452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f4b182d3e3d%3A0x68b913645229dc1d!2sSomo!5e0!3m2!1sen!2ske!4v1722428389312!5m2!1sen!2ske"
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
    </section>
  );
}
