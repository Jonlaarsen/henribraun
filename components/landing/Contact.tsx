import { Mail, Phone, Pin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col  size-full items-center justify-center pb-40 px-6  bg-linear-to-t from-primary/30 via-primary/10 to-transparent text-black overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-10 size-full max-w-6xl lg:items-stretch">
        <div className="flex flex-col space-y-4 size-full order-2 lg:order-1 lg:flex-1 lg:min-h-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900  md:font-stretch-150% pb-5 text-center md:text-start">
            Låt oss hjälpa dig att växa digitalt idag!
          </h1>
          <a
            href="mailto:kontakt@henribraun.se"
            className="h-auto  rounded-full text-zinc-800 bg-primary/70 flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-4 hover:bg-secondary hover:text-white duration-300 ease-in-out cursor-pointer"
          >
            <Mail className="h-10 w-10 sm:h-12 sm:w-12 p-2 rounded-full border-2 shrink-0" />
            <span className="text-sm sm:text-lg underline underline-offset-4 truncate">
              kontakt@henribraun.se
            </span>
          </a>
          ´
          <div className="h-auto  rounded-full text-zinc-800 bg-primary/30 flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-4 hover:bg-secondary hover:text-white  duration-300 ease-in-out cursor-pointer">
            <Pin className="h-10 w-10 sm:h-12 sm:w-12 p-2 rounded-full border-2 shrink-0" />
            <span className="text-sm sm:text-lg">Malmö, Sweden</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly gap-10 w-full lg:flex-1 lg:min-h-0 lg:self-stretch">
          <div className="text-center">
            <h1 className="text-slate-900/80 font-black text-4xl md:text-6xl ">
              <span className="italic">Vi finns</span> här för dig
            </h1>
            <p className="text-xl md:text-3xl font-light md:pb-10">
              Endast ett knapptryck bort.
            </p>
          </div>

          <Link
            href="/kontakt?tab=booking"
            className="group bg-linear-to-r from-slate-800 via-primary-20 to-secondary border-2 border-secondary/30 h-60 w-full overflow-hidden relative flex items-center justify-center rounded-2xl "
          >
            <img
              src="https://fullfocus.co/wp-content/uploads/2016/08/iStock_69554855_MEDIUM-1.jpg"
              className="object-cover object-center opacity-40 group-hover:opacity-50 group-hover:scale-105 duration-300 ease-in-out "
              alt=""
            />
            <h1 className=" z-10 absolute text-white text-4xl md:text-6xl font-black group-hover:scale-110 duration-300 ease-in-out">
              Boka ett möte
            </h1>
          </Link>
          <Link
            href="/kontakt?tab=form"
            className="group bg-linear-to-l from-slate-800 via-primary-40 to-secondary border-2 border-secondary/30 h-60 w-full overflow-hidden relative flex items-center justify-center rounded-2xl "
          >
            <img
              src="https://blog.slido.com/wp-content/uploads/2018/04/slido-blog-how-to-host-better-q-and-a-sessions-on-all-hands-meetings-header.jpg"
              className="object-cover  object-center opacity-40 group-hover:opacity-50 group-hover:scale-105 duration-300 ease-in-out "
              alt=""
            />
            <h1 className=" z-10 absolute text-white text-4xl md:text-6xl font-black group-hover:scale-110 duration-300 ease-in-out">
              Ställ en fråga
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
