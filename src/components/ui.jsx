import { motion } from "framer-motion";

/* ------------------------------------------------------------------ *
 * Shared motion presets
 * ------------------------------------------------------------------ */
export const EASE = [0.16, 1, 0.3, 1];

/** Fade + rise as the element scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
  ...rest
}) {
  const M = motion[as] ?? motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  );
}

/**
 * A line of text that slides up from behind a mask.
 *
 * The in-view trigger lives on the *clipping* element, not the moving one:
 * the inner span starts translated fully outside the mask, and an ancestor
 * with `overflow: hidden` clips it out of the IntersectionObserver rect, so
 * watching the inner span would mean it never comes into view at all.
 */
export function MaskLine({ children, delay = 0, className = "" }) {
  return (
    <motion.span
      className="block overflow-hidden pb-[0.12em]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.span
        className={`block ${className}`}
        variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/**
 * Section marker — a chapter numeral, a hairline, and the section name.
 * Reads like the running head of a codex.
 */
export function Eyebrow({ numeral, children, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {numeral && (
        <span className="display text-lg leading-none text-accent-dim">
          {numeral}
        </span>
      )}
      <span className="h-px w-10 bg-gradient-to-r from-gold/80 via-accent-dim to-transparent" />
      <span className="eyebrow text-accent">{children}</span>
    </div>
  );
}

/** Small centred diamond divider. */
export function Ornament({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-line" />
      <span className="size-1.5 rotate-45 border border-gold/70 shadow-[0_0_14px_rgba(201,169,106,0.35)]" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-line" />
    </div>
  );
}

/** Section wrapper: consistent rhythm + top hairline. */
export function Section({ id, children, className = "", rule = true }) {
  return (
    <section id={id} className={`relative ${className}`}>
      {rule && <div className="rule-x absolute inset-x-0 top-0 h-px" />}
      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 sm:px-10 md:py-32 lg:px-14">
        {children}
      </div>
    </section>
  );
}

/** Primary / ghost button with a sliding fill. */
export function Button({ href, children, variant = "primary", ...rest }) {
  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-500";
  const styles =
    variant === "primary"
      ? "border border-accent-core/30 bg-accent-core text-void shadow-[0_0_48px_-14px_rgba(164,177,255,0.75)]"
      : "border border-line bg-void/15 text-ink backdrop-blur-sm hover:border-accent-dim";

  return (
    <a href={href} className={`${base} ${styles}`} {...rest}>
      {variant === "ghost" && (
        <span className="absolute inset-0 -z-10 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
      )}
      <span
        className={
          variant === "ghost"
            ? "relative transition-colors duration-500 group-hover:text-void"
            : "relative"
        }
      >
        {children}
      </span>
      <Arrow
        className={
          variant === "ghost"
            ? "relative size-3.5 transition-all duration-500 group-hover:translate-x-1 group-hover:text-void"
            : "relative size-3.5 transition-transform duration-500 group-hover:translate-x-1"
        }
      />
    </a>
  );
}

/* ------------------------------------------------------------------ *
 * Icons (inline — no icon dependency)
 * ------------------------------------------------------------------ */
export function Arrow({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 11L11 5M11 5H5.8M11 5v5.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Studio mark: an A drawn as a flame tip. */
export function Mark({ className = "size-7" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 9 C34 22 41 30 44 38 L50 54 H41.6 L32 30 L22.4 54 H14 L20 38 C23 30 30 22 32 9 Z"
        fill="currentColor"
      />
      <rect x="23" y="42" width="18" height="3.2" rx="1.6" fill="currentColor" />
    </svg>
  );
}
