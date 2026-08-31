import { featuredImage } from "@/data/site";
import { Reveal } from "./Reveal";

export function Featured() {
  return (
    <section className="relative overflow-hidden bg-plum py-24 text-ivory sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden">
            <img
              src={featuredImage}
              alt="Antique gold zardosi blouse hand-embroidered by Punya, with beaded tassels and dori ties"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 h-40 w-40 border border-gold/60"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Featured Work</p>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Crafted With <span className="italic text-gold-soft">Precision</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="gold-rule mt-8 w-32" aria-hidden="true" />
            <p className="mt-8 max-w-lg text-[1rem] leading-[1.9] text-ivory/75">
              Every detail is carefully finished by hand, creating designs that are
              unique, elegant and personal.
            </p>
            <a
              href="#work"
              className="mt-10 inline-block border border-gold/70 px-9 py-4 text-[0.68rem] uppercase tracking-[0.26em] text-gold-soft transition-colors duration-300 hover:bg-gold hover:text-plum"
            >
              View All Creations
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
