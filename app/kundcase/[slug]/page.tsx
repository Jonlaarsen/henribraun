import Link from "next/link";
import { notFound } from "next/navigation";
import { KUNDCASE_BY_SLUG } from "@/constants/kundcase";
import Image from "next/image";
import { ArrowBigLeft } from "lucide-react";

export default async function KundcaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = KUNDCASE_BY_SLUG[slug];

  if (!caseStudy) notFound();

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/kundcase"
          className="text-foreground/60 hover:text-foreground mb-8 inline-block"
        >
          ← Tillbaka till kundcase
        </Link>

        <div className="border-b relative border-black/10 pb-8 mb-8">
          <p className="text-sm md:text-lg font-light uppercase max-w-59 md:max-w-150 tracking-widest text-primary mb-2">
            {caseStudy.tagline}
          </p>
          <h1 className="text-4xl md:text-6xl max-w-59 md:max-w-150  font-bold mb-4 text-secondary">
            {caseStudy.client}
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mb-6">
            {caseStudy.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {caseStudy.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-orange font-light hover:text-secondary underline underline-offset-4"
              >
                {link.label} →
              </a>
            ))}
          </div>
          <img
            src={caseStudy.logo}
            alt={caseStudy.client}
            className="w-auto max-w-70 h-10 md:h-30 top-4 right-4 absolute"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-accent-green">
            Uppdraget
          </h2>
          <div className="space-y-4">
            {caseStudy.assignment.map((paragraph, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
        {caseStudy.img && (
          <>
            <hr className="w-full my-4 text-primary/20 h-px" />
            <div className="grid grid-cols-2 sm:grid-cols-3 w-full py-4 h-full">
              {caseStudy.img.map((photo, index) => (
                <div key={index}>
                  <Image
                    width={500}
                    height={500}
                    src={photo}
                    alt={`${caseStudy.client} images`}
                    className="w-full max-h-70 h-full bg-primary/50 object-cover object-center"
                  />
                </div>
              ))}
            </div>
            <hr className="w-full my-4 text-primary/20 h-px" />
          </>
        )}

        {caseStudy.quote && (
          <blockquote className="bg-accent-khaki/10 border-l-4 border-accent-khaki/80 pl-6 py-6 rounded-r-lg">
            <p className="text-foreground/80 leading-relaxed mb-4 italic">
              &ldquo;{caseStudy.quote.text}&rdquo;
            </p>
            <footer>
              <cite className="not-italic font-semibold text-foreground">
                {caseStudy.quote.author}
              </cite>
              <span className="text-foreground/60">
                — {caseStudy.quote.role}
              </span>
            </footer>
          </blockquote>
        )}
        {caseStudy.result && (
          <div className="">
            <h1 className="text-lg sm:text-xl md:text-3xl font-semibold text-secondary mb-2 sm:mb-8">
              Resultat:
            </h1>
            <div className="mb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:mb-8 caseStudys-center justify-caseStudys-center w-full">
              <div className="rounded-xl border border-accent-green/20 bg-accent-green/20 p-4 w-full">
                <p className="text-lg uppercase tracking-[0.12em] text-primary">
                  Impressions:
                </p>
                <p className="text-sm sm:text-lg md:text-2xl font-bold text-secondary">
                  {caseStudy.result.impressions}
                </p>
              </div>
              <div className="rounded-xl border border-accent-green/20 bg-accent-green/20 p-4 w-full">
                <p className="text-lg uppercase tracking-[0.12em] text-primary">
                  Clicks:
                </p>
                <p className="text-sm sm:text-lg md:text-2xl font-bold text-secondary">
                  {caseStudy.result.click}
                </p>
              </div>
              <div className="rounded-xl border border-accent-green/20 bg-accent-green/20 p-4 w-full">
                <p className="text-lg uppercase tracking-[0.12em] text-primary">
                  Add to cart:
                </p>
                <p className="text-sm sm:text-lg md:text-2xl font-bold text-secondary">
                  {caseStudy.result.addToCart}
                </p>
              </div>
              <div className="rounded-xl border border-accent-green/20 bg-accent-green/20 p-4 w-full">
                <p className="text-lg uppercase tracking-[0.12em] text-primary">
                  Checkout:
                </p>
                <p className="text-sm sm:text-lg md:text-2xl font-bold text-secondary">
                  {caseStudy.result.beginCheckout}
                </p>
              </div>
              <div className="rounded-xl border border-accent-green/20 bg-accent-green/20 p-4 w-full">
                <p className="text-lg uppercase tracking-[0.12em] text-primary">
                  Purchases:
                </p>
                <p className="text-sm sm:text-lg md:text-2xl font-bold text-secondary">
                  {caseStudy.result.buy}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/kundcase"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-accent-green text-accent-green rounded-lg hover:bg-black/5 transition-colors text-center"
          >
            <ArrowBigLeft className="h-5 w-5" /> Fler kundcase
          </Link>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors text-center"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
    </div>
  );
}
