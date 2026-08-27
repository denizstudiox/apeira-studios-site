import { marquee } from "../content";

export default function Marquee() {
  const row = [...marquee, ...marquee];

  return (
    <div className="relative overflow-hidden border-y border-line/80 bg-void/55 py-5 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />

      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              {item}
            </span>
            <span className="size-1.5 rotate-45 border border-gold/70" />
          </div>
        ))}
      </div>
    </div>
  );
}
