import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/motion/Reveal";
import { boxPricing } from "@/content/menu";

export default function BoxPricing() {
  return (
    <section className="py-12">
      <Container>
        <Reveal>
          <div className="rounded-3xl bg-accent p-8 sm:p-12 border">
            <SectionHeading
              title="Box options"
              subtitle="Simple pricing, clean presentation. Perfect for gifting."
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {boxPricing.map((b, idx) => (
                <Reveal key={b.size} delay={idx * 0.06}>
                  <Card className="rounded-3xl">
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground">{b.label}</p>
                      <div className="mt-2 flex items-end justify-between">
                        <h3 className="text-xl font-semibold tracking-tight">
                          {b.size} pcs
                        </h3>
                        <span className="text-sm font-medium text-primary">
                          {b.price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {b.note}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
