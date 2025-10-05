const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black flex items-center justify-center"
    >
      <div className="text-center">
        <div className="text-white text-6xl md:text-8xl lg:text-6xl leading-tight font-light">
          <span className="block">ARE</span>
          <span className="block">YOU</span>
          <span className="block">READY</span>
          <span className="block">FOR</span>
          <span className="block">THE</span>
          <span className="block font-black ">RSMM</span>
          <span className="block">?</span>
          {/* <span className="block text-4xl md:text-6xl lg:text-7xl">?</span> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
