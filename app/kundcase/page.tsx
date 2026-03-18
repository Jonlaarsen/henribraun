"use client";
import Link from "next/link";
import { KUNDCASE_LIST } from "@/constants/kundcase";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function KundcasePage() {
  useGSAP(() => {
    gsap.from(".section", {
      opacity: 0,
    });
  }, []);
  return (
    <div className="section min-h-screen pt-24 bg-linear-to-b from-primary/20 via-transparent to-transparent  md:pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 pt-10 text-secondary">
          Kundcase
        </h1>
        <p className="text-xl text-black/70 mb-16">
          Se hur vi har hjälpt företag att nå sina mål med digital
          marknadsföring.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {KUNDCASE_LIST.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={`/kundcase/${caseStudy.slug}`}
              className="block p-6 rounded-2xl border border-black/10 bg-linear-to-bl from-white via-white via-70% to-blue-500/10 relative hover:border-primary hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
            >
              <img
                src={caseStudy.logo}
                className="h-20 w-auto absolute top-2 right-2  ease-in-out duration-300"
                alt=""
              />
              <p className="text-sm font-semibold uppercase tracking-widest max-w-70 text-secondary/80 mb-2">
                {caseStudy.tagline}
              </p>
              <h2 className="text-2xl font-bold mb-8 text-secondary max-w-70 group-hover:text-secondary/90">
                {caseStudy.client}
              </h2>
              <p className="text-black/70 mb-4 line-clamp-2">
                {caseStudy.description}
              </p>
              <p className="text-sm text-black/60 mb-6">{caseStudy.summary}</p>
              <span className="inline-flex items-center gap-2 text-secondary/90 font-semibold group-hover:gap-3 transition-all">
                Läs mer om {caseStudy.client}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-black/10">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
          >
            Vill du också nå resultat? Kontakta oss
          </Link>
        </div>
      </div>
    </div>
  );
}
