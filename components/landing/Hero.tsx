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
    <section className="relative min-h-screen bg-linear-to-b from-primary/30 via-transparent to-transparent flex flex-col items-center justify-center bg- text-black overflow-hidden ">
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
        <h1
          id="title"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-6"
        >
          Din partner inom digital marknadsföring
        </h1>
        <p
          id="subtitle"
          className="font-extralight text-2xl lg:text-4xl text-black/70 mb-6 md:mb-10"
        >
          Välkommen till <span className=" text-primary">Henri Braun.</span>
        </p>
        <Link
          id="contact-button"
          href="#contact"
          className="inline-block px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-primary/80 text-white font-semibold rounded-lg font-stretch-125% hover:bg-primary transition-colors"
        >
          Kontakta oss
        </Link>
      </div>
    </section>
  );
};

export default Hero;
