"use client";

import { MessageCircleX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-40 py-16 md:py-24 bg-accent-peach/10 text-white flex items-center justify-center">
      <section className="w-full max-w-3xl rounded-2xl bg-accent-orange p-8 md:p-12 text-center shadow-lg">
        <div className="flex items-center justify-center gap-4 my-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Sidan kunde inte hittas
          </h1>
          <MessageCircleX className="h-15 w-15 mb-8 " />
        </div>
        <p className="text-base md:text-lg text-white/90 mb-8">
          Länken du följde verkar inte finnas längre, eller så har adressen
          blivit fel.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-sm md:text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Till startsidan
        </Link>
      </section>
    </main>
  );
}
