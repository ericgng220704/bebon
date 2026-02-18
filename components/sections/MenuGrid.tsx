"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    nameChinese: "巧克力棉花糖",
    nameEnglish: "S'more Cookies",
    ingredients: ["Soft cookies", "Sweet"],
    bgColor: "bg-[#C8D9E8]", // Light blue
    image: "/chocolate-marshmallow-cookie-top-view.jpg",
  },
  {
    nameChinese: "蓝莓蘑比巧克力",
    nameEnglish: "Blueberry Cream Cheese",
    ingredients: ["Blueberry Cream", "Cheese"],
    bgColor: "bg-[#E8C8D9]", // Light pink
    image: "/blueberry-cream-cheese-cookie-top-view.jpg",
  },
  {
    nameChinese: "红丝绒",
    nameEnglish: "Red Velvet",
    ingredients: ["Red Velvet", "Jet"],
    bgColor: "bg-[#E8C8C8]", // Peachy pink
    image: "/red-velvet-cookie-with-cream-filling-top-view.jpg",
  },
  {
    nameChinese: "玉米麦片",
    nameEnglish: "Cornflake",
    ingredients: ["Cornflake", ""],
    bgColor: "bg-[#F5E8C8]", // Light yellow
    image: "/cornflake-cookie-top-view.jpg",
  },
  {
    nameChinese: "抹茶榛果巧克力",
    nameEnglish: "Matcha & Hazelnut",
    ingredients: ["Matcha & Hazelnut", ""],
    bgColor: "bg-[#D4D9C8]", // Sage green
    image: "/matcha-hazelnut-cookie-top-view.jpg",
  },
  {
    nameChinese: "切达起司",
    nameEnglish: "Cheddar Cheese",
    ingredients: ["Cheddar Cheese", ""],
    bgColor: "bg-[#F5D9C8]", // Peachy orange
    image: "/cheddar-cheese-cookie-top-view.jpg",
  },
];

export function MenuGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2
          ref={headingRef}
          className="text-balance text-left font-semibold tracking-tight text-4xl md:text-5xl mb-16"
        >
          Our menu
        </h2>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {menuItems.map((item, index) => (
            <div
              key={item.nameEnglish}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={`relative aspect-square ${item.bgColor} flex flex-col items-center justify-center p-8 md:p-12 rounded-sm`}
            >
              {/* Chinese name at top */}
              <h3 className="absolute top-6 md:top-8 font-semibold text-lg md:text-xl tracking-tight text-foreground">
                {item.nameChinese}
              </h3>

              {/* YUMMY text */}
              <div className="absolute top-12 md:top-16 font-semibold text-xs md:text-sm tracking-[0.3em] text-foreground/70">
                YUMMY
              </div>

              {/* Left ingredient */}
              {item.ingredients[0] && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-xs md:text-sm text-foreground/60">
                  {item.ingredients[0]}
                </div>
              )}

              {/* Right ingredient */}
              {item.ingredients[1] && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-center text-xs md:text-sm text-foreground/60">
                  {item.ingredients[1]}
                </div>
              )}

              {/* Cookie image */}
              <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.nameEnglish}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* COOKIE text with underline */}
              <div className="absolute bottom-16 md:bottom-20 flex flex-col items-center">
                <div className="font-semibold text-sm md:text-base tracking-[0.2em] text-foreground">
                  COOKIE
                </div>
                <div className="w-12 h-px bg-foreground mt-1"></div>
              </div>

              {/* English name at bottom */}
              <div className="absolute bottom-6 md:bottom-8 font-medium text-xs md:text-sm text-foreground/80">
                {item.nameEnglish}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
