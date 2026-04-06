"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-40 py-16 md:py-24 bg-accent-peach/20 flex items-center justify-center">
      <section className="w-full max-w-3xl rounded-2xl bg-accent-khaki p-8 md:p-12 text-center shadow-lg">
        <p className="text-accent-primary font-semibold text-sm md:text-base mb-3">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
          Sidan kunde inte hittas
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-8">
          Lanken du foljde verkar inte finnas langre, eller sa har adressen
          blivit fel.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-accent-orange px-6 py-3 text-sm md:text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Till startsidan
        </Link>
      </section>
    </main>
  );
}
