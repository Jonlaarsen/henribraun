"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-40 py-16 md:py-24 bg-white flex items-center justify-center">
      <section className="w-full max-w-3xl rounded-2xl bg-accent-khaki p-8 md:p-12 text-center shadow-lg">
        <p className="text-accent-primary font-semibold text-sm md:text-base mb-3">
          Nagot gick fel
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
          Ett ovantat fel uppstod
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-8">
          Forsok igen. Om felet kvarstar kan du ga tillbaka till startsidan.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg bg-accent-green px-6 py-3 text-sm md:text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Forsok igen
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-accent-orange px-6 py-3 text-sm md:text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Till startsidan
          </Link>
        </div>
      </section>
    </main>
  );
}
