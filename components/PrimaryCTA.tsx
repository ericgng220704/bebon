"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrimaryCTA({
  href,
  label = "Pre-order",
  Clsname,
}: {
  href: string;
  label?: "Pre-order" | "Get a box" | string;
  Clsname?: string;
}) {
  return (
    <Button
      asChild
      size="lg"
      className={`rounded-full border bg-background! text-black hover:bg-accent! px-6 text-xl ${Clsname || ""}`}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
