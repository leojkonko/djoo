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
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/10 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Action Buttons - Visible on all screens, but styled differently */}
          <div
            className={`flex gap-2 z-50 transition-all duration-300 ${
              isMenuOpen && !isScrolled
                ? "opacity-0 pointer-events-none invisible"
                : "opacity-100 visible"
            }`}
          >
            <button
              className={`text-white border-2 border-white hover:cursor-pointer px-3 lg:px-8 py-3 lg:py-4 text-xs font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 ${
                isScrolled ? "bg-black/60 shadow-xl" : "bg-transparent"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
              <span className="hidden lg:inline">COMPRE SEU INGRESSO</span>
            </button>
            <a
              href="https://www.youtube.com/watch?v=jBJn4u_AP7g"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white border-2 border-white hover:cursor-pointer px-3 lg:px-8 py-3 lg:py-4 text-xs font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 ${
                isScrolled ? "bg-black/60 shadow-xl" : "bg-transparent"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
              </svg>
              <span className="hidden lg:inline">ASSISTIR ONLINE</span>
            </a>
          </div>

          {/* Menu Toggle Button */}
          <button
            className={`z-[70] hover:cursor-pointer text-white focus:outline-none p-3 rounded-lg transition-all duration-300 group ${
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
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-lg">
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
              href="/manifesto"
              className="text-white text-2xl font-bold hover:text-ladyj-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              TEMA / MANIFESTO
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
            <Link
              href="/blog"
              className="text-white text-2xl font-bold hover:text-ladyj-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
