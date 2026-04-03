"use client";
import {
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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BarChart2,
  Cpu,
  Code2,
  CircleFadingArrowUp,
  Megaphone,
  Share2,
  Monitor,
};

export default function TjansterPage() {
  useGSAP(() => {
    gsap.from(".section", {
      opacity: 0,
    });
  }, []);
  return (
    <div className="section min-h-screen pt-24 bg-white md:pt-32 pb-20 px-4 sm:px-16">
      <div className="max-w-8xl  mx-auto">
        <h1 className="text-5xl md:text-7xl pt-10 font-black mb-6 text-secondary">
          Våra tjänster
        </h1>
        <p className="text-2xl text-foreground font-light mb-16">
          Vi hjälper företag att växa online med datadriven strategi och
          effektiv digital marknadsföring.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {TJANSTER_LIST.map((service) => {
            const Icon = ICON_MAP[service.iconKey];
            return (
              <Link
                key={service.slug}
                href={`/tjanster/${service.slug}`}
                className={
                  " w-full text-white " +
                  (service.color || "bg-primary") +
                  " flex-1 w-fit mx-auto lg:max-w-none group lg:w-75 xl:w-full relative min-h-70 lg:h-80 py-8 md:py-10 px-4 rounded-3xl shadow-stone-200  hover:shadow-lg hover:scale-105 duration-300 ease-in-out translate-all cursor-pointer"
                }
              >
                <span
                  aria-hidden
                  className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-20 ${service.color ?? "bg-primary/10"}`}
                />
                <div className="relative z-10 w-full flex justify-between items-center">
                  <h2 className="text-4xl font-bold  ">{service.title}</h2>
                  {Icon && <Icon className=" h-auto w-18 text-white/80 " />}
                </div>

                <div className="w-full relative flex flex-col items-start justify-center h-40">
                  <div className="z-20 mb-5">
                    <p className=" line-clamp-3 text-lg text-stone-100">
                      {service.description}
                    </p>
                  </div>
                  <p className=" text-white/80 underline underline-offset-2 group-hover:text-white -mb-10">
                    läs mer..
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-16 pt-12 border-t border-black/10">
          <Link
            href="/kontakt?tab=form"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
          >
            Hur kan vi hjälpa dig? Kontakta oss här{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
