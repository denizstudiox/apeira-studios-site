import { motion, useScroll, useTransform } from "framer-motion";

/**
 * The page descends: the living surface at the top, the vein network beneath
 * it, the apeiron at the very bottom. The background is that descent — the
 * world is stated here and in the artwork, never in words.
 */
export default function Backdrop() {
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 0.22, 0.5, 0.78, 1],
    ["#071410", "#0a1a14", "#0b0722", "#07071a", "#04050b"]
  );

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 -z-50"
      style={{ background }}
    />
  );
}
