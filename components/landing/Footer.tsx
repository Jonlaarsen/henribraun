import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-12">
          <div className="space-y-4">
            <h2 className=" text-[#cacaca] font-logo font-semibold text-6xl lg:text-8xl  tracking-tight flex items-center">
              HENRI{" "}
              <span className="lg:h-4 lg:w-4 h-3 w-3 mb-4 rounded-full bg-primary mx-2" />{" "}
              BRAUN
            </h2>
            <p className="text-white/60 text-sm max-w-sm">
              Din partner inom digital marknadsföring. <br /> Vi hjälper företag
              att växa online.
            </p>
          </div>

          <nav className="flex flex-col sm:flex-row gap-8 md:gap-12">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                Sidor
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#services"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Tjänster
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Kundcase
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Kontakta oss
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                Kontakt
              </h3>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a
                    href="mailto:hello@henribraun.se"
                    className="hover:text-white transition-colors"
                  >
                    hello@henribraun.se
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Henri Braun. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              Integritetspolicy
            </Link>
            <Link
              href="#"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
