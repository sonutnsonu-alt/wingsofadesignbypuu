import { processSteps } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="The Process"
          title="From Idea To Creation"
          subtitle="Four calm steps, from your first message to a finished handmade piece."
        />

        <div className="relative mt-20">
          {/* thread line: horizontal on desktop, vertical on mobile */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 40"
            preserveAspectRatio="none"
            className="absolute left-0 top-8 hidden h-10 w-full md:block"
          >
            <path
              d="M0 20 C 150 0, 200 40, 350 20 S 600 0, 700 20 S 900 40, 1000 20"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1"
              strokeDasharray="6 8"
              opacity="0.7"
            />
          </svg>
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[1.4rem] top-6 w-px border-l border-dashed border-gold/50 md:hidden"
          />

          <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 120}>
                <div className="flex gap-6 md:block">
                  <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold bg-background font-display text-lg text-rani">
                    {step.number}
                  </div>
                  <div className="min-w-0 md:mt-8">
                    <h3 className="font-display text-2xl leading-tight text-plum">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
