"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { KUNDCASE_LIST } from "@/constants";
import Carousel from "../Carousel";

const Achivements = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = KUNDCASE_LIST[activeIndex];

  const metrics = useMemo(() => {
    if (!activeCase?.result) return [];
    return [
      { label: "Impressions", value: activeCase.result.impressions },
      { label: "Clicks", value: activeCase.result.click },
      { label: "Add to cart", value: activeCase.result.addToCart },
      { label: "Checkouts", value: activeCase.result.beginCheckout },
      { label: "Kop", value: activeCase.result.buy },
    ].filter((item) => Boolean(item.value));
  }, [activeCase]);

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? KUNDCASE_LIST.length - 1 : prev - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === KUNDCASE_LIST.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-40 py-16 md:py-24 bg-accent-peach/20">
      <div className="mx-auto w-full max-w-8xl flex flex-col items-center justify-center">
        <div className="mb-8 md:mb-10 flex flex-col items-center justify-center gap-3 md:gap-4">
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-5 z-50">
            Resultat vi är stolta över!
          </h2>
          <p className=" sm:text-xl md:text-2xl lg:text-3xl font-light">
            Läs om hur vi skapar tillväxt.
          </p>
        </div>
        <div className="w-full min-w-0 max-w-[830px] flex items-center justify-center">
          <Carousel
            baseWidth={830}
            className="w-full"
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>

        {/* <article className="relative overflow-hidden rounded-3xl border border-primary/20 bg-accent-khaki/40 p-6 shadow-xl shadow-primary/10 backdrop-blur-xs min-h-140 max-w-120 md:p-10">
          <div className="mb-6 flex flex-col gap-6 md:mb-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {activeCase.client}
              </h3>
              <p className="text-primary font-semibold">{activeCase.tagline}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                className="rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Foregaende
              </button>
              <button
                type="button"
                onClick={goNext}
                className="rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Nasta
              </button>
            </div>
          </div>

          <p className="max-w-4xl text-base md:text-lg text-foreground/80 mb-6 md:mb-8">
            {activeCase.summary}
          </p>

          {metrics.length > 0 && (
            <div className="mb-6 grid grid-cols-2 gap-3 md:mb-8 md:grid-cols-5">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-primary/20 bg-primary/5 p-3"
                >
                  <p className="text-xs uppercase tracking-[0.12em] text-primary/70">
                    {metric.label}
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className=" gap-4 md:flex-row md:items-center md:justify-between">
            <Link
              href={`/kundcase/${activeCase.slug}`}
              className="inline-flex items-center justify-center rounded-lg bg-accent-orange px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Se kundcase
            </Link>
          </div>
        </article>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex z-10  gap-2">
          {KUNDCASE_LIST.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full border px-2 py-2 text-sm font-semibold transition-all ${
                index === activeIndex
                  ? "border-primary bg-primary text-white"
                  : "border-primary/20 bg-white text-primary hover:border-primary/50"
              }`}
            ></button>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Achivements;
