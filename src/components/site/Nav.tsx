import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { brand, navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold-soft/40 bg-ivory/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto]"
      >
        <a
          href="#home"
          className="min-w-0 font-display text-[0.95rem] tracking-[0.16em] text-plum sm:text-lg"
        >
          Wings<span className="text-rani">_Of_a_</span>design
          <span className="text-gold">_by_puu</span>
        </a>

        <ul className="hidden items-center justify-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[0.72rem] uppercase tracking-[0.24em] text-foreground/70 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-rani hover:after:origin-left hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${brand.instagram}`}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold-soft/70 text-plum transition-colors hover:border-gold hover:text-rani"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.4} />
          </a>
          <a
            href="#contact"
            className="hidden shrink-0 border border-plum/80 px-6 py-2.5 text-[0.68rem] uppercase tracking-[0.22em] text-plum transition-colors hover:bg-plum hover:text-ivory sm:inline-block"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-9 w-9 shrink-0 place-items-center text-plum lg:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-ivory transition-opacity duration-400 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display text-lg tracking-[0.16em] text-plum">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center text-plum"
          >
            <X className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>
        <ul className="mt-8 flex flex-col gap-7 px-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-plum"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12 px-8">
          <div className="gold-rule w-full" aria-hidden="true" />
          <a
            href={brand.phoneHref}
            className="mt-6 block text-sm tracking-[0.14em] text-muted-foreground"
          >
            {brand.phone}
          </a>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-sm tracking-[0.14em] text-rani"
          >
            {brand.instagram}
          </a>
        </div>
      </div>
    </header>
  );
}
