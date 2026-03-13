import { ArrowBigRightDash } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Digital Analys",
    text: "Här börjar allt. Vi granskar din data och hittar insikter som hjälper dig ta smarta beslut. Vi kartlägger era målgrupper och affärsmål i detalj så att varje insats bygger på tydliga insikter.",
    color: "bg-cyan-200/30",
  },
  {
    title: "Digital Strategi",
    text: "Vi tar fram en tydlig strategi baserat på datadrivna insikter för att du ska lyckas online. Vi hjälper dig att sätta upp en långsiktig plan med målet att bygga ett starkt varumärke och öka din lönsamhet.",
    color: "bg-amber-200/30",
  },

  {
    title: "Konverterings-optimering",
    text: "Varje steg i kundresan är avgörande. Vi skapar en smidig och användarvänlig köpupplevelse där design, struktur och optimering skapar tillit från kunder och genererar fler konverteringar.",
    color: "bg-red-200/30",
  },
  {
    title: "Google Ads",
    text: "Var med i kundens köpresa från första klicket. Vi skapar kampanjer som fångar upp köpklara kunder och ser till att varje investerad krona ger maximal avkastning.",
    color: "bg-orange-200/30",
  },
  {
    title: "Meta Ads",
    text: "Vi hjälper dig nå rätt personer på Facebook och Instagram med annonser som engagerar och konverterar. Genom datadriven målgruppsstyrning och kreativ annonsering ser vi till att dina budskap träffar kunderna i rätt ögonblick",
    color: "bg-emerald-200/30",
  },
  {
    title: "Microsoft Ads",
    text: "Vi hjälper dig nå rätt personer via Microsofts söknätverk med annonser som syns när kunderna aktivt letar efter dina produkter eller tjänster. ",
    color: "bg-blue-200/30",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="min-h-screen py-20 relative flex flex-col items-center justify-center text-slate-800"
    >
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
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black px-4">
        Hur funkar det?
      </h1>
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 py-10 md:py-20">
        {services.map((service, index) => (
          <div
            className={`${service.color} w-full max-w-md mx-auto lg:max-w-none lg:w-85 relative min-h-[280px] lg:h-100 py-8 md:py-10 px-4 rounded-2xl lg:rounded-4xl backdrop-blur-xs`}
            key={index}
          >
            <h2 className="text-xl md:text-2xl text-zinc-900 lg:text-3xl min-h-[3rem] lg:h-24 font-stretch-200% translate-y-2 font-bold">
              {service.title}
            </h2>
            <p className="line-clamp-3 px-2 text-sm md:text-base">
              {service.text}
            </p>
            <a
              href="/tjanster"
              className="underline underline-offset-2 font-semibold absolute bottom-6 left-4 hover:scale-y-110 duration-300 ease-in-out"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center text-center space-y-6 max-w-4xl mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40 bg-slate-300/40 border-2 border-slate-400 backdrop-blur-xs rounded-2xl lg:rounded-4xl min-h-[200px] lg:h-100 size-full px-6 sm:px-10 md:px-20 lg:px-40 py-10 md:py-16 my-10 mb-20 lg:mb-30">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight">
          Väx din klientbas med datadriven och innovativ strategi
        </h2>
        <a
          href="#contact"
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
