"use client";

import Image from "next/image";

interface Feature {
  number: number;
  title: string;
  description: string;
}

interface ImageFeatureSectionProps {
  imageSrc: string;
  imageAlt: string;
  introText?: string;
  secondIntroText?: string;
  features: Feature[];
  closingText: string;
}

export default function ImageFeatureSection({
  imageSrc,
  imageAlt,
  introText,
  secondIntroText,
  features,
  closingText,
}: ImageFeatureSectionProps) {
  return (
    <section className="relative w-full aspect-[1/1]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-top"
        priority
      />

      {/* Features Grid - Bottom 50% of Image */}
      <div className="lg:absolute relative bottom-[10%] left-0 right-0 lg:h-[50%] overflow-hidden">
        <div className="h-full bg-gradient-to-t from-black/95 via-black/80 to-transparent">
          <div className="h-full w-full flex items-center justify-center p-4 sm:p-6">
            <div
              className="max-w-7xl lg:max-w-[85%] mx-auto h-full flex flex-col justify-center items-center mt-[22rem] lg:mt-0
            gap-8 sm:gap-10 md:gap-12 lg:gap-14"
            >
              {/* Intro Texts */}
              {introText && (
                <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-center leading-normal tracking-wide">
                  {introText}
                </p>
              )}
              {secondIntroText && (
                <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-center leading-normal tracking-wide">
                  {secondIntroText}
                </p>
              )}

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 2xl:gap-32 w-full 2xl:mt-20 2xl:mb-16">
                {features.map((feature) => (
                  <div key={feature.number}>
                    <div className="flex items-start space-x-4 sm:space-x-5">
                      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="font-bold text-base sm:text-lg">
                          {feature.number}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 uppercase leading-tight tracking-wider">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-base sm:text-lg leading-snug tracking-wide">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing Text */}
              <p className="text-sm sm:text-base md:text-lg max-w-4xl mx-auto text-gray-300 text-center leading-normal mt-6 sm:mt-8 tracking-wide">
                {closingText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
