"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
  variant?: "dark" | "white"; // dark (padrão) ou white (fundo branco)
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`relative z-10 w-full max-w-7xl lg:max-w-[85%] space-y-4 ${className}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            item.variant === "white" && openIndex === index ? "bg-white" : ""
          }`}
        >
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex items-center py-5 px-6 text-left transition-colors duration-200 relative cursor-pointer ${
              item.variant === "white" && openIndex === index
                ? "bg-white text-black before:content-[''] before:absolute before:top-0 before:right-full before:w-[100vw] before:h-full before:bg-white after:content-[''] after:absolute after:top-0 after:left-full after:w-[100vw] after:h-full after:bg-white"
                : "hover:bg-gray-900"
            }`}
          >
            {/* Circle Icon - Left */}
            <div
              className={`absolute left-6 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                item.variant === "white" && openIndex === index
                  ? "border-black"
                  : "border-white"
              }`}
            >
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {/* Title - Centered */}
            <h2 className="text-xl md:text-2xl font-bold uppercase text-center tracking-wide w-full">
              {item.title}
            </h2>
          </button>

          {/* Accordion Content */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              item.variant === "white" && openIndex === index ? "" : "pt-8"
            } ${
              openIndex === index
                ? "max-h-[2000px] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div
              className={`px-6 pb-6 ${
                item.variant === "white" && openIndex === index
                  ? "bg-white text-black relative before:content-[''] before:absolute before:top-0 before:right-full before:w-[100vw] before:h-full before:bg-white after:content-[''] after:absolute after:top-0 after:left-full after:w-[100vw] after:h-full after:bg-white"
                  : ""
              }`}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
