import React from "react";

const Intro = () => {
  return (
    <div className="min-h-[80vh] py-12 md:py-20 px-4 md:px-20 border-y border-black/10 relative overflow-hidden bg-cyan-50/20 mb-14 size-full flex items-center justify-center text-slate-800 ">
      <div
        className="absolute h-700 rotate-45 w-50 left-1/3 -bottom-200 hidden lg:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.09) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute h-700 rotate-45 w-100 left-2/3 -bottom-200 hidden lg:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.09) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 70%)",
        }}
      ></div>

      <div className=" z-50 flex flex-col items-center text-center justify-center px-6 lg:pl-10 space-y-4 size-full order-2 lg:order-1">
        <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-50">
          En superb digital marknadsföringsbyrå <br />{" "}
          <span className="text-secondary">baserad i Malmö</span>.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
          Genomtänkt marknadsföring med fokus på konverteringar, skräddarsydd
          efter era mål och resurser.
        </p>
      </div>
      <div className="col-span-1 px-4 relative flex flex-col items-center text-center justify-center space-y-4 size-full order-1 lg:order-2">
        <div className="w-full max-w-md lg:w-120 lg:h-160 aspect-3/4 lg:aspect-auto bg-cyan-900/20 overflow-hidden rounded-sm">
          <img
            src="https://www.cleancluster.dk/wp-content/uploads/2026/02/Ocean-Valley-1280x1280.jpeg"
            className="size-full object-cover object-center contrast-80 "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
