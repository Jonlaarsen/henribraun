"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 sm:px-6 md:px-10 lg:px-30 xl:px-40 py-20 text-foreground ">
      {/* <div className="absolute inset-0 size-full z-50"></div> */}

      <div className="z-50 w-full max-w-7xl text-start">
        <h1
          id="title"
          className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl xl:text-[5.5rem]"
        >
          Din partner inom <br /> digital marknadsföring
        </h1>
        <p
          id="subtitle"
          className="mb-6 text-xl font-extralight text-black/70 sm:text-2xl md:mb-10 lg:text-3xl xl:text-4xl"
        >
          Specialister inom{" "}
          <span
            ref={rotatingTextRef}
            className="font-medium text-primary inline-block will-change-opacity"
          >
            {rotatingTexts[activeTextIndex]}
          </span>
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Link
            id="contact-button"
            href="/kontakt"
            className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary sm:w-auto sm:px-10 md:px-14 md:py-4 md:text-base lg:px-20 lg:text-xl"
          >
            Boka möte
          </Link>
          <Link
            id="contact-button"
            href="/kundcase"
            className="inline-flex w-full items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white sm:w-auto sm:px-10 md:px-14 md:py-4 md:text-base lg:px-20 lg:text-xl"
          >
            Kundcase
          </Link>
        </div>
      </div>
      {/* <div className="h-200 w-200 rounded-full  absolute top-0 -right-40 bg-primary/20"></div> */}
      {/* <img
        src="https://images.reallygooddesigns.com/2021/10/Free-Business-Illustrations-15.png"
        className="h-150 w-150 absolute top-30 right-10 opacity-80"
        alt=""
      /> */}
      {/* <div className="absolute -bottom-40 -right-40 z-10 h-100 w-100 border-80 md:h-72 md:w-72 rounded-full md:border-200 border-secondary md:block lg:-bottom-50 lg:-right-50 lg:h-100 lg:w-100"></div> */}
      <div className="absolute md:-bottom-80 md:-right-80 -bottom-50 -right-50 z-10 border-100 h-100 w-100 md:h-152 md:w-152 rounded-full md:border-200 border-secondary lg:block xl:-bottom-120 xl:-right-120 xl:h-240 xl:w-240"></div>
      {/* <div className="border-100 border-secondary z-10 h-340 w-340 rounded-full absolute -bottom-170 -right-170"></div> */}
    </section>
  );
};

export default HeroTwo;
