import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import GridPhotos from "@/components/landing/GridPhotos";
import Hero from "@/components/landing/Hero";
// import ImageCarousel from "@/components/landing/ImageCarousel";
import Intro from "@/components/landing/Intro";
import Services from "@/components/landing/Services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* <ImageCarousel /> */}
      <GridPhotos />
      <Intro />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
