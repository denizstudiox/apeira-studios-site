import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { site, nav } from "../content";
import { Mark, EASE } from "./ui";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line/80 bg-ground/72 shadow-[0_18px_55px_-38px_rgba(126,116,255,0.65)] backdrop-blur-2xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-[1240px] items-center justify-between px-6 sm:px-10 lg:px-14">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label={`${site.name} — home`}
          >
            <Mark className="size-6 text-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[360deg]" />
            <span className="wordmark text-[13px]">
              {site.short}
              <span className="text-faint"> Studios</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-[13px] tracking-tight text-muted transition-colors duration-300 hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="hidden rounded-full border border-line px-5 py-2 text-[13px] tracking-tight text-ink transition-colors duration-300 hover:border-accent-dim hover:text-accent sm:inline-block"
            >
              Get in touch
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 flex-col items-center justify-center gap-[5px] md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className={`h-px w-5 bg-ink transition-all duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-ink transition-all duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <motion.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-gradient-to-r from-accent-dim to-accent"
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 bg-ground/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-2 px-8">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.06 * i, ease: EASE }}
                  className="display flex items-baseline gap-4 border-b border-line py-5 text-4xl text-ink"
                >
                  <span className="eyebrow w-8 text-accent-dim">
                    0{i + 1}
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
