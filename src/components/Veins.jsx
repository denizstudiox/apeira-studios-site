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
      let top = Infinity;
      let bottom = -Infinity;
      for (const pt of pts) {
        top = Math.min(top, pt.y);
        bottom = Math.max(bottom, pt.y);
      }
      branches.push({ d: ribbon(pts), hue: b.hue, gen: b.gen, top, bottom });
    }
  }

  return branches;
}

/** Height of each canvas strip, in CSS pixels. */
const CHUNK = 1024;
/** Overall strength of the layer, baked into the pixels. */
const STRENGTH = 0.6;

/** Paints the part of the network that falls inside one horizontal strip. */
function paintStrip(canvas, veins, size, top, height, scale) {
  canvas.width = Math.round(size.w * scale);
  canvas.height = Math.round(height * scale);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(scale, 0, 0, scale, 0, -top * scale);
  ctx.lineJoin = "round";

  const visible = veins.filter((v) => v.bottom + 12 >= top && v.top - 12 <= top + height);

  // soft bloom around the thick roots and first branches
  for (const v of visible) {
    if (v.gen >= 2) continue;
    ctx.strokeStyle = `hsl(${v.hue}, 95%, 58%)`;
    ctx.globalAlpha = 0.05;
    ctx.lineWidth = 16;
    ctx.stroke(v.path);
    ctx.globalAlpha = 0.1;
    ctx.lineWidth = 7;
    ctx.stroke(v.path);
  }

  // the veins themselves: deeper colour at the root, brighter at the tips
  for (const v of visible) {
    ctx.fillStyle = `hsl(${v.hue}, ${88 - v.gen * 4}%, ${Math.min(56 + v.gen * 5, 74)}%)`;
    ctx.globalAlpha = Math.max(0.95 - v.gen * 0.15, 0.4);
    ctx.fill(v.path);
  }

  // overall strength plus a soft fade at the very top and bottom of the layer
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "destination-in";
  const fade = ctx.createLinearGradient(0, 0, 0, size.h);
  fade.addColorStop(0, "rgba(0,0,0,0)");
  fade.addColorStop(0.05, `rgba(0,0,0,${STRENGTH})`);
  fade.addColorStop(0.97, `rgba(0,0,0,${STRENGTH})`);
  fade.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = fade;
  ctx.fillRect(0, top, size.w, height);
}

/**
 * The second layer, rendered as a network sized to its container.
 *
 * The network is generated as vectors but painted once into a stack of
 * canvas strips. Scrolling past a finished bitmap costs nothing, whereas a
 * several-screens-tall SVG of long overlapping paths gets re-rasterised
 * tile by tile as it scrolls into view — which is what made the project
 * list stutter.
 */
export default function Veins({ className = "", seed = 11, hues = HUES }) {
  const ref = useRef(null);
  const strips = useRef([]);
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

  const count = size ? Math.ceil(size.h / CHUNK) : 0;

  // Paint one strip per frame so the first paint never blocks the page.
  useEffect(() => {
    if (!veins.length) return;
    const withPaths = veins.map((v) => ({ ...v, path: new Path2D(v.d) }));
    // narrow screens are usually high-density phones: paint a little sharper there
    const scale = size.w < 800 ? Math.min(window.devicePixelRatio || 1, 1.5) : 1;
    let i = 0;
    let frame;
    const next = () => {
      const canvas = strips.current[i];
      if (canvas) {
        const top = i * CHUNK;
        paintStrip(canvas, withPaths, size, top, Math.min(CHUNK, size.h - top), scale);
      }
      if (++i < count) frame = requestAnimationFrame(next);
    };
    frame = requestAnimationFrame(next);
    return () => cancelAnimationFrame(frame);
  }, [veins, size, count]);

  return (
    <div ref={ref} className={`pointer-events-none ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const top = i * CHUNK;
        const height = Math.min(CHUNK, size.h - top);
        return (
          <canvas
            key={i}
            ref={(el) => (strips.current[i] = el)}
            className="absolute left-0 block w-full"
            style={{ top: `${(top / size.h) * 100}%`, height: `${(height / size.h) * 100}%` }}
          />
        );
      })}
    </div>
  );
}
