"use client";

const BannerSection = () => {
  return (
    <section
      id="homepage"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://res.cloudinary.com/dalcchcpb/video/upload/v1759709005/banner_aeg8up.mp4"
            type="video/mp4"
          />
          {/* Fallback */}
          {/* <source src="/banner.mp4" type="video/mp4" /> */}
        </video>
        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </div>

      {/* Content */}
      {/* <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center text-white">
          <div className="text-3xl md:text-5xl lg:text-6xl leading-tight">
            <span className="font-light">il primo </span>
            <span className="font-medium">talent</span>
            <span className="font-light"> pensato</span>
            <br />
            <span className="font-light">per </span>
            <span className="font-medium">supportare</span>
            <span className="font-light"> le </span>
            <span className="font-black text-ladyj-pink">dj</span>
            <span className="font-light"> di domani</span>
            <em className="font-light">!</em>
          </div>
        </div>
      </div> */}

      {/* Scroll Down Circle */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => {
            const nextSection = document.querySelector("#home");
            if (nextSection) {
              nextSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className="relative cursor-pointer hover:scale-110 transition-transform duration-300"
          aria-label="Scroll to next section"
        >
          {/* Circular text - rotating 360 degrees */}
          <div className="w-28 h-28 animate-spin-slow">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              <defs>
                <path
                  d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                  id="circle"
                />
              </defs>
              <text className="fill-white text-[10px] font-light tracking-[0.2em] uppercase">
                <textPath href="#circle" startOffset="0%">
                  scroll down • scroll down • scroll down • scroll down •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Center arrow - static */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-sm animate-bounce">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default BannerSection;
