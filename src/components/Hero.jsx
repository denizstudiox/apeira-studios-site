import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero } from "../content";
import { Button, EASE } from "./ui";
import Landscape, { Fireflies } from "./Landscape";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* ---- The surface ---- */}
      <div className="absolute inset-0 -z-10">
        <Landscape className="h-full w-full" scrollProgress={scrollYProgress} />
        <Fireflies />

        {/* keeps the type readable over the sky */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,7,13,0.88)_0%,rgba(4,7,13,0.6)_46%,rgba(4,7,13,0.18)_76%,transparent_100%)] lg:bg-[linear-gradient(to_right,rgba(4,7,13,0.82)_0%,rgba(4,7,13,0.45)_46%,transparent_78%)]"  />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#040f0d] to-transparent" />
      </div>

      {/* ---- Content ---- */}
      <motion.div
        style={{ y, opacity }}
        className="mx-auto w-full max-w-[1240px] px-6 pb-24 pt-32 sm:px-10 lg:px-14"
      >
        <div className="lg:max-w-[64%]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/60 py-1.5 pl-3 pr-4 backdrop-blur-sm"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            <span className="eyebrow text-muted">{hero.status}</span>
          </motion.div>

          <h1 className="display text-gradient text-[clamp(2.6rem,6.2vw,5.2rem)]">
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
            className="mt-9 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px]"
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
            className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line/70 backdrop-blur-md sm:grid-cols-4"
          >
            {hero.stats.map((s) => (
              <div key={s.label} className="bg-void/70 px-5 py-5">
                <dt className="display text-3xl text-ink">{s.value}</dt>
                <dd className="eyebrow mt-2 text-[10px]">{s.label}</dd>
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
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-accent"
            animate={{ y: [-16, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
