import Image from "next/image";
import Link from "next/link";

export default function OmOssPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-primary/20 via-transparent to-transparent  pt-24 md:pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-secondary">
          Om oss
        </h1>
        <p className="text-xl text-black/70 mb-12">
          Henri Braun är din partner inom digital marknadsföring. Vi kombinerar
          datadriven strategi med kreativ execution för att hjälpa företag växa
          online.
        </p>

        <div className="relative w-full aspect-20/10  overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            alt="Modernt kontorslandskap"
            className="object-cover"
          />
          <h1 className="text-[13.2rem] w-full font-semibold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-logo z-20">
            HENRI BRAUN
          </h1>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-secondary/90">
            Vår vision
          </h2>
          <p className="text-lg text-black/80 leading-relaxed">
            Vi vill vara den självklara partnern för företag som vill ta nästa
            steg digitalt. Hos oss får du inte bara en byrå, du får en
            långsiktig samarbetspartner.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-secondary/90">
            Vår filosofi
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="relative w-full lg:w-80 shrink-0 aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Samarbete och teamwork"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>
            <p className="text-lg text-black/80 leading-relaxed">
              Vi tror på ärlighet, enkelhet och resultat. Digital marknadsföring
              ska inte kännas krånglig eller oåtkomlig. Hos oss får du en
              partner som lyssnar, förstår din situation och arbetar långsiktigt
              för att bygga upp en stabil digital närvaro.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-secondary/90">
            Våra tjänster
          </h2>
          <p className="text-black/80 mb-6">
            Vi erbjuder anpassade tjänster för företag med fokus på tillväxt och
            lönsamhet:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-cyan-600 mt-1 shrink-0">•</span>
              <div>
                <strong className="text-black">Digital Analys:</strong>{" "}
                <span className="text-black/80">
                  Vi ser noggrant igenom er data för att ta databaserade beslut
                  som sparar er tid och pengar.
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-600 mt-1 shrink-0">•</span>
              <div>
                <strong className="text-black">Digital strategi:</strong>{" "}
                <span className="text-black/80">
                  Vi hjälper dig att sätta en tydlig plan för hur ditt företag
                  ska växa online.
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-600 mt-1 shrink-0">•</span>
              <div>
                <strong className="text-black">
                  SEO (sökmotoroptimering):
                </strong>{" "}
                <span className="text-black/80">
                  Syns där dina kunder söker. Vi optimerar din webbplats för att
                  driva relevant trafik.
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-600 mt-1 shrink-0">•</span>
              <div>
                <strong className="text-black">E-handelsoptimering:</strong>{" "}
                <span className="text-black/80">
                  Vi gör det enklare för dina kunder att handla hos dig, oavsett
                  om du driver en liten butik eller växande e-handel.
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-600 mt-1 shrink-0">•</span>
              <div>
                <strong className="text-black">
                  Betald annonsering (Google Ads & Meta Ads):
                </strong>{" "}
                <span className="text-black/80">
                  Smart annonsering med fokus på avkastning, inte bara klick.
                </span>
              </div>
            </li>
          </ul>
          <Link
            href="/tjanster"
            className="inline-block mt-6 text-secondary/90 font-semibold hover:text-secondary underline underline-offset-4"
          >
            Se alla våra tjänster →
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-secondary/90">
            Varför välja Henri Braun?
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-cyan-600 mt-1 shrink-0">✓</span>
              <div>
                <strong className="text-black">Prisvärt:</strong>{" "}
                <span className="text-black/80">
                  Vi vet hur viktigt det är att få ut mesta möjliga av varje
                  investerad krona.
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-600 mt-1 shrink-0">✓</span>
              <div>
                <strong className="text-black">Personligt:</strong>{" "}
                <span className="text-black/80">
                  Vi jobbar nära våra kunder och anpassar oss efter just dina
                  behov.
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-600 mt-1 shrink-0">✓</span>
              <div>
                <strong className="text-black">Resultatdrivet:</strong>{" "}
                <span className="text-black/80">
                  Vårt mål är alltid att skapa mätbara resultat som hjälper ditt
                  företag att växa.
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-600 mt-1 shrink-0">✓</span>
              <div>
                <strong className="text-black">Lokal närvaro:</strong>{" "}
                <span className="text-black/80">
                  Vi finns i Malmö, men arbetar med kunder över hela Sverige.
                </span>
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-secondary/90">Malmö</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80"
                alt="Malmö stad"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                alt="Möte och samarbete"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <div className="pt-8 border-t border-black/10">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
    </div>
  );
}
