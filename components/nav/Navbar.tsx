"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { TJANSTER_NAV_LINKS } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(".navbar", {
      opacity: 0,
      delay: 0.5,
      y: -100,
      duration: 0.5,
      ease: "sine.in",
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const NavLinks = () => (
    <>
      <div className=" relative hidden md:block" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="text-slate-600 font-bold hover:text-black flex items-center gap-1"
        >
          Tjänster{" "}
          <ChevronDown
            className={`h-4 w-4  transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 py-2 min-w-55 bg-white/95 backdrop-blur-md rounded-2xl border border-black/10 shadow-lg">
            {TJANSTER_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5  text-slate-600 hover:text-black hover:bg-black/5 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                onClick={() => setDropdownOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Link
        href="/kundcase"
        className="text-slate-600 font-bold hover:text-black"
        onClick={() => setMobileMenuOpen(false)}
      >
        Kundcase
      </Link>
      <Link
        href="/om-oss"
        className="text-slate-600 font-bold hover:text-black"
        onClick={() => setMobileMenuOpen(false)}
      >
        Om oss
      </Link>
      <Link
        href="/kontakt"
        className="text-slate-600 font-bold hover:text-black"
        onClick={() => setMobileMenuOpen(false)}
      >
        Boka
      </Link>
    </>
  );

  return (
    <>
      <div className="z-100 navbar fixed top-3 left-3 right-3 md:top-5 md:left-10 md:right-10 border rounded-full py-2 px-4 md:py-2 md:px-10 bg-white/40 backdrop-blur-md border-secondary/60 flex justify-between items-center">
        <Link
          href="/"
          className="text-black hover:opacity-80 transition-opacity shrink-0"
        >
          <h1 className=" mt-2 text-[#333333] font-logo text-3xl md:text-5xl font-semibold flex items-center justify-center">
            HENRI{" "}
            <span className="h-1.5 w-1.5 md:h-2.5 md:w-2.5 bg-primary rounded-full -mt-2 mx-1 inline-block" />{" "}
            BRAUN
          </h1>
        </Link>
        <div className="hidden md:flex items-center space-x-5 text-lg z-100 font-light">
          <NavLinks />
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-black"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-100 bg-white/95 backdrop-blur-lg md:hidden transition-opacity overflow-scroll duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "5.5rem" }}
      >
        <nav className="flex flex-col gap-6 px-8 py-6 text-xl font-light">
          <button
            className="absolute top-5 right-5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <X className="h-6 w-6 text-secondary" />
          </button>
          <div className="border-b border-black/10 pb-4">
            <Link href="/" className="text-black  transition-opacity shrink-0">
              <h1 className=" pb-10 text-[#333333] font-logo text-5xl font-semibold flex items-center justify-center">
                HENRI{" "}
                <span className="h-2.5 w-2.5 bg-primary rounded-full -mt-2 mx-1 inline-block" />{" "}
                BRAUN
              </h1>
            </Link>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Tjänster
            </p>
            <div className="flex flex-col text-base gap-2">
              {TJANSTER_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-black py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/kundcase"
            className="text-slate-700 font-bold hover:text-black py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kundcase
          </Link>
          <Link
            href="/om-oss"
            className="text-slate-700 font-bold hover:text-black py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Om oss
          </Link>
          <Link
            href="/kontakt"
            className="text-slate-700 font-bold hover:text-black py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kontakta Oss
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
