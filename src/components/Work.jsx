import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { work } from "../content";
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
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070613]/75 via-transparent to-[#8d85ff]/[0.06]" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
    </div>
  );
}

function ProjectPoster({ item, index, className = "" }) {
  const poster = item.poster ?? item.images[0];
  const mode = poster.fit ?? "cover";
  const tone = poster.tone ?? "#766ee8";
  const imageClass =
    mode === "icon"
      ? "object-contain p-[19%] sm:p-[17%]"
      : mode === "contain"
        ? "object-contain p-[8%] sm:p-[7%]"
        : "object-cover";

  return (
    <div
      className={`relative isolate overflow-hidden bg-[#070611] ${className}`}
      style={{ "--project-tone": tone }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-45"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${tone}88 0%, transparent 44%), linear-gradient(145deg, #090816 18%, ${tone}22 62%, #05040d 100%)`,
        }}
      />

      <img
        src={poster.src}
        alt={poster.alt}
        className={`h-full w-full transition duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${imageClass} ${
          mode === "cover" ? "opacity-90" : "opacity-80 drop-shadow-[0_0_48px_var(--project-tone)]"
        }`}
        style={{ objectPosition: poster.position ?? "center" }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,3,12,0.12)_0%,rgba(4,3,12,0.04)_38%,rgba(4,3,12,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-white/[0.07]" />
      <div className="pointer-events-none absolute inset-y-0 right-[8%] w-px bg-white/[0.07]" />

      <div className="pointer-events-none absolute inset-x-[8%] top-6 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.22em] text-white/60 sm:top-8 sm:text-[9px]">
        <span>Apeira / {String(index + 1).padStart(2, "0")}</span>
        <span>{item.year}</span>
      </div>

      <div className="pointer-events-none absolute inset-x-[8%] bottom-7 sm:bottom-9">
        <span
          className="mb-3 block h-px w-12 sm:mb-4"
          style={{ backgroundColor: tone, boxShadow: `0 0 18px ${tone}` }}
        />
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/55 sm:text-[9px]">
          {item.tag} · Project archive
        </p>
        <h4 className="display mt-2 max-w-[11ch] text-[clamp(2rem,4.2vw,4rem)] leading-[0.88] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.8)]">
          {item.title}
        </h4>
      </div>

      <div className="pointer-events-none absolute inset-3 border border-white/[0.08] sm:inset-4" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08]" />
    </div>
  );
}

function ProjectCard({ item, index, onOpen }) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.95, ease: EASE }}
      className="group relative overflow-hidden border border-line/90 bg-panel/70 shadow-[0_34px_100px_-64px_rgba(80,96,255,0.72)] transition-colors duration-700 hover:border-accent-dim/70"
    >
      <button
        type="button"
        onClick={() => onOpen(item, index)}
        aria-label={`Open details for ${item.title}`}
        className="absolute inset-0 z-10 cursor-pointer"
      />

      <div className="grid min-h-[520px] lg:h-[540px] lg:min-h-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)]">
        <ProjectPoster
          item={item}
          index={index}
          className={`h-[330px] sm:h-[430px] lg:h-full ${
            reversed ? "lg:order-2" : ""
          } [&_img]:group-hover:scale-[1.035] [&_img]:group-hover:brightness-110`}
        />

        <div
          className={`pointer-events-none relative flex min-h-[330px] flex-col justify-between p-7 sm:p-10 ${
            reversed ? "lg:order-1" : ""
          }`}
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="display text-lg text-accent-dim">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="border border-line px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                {item.tag}
              </span>
              {item.credit && (
                <span className="border border-accent-dim/35 bg-accent/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-accent-dim">
                  {item.credit}
                </span>
              )}
            </div>

            <p className="eyebrow mt-10">{item.year}</p>
            <h3 className="display mt-4 text-[clamp(2rem,3.5vw,3.25rem)] leading-[0.98] text-ink">
              {item.title}
            </h3>
            <p className="mt-6 line-clamp-4 text-[14px] leading-[1.8] text-muted lg:line-clamp-3">
              {item.summary}
            </p>
          </div>

          <div className="mt-10">
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

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="inline-flex items-center gap-2 text-[13px] text-accent transition-colors group-hover:text-accent-core">
                Explore project
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </span>

              {item.href && !item.wip && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="pointer-events-auto relative z-20 inline-flex items-center gap-2 border-b border-line pb-1 text-[12px] text-faint transition-colors hover:border-accent hover:text-ink"
                >
                  Visit website
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </div>
          </div>

          <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent via-[#b169ff] to-transparent transition-all duration-1000 group-hover:w-full" />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ selection, onClose }) {
  const item = selection?.item;
  const index = selection?.index ?? 0;
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
                  <span className="display text-xl text-accent-dim">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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
                      Visit project
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

export default function Work() {
  const [selection, setSelection] = useState(null);

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
              Enter each project for its story, features and gallery — or jump
              straight to the live release.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-8 sm:mt-20 sm:space-y-12">
          {work.map((item, index) => (
            <ProjectCard
              key={item.title}
              item={item}
              index={index}
              onOpen={(selectedItem, selectedIndex) =>
                setSelection({ item: selectedItem, index: selectedIndex })
              }
            />
          ))}
        </div>
      </Section>

      <ProjectModal selection={selection} onClose={() => setSelection(null)} />
    </>
  );
}
