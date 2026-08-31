import portrait from "@/assets/portrait-placeholder.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* image column, asymmetric */}
          <Reveal className="relative lg:col-span-5 lg:col-start-1">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 h-32 w-32 border border-gold-soft/70 sm:-left-6 sm:-top-6"
              />
              <div className="relative overflow-hidden">
                {/*
                  Replace `portrait` with Punya's photograph when available —
                  same aspect ratio, no other change needed.
                */}
                <img
                  src={portrait}
                  alt="Placeholder illustration of an embroidery hoop, needle and thread; Punya's portrait will be added here"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-40 w-40 border border-rose/40 sm:-bottom-6 sm:-right-6"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">The Artist</p>
              <h2 className="mt-5 font-display text-5xl leading-[1.05] text-plum sm:text-6xl lg:text-7xl">
                Meet <span className="italic text-rani">Punya</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-[0.98rem] leading-[1.9] text-muted-foreground">
                Wings_Of_a_design_by_puu is a creative handmade design studio by Punya,
                where traditional craftsmanship meets modern fashion aesthetics. Every
                creation is carefully designed and handcrafted with patience, creativity
                and attention to detail.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-[1.9] text-muted-foreground">
                From delicate beadwork and shimmering sequins to intricate Zardosi,
                thread, stone and net work, every design is made with love.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-10 font-display text-2xl italic text-gold">
                “Where every stitch tells a story.”
              </p>
              <div className="gold-rule mt-8 w-40" aria-hidden="true" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
