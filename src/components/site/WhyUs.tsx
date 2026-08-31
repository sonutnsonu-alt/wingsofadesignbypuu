import { Diamond, Feather, Gem, Heart, Scissors, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const reasons = [
  {
    icon: Heart,
    title: "Handmade With Love",
    text: "Every piece is stitched by hand, never rushed and never mass produced.",
  },
  {
    icon: Sparkles,
    title: "Unique Designs",
    text: "Designs are drawn for you, so no two creations are ever quite alike.",
  },
  {
    icon: Gem,
    title: "Detailed Craftsmanship",
    text: "Beads, stones and zari placed one at a time, with patience and care.",
  },
  {
    icon: Diamond,
    title: "Premium Finishing",
    text: "Clean edges, secure knots and a finish that lasts through every wear.",
  },
  {
    icon: Scissors,
    title: "Customized Work",
    text: "Colours, motifs and materials chosen around your outfit and occasion.",
  },
  {
    icon: Feather,
    title: "Personal Touch",
    text: "You speak directly with Punya from first idea to final creation.",
  },
];

export function WhyUs() {
  return (
    <section className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Made The Slow, Careful Way" />

        <ul className="mt-16 grid gap-px overflow-hidden border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal as="li" key={reason.title} delay={i * 70} className="bg-background">
              <div className="group h-full p-9 transition-colors duration-500 hover:bg-card">
                <reason.icon
                  className="h-5 w-5 text-gold transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.3}
                  aria-hidden="true"
                />
                <h3 className="mt-6 font-display text-2xl text-plum">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {reason.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
