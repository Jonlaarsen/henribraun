import { Mail, Phone, Pin, User } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col min-h-screen size-full items-center justify-center py-10 px-4 sm:px-6 bg-white text-black overflow-hidden"
    >
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-10 size-full max-w-6xl w-full">
        <div className="flex flex-col space-y-4 size-full order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-secondary font-stretch-150% pb-5">
            Låt oss hjälpa dig att växa digitalt idag!
          </h1>
          <div className="h-auto min-h-[4.5rem] rounded-full text-zinc-800 bg-amber-300/30 flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-4 hover:bg-amber-800/40 duration-300 ease-in-out cursor-pointer">
            <Mail className="h-10 w-10 sm:h-12 sm:w-12 p-2 rounded-full border-2 shrink-0" />
            <span className="text-sm sm:text-lg underline underline-offset-4 truncate">
              Henribraun@kontakt.se
            </span>
          </div>
          <div className="h-auto min-h-[4.5rem] rounded-full text-zinc-800 bg-red-300/30 flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-4 hover:bg-emerald-800/40 duration-300 ease-in-out cursor-pointer">
            <Phone className="h-10 w-10 sm:h-12 sm:w-12 p-2 rounded-full border-2 shrink-0" />
            <span className="text-sm sm:text-lg underline underline-offset-4">
              +46-111-222-33
            </span>
          </div>
          <div className="h-auto min-h-[4.5rem] rounded-full text-zinc-800 bg-blue-300/30 flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-4 hover:bg-cyan-800/40 duration-300 ease-in-out cursor-pointer">
            <Pin className="h-10 w-10 sm:h-12 sm:w-12 p-2 rounded-full border-2 shrink-0" />
            <span className="text-sm sm:text-lg">blabla 12, malmo, sweden</span>
          </div>
        </div>
        <form
          className="flex flex-col bg-cyan-800/20 relative max-w-4xl w-full space-y-4 p-6 sm:p-8 md:p-10 size-full rounded-2xl lg:rounded-4xl border order-1 lg:order-2"
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
    </div>
  );
};

export default Contact;
