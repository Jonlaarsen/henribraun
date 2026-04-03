import CookieBot from "@/components/cookies/CookieBot";
import Achivements from "@/components/landing/Achivements";
import Contact from "@/components/landing/Contact";
// import Hero from "@/components/landing/Hero";
import HeroTwo from "@/components/landing/HeroTwo";
// import ImageCarousel from "@/components/landing/ImageCarousel";
import Intro from "@/components/landing/Intro";
import Services from "@/components/landing/Services";

export default function Home() {
  return (
    <div className="relative ">
      <CookieBot />
      <HeroTwo />
      <Intro />
      <Services />
      <Achivements />
      <Contact />
    </div>
  );
}
