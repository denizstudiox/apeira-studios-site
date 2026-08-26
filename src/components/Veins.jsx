import { useId, useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const W = 1400;

/** Hues the trunks start from — the veins are deliberately not one colour. */
const HUES = [193, 214, 262, 296, 334, 22, 158, 178];

/**
 * Grows a branching vein network from the bottom edge upward.
 *
 * Deterministic: the same seed always produces the same network, so the SVG
 * is stable across renders and reloads. Every split narrows the stroke, so the
 * roots are thick and the tips end up as capillaries.
 */
function buildVeins(seed = 11, trunks = 9, hues = HUES, baseWidth = 9, H = 1000) {
  let s = seed >>> 0;
  const rnd = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };

  const out = [];

  const grow = (x, y, angle, width, depth, hue) => {
    if (width < 0.3 || y < -60 || depth > 8 || out.length > 900) return;

    const len = (70 + rnd() * 110) * (H / 1000);
    const a = angle + (rnd() - 0.5) * 0.42;
    const nx = x + Math.sin(a) * len * 0.65;
    const ny = y - Math.cos(a) * len;
    // control point keeps the segment curved rather than straight
    const cx = x + Math.sin(angle) * len * 0.22;
    const cy = y - Math.cos(angle) * len * 0.55;

    out.push({
      d: `M${x.toFixed(1)} ${y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${nx.toFixed(1)} ${ny.toFixed(1)}`,
      w: width,
      hue,
      depth,
    });

    const splits = depth < 6 && rnd() > 0.22 ? 2 : 1;
    for (let i = 0; i < splits; i++) {
      const spread = splits === 2 ? (i === 0 ? -1 : 1) * (0.22 + rnd() * 0.5) : (rnd() - 0.5) * 0.3;
      grow(
        nx,
        ny,
        a + spread,
        width * (splits === 2 ? 0.68 + rnd() * 0.08 : 0.88),
        depth + 1,
        hue + (rnd() - 0.5) * 16
      );
    }
  };

  for (let i = 0; i < trunks; i++) {
    const x = (W / (trunks + 1)) * (i + 1) + (rnd() - 0.5) * 90;
    grow(x, H + 30, (rnd() - 0.5) * 0.24, baseWidth, 0, hues[i % hues.length]);
  }

  return out;
}

/**
 * The second layer, rendered as a living network.
 *
 * A scroll-driven mask uncovers the network from the roots upward, so the
 * veins appear to grow as you climb through the layer.
 */
export default function Veins({
  className = "",
  seed = 11,
  trunks = 9,
  hues = HUES,
  baseWidth = 9,
  saturation = 88,
  height = 1000,
  direction = "up",
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const glowId = `vein-glow-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const veins = useMemo(
    () => buildVeins(seed, trunks, hues, baseWidth, height),
    [seed, trunks, hues, baseWidth, height]
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // The network uncovers itself in the direction you are travelling: reading
  // downward, the capillaries arrive first and the roots last.
  const cut = useTransform(scrollYProgress, [0.02, 0.62], ["-8%", "118%"]);
  const side = direction === "down" ? "bottom" : "top";
  const maskImage = useTransform(
    cut,
    (v) =>
      `linear-gradient(to ${side}, transparent 0%, #000 6%, #000 ${v}, transparent calc(${v} + 20%))`
  );

  return (
    <div ref={ref} className={`pointer-events-none ${className}`}>
      <motion.div
        className="h-full w-full"
        style={
          reduce
            ? undefined
            : { maskImage, WebkitMaskImage: maskImage }
        }
      >
        <svg
          viewBox={`0 0 ${W} ${height}`}
          preserveAspectRatio="xMidYMax slice"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          {/* soft bloom underneath */}
          <g filter={`url(#${glowId})`} opacity="0.5">
            {veins.map((v, i) =>
              v.depth < 4 ? (
                <path
                  key={`g${i}`}
                  d={v.d}
                  fill="none"
                  strokeLinecap="round"
                  stroke={`hsl(${v.hue} 90% 60%)`}
                  strokeWidth={v.w * 2.1}
                  opacity={0.5}
                />
              ) : null
            )}
          </g>

          {/* the veins themselves */}
          <g>
            {veins.map((v, i) => (
              <path
                key={i}
                d={v.d}
                fill="none"
                strokeLinecap="round"
                stroke={`hsl(${v.hue} ${saturation - v.depth * 4}% ${Math.min(58 + v.depth * 4, 72)}%)`}
                strokeWidth={v.w}
                opacity={0.4 + Math.min(v.depth, 6) * 0.02}
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
