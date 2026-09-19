import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero } from "../content";
import { Button, EASE } from "./ui";
import { Fireflies } from "./Landscape";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.035, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* ---- The threshold ---- */}
      <div className="absolute inset-0 -z-10">
        <motion.img
          src="/apeira-dream-hero.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="dream-hero-image absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ y: imageY, scale: imageScale }}
        />
        <div className="dream-vignette pointer-events-none absolute inset-0" />
        <div className="dream-aurora pointer-events-none absolute inset-0" />
        <div className="dream-orbit pointer-events-none absolute right-[8%] top-[14%] hidden size-[min(43vw,620px)] lg:block" />
        <Fireflies count={22} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070611] via-[#070611]/82 to-transparent" />
      </div>

      {/* ---- Content ---- */}
      <motion.div
        style={{ y, opacity }}
        className="mx-auto w-full max-w-[1240px] px-6 pb-20 pt-32 will-change-transform sm:px-10 lg:px-14"
      >
        <div className="lg:max-w-[61%]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="mystic-kicker mb-10 inline-flex items-center gap-2.5 border border-line/80 bg-panel/35 py-2 pl-3 pr-4 backdrop-blur-md"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            <span className="eyebrow text-muted">{hero.status}</span>
          </motion.div>

          <h1 className="display text-gradient text-[clamp(3rem,6.5vw,5.65rem)] leading-[0.92]">
            {hero.headline.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "112%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.25, delay: 0.45 + i * 0.12, ease: EASE }}
                >
                  {line.map((part, j) =>
                    part.glow ? (
                      <em key={j} className="text-glow not-italic">
                        {part.t}
                      </em>
                    ) : (
                      <span key={j}>{part.t}</span>
                    )
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: EASE }}
            className="mt-9 max-w-[35rem] text-[15px] leading-[1.8] text-muted sm:text-[16px]"
          >
            {hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: EASE }}
            className="mt-11 flex flex-wrap items-center gap-3"
          >
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.25, ease: EASE }}
            className="mystic-stats mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden border border-line/80 bg-line/70 backdrop-blur-xl sm:grid-cols-4"
          >
            {hero.stats.map((s) => (
              <div key={s.label} className="group relative bg-void/55 px-5 py-5 transition-colors duration-500 hover:bg-panel/80">
                <dt className="display text-3xl text-ink">{s.value}</dt>
                <dd className="eyebrow mt-2 text-[10px]">{s.label}</dd>
                <span className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="pointer-events-none absolute bottom-8 right-6 hidden items-center gap-3 sm:right-10 md:flex lg:right-14"
      >
        <span className="eyebrow">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-line">
          <span className="animate-scroll-cue absolute inset-x-0 top-0 h-4 bg-accent" />
        </span>
      </motion.div>
    </section>
  );
}
