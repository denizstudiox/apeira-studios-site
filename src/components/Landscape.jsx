import { useMemo } from "react";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

const W = 1600;
const H = 900;

/* ------------------------------------------------------------------ *
 * Small geometry helpers
 * ------------------------------------------------------------------ */

/** Catmull-Rom through the given points, emitted as a smooth cubic path. */
function ridgePath(pts) {
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  return `${d} L${W} ${H} L0 ${H} Z`;
}

/** Height of a ridge at x, by linear interpolation between its points. */
function yAt(pts, x) {
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[i + 1];
    if (x >= x1 && x <= x2) return y1 + ((y2 - y1) * (x - x1)) / (x2 - x1);
  }
  return pts[pts.length - 1][1];
}

/** Deterministic pseudo-random — the scene must not reshuffle on re-render. */
function makeRng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/** A conifer silhouette rooted on the ridge. */
function pine(x, y, h) {
  const w = h * 0.42;
  return (
    `M${x.toFixed(1)} ${(y - h).toFixed(1)}` +
    ` L${(x + w * 0.5).toFixed(1)} ${(y - h * 0.52).toFixed(1)}` +
    ` L${(x + w * 0.28).toFixed(1)} ${(y - h * 0.54).toFixed(1)}` +
    ` L${(x + w).toFixed(1)} ${(y + 4).toFixed(1)}` +
    ` L${(x - w).toFixed(1)} ${(y + 4).toFixed(1)}` +
    ` L${(x - w * 0.28).toFixed(1)} ${(y - h * 0.54).toFixed(1)}` +
    ` L${(x - w * 0.5).toFixed(1)} ${(y - h * 0.52).toFixed(1)} Z`
  );
}

const RIDGE_FAR = [
  [0, 585], [200, 548], [370, 572], [540, 534], [720, 566],
  [900, 528], [1080, 562], [1260, 530], [1440, 560], [1600, 536],
];
const RIDGE_MID = [
  [0, 668], [190, 640], [380, 676], [560, 646], [760, 680],
  [950, 648], [1140, 682], [1330, 652], [1500, 676], [1600, 662],
];
const RIDGE_NEAR = [
  [0, 754], [220, 736], [420, 768], [640, 744], [860, 772],
  [1080, 748], [1300, 776], [1480, 752], [1600, 762],
];
const RIDGE_FORE = [
  [0, 840], [260, 826], [520, 850], [800, 832], [1080, 854],
  [1360, 834], [1600, 846],
];

export default function Landscape({ className = "", scrollProgress }) {
  const reduce = useReducedMotion();

  const scene = useMemo(() => {
    const rnd = makeRng(23);

    const stars = Array.from({ length: 46 }, () => ({
      x: rnd() * W,
      y: 30 + rnd() * 430,
      r: 0.6 + rnd() * 1.5,
      o: 0.25 + rnd() * 0.55,
    }));

    const midPines = [];
    for (let x = 30; x < W; x += 34 + rnd() * 30) {
      midPines.push(pine(x, yAt(RIDGE_MID, x) + 2, 26 + rnd() * 26));
    }

    const nearPines = [];
    for (let x = 10; x < W; x += 46 + rnd() * 44) {
      nearPines.push(pine(x, yAt(RIDGE_NEAR, x) + 2, 40 + rnd() * 40));
    }

    // foreground grass, drawn as curved blades off the bottom edge
    const blades = [];
    for (let x = -20; x < W + 20; x += 7 + rnd() * 12) {
      const h = 26 + rnd() * 66;
      const bend = (rnd() - 0.5) * 42;
      const base = yAt(RIDGE_FORE, Math.max(0, Math.min(W, x))) + 30;
      blades.push(
        `M${x.toFixed(1)} ${base.toFixed(1)} Q${(x + bend * 0.4).toFixed(1)} ${(base - h * 0.6).toFixed(1)} ${(x + bend).toFixed(1)} ${(base - h).toFixed(1)}`
      );
    }

    return { stars, midPines, nearPines, blades };
  }, []);

  // Parallax: the nearer the layer, the further it travels
  const fallback = useMotionValue(0);
  const p = scrollProgress ?? fallback;
  const yFar = useTransform(p, [0, 1], [0, 14]);
  const yMid = useTransform(p, [0, 1], [0, 34]);
  const yNear = useTransform(p, [0, 1], [0, 62]);
  const yFore = useTransform(p, [0, 1], [0, 98]);
  const drift = (mv) => (reduce ? undefined : { y: mv });

  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="ls-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#04070d" />
            <stop offset="38%" stopColor="#07161f" />
            <stop offset="66%" stopColor="#0c2a29" />
            <stop offset="84%" stopColor="#1b4234" />
            <stop offset="100%" stopColor="#356038" />
          </linearGradient>

          <radialGradient id="ls-sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffeec2" stopOpacity="0.9" />
            <stop offset="28%" stopColor="#ffd98a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffb765" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="ls-haze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7fd99a" stopOpacity="0" />
            <stop offset="100%" stopColor="#a8e6b4" stopOpacity="0.16" />
          </linearGradient>
        </defs>

        {/* sky */}
        <rect width={W} height={H} fill="url(#ls-sky)" />

        {/* stars */}
        <g>
          {scene.stars.map((s, i) => (
            <circle
              key={i}
              cx={s.x.toFixed(1)}
              cy={s.y.toFixed(1)}
              r={s.r.toFixed(2)}
              fill="#d8e9ff"
              opacity={s.o.toFixed(2)}
            />
          ))}
        </g>

        {/* low sun and the haze it throws along the horizon */}
        <circle cx="1180" cy="600" r="240" fill="url(#ls-sun)" />
        <circle cx="1180" cy="600" r="34" fill="#ffeec2" opacity="0.75" />
        <rect x="0" y="470" width={W} height="200" fill="url(#ls-haze)" />

        {/* ridges, far to near */}
        <motion.g style={drift(yFar)}>
          <path d={ridgePath(RIDGE_FAR)} fill="#12312a" />
        </motion.g>

        <motion.g style={drift(yMid)}>
          <path d={ridgePath(RIDGE_MID)} fill="#0d2722" />
          <g fill="#0b2220">
            {scene.midPines.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        </motion.g>

        <motion.g style={drift(yNear)}>
          <path d={ridgePath(RIDGE_NEAR)} fill="#081b18" />
          <g fill="#071714">
            {scene.nearPines.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        </motion.g>

        <motion.g style={drift(yFore)}>
          <path d={ridgePath(RIDGE_FORE)} fill="#040f0d" />
          <g stroke="#04100e" strokeWidth="2.2" strokeLinecap="round" fill="none">
            {scene.blades.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        </motion.g>
      </svg>
    </div>
  );
}

/** Fireflies drifting over the meadow. */
export function Fireflies({ count = 16 }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  const dots = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 61) % 96 + 2}%`,
    bottom: `${(i * 17) % 34}%`,
    size: 1.5 + ((i * 7) % 3),
    dur: `${9 + ((i * 5) % 9)}s`,
    delay: `${(i * 1.3) % 11}s`,
    drift: `${((i % 5) - 2) * 26}px`,
  }));

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 top-1/3 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="animate-ember absolute rounded-full bg-[#d9ffb8]"
          style={{
            left: d.left,
            bottom: d.bottom,
            width: d.size,
            height: d.size,
            boxShadow: "0 0 10px 2px rgba(190,255,150,0.55)",
            "--dur": d.dur,
            "--delay": d.delay,
            "--drift": d.drift,
          }}
        />
      ))}
    </div>
  );
}
