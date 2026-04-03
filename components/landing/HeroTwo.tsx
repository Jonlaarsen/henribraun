"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import ImageCarousel from "./ImageCarousel";
import LogoLoop from "../LogoLoop";

const rotatingTexts = ["Paid ads", "Konverteringsoptimering", "Webutveckling"];

const IMAGES = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Google_Analytics_Logo_2015.png/1280px-Google_Analytics_Logo_2015.png",
    alt: "Google Analytics logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/960px-Vercel_logo_black.svg.png",
    alt: "Vercel logo",
  },
  {
    src: "https://www.medicalwebsitesolutions.com.au/wp-content/uploads/2019/06/google-ads-logo.png",
    alt: "Google Ads logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/960px-Meta_Platforms_Inc._logo.svg.png",
    alt: "Meta logo",
  },
  {
    src: "https://vectorseek.com/wp-content/uploads/2023/08/Next.js-Wordmark-Logo-Vector.svg-.png",
    alt: "Next.js logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/3840px-Microsoft_logo_%282012%29.svg.png",
    alt: "Microsoft logo",
  },
];

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
      {/* <div className="absolute inset-0 bg-linear-to-br from-accent-orange/20 via-65% via-transparent to-transparent "></div> */}

      <div className="z-50 w-full md:pl-10 max-w-8xl text-start">
        <h1
          id="title"
          className="mb-4 text-[2.8rem] leading-12 md:leading-25 tracking-tight font-bold sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl xl:text-8xl"
        >
          Din partner <br className="block md:hidden" /> inom{" "}
          <br className="hidden md:block" /> digital marknadsföring
        </h1>

        <hr className=" bg-white max-w-lg h-0.1 md:h-0.75 mb-5" />

        <div className="flex flex-col md:flex-row gap-4 mt-2 text-lg font-semibold">
          <div className="hover:-translate-y-1 duration-200 ease-in py-2 text-center rounded-lg bg-accent-orange w-full md:w-40">
            <a id="contact-button" href="/kontakt" className=" ">
              Boka möte
            </a>
          </div>
          <div className="hover:-translate-y-1 duration-200 ease-in py-2 text-center rounded-lg bg-primary w-full md:w-40">
            <a id="contact-button" href="/kundcase">
              Kundcase
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0  right-0  z-50">
        {/* <LogoLoop
          speed={40}
          direction="left"
          logoHeight={30}
          gap={60}
          fadeOut
          fadeOutColor="#ffffff00"
          hoverSpeed={40}
          ariaLabel="Technology partners"
          logos={IMAGES}
          className="brightness-0 gap-14  invert mb-10"
        /> */}
      </div>
    </section>
  );
};

export default HeroTwo;
