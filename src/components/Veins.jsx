import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Hues the trunks start from — the veins are deliberately not one colour.
 * Each trunk keeps its family; its branches drift away from it as they rise.
 */
const HUES = [188, 332, 46, 262, 158, 12, 214, 292, 96];

const f = (n) => n.toFixed(1);

/** Draws a smooth curve through `pts` using midpoints as on-curve anchors. */
function smooth(pts) {
  let d = `M${f(pts[0].x)} ${f(pts[0].y)}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i].x + pts[i + 1].x) / 2;
    const my = (pts[i].y + pts[i + 1].y) / 2;
    d += ` Q${f(pts[i].x)} ${f(pts[i].y)} ${f(mx)} ${f(my)}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L${f(last.x)} ${f(last.y)}`;
}

/**
 * Turns a centreline with a width at every point into a filled, tapering
 * ribbon. A filled outline (rather than a stroke) lets one vein narrow
 * continuously from root to tip without overlapping segments or seams.
 */
function ribbon(pts) {
  const left = [];
  const right = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(i - 1, 0)];
    const b = pts[Math.min(i + 1, pts.length - 1)];
    const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const nx = -(b.y - a.y) / len;
    const ny = (b.x - a.x) / len;
    const h = pts[i].w / 2;
    left.push({ x: pts[i].x + nx * h, y: pts[i].y + ny * h });
    right.push({ x: pts[i].x - nx * h, y: pts[i].y - ny * h });
  }
  return `${smooth([...left, ...right.reverse()])} Z`;
}

/**
 * Grows the network from the bottom edge upward, in real pixels.
 *
 * Deterministic: the same seed and size always produce the same network.
 * Every trunk narrows as it climbs and sheds branches more often the thinner
 * it gets, so the roots are few and thick and the top dissolves into
 * interwoven capillaries.
 */
function buildVeins(seed, W, H, hues) {
  let s = seed >>> 0;
  const rnd = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };

  const STEP = 30;
  const MIN_W = 0.4;
  const rootW = Math.min(16, 8 + W / 180);
  // thin out evenly over the whole height, so the trunks reach the top as capillaries
  const decay = Math.pow(1.2 / rootW, STEP / H);
  const branches = [];
  const queue = [];

  const trunks = Math.max(4, Math.round(W / 190));
  for (let i = 0; i < trunks; i++) {
    queue.push({
      x: (W / trunks) * (i + 0.5) + (rnd() - 0.5) * (W / trunks) * 0.6,
      y: H + 40,
      angle: (rnd() - 0.5) * 0.3,
      w: rootW * (0.75 + rnd() * 0.35),
      hue: hues[i % hues.length],
      gen: 0,
    });
  }

  while (queue.length && branches.length < 150) {
    const b = queue.shift();
    const pts = [{ x: b.x, y: b.y, w: b.w }];
    let { x, y, angle, w } = b;
    let turn = 0;

    while (w > MIN_W && y > -60) {
      // slow, momentum-carried wandering, always pulled back toward "up"
      turn = turn * 0.9 + (rnd() - 0.5) * 0.06;
      angle += turn - angle * 0.03;
      if (x < W * 0.04) angle += 0.05;
      if (x > W * 0.96) angle -= 0.05;

      x += Math.sin(angle) * STEP;
      y -= Math.cos(angle) * STEP;
      w *= decay;
      pts.push({ x, y, w });

      // the thinner the vein, the more readily it splits
      const thin = 1 - Math.min(w / rootW, 1);
      if (w > 1.2 && rnd() < 0.005 + thin * 0.018) {
        const dir = rnd() < 0.5 ? -1 : 1;
        queue.push({
          x,
          y,
          angle: angle + dir * (0.35 + rnd() * 0.4),
          w: w * (0.6 + rnd() * 0.2),
          hue: b.hue + (rnd() - 0.5) * 34,
          gen: b.gen + 1,
        });
      }
    }

    pts.push({ x: x + Math.sin(angle) * STEP * 0.6, y: y - Math.cos(angle) * STEP * 0.6, w: 0 });
    if (pts.length > 3) {
      branches.push({ d: ribbon(pts), hue: b.hue, gen: b.gen, root: b.w });
    }
  }

  return branches;
}

/**
 * The second layer, rendered as a network sized to its container.
 *
 * Deliberately static: the network is several screens tall and blurred, so
 * anything that repaints it while scrolling (a moving mask, say) costs far
 * more than it gives. Painted once, it scrolls for free.
 */
export default function Veins({ className = "", seed = 11, hues = HUES }) {
  const ref = useRef(null);
  const [size, setSize] = useState(null);

  // Regenerate only when the box changes meaningfully, not on every pixel.
  useEffect(() => {
    const el = ref.current;
    const measure = () => {
      const w = Math.round(el.clientWidth / 40) * 40;
      const h = Math.round(el.clientHeight / 200) * 200;
      setSize((prev) => (prev && prev.w === w && prev.h === h ? prev : { w, h }));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const veins = useMemo(
    () => (size && size.w > 0 && size.h > 0 ? buildVeins(seed, size.w, size.h, hues) : []),
    [seed, size, hues]
  );

  return (
    <div ref={ref} className={`pointer-events-none ${className}`}>
      <div className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,#000_5%,#000_97%,transparent)]">
        {size && (
          <svg
            viewBox={`0 0 ${size.w} ${size.h}`}
            preserveAspectRatio="none"
            className="h-full w-full"
            aria-hidden="true"
          >
            {/* soft bloom around the thick roots and first branches, drawn as
                wide translucent outlines — an SVG blur this tall would be far
                too costly to rasterize */}
            <g fill="none" strokeLinejoin="round">
              {veins.map((v, i) =>
                v.gen < 2 ? (
                  <g key={`g${i}`} stroke={`hsl(${v.hue} 95% 58%)`}>
                    <path d={v.d} strokeWidth="16" strokeOpacity="0.05" />
                    <path d={v.d} strokeWidth="7" strokeOpacity="0.1" />
                  </g>
                ) : null
              )}
            </g>

            {/* the veins themselves: deeper colour at the root, brighter at the tips */}
            <g>
              {veins.map((v, i) => (
                <path
                  key={i}
                  d={v.d}
                  fill={`hsl(${v.hue} ${88 - v.gen * 4}% ${Math.min(56 + v.gen * 5, 74)}%)`}
                  opacity={Math.max(0.95 - v.gen * 0.15, 0.4)}
                />
              ))}
            </g>
          </svg>
        )}
      </div>
    </div>
  );
}
