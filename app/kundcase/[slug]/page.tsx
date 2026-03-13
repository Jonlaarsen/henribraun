import Link from "next/link";
import { notFound } from "next/navigation";
import { KUNDCASE_BY_SLUG } from "@/constants/kundcase";

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
      <div className="max-w-4xl mx-auto">
        <Link
          href="/kundcase"
          className="text-black/60 hover:text-black mb-8 inline-block"
        >
          ← Tillbaka till kundcase
        </Link>

        <div className="border-b relative border-black/10 pb-8 mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {caseStudy.tagline}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-secondary">
            {caseStudy.client}
          </h1>
          <p className="text-lg text-black/80 max-w-2xl mb-6">
            {caseStudy.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {caseStudy.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/80 font-medium hover:text-secondary underline underline-offset-4"
              >
                {link.label} →
              </a>
            ))}
          </div>
          <img
            src={caseStudy.logo}
            alt={caseStudy.client}
            className="w-auto h-14 md:h-30 top-4 right-4 absolute opacity-80"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-secondary/80">
            Uppdraget
          </h2>
          <div className="space-y-4">
            {caseStudy.assignment.map((paragraph, i) => (
              <p key={i} className="text-black/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {caseStudy.quote && (
          <blockquote className="bg-cyan-50/50 border-l-4 border-secondary/80 pl-6 py-6 rounded-r-lg">
            <p className="text-black/80 leading-relaxed mb-4 italic">
              &ldquo;{caseStudy.quote.text}&rdquo;
            </p>
            <footer>
              <cite className="not-italic font-semibold text-black">
                {caseStudy.quote.author}
              </cite>
              <span className="text-black/60"> — {caseStudy.quote.role}</span>
            </footer>
          </blockquote>
        )}

        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/kundcase"
            className="inline-block px-6 py-3 text-zinc-800 border border-black/20 rounded-lg hover:bg-black/5 transition-colors text-center"
          >
            ← Fler kundcase
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
