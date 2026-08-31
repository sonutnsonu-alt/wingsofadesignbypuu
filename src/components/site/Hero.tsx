import { ArrowDown } from "lucide-react";

const sparkles = [
  { top: "18%", left: "12%", delay: "0s" },
  { top: "30%", left: "82%", delay: "1.2s" },
  { top: "62%", left: "24%", delay: "2.1s" },
  { top: "72%", left: "70%", delay: "0.7s" },
  { top: "44%", left: "50%", delay: "3s" },
  { top: "12%", left: "60%", delay: "1.8s" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* soft luxury gradient ground */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 10%, var(--blush) 0%, transparent 55%)," +
            "radial-gradient(100% 80% at 90% 20%, var(--peach) 0%, transparent 60%)," +
            "radial-gradient(90% 70% at 70% 100%, color-mix(in oklab, var(--rani) 18%, transparent) 0%, transparent 65%)," +
            "linear-gradient(180deg, var(--ivory) 0%, var(--ivory) 100%)",
        }}
      />

      {/* fabric texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, color-mix(in oklab, var(--gold) 7%, transparent) 0 1px, transparent 1px 7px)," +
            "repeating-linear-gradient(-45deg, color-mix(in oklab, var(--rose) 6%, transparent) 0 1px, transparent 1px 7px)",
        }}
      />

      {/* thread line illustration */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 700"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-50"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-40 520 C 220 380, 320 660, 600 470 S 980 260, 1260 400"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
          strokeDasharray="7 9"
          opacity="0.55"
        />
        <path
          d="M-40 180 C 260 300, 420 60, 700 170 S 1020 300, 1260 150"
          fill="none"
          stroke="var(--rose)"
          strokeWidth="1"
          opacity="0.4"
        />
        <g stroke="var(--gold)" strokeWidth="1" fill="none" opacity="0.6">
          <ellipse cx="1075" cy="120" rx="4" ry="12" />
          <line x1="1075" y1="132" x2="1075" y2="196" />
        </g>
      </svg>

      {/* floating beads */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <span className="animate-float-slow absolute left-[8%] top-[24%] block h-24 w-24 rounded-full border border-gold-soft/60" />
        <span
          className="animate-float-slow absolute right-[10%] top-[58%] block h-16 w-16 rounded-full border border-rose/40"
          style={{ animationDelay: "2.5s" }}
        />
        <span
          className="animate-float-slow absolute left-[46%] top-[12%] block h-3 w-3 rounded-full bg-gold/60"
          style={{ animationDelay: "1.4s" }}
        />
        {sparkles.map((s) => (
          <span
            key={`${s.top}-${s.left}`}
            className="animate-sparkle absolute block h-1.5 w-1.5 rotate-45 bg-gold"
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 pb-24 pt-32 text-center sm:px-8">
        <p className="eyebrow animate-in fade-in duration-1000">
          {"Handcrafted Embroidery Studio · India"}
        </p>

        <h1 className="animate-in fade-in slide-in-from-bottom-6 mt-7 font-display text-[2.1rem] leading-[1.05] text-plum duration-1000 sm:text-6xl lg:text-[5.2rem]">
          <span className="block">Wings_Of_a_design</span>
          <span className="block italic text-rani">_by_puu</span>
        </h1>

        <div className="mx-auto mt-8 flex max-w-md items-center gap-4">
          <div className="gold-rule flex-1" aria-hidden="true" />
          <p className="shrink-0 font-display text-xl italic text-gold sm:text-2xl">
            Handmade means Heart-Made
          </p>
          <div className="gold-rule flex-1" aria-hidden="true" />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
          Beautiful handcrafted embroidery and fashion detailing, carefully created by
          Punya.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#work"
            className="w-full max-w-xs bg-plum px-9 py-4 text-[0.7rem] uppercase tracking-[0.26em] text-ivory transition-all duration-300 hover:bg-rani sm:w-auto"
          >
            Explore Our Work
          </a>
          <a
            href="#contact"
            className="w-full max-w-xs border border-plum/50 px-9 py-4 text-[0.7rem] uppercase tracking-[0.26em] text-plum transition-all duration-300 hover:border-plum hover:bg-plum/5 sm:w-auto"
          >
            Contact Punya
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gold sm:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative grid h-9 w-5 place-items-start justify-center rounded-full border border-gold/60 pt-1.5">
          <ArrowDown className="animate-scroll-dot h-2.5 w-2.5" strokeWidth={2} />
        </span>
      </a>
    </section>
  );
}
