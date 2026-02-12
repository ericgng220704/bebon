import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/motion/Reveal";

const steps = [
  { title: "Choose your box", note: "Pick 4 / 6 / 12 and your flavors." },
  { title: "Pre-order", note: "Send your order via contact or Instagram." },
  { title: "Pick up fresh", note: "We confirm pickup time in Winnipeg." },
];

export default function HowToOrder() {
  return (
    <section className="py-12">
      <Container>
        <Reveal>
          <SectionHeading
            title="How to order"
            subtitle="Fast, clear, and low-effort."
          />
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {steps.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.06}>
              <Card className="rounded-3xl">
                <CardContent className="p-6">
                  <p className="text-xs text-muted-foreground">
                    Step {idx + 1}
                  </p>
                  <h3 className="mt-2 font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
