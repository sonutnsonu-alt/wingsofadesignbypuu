import { brand, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-gold-soft/40 bg-plum py-16 text-ivory">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-[0.1em]">{brand.name}</p>
            <p className="mt-3 font-display text-lg italic text-gold-soft">
              Handmade means Heart-Made ♡
            </p>
            <p className="mt-4 text-sm text-ivory/60">{brand.secondaryTagline}</p>
          </div>

          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.26em] text-gold-soft">
              Explore
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-ivory/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold-soft">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.26em] text-gold-soft">
              Get in touch
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li>{brand.artist}</li>
              <li>
                <a href={brand.phoneHref} className="hover:text-gold-soft">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-soft"
                >
                  {brand.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-rule mt-14" aria-hidden="true" />
        <p className="mt-6 text-center text-[0.68rem] tracking-[0.14em] text-ivory/50">
          © 2026 {brand.name}. All Rights Reserved.
        </p>

        <div className="mt-5 flex flex-col items-center gap-1.5 text-center">
          <p className="text-[0.6rem] uppercase tracking-[0.26em] text-gold-soft/70">
            Website by Sonu N
          </p>
          <p className="max-w-md text-[0.68rem] leading-relaxed text-ivory/40">
            Let’s build your website. Reach out at{" "}
            <a
              href="tel:6366902141"
              className="border-b border-gold-soft/30 pb-px transition-colors hover:text-gold-soft"
            >
              6366902141
            </a>{" "}
            or{" "}
            <a
              href="mailto:sonutnsonu@gmail.com"
              className="break-all border-b border-gold-soft/30 pb-px transition-colors hover:text-gold-soft"
            >
              sonutnsonu@gmail.com
            </a>
            .
          </p>
        </div>

      </div>
    </footer>
  );
}
