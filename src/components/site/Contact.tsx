import { useState, type FormEvent } from "react";
import { Instagram, Phone } from "lucide-react";
import { toast } from "sonner";
import { brand } from "@/data/site";
import { Reveal } from "./Reveal";

const fieldClass =
  "w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const work = String(data.get("work") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const text = `Hello Punya! I'm ${name}.%0APhone: ${phone}%0AType of work: ${work}%0A%0A${message}`;
    window.open(
      `https://wa.me/918147406201?text=${encodeURIComponent(
        decodeURIComponent(text),
      )}`,
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("Thank you! Your enquiry is ready to send to Punya.");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background:
          "radial-gradient(90% 80% at 20% 0%, var(--blush) 0%, transparent 60%)," +
          "radial-gradient(80% 70% at 90% 100%, color-mix(in oklab, var(--plum) 12%, transparent) 0%, transparent 60%)," +
          "linear-gradient(180deg, var(--ivory), color-mix(in oklab, var(--blush) 60%, var(--ivory)))",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] text-plum sm:text-6xl">
              Let&apos;s Create Something{" "}
              <span className="italic text-rani">Beautiful</span>
            </h2>
            <div className="gold-rule mt-7 w-32" aria-hidden="true" />
            <p className="mt-7 max-w-md text-[0.98rem] leading-[1.9] text-muted-foreground">
              Have a design in mind? Let&apos;s turn your idea into a beautiful handmade
              creation.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-gold">
                  Studio
                </dt>
                <dd className="mt-1 text-plum">
                  {brand.artist} · {brand.name}
                </dd>
              </div>
              <div>
                <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-gold">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a href={brand.phoneHref} className="text-plum hover:text-rani">
                    {brand.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-gold">
                  Instagram
                </dt>
                <dd className="mt-1">
                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-plum hover:text-rani"
                  >
                    {brand.instagram}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={brand.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 bg-plum px-8 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-ivory transition-colors hover:bg-rani"
              >
                <Phone className="h-4 w-4" strokeWidth={1.4} />
                Call Punya
              </a>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border border-plum/50 px-8 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-plum transition-colors hover:bg-plum/5"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.4} />
                Instagram
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <form
            onSubmit={onSubmit}
            className="border border-gold-soft/60 bg-card/70 p-8 backdrop-blur-sm sm:p-10"
          >
            <h3 className="font-display text-2xl text-plum">Send an enquiry</h3>
            <div className="mt-8 space-y-7">
              <div>
                <label
                  htmlFor="name"
                  className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+91"
                  className={fieldClass}
                />
              </div>
              <div>
                <label
                  htmlFor="work"
                  className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground"
                >
                  Type of Work
                </label>
                <input
                  id="work"
                  name="work"
                  placeholder="Beads, Zardosi, Stone…"
                  className={fieldClass}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell Punya about your design idea"
                  className={`${fieldClass} resize-none`}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-9 w-full bg-rani px-8 py-4 text-[0.68rem] uppercase tracking-[0.26em] text-ivory transition-colors hover:bg-plum"
            >
              Send Enquiry
            </button>
            <p className="mt-4 text-center text-[0.7rem] text-muted-foreground">
              {sent
                ? "Enquiry opened in WhatsApp — press send there."
                : "Your enquiry opens in WhatsApp so Punya can reply personally."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
