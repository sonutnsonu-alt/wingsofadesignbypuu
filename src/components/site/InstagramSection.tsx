import { Instagram } from "lucide-react";
import { brand, instagramGrid } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function InstagramSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow={brand.instagram}
          title="Follow The Craft"
          subtitle="Behind every design is a little creativity, patience and love."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {instagramGrid.map((image, i) => (
            <Reveal key={`${image}-${i}`} delay={(i % 3) * 80}>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Handmade embroidery work by Punya, shared on Instagram (${i + 1} of ${instagramGrid.length})`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 grid place-items-center bg-plum/55 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                >
                  <Instagram className="h-6 w-6 text-ivory" strokeWidth={1.2} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-plum/60 px-9 py-4 text-[0.68rem] uppercase tracking-[0.26em] text-plum transition-colors duration-300 hover:bg-plum hover:text-ivory"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.4} />
            Follow on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
