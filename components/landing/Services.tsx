"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowBigRightDash,
  BarChart2,
  CircleFadingArrowUp,
  Code2,
  Cpu,
  Megaphone,
  Monitor,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { TJANSTER_LIST } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BarChart2,
  Cpu,
  Code2,
  CircleFadingArrowUp,
  Megaphone,
  Share2,
  Monitor,
};

const Services = () => {
  useGSAP(() => {
    gsap.from("#services", {
      opacity: 0,
      duration: 0.5,
      y: 200,
      scrollTrigger: {
        trigger: "#services",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        once: true,
      },
    });
  }, []);
  return (
    <div
      id="services"
      className="min-h-screen py-20 px-4 relative flex flex-col items-center justify-center text-slate-800"
    >
      <h1 className="text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl pb-4 font-black px-4">
        Hur kan vi hjälpa dig?
      </h1>
      <h2 className="text-3xl text-center font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
      </h2>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 py-10 md:py-20">
        {TJANSTER_LIST.slice(0, 6).map((service) => {
          const Icon = ICON_MAP[service.iconKey];
          return (
            <div
              className="bg-primary/80 w-full text-white flex-1 max-w-md mx-auto lg:max-w-none lg:w-75 xl:w-85 relative min-h-[280px] lg:h-80 py-8 md:py-10 px-4 rounded-2xl lg:rounded-4xl shadow-primary hover:shadow-lg hover:scale-105 duration-300 ease-in-out translate-all cursor-pointer"
              key={service.slug}
            >
              <h2 className="text-2xl lg:text-3xl h-22 font-stretch-125% translate-y-2 font-bold">
                {service.title}
              </h2>
              <p className="line-clamp-3 px-2 text-sm md:text-base">
                {service.fullText}
              </p>
              <div className="absolute bottom-2 right-4 opacity-80">
                {Icon && <Icon className="opacity-10 h-40 w-40" />}
              </div>
              <Link
                href={`/tjanster/${service.slug}`}
                className="underline underline-offset-2 font-semibold absolute bottom-6 left-4 hover:scale-y-120 duration-300 ease-in-out"
              >
                Learn more
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center text-center space-y-6 max-w-4xl mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40 bg-slate-300/40 border-2 border-slate-400 backdrop-blur-xs rounded-2xl lg:rounded-4xl min-h-[200px] lg:h-100 size-full px-6 sm:px-10 md:px-20 lg:px-40 py-10 md:py-16  mb-20 lg:mb-30">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight">
          Väx din klientbas med datadriven och innovativ strategi
        </h2>
        <a
          href="/kontakt"
          className="bg-black/90 px-6 py-2 rounded-full text-base lg:text-lg text-white font-extralight flex items-center justify-center gap-2 hover:scale-105 duration-300 ease-in-out"
        >
          <p>Börja nu</p>
          <ArrowBigRightDash className="h-5 w-fit" />
        </a>
      </div>
    </div>
  );
};

export default Services;
