"use client";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText("#title", { type: "chars, words" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      ease: "expo.out",
      delay: 0.4,
      duration: 1,
      scale: 0.8,
      opacity: 0,
    });
    gsap.from("#subtitle", {
      delay: 0.5,
      scale: 0.8,
      opacity: 0,
    });
    gsap.from("#contact-button", {
      delay: 0.5,
      scale: 0.8,
      opacity: 0,
    });
  }, []);
  return (
    <section className=" min-h-screen bg-white flex flex-col items-center justify-center relative text-foreground overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <div className="absolute inset-0 size-full z-50">
        {/* <video
          src="https://www.shutterstock.com/shutterstock/videos/1108509779/preview/stock-footage-abstract-d-animation-of-blue-flying-blobs-k-seamless-looped-video-d-illustration.webm"
          className="h-full w-full"
        /> */}
      </div>

      {/* <div className="absolute top-80 right-20 h-60 w-60 bg-primary/20 blur-xl rounded-full"></div>
      <div className="absolute top-60 right-10 h-20 w-20 bg-primary/20 blur-md rounded-full"></div> */}

      <div className="relative text-center px-2 sm:px-6 max-w-full md:max-w-7xl z-50">
        <h1
          id="title"
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 "
        >
          Din partner inom <br className="hidden md:block" /> digital
          marknadsföring
        </h1>
        <p
          id="subtitle"
          className="font-extralight text-2xl lg:text-4xl text-black/70 mb-6 md:mb-10"
        >
          Välkommen till <span className=" text-primary">Henri Braun</span>
        </p>
        <Link
          id="contact-button"
          href="#contact"
          className="inline-block px-6 py-3 md:px-8 md:py-4 text-sm md:text-xl bg-primary text-white font-semibold rounded-lg font-stretch-125% hover:bg-primary transition-colors"
        >
          Boka möte
        </Link>
      </div>
    </section>
  );
};

export default Hero;
