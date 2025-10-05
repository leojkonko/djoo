"use client";

const ScrollingText = () => {
  const text = (
    <>
      <span className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 px-8 inline-block">
        INSPIRA, <span className="font-black">CONECTA &</span> MOVIMENTA.
      </span>
      <span className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 px-8 inline-block">
        INSPIRA, <span className="font-black">CONECTA &</span> MOVIMENTA.
      </span>
      <span className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 px-8 inline-block">
        INSPIRA, <span className="font-black">CONECTA &</span> MOVIMENTA.
      </span>
    </>
  );

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="w-full overflow-hidden">
        <div className="scrolling-wrapper">
          <div className="scrolling-content">
            {text}
          </div>
          <div className="scrolling-content" aria-hidden="true">
            {text}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrolling-wrapper {
          display: flex;
          width: fit-content;
        }

        .scrolling-content {
          display: flex;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default ScrollingText;
