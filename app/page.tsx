import { MenuGrid } from "@/components/sections/MenuGrid";
import BoxPricing from "@/components/sections/BoxPricing";
import Hero from "@/components/sections/Hero";
import HowToOrder from "@/components/sections/HowToOrder";

export default function Home() {
  return (
    <main className="py-12 sm:py-16">
      <Hero />
      <MenuGrid />
      <HowToOrder />
      <BoxPricing />
    </main>
  );
}
