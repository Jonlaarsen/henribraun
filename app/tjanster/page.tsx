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
    <div className="section min-h-screen bg-linear-to-b from-primary/20 via-transparent to-transparent relative pt-24 md:pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl px-5  mx-auto">
        <h1 className="text-5xl md:text-7xl pt-10 font-black mb-6 text-secondary">
          Våra tjänster
        </h1>
        <p className="text-xl text-black/70 mb-16">
          Vi hjälper företag att växa online med datadriven strategi och
          effektiv digital marknadsföring.
        </p>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {TJANSTER_LIST.map((service) => {
            const Icon = ICON_MAP[service.iconKey];
            return (
              <Link
                key={service.slug}
                href={`/tjanster/${service.slug}`}
                className="block z-10 p-6 rounded-2xl border bg-linear-to-bl from-white via-white via-85% to-primary/10 backdrop-blur-xs border-primary/30 hover:border-primary/60 hover:scale-105 hover:bg-black/2 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full flex justify-between items-center">
                  <h2 className="text-2xl font-bold mb-2 text-cyan-700">
                    {service.title}
                  </h2>{" "}
                  {Icon && <Icon className="text-cyan-800 h-15 w-15" />}
                </div>

                <div className="w-full relative text-cyan-800 flex items-center justify-center h-40">
                  <div className="z-20">
                    <p className="text-black/70 line-clamp-3">
                      {service.description} Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Ab commodi laboriosam
                      dignissimos quod quidem molestias, repellat nisi quia
                      itaque exercitationem cum soluta id nobis voluptates et
                      delectus sed inventore provident.
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
