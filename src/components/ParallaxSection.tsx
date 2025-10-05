const ParallaxSection = () => {
  return (
    <section
      className="relative h-screen overflow-hidden bg-gray-200"
      style={{
        backgroundImage: "url(/passarela.png)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Content overlay (optional) */}
      {/* <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            FASHION EXPERIENCE
          </h2>
          <p className="text-xl md:text-2xl opacity-80">
            Uma imersão completa no universo da moda
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default ParallaxSection;
