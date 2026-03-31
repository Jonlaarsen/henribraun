"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import ImageCarousel from "./ImageCarousel";

const rotatingTexts = ["Paid ads", "Konverteringsoptimering", "Webutveckling"];

const HeroTwo = () => {
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const rotatingTextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const el = rotatingTextRef.current;
      if (!el) return;

      gsap
        .timeline()
        .to(el, {
          opacity: 0,
          duration: 0.25,
          ease: "power1.inOut",
        })
        .add(() => {
          setActiveTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        })
        .to(el, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.inOut",
        });
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

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
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1694434326112-a876d5213047?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
      className="relative bg-center md:bg-top-right flex min-h-screen items-center justify-center overflow-hidden bg-accent-peach/20 px-4 sm:px-6 md:px-5  py-20 text-white "
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 ">
        {/* <div className="absolute md:-bottom-80 md:-right-80 -bottom-50 -right-50 z-10 border-100 h-100 w-100 md:h-152 md:w-152 rounded-full md:border-180 border-accent-peach/20 lg:block xl:-bottom-120 xl:-right-120 xl:h-240 xl:w-240"></div> */}
      </div>

      <div className="z-50 w-full md:pl-10 max-w-8xl text-start">
        <h1
          id="title"
          className="mb-4 text-[2.8rem] leading-tighter font-bold sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl xl:text-8xl"
        >
          Din partner <br className="block md:hidden" /> inom{" "}
          <br className="hidden md:block" /> digital marknadsföring
        </h1>
        {/* <p
          id="subtitle"
          className=" text-lg font-semibold text-stone-100 sm:text-2xl mb-4 lg:text-3xl xl:text-4xl"
        >
          Specialister inom{" "}
          <span
            ref={rotatingTextRef}
            className=" text-accent-khaki  font-bold  inline-block will-change-opacity"
          >
            {rotatingTexts[activeTextIndex]}
          </span>
        </p> */}
        <hr className="max-w-lg hidden md:block bg-white  mb-10" />
        {/* <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Link
            id="contact-button"
            href="/kontakt"
            className="inline-flex w-full  items-center justify-center rounded-lg bg-accent-orange/90 backdrop-blur-xs px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-orange sm:w-auto sm:px-10 md:px-14 md:py-4 md:text-base lg:px-20 lg:text-xl"
          >
            Boka möte
          </Link>
          <Link
            id="contact-button"
            href="/kundcase"
            className="inline-flex w-full items-center justify-center rounded-lg  bg-primary/90 backdrop-blur-xs px-6 py-3 text-sm font-semibold text-stone-100 transition-colors hover:bg-primary hover:text-white sm:w-auto sm:px-10 md:px-14 md:py-4 md:text-base lg:px-20 lg:text-xl"
          >
            Kundcase
          </Link>
        </div> */}
        <div className="flex flex-col md:flex-row gap-4 text-lg font-semibold">
          <a className="px-10 py-2 text-center rounded-lg bg-accent-orange hover:-translate-y-1 duration-300 ease-in-out ">
            Boka möte
          </a>
          <a className="px-10 py-2 text-center rounded-lg bg-primary hover:-translate-y-1 duration-300 ease-in-out">
            Kundcase
          </a>
        </div>
      </div>
      <div className="absolute -bottom-10 left-0 right-0 z-100">
        <ImageCarousel />
      </div>
    </section>
  );
};

export default HeroTwo;
