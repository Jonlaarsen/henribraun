"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  useGSAP(() => {
    gsap.from(".intro-container", {
      opacity: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: ".intro-container",
        start: "top 60%",
        end: "top 50%", // behövs för att definiera scrollområdet
        scrub: 1,
        once: true,
      },
    });
  }, []);
  return (
    <div className="intro-container min-h-[60vh] bg-accent-khaki/20 mb-20  md:min-h-[80vh] py-10  md:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden size-full flex flex-col-reverse space-y-4 md:space-y-0 md:flex-row items-center justify-center">
      <div className=" z-50 flex flex-col items-center text-start justify-center  space-y-4 size-full order-2 lg:order-1">
        <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-50">
          En digital marknadsföringsbyrå <br />
          <span className="text-primary">baserad i Malmö.</span>
        </h2>
        <p className=" sm:text-xl md:text-2xl lg:text-3xl font-light">
          Genomtänkt marknadsföring med fokus på konverteringar, skräddarsydd
          efter era mål och resurser.
        </p>
      </div>
      <div className=" relative flex flex-col items-center text-center justify-end space-y-4 size-full order-1 lg:order-2">
        <div className="w-full max-w-md h-60 lg:h-120 aspect-3/4 lg:aspect-auto bg-cyan-900/20 overflow-hidden rounded-sm">
          <img
            src="https://images.pexels.com/photos/13071531/pexels-photo-13071531.jpeg"
            className="size-full object-cover object-center contrast-80 "
            alt="Scenic malmö photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
