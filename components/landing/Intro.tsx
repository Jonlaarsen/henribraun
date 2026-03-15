"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  useGSAP(() => {
    gsap.from(".intro-container", {
      opacity: 0,
      duration: 0.5,
      y: 200,
      scrollTrigger: {
        trigger: ".intro-container",
        start: "top 90%",
        end: "top 50%", // behövs för att definiera scrollområdet
        scrub: 1,
        once: true,
      },
    });
  }, []);
  return (
    <div className="intro-container min-h-[60vh] md:min-h-[80vh]  py-2 md:py-20 px-4 md:px-20 relative overflow-hidden   size-full flex flex-col-reverse space-y-4 md:space-y-0 md:flex-row items-center justify-center text-slate-800 ">
      <div className=" z-50 flex flex-col items-center text-center justify-center px-6 lg:pl-10 space-y-4 size-full order-2 lg:order-1">
        <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-50">
          En superb digital marknadsföringsbyrå <br />{" "}
          <span className="text-primary">baserad i Malmö.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
          Genomtänkt marknadsföring med fokus på konverteringar, skräddarsydd
          efter era mål och resurser.
        </p>
      </div>
      <div className="px-4 relative flex flex-col items-center text-center justify-center space-y-4 size-full order-1 lg:order-2">
        <div className="w-full max-w-md h-60 lg:w-120 lg:h-160 aspect-3/4 lg:aspect-auto bg-cyan-900/20 overflow-hidden rounded-sm">
          <img
            src="https://www.cleancluster.dk/wp-content/uploads/2026/02/Ocean-Valley-1280x1280.jpeg"
            className="size-full object-cover object-center contrast-80 "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
