import { Mail, Phone, Pin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col size-fit items-center justify-center pb-20  px-4 sm:px-6 md:px-16 w-full py-20 gap-4 bg-accent-green/20 text-foreground overflow-x-hidden"
    >
      <div className="flex flex-col items-center  justify-center text-center md:pb-20">
        <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-5 z-50">
          Har du frågor om hur <br /> vi kan öka er digitala synlighet?
        </h2>
        <p className=" sm:text-xl md:text-2xl lg:text-3xl font-light">
          Första mötet är allltid kostnadsfritt{" "}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 size-full  max-w-7xl lg:items-stretch">
        {/* <div className="flex relative flex-col min-h-80 md:min-h-160  space-y-10 size-full order-1 lg:flex-1 ">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl h-full md:h-80 w-full font-black items-center justify-center md:items-end md:justify-start  inline-flex  pb-5 text-center md:text-start">
            Låt oss <br /> hjälpa dig <br /> att växa <br /> digitalt idag!
          </h2>
          <div className="flex flex-col h-50  gap-5  ">
            <a
              href="mailto:kontakt@henribraun.se"
              className="h-auto rounded-3xl text-zinc-800 bg-primary/70 flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-4 hover:bg-secondary hover:text-white duration-300 ease-in-out cursor-pointer"
            >
              <Mail className="h-10 w-10 sm:h-12 sm:w-12 p-2 rounded-full border-2 shrink-0" />
              <span className="text-sm sm:text-lg underline underline-offset-4 truncate">
                kontakt@henribraun.se
              </span>
            </a>{" "}
            {/* <a
            href="tel:0046760151881"
            className="h-auto  rounded-full text-zinc-800 bg-primary/50 flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-4 hover:bg-secondary hover:text-white duration-300 ease-in-out cursor-pointer"
          >
            <Phone className="h-10 w-10 sm:h-12 sm:w-12 p-2 rounded-full border-2 shrink-0" />
            <span className="text-sm sm:text-lg underline underline-offset-4">
              +46-76-0151-881
            </span>
          </a> 
            <div className="h-auto  rounded-3xl text-zinc-800 bg-primary/30 flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-4 hover:bg-secondary hover:text-white  duration-300 ease-in-out cursor-pointer">
              <Pin className="h-10 w-10 sm:h-12 sm:w-12 p-2 rounded-full border-2 shrink-0" />
              <span className="text-sm sm:text-lg">Malmö, Sweden</span>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row relative gap-4 items-center justify-center lg:flex-1 ">
          <Link
            href="/kontakt?tab=booking"
            className="group bg-linear-to-l from-slate-800 via-primary-40 to-secondary border-2 border-secondary/30 h-55 md:h-80 w-full overflow-hidden relative flex items-center justify-center rounded-3xl "
          >
            <img
              src="https://images.unsplash.com/photo-1722244416295-bc0c2f966aec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
              className="object-cover  object-center opacity-60 group-hover:opacity-70 group-hover:scale-105 duration-300 ease-in-out "
              alt="meeting photo"
            />
            <h2 className=" z-10 absolute  text-white text-4xl md:text-6xl font-black group-hover:scale-110 duration-300 ease-in-out">
              Boka ett möte
            </h2>
          </Link>
          <Link
            href="/kontakt?tab=form"
            className="group bg-linear-to-l from-slate-800 via-primary-40 to-secondary border-2 border-secondary/30 h-55 md:h-80 w-full overflow-hidden relative flex items-center justify-center rounded-3xl "
          >
            <img
              src="https://images.unsplash.com/photo-1754045473555-dd7e6bdf2d96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbG1vJTIwc3dlZGVufGVufDB8fDB8fHww"
              className="object-cover  object-center opacity-40 group-hover:opacity-50 group-hover:scale-105 duration-300 ease-in-out "
              alt="Q&A photo"
            />
            <h2 className=" z-10 absolute text-white text-4xl md:text-6xl font-bold group-hover:scale-110 duration-300 ease-in-out">
              Ställ en fråga
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
