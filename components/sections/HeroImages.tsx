"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { site } from "@/content/site";

const images = ["/hero/hero_1.jpg", "/hero/hero_2.jpg", "/hero/hero_3.jpg"];

export default function HeroImage() {
  const currentIndex = useRef(0);
  const aRef = useRef<HTMLDivElement | null>(null);
  const bRef = useRef<HTMLDivElement | null>(null);
  const usingA = useRef(true);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    // Initialize: A visible, B hidden
    gsap.set(a, { autoAlpha: 1, yPercent: 0 });
    gsap.set(b, { autoAlpha: 0, yPercent: 8 });

    // Put initial image into A
    const aImg = a.querySelector("img") as HTMLImageElement | null;
    if (aImg) aImg.src = images[0];

    const play = () => {
      const nextIndex = (currentIndex.current + 1) % images.length;

      const incoming = usingA.current ? b : a;
      const outgoing = usingA.current ? a : b;

      // Set the next image source on the incoming layer
      const incomingImg = incoming.querySelector(
        "img",
      ) as HTMLImageElement | null;
      if (incomingImg) incomingImg.src = images[nextIndex];

      const tl = gsap.timeline({
        defaults: { ease: "sine.inOut" },
        onComplete: () => {
          currentIndex.current = nextIndex;
          usingA.current = !usingA.current;
        },
      });

      // Incoming gently rises into place while fading in
      tl.set(incoming, { yPercent: 8, autoAlpha: 0 })
        .to(incoming, { yPercent: 0, autoAlpha: 1, duration: 0.9 }, 0)
        // Outgoing fades slightly (no movement, avoids flash)
        .to(outgoing, { autoAlpha: 0, duration: 0.9 }, 0);

      return tl;
    };

    // Start looping
    timer.current = window.setInterval(() => {
      play();
    }, 4000); // ~4s feels calmer than 1s

    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="mt-14 flex justify-center relative">
      <div className="absolute top-1/3 left-0 -translate-y-1/2">
        <p className="text-base text-muted-foreground">
          • Based in {site.city}
        </p>
      </div>
      <div className="absolute bottom-1/6 right-0 -translate-y-1/2">
        <p className="text-base text-muted-foreground">• Pre-order pickup</p>
      </div>
      <div
        className="
          relative
          h-125 w-100
          overflow-hidden
          rounded-3xl
          border
          bg-card
          shadow-sm
        "
      >
        {/* Layer A */}
        <div ref={aRef} className="absolute inset-0">
          <Image
            src={images[0]}
            alt="Bebon Cookies"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Layer B */}
        <div ref={bRef} className="absolute inset-0">
          <Image
            src={images[1]}
            alt="Bebon Cookies"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
