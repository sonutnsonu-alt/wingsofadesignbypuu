import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Services({
  onViewWork,
}: {
  onViewWork: (category: string) => void;
}) {
  return (
    <section id="services" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="What We Make"
          title="Our Craft"
          subtitle="Intricate details. Beautiful finishes. Handmade with love."
        />

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.number} delay={i * 80}>
              <article className="group relative h-full border border-border/70 bg-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_30px_60px_-40px_color-mix(in_oklab,var(--plum)_60%,transparent)]">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.name} by Punya`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                  />
                  <span className="absolute left-5 top-5 font-display text-3xl text-ivory drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
                    {service.number}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="font-display text-2xl tracking-wide text-plum">
                    {service.name.toUpperCase()}
                  </h3>
                  <div
                    aria-hidden="true"
                    className="mt-3 h-px w-10 bg-gold-soft transition-all duration-500 group-hover:w-24 group-hover:bg-gold"
                  />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onViewWork(service.category)}
                    className="mt-6 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.24em] text-plum transition-colors hover:text-rani"
                  >
                    View Work
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
