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
      stagger: 0.035,
      delay: 0.4,
      scale: 0.5,
      opacity: 0,
    });
    gsap.from("#subtitle", {
      delay: 1.7,
      scale: 0.8,
      opacity: 0,
    });
    gsap.from("#contact-button", {
      delay: 1.7,
      scale: 0.8,
      opacity: 0,
    });
  }, []);
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black overflow-hidden pt-16 md:pt-0">
      {/* Grid with corner fade - visible in center, fades to transparent in corners */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)",
        }}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
        <h1
          id="title"
          className="text-3xl  sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-6"
        >
          Din partner inom digital marknadsföring
        </h1>
        <p
          id="subtitle"
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black/70 mb-6 md:mb-10"
        >
          Välkommen till{" "}
          <span className="font-black text-primary">Henri Braun.</span>
        </p>
        <Link
          id="contact-button"
          href="#contact"
          className="inline-block px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-zinc-900/80 text-white font-semibold rounded-lg font-stretch-150% hover:bg-black/90 transition-colors"
        >
          Kontakta oss
        </Link>
      </div>
    </section>
  );
};

export default Hero;
