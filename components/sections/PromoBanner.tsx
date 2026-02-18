import Link from "next/link";
import { Button } from "@/components/ui/button";
import PrimaryCTA from "../PrimaryCTA";

type PromoBannerProps = {
  title: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string; // e.g. "/images/promo/signature-blends.jpg"
};

export function PromoBanner({
  title,
  description,
  ctaLabel,
  ctaHref,
  imageUrl,
}: PromoBannerProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Height + full-bleed background */}
      <div
        className="relative h-[420px] w-full bg-cover bg-center md:h-[620px]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* dark overlay (so white text reads well) */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="container mx-auto flex h-full items-center">
            <div className="max-w-lg text-white">
              <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                {title}
              </h2>

              {description ? (
                <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
                  {description}
                </p>
              ) : null}

              <div className="mt-8">
                <PrimaryCTA
                  label={ctaLabel}
                  href={ctaHref}
                  Clsname="!text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
