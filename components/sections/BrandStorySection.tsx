import Image from "next/image";

type StoryBlockProps = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  imagePosition?: string;
};

function StoryBlock({
  title,
  description,
  image,
  imagePosition = "left",
}: StoryBlockProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="grid items-center gap-12 md:grid-cols-2">
      {/* Image */}
      <div
        className={`relative h-[550px] rounded-2xl overflow-hidden w-full ${
          !isImageLeft ? "md:order-2" : ""
        }`}
      >
        <Image src={image.src} alt={image.alt} fill className="object-cover" />
      </div>

      {/* Text */}
      <div className={`max-w-md ${!isImageLeft ? "md:order-1" : ""}`}>
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
          {title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-black/70">
          {description}
        </p>
      </div>
    </div>
  );
}

export function BrandStorySections() {
  const sections = [
    {
      title: "Small batch, always.",
      description:
        "Every batch is mixed, baked, and packed by hand. No factory lines, no shortcuts — just real ingredients and careful attention to every detail.",
      image: { src: "/hero/story_1.jpg", alt: "Baking cookies" },
      imagePosition: "left",
    },
    {
      title: "Made to be gifted.",
      description:
        "Each box is thoughtfully packed and ready to be shared — whether it’s a thank-you, a celebration, or just a little surprise.",
      image: { src: "/hero/story_2.jpg", alt: "Gift-ready cookie box" },
      imagePosition: "right",
    },
    {
      title: "Simple ingredients. Honest flavors.",
      description:
        "We focus on balanced sweetness, rich butter, and textures that feel homemade — because good cookies don’t need anything complicated.",
      image: { src: "/hero/story_3.jpg", alt: "Ingredients close-up" },
      imagePosition: "left",
    },
    {
      title: "From our oven to your hands.",
      description:
        "What started as baking for friends and family grew into something we wanted to share. Every box carries that same feeling — comfort, care, and connection.",
      image: { src: "/hero/story_4.jpg", alt: "Warm lifestyle moment" },
      imagePosition: "right",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto space-y-28 py-24">
        {sections.map((section, index) => (
          <StoryBlock key={index} {...section} />
        ))}
      </div>
    </section>
  );
}
