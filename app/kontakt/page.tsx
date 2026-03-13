"use client";

import { useState } from "react";

type Tab = "form" | "booking";

export default function KontaktPage() {
  const [activeTab, setActiveTab] = useState<Tab>("form");

  return (
    <div className="min-h-screen bg-linear-to-b from-primary/20 via-transparent to-transparent pt-24 md:pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-cyan-900">
          Kontakta oss
        </h1>
        <p className="text-xl text-black/70 mb-12">
          Vi vill gärna höra från dig. Ställ en fråga eller boka ett
          kostnadsfritt samtal.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-12 border-b border-black/10">
          <button
            onClick={() => setActiveTab("form")}
            className={`px-6 py-3 font-semibold rounded-t-lg transition-colors ${
              activeTab === "form"
                ? "bg-cyan-100 text-cyan-900 border-b-2 border-cyan-800 -mb-[1px]"
                : "text-black/60 hover:text-black hover:bg-black/5"
            }`}
          >
            Frågor / Kontaktformulär
          </button>
          <button
            onClick={() => setActiveTab("booking")}
            className={`px-6 py-3 font-semibold rounded-t-lg transition-colors ${
              activeTab === "booking"
                ? "bg-cyan-100 text-cyan-900 border-b-2 border-cyan-800 -mb-[1px]"
                : "text-black/60 hover:text-black hover:bg-black/5"
            }`}
          >
            Boka möte
          </button>
        </div>

        {/* Tab content */}
        {activeTab === "form" && (
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="lg:max-w-sm shrink-0 order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">
                Vi svarar inom 24 timmar
              </h3>
              <p className="text-black/80 leading-relaxed mb-4">
                Har du frågor om våra tjänster eller vill du veta mer om hur vi
                kan hjälpa ditt företag att växa? Skicka ett meddelande så
                återkommer vi så snart vi kan.
              </p>
              <p className="text-black/70 text-sm leading-relaxed">
                Oavsett om det gäller digital strategi, annonsering eller
                konverteringsoptimering – vi är här för att hjälpa dig ta nästa
                steg.
              </p>
            </div>
            <form
              className="flex flex-col border-black text-black relative flex-1 min-w-0 space-y-4 p-6 sm:p-8 md:p-10 rounded-2xl lg:rounded-4xl border order-1 lg:order-2"
              action=""
            >
              <div
                className="absolute inset-0 pointer-events-none rotate-12"
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
              <h2 className="font-black text-zinc-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center z-10">
                Kontakta oss
              </h2>
              <div className="flex w-full gap-4">
                <div className="w-full z-10">
                  <label className="text-sm" htmlFor="name">
                    Förnamn
                  </label>
                  <input
                    required
                    id="name"
                    className="h-10 w-full rounded-lg pl-2 bg-white border-black border"
                    type="text"
                  />
                </div>

                <div className="w-full z-10">
                  <label className="text-sm" htmlFor="lastname">
                    Efternamn
                  </label>
                  <input
                    required
                    id="name"
                    className="h-10 w-full rounded-lg pl-2 bg-white border-black border"
                    type="text"
                  />
                </div>
              </div>

              <div className="w-full z-10">
                <label className="text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  required
                  id="email"
                  className="h-10 w-full rounded-lg pl-2 bg-white border-black border"
                  type="email"
                />
              </div>
              <div className="w-full z-10">
                <label className="text-sm" htmlFor="name">
                  Företag/Organisation{" "}
                </label>
                <input
                  required
                  id="name"
                  className="h-10 w-full rounded-lg pl-2 bg-white border-black border"
                  type="text"
                />
              </div>
              <div className="w-full z-10">
                <label className="text-sm" htmlFor="name">
                  Meddelande
                </label>
                <textarea
                  required
                  id="name"
                  className="min-h-[120px] md:h-40 w-full pl-2 pt-2 bg-white border-black border rounded-2xl"
                />
              </div>
              <button className="w-full rounded-full text-white text-center py-2 bg-black/80 hover:bg-black font-stretch-125% hover:scale-105 duration-300 ease-in-out">
                skicka
              </button>
            </form>
          </div>
        )}

        {activeTab === "booking" && (
          <div className="space-y-6">
            <p className="text-black/70 text-lg">
              Boka ett kostnadsfritt samtal med oss. Välj ett tillgängligt
              tidspunkt nedan.
            </p>
            <div className="size  rounded-2xl border border-black/10 bg-cyan-50/20 p-8 flex items-center justify-center">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2_YB-G1TxxmzpB9Rzo6esAf7CwpTO8GuBq9QWV5ZJouwwLIsoQSJPUmd4qBJWtRMZHqQ8-XKI8?gv=true"
                className="min-h-235 size-full"
              ></iframe>
            </div>
            <div className="pt-6 border-t border-black/10 space-y-4">
              <h3 className="text-xl font-bold text-cyan-900">
                Vad händer efter att du bokat?
              </h3>
              <p className="text-black/80 leading-relaxed">
                Ett 30-minuters samtal där vi går igenom din situation, era mål
                och hur vi kan hjälpa. Inga förpliktelser – vi vill bara lära
                känna dig och se om vi är rätt match. Du får en bekräftelse per
                e-post med länk till mötet.
              </p>
              <p className="text-black/70 text-sm">
                Mötet hålls via Google Meet. Du behöver ingen särskild
                programvara – länken fungerar i webbläsaren.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
