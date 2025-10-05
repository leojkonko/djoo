"use client";

import Image from "next/image";
import { MapPin, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl lg:max-w-[85%] mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
          {/* Left Side - RSMM Logo and Contact Info */}
          <div className="mb-8 lg:mb-0">
            {/* RSMM Logo */}
            <div className="mb-6">
              <Image
                src="/RSMM_branco.svg"
                alt="RSMM"
                width={250}
                height={100}
                className="object-contain"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-lg">
              <a
                href="https://maps.app.goo.gl/jd4dczJ6LxEj9Lu18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-ladyj-purple transition-all duration-300 group cursor-pointer"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Av. Benjamin Constant, 1126 - Centro, Lajeado - RS, 95900-000
                  - Edifício Hickmann select
                </span>
              </a>
              <a
                href="https://wa.me/5551995223713"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-ladyj-purple transition-all duration-300 group cursor-pointer"
              >
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  51 9 9522.3713
                </span>
              </a>
              <a
                href="https://wa.me/5551997154799"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-ladyj-purple transition-all duration-300 group cursor-pointer"
              >
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  51 9 9715.4799
                </span>
              </a>
              <a
                href="https://www.instagram.com/rsmm_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-ladyj-purple transition-all duration-300 group cursor-pointer"
              >
                <Instagram className="w-5 h-5 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  @rsmm_
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - DJOO Logo with "REALIZAÇÃO:" */}
          <div className="d-flex items-end">
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest mb-4">
                REALIZAÇÃO:
              </p>
              <Image
                src="/djoo_branco.svg"
                alt="DJOO Agency"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
