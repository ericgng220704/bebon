"use client";

type VideoSectionProps = {
  src: string; // e.g. "/videos/bebon-oven.mp4"
  poster?: string; // e.g. "/images/video-poster.jpg"
  height?: "sm" | "md" | "lg" | "full";
};

export function VideoSection({
  src,
  poster,
  height = "lg",
}: VideoSectionProps) {
  const heightClass =
    height === "sm"
      ? "h-[360px] md:h-[460px]"
      : height === "md"
        ? "h-[480px] md:h-[600px]"
        : height === "lg"
          ? "h-[560px] md:h-[720px]"
          : "h-screen";

  return (
    <section className="w-1/3 mx-auto py-12">
      <div
        className={`relative w-full overflow-hidden ${heightClass} rounded-3xl`}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
}
