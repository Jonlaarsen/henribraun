import {
  BarChart2,
  CircleFadingArrowUp,
  Code2,
  Cpu,
  Megaphone,
  Monitor,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { TJANSTER_LIST } from "@/constants";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BarChart2,
  Cpu,
  Code2,
  CircleFadingArrowUp,
  Megaphone,
  Share2,
  Monitor,
};

export default function TjansterPage() {
  return (
    <div className="min-h-screen relative pt-24 md:pt-32 pb-20 px-4 sm:px-6">
      <div
        className="absolute inset-0 pointer-events-none"
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
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-cyan-900">
          Våra tjänster
        </h1>
        <p className="text-xl text-black/70 mb-16">
          Vi hjälper företag att växa online med datadriven strategi och
          effektiv digital marknadsföring.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {TJANSTER_LIST.map((service) => {
            const Icon = ICON_MAP[service.iconKey];
            return (
              <Link
                key={service.slug}
                href={`/tjanster/${service.slug}`}
                className="block z-10 p-6 rounded-2xl border bg-linear-to-br from-white/30 via-gray-200/30 to-white/30 backdrop-blur-xs border-black/10 hover:border-black/20 hover:scale-105 hover:bg-black/[0.02] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full flex justify-between items-center">
                  <h2 className="text-2xl font-bold mb-2 text-cyan-700">
                    {service.title}
                  </h2>{" "}
                  {Icon && <Icon className="text-cyan-800 h-15 w-15" />}
                </div>

                <div className="w-full relative text-cyan-800 flex items-center justify-center h-40">
                  <div
                    className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden"
                    style={{
                      backgroundImage: `
                        linear-gradient(${service.background.gridColor} 1px, transparent 1px),
                        linear-gradient(90deg, ${service.background.gridColor} 1px, transparent 1px)
                      `,
                      backgroundSize: `${service.background.gridSize} ${service.background.gridSize}`,
                      maskImage: `radial-gradient(ellipse 80% 80% at ${service.background.maskPosition}, black 40%, transparent 70%)`,
                      WebkitMaskImage: `radial-gradient(ellipse 80% 80% at ${service.background.maskPosition}, black 40%, transparent 70%)`,
                    }}
                  />
                  <div className="z-20">
                    <p className="text-black/70 line-clamp-3">
                      {service.description} Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Ab commodi laboriosam
                      dignissimos quod quidem molestias, repellat nisi quia
                      itaque exercitationem cum soluta id nobis voluptates et
                      delectus sed inventore provident.
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
