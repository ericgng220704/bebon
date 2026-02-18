import { MenuGrid } from "@/components/sections/MenuGrid";
import BoxPricing from "@/components/sections/BoxPricing";
import Hero from "@/components/sections/Hero";
import HowToOrder from "@/components/sections/HowToOrder";
import { FeaturedProductsCarousel } from "@/components/sections/ProductCarousel";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { BrandStorySections } from "@/components/sections/BrandStorySection";
import { GiftReadyCtaSection } from "@/components/sections/GiftReadyCTA";
import { VideoSection } from "@/components/sections/VideoSection";

export default function Home() {
  return (
    <main className="py-12 sm:py-16">
      <Hero />
      <FeaturedProductsCarousel />
      <PromoBanner
        title="Cookies, made gift-ready."
        description="Freshly baked in small batches and thoughtfully packed — because every box should feel special."
        ctaLabel="Shop the collection"
        ctaHref="/collections/signature"
        imageUrl="/hero/hero_4.jpg"
      />
      <BrandStorySections />
      <VideoSection src="/hero/video.mp4" />
      <GiftReadyCtaSection />
      {/* <HowToOrder />
      <BoxPricing /> */}
    </main>
  );
}
