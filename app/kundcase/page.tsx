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
    <div className="section min-h-screen pt-24 bg-white md:pt-32 pb-20 px-4 sm:px-16">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 pt-10 text-secondary">
          Kundcase
        </h1>
        <p className="text-2xl text-foreground font-light mb-16">
          Se hur vi har hjälpt företag att nå sina mål.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {KUNDCASE_LIST.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={`/kundcase/${caseStudy.slug}`}
              className="block p-6 rounded-2xl group border border-accent-green/50 bg-white relative hover:border-primary hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
            >
              <img
                src={caseStudy.logo}
                className="h-fit max-h-15 md:max-h-20 max-w-26 md:max-w-32 w-auto absolute top-6 md:top-4 right-4  ease-in-out duration-300"
                alt=""
              />
              <p className="text-sm font-semibold  uppercase tracking-widest max-w-50 md:max-w-90 text-secondary/80 mb-2 group-hover:text-foreground">
                {caseStudy.tagline}
              </p>

              <h2 className="text-2xl  font-bold mb-8 text-secondary max-w-50 md:max-w-90 group-hover:text-foreground">
                {caseStudy.client}
              </h2>
              <p className="text-foreground/80 mb-4 line-clamp-2 group-hover:text-foreground">
                {caseStudy.description}
              </p>
              <p className="text-sm text-secondary mb-6">{caseStudy.summary}</p>
              <span className="inline-flex items-center gap-2 text-accent-orange/80 group-hover:text-accent-orange font-semibold group-hover:gap-3 transition-all">
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
            href="/kontakt?tab=form"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
          >
            Vill du också nå resultat? Kontakta oss
          </Link>
        </div>
      </div>
    </div>
  );
}
