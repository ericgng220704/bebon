"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function GiftReadyCtaSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-30 mx-3 rounded-3xl">
      {/* patterned background using ::after */}
      <div
        className="
          pointer-events-none absolute inset-0
          after:absolute after:inset-0
          after:bg-[url('/hero/rotated_background_2.png')]
          after:bg-[length:160px_160px]
          after:bg-repeat
          after:opacity-[0.32]

        "
        aria-hidden="true"
      />

      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="max-w-xl">
            <p className="text-sm font-medium text-black/45">
              Ready to send something sweet?
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight text-black md:text-4xl lg:text-5xl">
              Cookies, made gift-ready —{" "}
              <span className="text-black/70">
                beautifully packed and ready to share.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-black/60">
              Leave your email and we’ll send gift ideas, seasonal boxes, and
              limited drops — so you never miss the perfect moment.
            </p>

            {/* INPUT + BUTTON */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-20 flex w-full items-center gap-3"
            >
              <Input
                type="email"
                placeholder="name@email.com"
                className="h-12 rounded-full bg-white/80 px-5"
              />
              <Button
                type="submit"
                className="h-12 rounded-full bg-black px-7 text-white hover:bg-black/80 flex gap-0 hover:gap-2 transition-all"
              >
                <span>Shop gift boxes</span> <span className="ml-2">→</span>
              </Button>
            </form>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm">
              <Image
                src="/hero/hero_5.jpg"
                alt="Gift-ready cookies"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
