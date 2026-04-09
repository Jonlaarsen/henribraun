"use client";
import LogoLoop from "@/components/LogoLoop";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const featureItems = [
  "Weekly growth and ad insights",
  "Practical ecommerce playbooks",
  "Real campaign breakdowns",
];

const IMAGES = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Google_Analytics_Logo_2015.png/1280px-Google_Analytics_Logo_2015.png",
    alt: "Google Analytics logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/960px-Vercel_logo_black.svg.png",
    alt: "Vercel logo",
  },
  {
    src: "https://www.medicalwebsitesolutions.com.au/wp-content/uploads/2019/06/google-ads-logo.png",
    alt: "Google Ads logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/960px-Meta_Platforms_Inc._logo.svg.png",
    alt: "Meta logo",
  },
  {
    src: "https://vectorseek.com/wp-content/uploads/2023/08/Next.js-Wordmark-Logo-Vector.svg-.png",
    alt: "Next.js logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/3840px-Microsoft_logo_%282012%29.svg.png",
    alt: "Microsoft logo",
  },
];

const statItems = [
  { label: "Subscribers", value: "12.4K+" },
  { label: "Open rate", value: "58%" },
  { label: "Issues sent", value: "146" },
];

export default function NewsletterPage() {
  return (
    <main className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-accent-sand/15 px-4 py-40 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-144 w-xl rounded-full bg-accent-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-20 h-142 w-xl rounded-full bg-accent-green/20 blur-3xl" />

      <section className="relative mx-auto flex flex-col justify-center items-center w-full max-w-7xl gap-6 rounded-4xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur sm:p-8  lg:gap-8 lg:p-12">
        <div className="flex items-center justify-center size-full gap-6">
          <div className="flex flex-col justify-between gap-8">
            <div className="w-full">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-green/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-green">
                <Sparkles className="h-3.5 w-3.5" />
                Performance Marketing , CRO & web dev
              </span>

              <h1 className="mt-5 max-w-xl text-4xl font-black leading-tight text-accent-green sm:text-5xl lg:text-6xl">
                Få en kostnadsfri konsultation baserat på dina behov och mål!
              </h1>

              <p className="mt-5 max-w-lg text-sm text-[#526067] sm:text-xl">
                Har du tankar kring hur digital marknadsföring skulle kunna
                hjälpa ditt företag? <br /> Boka en kostnadsfri konsultation så
                går vi igenom dina behov & mål. <br /> Du får en komplett analys
                och förslag på åtgärder så att du lättare kan ta beslut för vad
                som funkar för dig.
              </p>
            </div>
          </div>
          <form className="max-w-md size-full  rounded-2xl border border-black/10 bg-primary/5 p-6 shadow-sm">
            <div className="flex flex-col gap-3 ">
              <h1 className="uppercase font-black italic text-2xl text-accent-green">
                Ställ en fråga
              </h1>
              <div className="flex flex-col sm:flex-row w-full gap-4">
                <div className="w-full">
                  <label
                    htmlFor="surname"
                    className="text-sm font-light text-secondary pl-2"
                  >
                    Förnamn
                  </label>
                  <input
                    required
                    type="text"
                    id="surname"
                    placeholder="Skriv ditt förnamn"
                    className="h-12 w-full rounded-xl border text-black/50 font-light border-black/10 bg-white px-4 text-xs outline-none ring-accent-green/30 transition focus:ring"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastname"
                    className="text-sm font-light text-secondary pl-2"
                  >
                    Efternamn
                  </label>
                  <input
                    id="lastname"
                    required
                    type="text"
                    placeholder="Skriv ditt efternamn"
                    className="h-12 w-full rounded-xl border text-black/50 font-light border-black/10 bg-white px-4 text-xs outline-none ring-accent-green/30 transition focus:ring"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row  gap-3">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="text-sm font-light text-secondary pl-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="Skriv din email address"
                    className="h-12 w-full rounded-xl border text-black/50 font-light border-black/10 bg-white px-4 text-xs outline-none ring-accent-green/30 transition focus:ring"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="tel"
                    className="text-sm font-light text-secondary pl-2"
                  >
                    telefonnummer
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    placeholder="Skriv ditt telefonnummer"
                    className="h-12 w-full rounded-xl border text-black/50 font-light border-black/10 bg-white px-4 text-xs outline-none ring-accent-green/30 transition focus:ring"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="org"
                  className="text-sm font-light text-secondary pl-2"
                >
                  Organisation/företag
                </label>
                <input
                  id="org"
                  type="text"
                  placeholder="Skriv din organisation/företag"
                  className="h-12 w-full rounded-xl border text-black/50 font-light border-black/10 bg-white px-4 text-xs outline-none ring-accent-green/30 transition focus:ring"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="msg"
                  className="text-sm font-light text-secondary pl-2"
                >
                  Hur kan vi hjälpa dig?
                </label>
                <textarea
                  required
                  id="msg"
                  placeholder="Skriv hur hur vi kan hjälpa dig"
                  className="h-24 w-full rounded-xl pt-2 pl-4 border border-black/10 bg-white px-4 text-xs text-black/50 font-light outline-none ring-accent-green/30 transition focus:ring"
                />
              </div>

              <button
                type="button"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-secondary"
              >
                Skicka
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* <aside className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <article className="rounded-2xl border border-black/10 bg-[#1f2a2e] p-6 text-white shadow-lg">
            <p className="text-xs uppercase tracking-[0.16em] text-white/70">
              This week issue
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight">
              5 ad concepts that lowered CAC by 23%
            </h2>
            <p className="mt-4 text-sm text-white/80">
              Copy frameworks, visual hooks, and winning CTA patterns from top
              performing campaigns.
            </p>
            <div className="mt-5 h-px w-full bg-white/20" />
            <p className="mt-4 text-xs text-white/70">
              Read time: 4 min • Published every Tuesday
            </p>
          </article>

          <article className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[#5b666c]">
              Social proof
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {statItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-black/10 bg-white p-3 text-center"
                >
                  <p className="text-sm font-black text-[#212529]">
                    {item.value}
                  </p>
                  <p className="text-[11px] text-[#68747a]">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#55636a]">
              “One of the few newsletters that gives ideas we can implement the
              same day.”
            </p>
            <p className="mt-1 text-xs font-semibold text-[#2f3d43]">
              — Sara, Ecommerce Manager
            </p>
          </article>
        </aside> */}
        <hr className="w-260 h-px my-4  text-primary/50 " />
        <div className=" flex flex-col sm:flex-row justify-center items-center w-full gap-6 text-xs text-[#617078] sm:text-lg">
          {featureItems.map((item) => (
            <p
              key={item}
              className="inline-flex items-center gap-1.5 bg-primary/10 border-primary/20 border p-6 rounded-lg"
            >
              <CheckCircle2 className="h-5 w-5 text-accent-green" />
              {item}
            </p>
          ))}
        </div>
        <hr className="w-260 h-px my-4 text-primary/50 " />
      </section>
      <div className="absolute -bottom-10 left-0 right-0 w-full h-30">
        <LogoLoop
          speed={40}
          direction="left"
          logoHeight={30}
          gap={60}
          hoverSpeed={40}
          ariaLabel="Technology partners"
          logos={IMAGES}
          className="brightness-0 gap-14  mb-10"
        />
      </div>
    </main>
  );
}
