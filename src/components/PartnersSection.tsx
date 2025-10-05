"use client";

import Image from "next/image";

const PartnersSection = () => {
  return (
    <section className="py-20 bg-[#f3f3f3] -mt-9 ">
      <div className="w-full px-8 lg:px-16">
        {/* Main Sponsor */}
        <div className="text-center mb-20">
          <div className="flex justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png"
              alt="Coca-Cola"
              width={400}
              height={160}
              className="object-contain"
            />
          </div>
        </div>

        {/* Supported By Text */}
        <div className="text-center mb-16">
          <h3 className="text-lg text-[#312f2e] text-light">SUPPORTED BY</h3>
        </div>

        {/* Partners Grid - First Row (2 logos) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center justify-items-center">
          <div className="flex justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.svg/2560px-Adidas_logo.svg.png"
              alt="Adidas"
              width={300}
              height={120}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png"
              alt="Nike"
              width={300}
              height={120}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* Partners Grid - Second Row (3 logos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 items-center justify-items-center">
          <div className="flex justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Puma_Logo.svg/2560px-Puma_Logo.svg.png"
              alt="Puma"
              width={280}
              height={110}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/2560px-McDonald%27s_Golden_Arches.svg.png"
              alt="McDonald's"
              width={280}
              height={110}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png"
              alt="IBM"
              width={280}
              height={110}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* Technical Partners Text */}
        <div className="text-center mt-20 mb-16">
          <h3 className="text-lg text-[#312f2e] text-extralight">
            TECHNICAL PARTNERS
          </h3>
        </div>

        {/* Technical Partners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-items-center">
          <div className="flex justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
              alt="Google"
              width={350}
              height={140}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1920px-Apple_logo_black.svg.png"
              alt="Apple"
              width={350}
              height={140}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
