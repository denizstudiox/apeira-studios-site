import { useRef } from "react";
import { motion } from "framer-motion";
import { work } from "../content";
import { ArrowUpRight, EASE, Eyebrow, MaskLine, Reveal, Section } from "./ui";

function Card({ item, index }) {
  const ref = useRef(null);

  // Spotlight that follows the pointer inside the card
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const isLink = Boolean(item.href) && !item.wip;

  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.1, ease: EASE }}
      className={item.featured ? "md:col-span-2" : ""}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        className={`plate group relative h-full overflow-hidden rounded-2xl border border-line bg-panel/70 p-8 transition-colors duration-500 hover:border-accent-dim/60 sm:p-10 ${
          item.wip ? "border-dashed" : ""
        }`}
      >
        {/* pointer spotlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-[0.11]"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx) var(--my), currentColor, transparent 65%)",
          }}
        />

        {/* The whole card is clickable; the Source link below still wins. */}
        {isLink && (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${item.title} — ${item.linkLabel ?? "View project"}`}
            className="absolute inset-0 z-10"
          />
        )}

        <div className="relative flex items-start justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="display text-[16px] leading-none text-accent-dim">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-line px-3 py-1 text-[11px] tracking-tight text-muted">
              {item.tag}
            </span>
            {item.wip && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-dim/50 px-3 py-1 text-[11px] tracking-tight text-accent">
                <span className="size-1 animate-pulse rounded-full bg-accent" />
                In development
              </span>
            )}
          </div>
          <span className="eyebrow shrink-0">{item.year}</span>
        </div>

        <h3
          className={`display mt-8 text-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 ${
            item.featured
              ? "text-[clamp(2.2rem,4.6vw,3.4rem)]"
              : "text-[clamp(1.8rem,3vw,2.4rem)]"
          }`}
        >
          {item.title}
        </h3>

        <p
          className={`mt-4 text-[14.5px] leading-relaxed text-muted ${
            item.featured ? "max-w-2xl" : ""
          }`}
        >
          {item.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {item.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-line/80 bg-void/50 px-2.5 py-1 font-mono text-[11px] text-faint transition-colors duration-500 group-hover:text-muted"
            >
              {s}
            </span>
          ))}
        </div>

        {(isLink || item.repo) && (
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            {isLink && (
              <span className="inline-flex items-center gap-2 text-[13px] tracking-tight text-faint transition-colors duration-500 group-hover:text-accent">
                {item.linkLabel ?? "View project"}
                <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            )}
            {item.repo && (
              <a
                href={item.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="relative z-20 inline-flex items-center gap-2 text-[13px] tracking-tight text-faint underline-offset-4 transition-colors duration-300 hover:text-ink hover:underline"
              >
                Source
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>
        )}

        {/* bottom sweep line */}
        <span className="absolute inset-x-0 bottom-0 h-px w-0 bg-gradient-to-r from-accent via-accent-deep to-transparent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <Section id="work">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <Reveal>
            <Eyebrow>The Chronicle</Eyebrow>
          </Reveal>
          <h2 className="display mt-8 max-w-[16ch] text-[clamp(2.4rem,5.4vw,4.2rem)]">
            <MaskLine>Things that got built.</MaskLine>
          </h2>
        </div>
        <Reveal delay={0.2}>
          <p className="max-w-xs text-sm leading-relaxed text-faint">
            Games, mods, apps and tools — shipped on CurseForge, Google Play and
            the Chrome Web Store.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {work.map((item, i) => (
          <Card key={item.title} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}
