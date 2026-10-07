import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { work, workCategories } from "../content";
import { ArrowUpRight, EASE, Eyebrow, MaskLine, Reveal, Section } from "./ui";

function ProjectImage({ image, className = "" }) {
  const mode = image?.fit ?? "cover";
  const tone = image?.tone ?? "#766ee8";
  const imageClass =
    mode === "icon"
      ? "object-contain p-[16%] drop-shadow-[0_0_52px_var(--project-tone)]"
      : mode === "contain"
        ? "object-contain p-[5%] drop-shadow-[0_0_34px_rgba(126,150,255,0.2)]"
        : "object-cover";

  return (
    <div
      className={`relative isolate overflow-hidden bg-[#080717] ${className}`}
      style={{ "--project-tone": tone }}
    >
      {mode !== "cover" && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-30"
            style={{
              background: `radial-gradient(circle at 50% 48%, ${tone} 0%, transparent 38%), linear-gradient(135deg, transparent 38%, ${tone}22 50%, transparent 62%)`,
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[72%] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full border opacity-20"
            style={{ borderColor: tone }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[48%] -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-full border opacity-15"
            style={{ borderColor: tone }}
          />
        </>
      )}
      <img
        src={image.src}
        alt={image.alt}
        className={`h-full w-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${imageClass}`}
        style={{ objectPosition: image.position ?? "center" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070613]/75 via-transparent to-[#8d85ff]/[0.06]" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
    </div>
  );
}

function ProjectCard({ item, onOpen }) {
  const cover = item.poster ?? item.images[0];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-line/90 bg-panel/70 shadow-[0_30px_80px_-60px_rgba(80,96,255,0.7)] transition-colors duration-500 hover:border-accent-dim/70">
      <button
        type="button"
        onClick={() => onOpen(item)}
        aria-label={`Open details for ${item.title}`}
        className="absolute inset-0 z-10 cursor-pointer"
      />

      <ProjectImage
        image={cover}
        className="aspect-[16/10] border-b border-line/80 [&_img]:group-hover:scale-[1.035]"
      />

      <div className="pointer-events-none flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.18em]">
          <span className="text-accent-dim">{item.tag}</span>
          <span className="text-faint">{item.year}</span>
        </div>

        <h4 className="display mt-4 text-[clamp(1.75rem,2.4vw,2.25rem)] leading-[1.02] text-ink">
          {item.title}
        </h4>

        {item.credit && (
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
            {item.credit}
          </p>
        )}

        <p className="mt-4 line-clamp-3 text-[14px] leading-[1.75] text-muted">
          {item.summary}
        </p>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2">
            {item.stack.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="border border-line/80 bg-void/35 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-faint"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line/70 pt-5">
            <span className="inline-flex items-center gap-2 text-[13px] text-accent transition-colors group-hover:text-accent-core">
              Details
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </span>

            {item.href && !item.wip && (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="pointer-events-auto relative z-20 inline-flex items-center gap-2 text-[12px] text-faint transition-colors hover:text-ink"
              >
                {item.linkLabel ?? "Visit website"}
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ selection, onClose }) {
  const item = selection?.item;
  const category = workCategories.find((c) => c.id === item?.category);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [item?.title]);

  useEffect(() => {
    if (!item) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-[#03030b] p-3 sm:p-6 lg:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative mx-auto min-h-full max-w-[1380px] overflow-hidden border border-line bg-[#090817] shadow-[0_0_120px_-36px_rgba(91,104,255,0.48)]"
            initial={{ opacity: 0, y: 42, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.99 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <button
              type="button"
              onClick={onClose}
              autoFocus
              aria-label="Close project details"
              className="absolute right-4 top-4 z-30 grid size-11 place-items-center rounded-full border border-white/15 bg-[#070612]/70 text-xl text-ink backdrop-blur-md transition-colors hover:border-accent hover:text-accent sm:right-6 sm:top-6"
            >
              ×
            </button>

            <div className="grid lg:min-h-[760px] lg:grid-cols-[minmax(0,1.25fr)_minmax(380px,0.75fr)]">
              <div className="relative flex min-h-[430px] flex-col bg-[#05040e] p-3 sm:p-6 lg:min-h-full">
                <ProjectImage
                  image={item.images[activeImage]}
                  className="min-h-[360px] flex-1 sm:min-h-[520px]"
                />

                {item.images.length > 1 && (
                  <div className="mt-3 grid grid-cols-4 gap-2 sm:mt-4 sm:gap-3">
                    {item.images.map((image, imageIndex) => (
                      <button
                        type="button"
                        key={image.src}
                        onClick={() => setActiveImage(imageIndex)}
                        aria-label={`Show image ${imageIndex + 1} of ${item.title}`}
                        className={`relative h-16 overflow-hidden border transition-colors sm:h-24 ${
                          activeImage === imageIndex
                            ? "border-accent"
                            : "border-line opacity-55 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt=""
                          className={`h-full w-full ${image.fit === "contain" || image.fit === "icon" ? "object-contain p-2" : "object-cover"}`}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative flex flex-col p-7 sm:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-3 pr-12">
                  {category && (
                    <span className="eyebrow text-accent-dim">{category.label}</span>
                  )}
                  <span className="border border-line px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                    {item.tag}
                  </span>
                  <span className="eyebrow">{item.year}</span>
                </div>

                <h2
                  id="project-dialog-title"
                  className="display mt-8 text-[clamp(2.5rem,5vw,5rem)] leading-[0.94] text-ink"
                >
                  {item.title}
                </h2>

                {item.credit && (
                  <p className="mt-5 inline-flex self-start border border-accent-dim/35 bg-accent/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent-dim">
                    {item.credit}
                  </p>
                )}

                <p className="mt-8 text-[15px] leading-[1.85] text-muted">
                  {item.details ?? item.summary}
                </p>

                <div className="mt-10 border-t border-line pt-8">
                  <p className="eyebrow">What it does</p>
                  <ul className="mt-5 space-y-3">
                    {item.highlights?.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-[13.5px] leading-relaxed text-muted"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-accent shadow-[0_0_12px_rgba(170,183,255,0.65)]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {item.stack.map((technology) => (
                    <span
                      key={technology}
                      className="border border-line/80 bg-void/45 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-faint"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-12">
                  {item.href && !item.wip && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-3 rounded-full border border-accent-core/30 bg-accent-core px-6 py-3 text-[13px] font-medium text-void shadow-[0_0_48px_-14px_rgba(164,177,255,0.75)] transition-transform hover:-translate-y-0.5"
                    >
                      {item.linkLabel ?? "Visit project"}
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}

                  {item.repo && (
                    <a
                      href={item.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 text-[13px] text-ink transition-colors hover:border-accent-dim"
                    >
                      View source
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

// Literal class names so Tailwind can see them
const GRID_COLS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

const groups = workCategories
  .map((category) => ({
    ...category,
    items: work.filter((item) => item.category === category.id),
  }))
  .filter((group) => group.items.length > 0);

function CategoryIndex({ active }) {
  return (
    <nav
      aria-label="Project categories"
      className="sticky top-[68px] z-30 -mx-6 border-y border-line/70 bg-ground/85 px-6 backdrop-blur-md sm:-mx-10 sm:px-10 lg:mx-0 lg:border-x lg:px-3"
    >
      <ul className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none]">
        {groups.map((group, index) => {
          const isActive = active === group.id;
          return (
            <li key={group.id} className="shrink-0">
              <a
                href={`#work-${group.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center gap-2.5 px-4 py-2 text-[13px] transition-colors duration-300 ${
                  isActive ? "bg-accent/10 text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <span className="font-mono text-[10px] text-accent-dim">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {group.label}
                <span className="font-mono text-[10px] text-faint">
                  {group.items.length}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function CategorySection({ group, index, onOpen }) {
  const cols = group.items.length % 3 === 0 ? 3 : 2;

  return (
    <section
      id={`work-${group.id}`}
      aria-labelledby={`work-${group.id}-title`}
      className="scroll-mt-40"
    >
      <Reveal className="grid gap-5 border-b border-line pb-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-end lg:gap-10">
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <span className="display text-2xl text-accent-dim">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            id={`work-${group.id}-title`}
            className="display text-[clamp(2rem,3.6vw,3rem)] leading-none text-ink"
          >
            {group.label}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {group.items.length} {group.items.length === 1 ? "project" : "projects"}
          </span>
        </div>
        <p className="text-[14px] leading-relaxed text-muted lg:text-right">
          {group.blurb}
        </p>
      </Reveal>

      <div className={`mt-8 grid gap-5 sm:mt-10 sm:gap-6 ${GRID_COLS[cols]}`}>
        {group.items.map((item, itemIndex) => (
          <Reveal key={item.title} delay={(itemIndex % cols) * 0.08} y={36}>
            <ProjectCard item={item} onOpen={onOpen} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function Work() {
  const [selection, setSelection] = useState(null);
  const [active, setActive] = useState(groups[0]?.id);

  // Highlight whichever category is crossing the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id.replace("work-", ""));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    groups.forEach((group) => {
      const element = document.getElementById(`work-${group.id}`);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Section id="work">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal>
              <Eyebrow>The Chronicle</Eyebrow>
            </Reveal>
            <h2 className="display mt-8 max-w-[16ch] text-[clamp(2.4rem,5.4vw,4.2rem)]">
              <MaskLine>Worlds, systems and useful things.</MaskLine>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-faint">
              {work.length} projects in {groups.length} groups. Open any of them
              for the full story, features and gallery, or go straight to the
              live release.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 sm:mt-16">
          <CategoryIndex active={active} />

          <div className="mt-14 space-y-24 sm:mt-16 sm:space-y-28">
            {groups.map((group, index) => (
              <CategorySection
                key={group.id}
                group={group}
                index={index}
                onOpen={(item) => setSelection({ item })}
              />
            ))}
          </div>
        </div>
      </Section>

      <ProjectModal selection={selection} onClose={() => setSelection(null)} />
    </>
  );
}
