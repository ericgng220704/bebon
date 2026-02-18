"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

type FeaturedItem = {
  title: string;
  subtitle: string;
  imageSrc: string;
  href: string;
};

const items: FeaturedItem[] = [
  {
    title: "Essentialist Mug",
    subtitle: "Iconic mug with unique design",
    imageSrc: "/hero/product.png",
    href: "/products/essentialist-mug",
  },
  {
    title: "Breakfast Set",
    subtitle: "Tableware for the perfect morning",
    imageSrc: "/hero/product.png",
    href: "/products/breakfast-set",
  },
  {
    title: "Bella Donovan",
    subtitle: "Blue Bottle Signature Blend",
    imageSrc: "/hero/product.png",
    href: "/products/bella-donovan",
  },
  {
    title: "Cold Brew Kit",
    subtitle: "Brew smooth coffee at home",
    imageSrc: "/hero/product.png",
    href: "/products/cold-brew-kit",
  },
  {
    title: "Dripper Set",
    subtitle: "Simple pour-over essentials",
    imageSrc: "/hero/product.png",
    href: "/products/dripper-set",
  },
];

export function FeaturedProductsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);
  return (
    <section className="py-16">
      <div className="">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", slidesToScroll: 1 }}
          className="relative w-full group"
        >
          {/* ✅ Only render if can scroll */}
          {canScrollPrev && (
            <CarouselPrevious
              size={"icon-lg"}
              className="z-10 rounded-full size-12 absolute left-2 top-1/2 -translate-y-1/2 border-0 bg-white/90 shadow-none hover:bg-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity"
            />
          )}

          {canScrollNext && (
            <CarouselNext
              size={"icon-lg"}
              className="z-10 absolute right-2 size-12 top-1/2 -translate-y-1/2 rounded-full border-0 bg-white/90 shadow-none hover:bg-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity"
            />
          )}

          <CarouselContent className="-ml-0">
            {items.map((item, i) => (
              <CarouselItem
                key={item.title}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Link
                  href={item.href}
                  className="group block h-[520px] px-10 py-12"
                >
                  {/* vertical separators (no borders on the card; only subtle dividers between columns) */}
                  <div className="relative h-full">
                    {i !== 0 && (
                      <span className="absolute left-0 top-0 h-full w-[0.5px] bg-black/15" />
                    )}

                    <div className="flex h-full flex-col items-center text-center">
                      <h3 className="text-[22px] font-medium tracking-tight text-black/85">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed tracking-[0.02em] text-black/60">
                        {item.subtitle}
                      </p>

                      {/* big whitespace + product image centered lower */}
                      <div className="mt-auto flex w-full items-end justify-center pb-10">
                        <div className="relative h-[240px] w-[360px]">
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                            priority={i < 3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
