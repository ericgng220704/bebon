"use client";

import Container from "@/components/Container";
import PrimaryCTA from "@/components/PrimaryCTA";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroImage from "./HeroImages";

export default function Hero() {
  const leftCookieRef = useRef<HTMLImageElement | null>(null);
  const rightCookieRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const left = leftCookieRef.current;
    const right = rightCookieRef.current;
    if (!left || !right) return;

    // Subtle, premium motion: float + gentle rotation, loop forever
    gsap.to(left, {
      y: 18,
      rotation: -4,
      duration: 4.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(right, {
      y: 22,
      rotation: 4,
      duration: 5.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.4,
    });
  }, []);

  // Motto updated to match the new editorial style
  // (We split it into styled pieces to mimic the reference image)
  return (
    <section className="relative overflow-hidden py-14 -mt-20 sm:py-20">
      {/* Decorative cookie icons (like palm trees in your reference) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          ref={leftCookieRef}
          src="/icon/cookie_icon.png"
          alt="Cookie decoration"
          width={420}
          height={420}
          className="absolute -left-30 top-1/2-translate-y-1/2
            opacity-45
            max-w-none
            -rotate-12
            blur-[0.2px]
          "
          priority
        />

        <Image
          ref={rightCookieRef}
          src="/icon/cookie_icon.png"
          alt="Cookie decoration"
          width={420}
          height={420}
          className="
            absolute right-[-140px] top-1/2
            -translate-y-1/2
            opacity-45
            max-w-none
            rotate-[12deg]
            blur-[0.2px]
          "
          priority
        />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Big editorial heading */}
          <h1
            className="
              mt-4
              text-5xl sm:text-7xl lg:text-9xl
              leading-[0.95]
              tracking-tight
              font-semibold
              font-serif
              text-balance
            "
          >
            Unforgettable{" "}
            <span className="italic font-normal text-primary">bites</span> start
            with <span className="italic font-normal text-primary">Bebon</span>
          </h1>

          {/* Optional supporting line (keep it short for premium feel) */}
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Small batches, premium presentation—made to be gift-ready.
          </p>

          {/* CTAs (kept) */}
          {/* <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryCTA href="/contact" label="Pre-order" />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link href="/menu">View menu</Link>
            </Button>
          </div> */}

          {/* You said ignore the image section below, so we stop here */}
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
