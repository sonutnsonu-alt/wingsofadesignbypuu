import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header" | "figure";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Component = Tag as "div";
  return (
    <Component
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 text-4xl leading-[1.1] text-plum sm:text-5xl md:text-6xl">
        {title}
      </h2>
      <div
        className={cn("gold-rule mt-6 w-28", align === "center" && "mx-auto")}
        aria-hidden="true"
      />
      {subtitle ? (
        <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
