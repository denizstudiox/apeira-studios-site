import { useReducedMotion } from "framer-motion";

/**
 * The blue flame — the studio's mark.
 *
 * Built from three nested flame silhouettes (deep → bright → white-hot core),
 * each pushed through its own animated turbulence + displacement filter so the
 * edges churn like real fire. Pure SVG: no canvas, no image, no library.
 */
export default function Flame({ className = "" }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="-110 -20 620 830"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        {/* Outer body — slow, wide churn */}
        <filter id="fl-outer" x="-60%" y="-30%" width="220%" height="180%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.022"
            numOctaves="3"
            seed="7"
            result="n"
          >
            {!reduce && (
              <animate
                attributeName="baseFrequency"
                dur="11s"
                values="0.009 0.022; 0.013 0.032; 0.008 0.019; 0.009 0.022"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="52"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feGaussianBlur stdDeviation="11" />
        </filter>

        {/* Inner body — faster, tighter churn */}
        <filter id="fl-inner" x="-60%" y="-30%" width="220%" height="180%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.016 0.04"
            numOctaves="2"
            seed="19"
            result="n"
          >
            {!reduce && (
              <animate
                attributeName="baseFrequency"
                dur="7s"
                values="0.016 0.04; 0.022 0.055; 0.015 0.036; 0.016 0.04"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale="26"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feGaussianBlur stdDeviation="5" />
        </filter>

        <filter id="fl-core" x="-60%" y="-30%" width="220%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>

        <linearGradient id="fl-g-outer" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#12207a" stopOpacity="0" />
          <stop offset="22%" stopColor="#2340c8" stopOpacity="0.75" />
          <stop offset="62%" stopColor="#58b6ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#c7f0ff" stopOpacity="0.15" />
        </linearGradient>

        <linearGradient id="fl-g-inner" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2340c8" stopOpacity="0" />
          <stop offset="35%" stopColor="#58b6ff" stopOpacity="0.9" />
          <stop offset="85%" stopColor="#c7f0ff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.4" />
        </linearGradient>

        <radialGradient id="fl-g-halo" cx="50%" cy="72%" r="50%">
          <stop offset="0%" stopColor="#58b6ff" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#2340c8" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#2340c8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient halo */}
      <ellipse cx="200" cy="520" rx="200" ry="270" fill="url(#fl-g-halo)" />

      <g className={reduce ? "" : "animate-flicker"}>
        <path
          filter="url(#fl-outer)"
          fill="url(#fl-g-outer)"
          d="M200 706 C104 676 62 566 104 456 C136 373 192 320 178 214 C175 190 170 166 162 142
             C242 216 274 292 268 358 C292 320 300 280 296 240 C352 330 362 490 300 588
             C272 632 238 682 200 706 Z"
        />
        <path
          filter="url(#fl-inner)"
          fill="url(#fl-g-inner)"
          d="M200 690 C142 668 116 588 142 512 C164 448 202 408 196 336 C194 316 190 298 186 282
             C232 336 252 388 250 432 C266 404 272 378 270 352 C308 416 314 528 274 594
             C254 626 228 668 200 690 Z"
        />
        <path
          filter="url(#fl-core)"
          fill="#eaf9ff"
          opacity="0.85"
          d="M200 664 C176 650 166 606 180 566 C192 532 210 508 208 470
             C226 508 238 552 234 588 C230 622 218 650 200 664 Z"
        />
      </g>
    </svg>
  );
}

/** A few embers drifting up out of the flame. */
export function Embers({ count = 9 }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  // Deterministic scatter — no layout shift between renders
  const seeds = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 37) % 90 + 5}%`,
    bottom: `${(i * 23) % 40}%`,
    size: 1 + ((i * 7) % 3),
    dur: `${6 + ((i * 5) % 7)}s`,
    delay: `${(i * 1.7) % 9}s`,
    drift: `${((i % 5) - 2) * 14}px`,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((s, i) => (
        <span
          key={i}
          className="animate-ember absolute rounded-full bg-accent-core"
          style={{
            left: s.left,
            bottom: s.bottom,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 8px 2px rgba(88,182,255,0.6)",
            "--dur": s.dur,
            "--delay": s.delay,
            "--drift": s.drift,
          }}
        />
      ))}
    </div>
  );
}
