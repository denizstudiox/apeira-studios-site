import { capabilities } from "../content";
import { Eyebrow, MaskLine, Reveal, Section } from "./ui";

export default function Capabilities() {
  return (
    <Section id="disciplines" className="bg-void/30">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>{capabilities.eyebrow}</Eyebrow>
            </Reveal>
            <h2 className="display mt-8 max-w-[12ch] text-[clamp(2.4rem,5.4vw,4.2rem)]">
              <MaskLine>{capabilities.title}</MaskLine>
            </h2>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="mystic-frame grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {capabilities.items.map((c, i) => (
              <Reveal
                key={c.no}
                delay={(i % 2) * 0.08}
                className="plate group relative bg-ground/90 p-8 transition-colors duration-700 hover:bg-panel/90"
              >
                <span className="sigil-number display inline-flex size-10 items-center justify-center text-[14px] leading-none text-accent">
                  <span>{c.no}</span>
                </span>
                <h3 className="mt-6 text-[17px] font-medium tracking-tight text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {c.body}
                </p>
                <span className="absolute left-0 top-0 h-full w-px scale-y-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
