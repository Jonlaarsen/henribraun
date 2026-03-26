import CookieBot from "@/components/cookies/CookieBot";
import Contact from "@/components/landing/Contact";
import Hero from "@/components/landing/Hero";
import ImageCarousel from "@/components/landing/ImageCarousel";
import Intro from "@/components/landing/Intro";
import Services from "@/components/landing/Services";

export default function Home() {
  return (
    <div className="relative">
      <CookieBot />
      <Hero />
      <ImageCarousel />
      <Intro />
      <Services />
      <Contact />
    </div>
  );
}
