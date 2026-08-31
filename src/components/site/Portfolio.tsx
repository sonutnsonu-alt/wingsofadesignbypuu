import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { categories, portfolio, type PortfolioItem } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: PortfolioItem[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="animate-in fade-in fixed inset-0 z-[100] flex flex-col bg-plum/95 backdrop-blur-md duration-300"
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <span className="eyebrow text-gold-soft">{item.category}</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="grid h-10 w-10 place-items-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory/10"
        >
          <X className="h-5 w-5" strokeWidth={1.4} />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-16">
        <button
          type="button"
          onClick={() => onNavigate((index - 1 + items.length) % items.length)}
          aria-label="Previous image"
          className="absolute left-2 z-10 grid h-11 w-11 place-items-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory/10 sm:left-5"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.4} />
        </button>

        <img
          key={item.id}
          src={item.image}
          alt={`${item.title} — ${item.description}`}
          className="animate-in fade-in zoom-in-95 max-h-full max-w-full object-contain duration-500"
        />

        <button
          type="button"
          onClick={() => onNavigate((index + 1) % items.length)}
          aria-label="Next image"
          className="absolute right-2 z-10 grid h-11 w-11 place-items-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory/10 sm:right-5"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.4} />
        </button>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-6 text-center">
        <h3 className="font-display text-2xl text-ivory">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ivory/70">{item.description}</p>
        {!item.realWork ? (
          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.22em] text-gold-soft/80">
            Studio reference image — finished work coming soon
          </p>
        ) : null}
        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.24em] text-ivory/40">
          {index + 1} / {items.length}
        </p>
      </div>
    </div>
  );
}

export function Portfolio({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (value: string) => void;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "ALL" ? portfolio : portfolio.filter((p) => p.category === filter)),
    [filter],
  );

  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Made By Hand. Made With Heart."
          subtitle="Explore some of our handcrafted creations."
        />

        <Reveal className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={cn(
                  "border px-5 py-2.5 text-[0.64rem] uppercase tracking-[0.22em] transition-all duration-300",
                  filter === category
                    ? "border-plum bg-plum text-ivory"
                    : "border-border text-muted-foreground hover:border-gold hover:text-plum",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 90} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block w-full overflow-hidden text-left"
              >
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.category.toLowerCase()} work by Punya`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block text-[0.6rem] uppercase tracking-[0.28em] text-gold-soft">
                    {item.category}
                  </span>
                  <span className="mt-2 block font-display text-2xl text-ivory">
                    {item.title}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 border border-gold-soft/0 transition-colors duration-500 group-hover:border-gold-soft/60"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null ? (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={close}
          onNavigate={setOpenIndex}
        />
      ) : null}
    </section>
  );
}
