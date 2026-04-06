"use client";

import { useRef } from "react";
import Carousel, { type CarouselHandle } from "../Carousel";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Achivements = () => {
  const carouselRef = useRef<CarouselHandle>(null);
  useGSAP(() => {
    gsap.from("#achivements", {
      opacity: 0.5,
      duration: 1,

      scrollTrigger: {
        trigger: "#services",
        start: "top 70%",
        end: "top 50%",
        scrub: 1,
        once: true,
      },
    });
  }, []);

  return (
    <section
      id="achivements"
      className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-40 py-16 md:py-24 bg-accent-peach/20 relative"
    >
      <div className="mx-auto w-full max-w-8xl flex flex-col items-center justify-center">
        <div className="mb-8 md:mb-10 flex flex-col items-center justify-center gap-3 md:gap-4">
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-5 z-50">
            Resultat vi är stolta över!
          </h2>
          <p className=" sm:text-xl md:text-2xl lg:text-3xl font-light">
            Läs om hur vi skapar tillväxt.
          </p>
        </div>
        <div className="w-full min-w-0 max-w-207.5 flex items-center justify-center">
          <Carousel
            ref={carouselRef}
            baseWidth={830}
            className="w-full"
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
        <button
          type="button"
          aria-label="Föregående kundcase"
          onClick={() => carouselRef.current?.goPrev()}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-40 h-20 w-20 rounded-full bg-accent-green/80 text-white items-center justify-center"
        >
          <ArrowBigLeft className="h-12 w-12" />
        </button>
        <button
          type="button"
          aria-label="Nästa kundcase"
          onClick={() => carouselRef.current?.goNext()}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-40 h-20 w-20 rounded-full bg-accent-green/80 text-white  items-center justify-center"
        >
          <ArrowBigRight className="h-12 w-12" />
        </button>
      </div>
    </section>
  );
};

export default Achivements;
