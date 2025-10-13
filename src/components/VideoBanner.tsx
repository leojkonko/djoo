interface VideoBannerProps {
  videoUrl?: string;
}

export default function VideoBanner({ 
  videoUrl = "https://res.cloudinary.com/dgbgqhrpa/video/upload/v1760372665/VIDEO_TEASER_-_RSMM_y7wb0s.mp4" 
}: VideoBannerProps) {
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
          <source
            src={videoUrl}
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </section>
  );
}
