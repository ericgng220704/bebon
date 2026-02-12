import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "space-y-2",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-balance text-left font-semibold tracking-tight text-4xl md:text-5xl mb-16">
        {title}
      </h2>
    </div>
  );
}
