import Link from "next/link";
import { notFound } from "next/navigation";
import { TJANSTER_BY_SLUG } from "@/constants";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = TJANSTER_BY_SLUG[slug];

  if (!service) notFound();

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/tjanster"
          className="text-black/60 hover:text-black mb-8 inline-block"
        >
          ← Tillbaka till tjänster
        </Link>
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-cyan-900">
          {service.title}
        </h1>
        <p className="text-xl text-black/70 mb-8">{service.description}</p>
        <p className="text-lg text-black/80 leading-relaxed mb-16">
          {service.fullText}
        </p>

        {service.sections && service.sections.length > 0 && (
          <div className="space-y-12 mb-16">
            {service.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold mb-4 text-cyan-800">
                  {section.title}
                </h2>
                <p className="text-black/80 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {service.benefits && service.benefits.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-cyan-800">
              Vad du får
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span className="text-black/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {service.process && service.process.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-cyan-800">
              Vår process
            </h2>
            <ol className="space-y-4">
              {service.process.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex shrink-0 w-8 h-8 rounded-full bg-primary text-white font-semibold items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <span className="text-black/80 pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-black/10">
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-cyan-900 text-white font-semibold rounded-lg hover:bg-cyan-800 transition-colors"
          >
            Kontakta oss för ett samtal
          </Link>
        </div>
      </div>
    </div>
  );
}
