export default function VideoBanner() {
  return (
    <section className="relative bg-black w-full">
      {/* Video Container - 21:9 aspect ratio, full width */}
      <div className="relative w-full" style={{ paddingBottom: "28.857%" }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/banner.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </section>
  );
}
