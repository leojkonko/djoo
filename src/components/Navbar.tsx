"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header backdrop blur bar - only when scrolled */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 h-24 z-40 bg-black/10 backdrop-blur-xs shadow-2xl transition-all duration-300"></div>
      )}

      {/* Top scroll text bar - exactly like original */}

      {/* Menu toggle button */}
      <button
        className={`fixed top-6 right-4 z-50 hover:cursor-pointer text-white focus:outline-none p-3 rounded-lg transition-all duration-300 group ${
          isScrolled
            ? "bg-black/60 shadow-xl hover:bg-black/80 hover:scale-110 hover:rotate-3"
            : "bg-black/50 hover:bg-black/70 hover:scale-110 hover:rotate-3"
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="space-y-2">
          <div
            className={`w-8 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-9 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-9 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-9 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></div>
        </div>
      </button>

      {/* Compre seu ingresso button */}
      <button
        className={`fixed top-6 left-4 z-50 text-white border-2 border-white hover:cursor-pointer px-8 py-4 text-xs font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300 ${
          isScrolled ? "bg-black/60 shadow-xl" : "bg-transparent"
        }`}
      >
        COMPRE SEU INGRESSO
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/75 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/"
              className="text-white text-2xl font-bold hover:text-ladyj-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/rsmm"
              className="text-white text-2xl font-bold hover:text-ladyj-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              RSMM
            </Link>
            <Link
              href="/passarela"
              className="text-white text-2xl font-bold hover:text-ladyj-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PASSARELA
            </Link>
            <Link
              href="/business-lounge"
              className="text-white text-2xl font-bold hover:text-ladyj-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              BUSINESS LOUNGE
            </Link>
            <Link
              href="/arena-insight"
              className="text-white text-2xl font-bold hover:text-ladyj-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ARENA INSIGHTS
            </Link>
            <Link
              href="/desfiles"
              className="text-white text-2xl font-bold hover:text-ladyj-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              DESFILES
            </Link>
            <Link
              href="/projeto-lab"
              className="text-white text-2xl font-bold hover:text-ladyj-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJETO LAB
            </Link>
            <Link
              href="/programacao"
              className="text-white text-2xl font-bold hover:text-ladyj-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PROGRAMAÇÃO
            </Link>
            <Link
              href="/credenciamento-imprensa"
              className="text-white text-2xl font-bold hover:text-ladyj-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CREDENCIAMENTO IMPRENSA
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
