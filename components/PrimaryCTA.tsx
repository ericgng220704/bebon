"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrimaryCTA({
  href,
  label = "Pre-order",
}: {
  href: string;
  label?: "Pre-order" | "Get a box" | string;
}) {
  return (
    <Button
      asChild
      size="lg"
      className="rounded-full border bg-background! text-black hover:bg-accent! px-6 text-xl"
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
