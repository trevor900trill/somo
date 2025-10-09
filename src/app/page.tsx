import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AboutUs } from "@/components/AboutUs";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Location } from "@/components/Location";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <AboutUs />
        <Testimonials />
        <div className="relative">
          <Location />
        </div>
        <Newsletter />
      </main>      
      <Footer />
    </div>
  );
}
