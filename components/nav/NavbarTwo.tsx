"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Mail, Menu, X } from "lucide-react";
import { TJANSTER_NAV_LINKS } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavbarTwo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTjansterOpen, setMobileTjansterOpen] = useState(false);
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
      setMobileTjansterOpen(false);
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
          className="text-secondary font-light hover:text-black flex items-center gap-1"
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
                className="block px-4 py-2.5  text-secondary hover:text-black hover:bg-black/5 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
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
        className="text-secondary  font-light hover:text-black"
        onClick={() => setMobileMenuOpen(false)}
      >
        Kundcase
      </Link>
      <Link
        href="/om-oss"
        className="text-secondary font-light hover:text-black"
        onClick={() => setMobileMenuOpen(false)}
      >
        Om oss
      </Link>
      <Link
        href="/kontakt"
        className="text-secondary font-light hover:text-black"
        onClick={() => setMobileMenuOpen(false)}
      >
        Kontakta oss
      </Link>
    </>
  );

  return (
    <>
      <div className="z-100 navbar absolute top-0 left-0 right-0 py-2   px-4 md:py-8 md:px-20 backdrop-blur-md border-white flex justify-between  items-center">
        <Link
          href="/"
          className="text-black hover:opacity-80 transition-opacity shrink-0"
        >
          {/* <h1 className=" mt-2 text-[#333333] font-logo text-3xl md:text-5xl font-semibold flex items-center justify-center">
            HENRI{" "}
            <span className="h-1.5 w-1.5 md:h-2.5 md:w-2.5 bg-primary rounded-full -mt-2 mx-1 inline-block" />{" "}
            BRAUN
          </h1> */}
          <div
            className="w-40 h-20"
            style={{
              backgroundColor: "",
              maskImage: "url(/HENRIBRAUN1_line.svg)",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
              WebkitMaskImage: "url(/HENRIBRAUN1_line.svg)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
            }}
          />
        </Link>
        <div className="hidden md:flex items-center space-x-5 text-lg z-100 font-light">
          <NavLinks />
        </div>
        <button className="flex bg-secondary text-white rounded-xl items-center text-lg font-light justify-center gap-2 px-3 py-2">
          <Mail className="h-8 w-8" />
          kontakta oss
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-secondary hover:text-black"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      <hr className="absolute top-30 left-15 right-15 text-secondary  h-px bg-white z-100" />

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-100 bg-white/95 backdrop-blur-lg md:hidden transition-opacity overflow-scroll duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "5.5rem" }}
      >
        <nav className="flex flex-col gap-6 px-8 py-2 text-xl font-light">
          <button
            className="absolute top-5 right-5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <X className="h-6 w-6 text-secondary" />
          </button>
          <div className="border-b border-black/10 pb-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black flex items-center justify-center mb-20 transition-opacity shrink-0"
            >
              {/* <h1 className=" pb-10 text-[#333333] font-logo text-5xl font-semibold flex items-center justify-center">
                HENRI{" "}
                <span className="h-2.5 w-2.5 bg-primary rounded-full -mt-2 mx-1 inline-block" />{" "}
                BRAUN
              </h1> */}
              <img src="/HENRIBRAUN1_line.svg" className="h-8 " />
            </Link>
            <button
              onClick={() => setMobileTjansterOpen(!mobileTjansterOpen)}
              className="flex items-center justify-between w-full text-left text-base font-light uppercase tracking-widest text-secondary mb-3 py-2 hover:text-slate-700"
            >
              Tjänster
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileTjansterOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileTjansterOpen && (
              <div className="flex flex-col text-base gap-2">
                {TJANSTER_NAV_LINKS.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${index === 0 ? "font-light" : ""} text-slate-700 hover:text-black py-2`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/kundcase"
            className="text-slate-700 font-light hover:text-black py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kundcase
          </Link>
          <Link
            href="/om-oss"
            className="text-slate-700 font-light hover:text-black py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Om oss
          </Link>
          <Link
            href="/kontakt"
            className="text-slate-700 font-light hover:text-black py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kontakta oss
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavbarTwo;
