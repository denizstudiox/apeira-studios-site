import { contact, site } from "../content";
import EnergyInferno from "./EnergyInferno";
import { ArrowUpRight, Eyebrow, MaskLine, Reveal, Section } from "./ui";

const links = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
  site.itch && { label: "itch.io", href: site.itch },
  site.x && { label: "X", href: site.x },
  site.youtube && { label: "YouTube", href: site.youtube },
].filter(Boolean);

export default function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0 opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_84%,rgba(88,118,255,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(182,139,255,0.08),transparent_26%)]" />
      </div>

      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>{contact.eyebrow}</Eyebrow>
          </Reveal>

          <h2 className="display mt-8 text-[clamp(2.2rem,6vw,4.6rem)]">
            {contact.title.map((line, i) => (
              <MaskLine key={line} delay={i * 0.1}>
                {line}
              </MaskLine>
            ))}
          </h2>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-[15px] leading-[1.85] text-muted">
              {contact.body}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href={`mailto:${site.email}`}
              className="group mt-12 inline-flex flex-wrap items-baseline gap-x-4 border-b border-line pb-3 transition-colors duration-500 hover:border-accent"
            >
              <span className="text-[clamp(1.05rem,2.4vw,1.5rem)] font-medium tracking-tight text-ink transition-colors duration-500 group-hover:text-accent">
                {site.email}
              </span>
              <ArrowUpRight className="size-5 text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pl-10">
          <Reveal delay={0.25}>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between py-5 transition-colors duration-500"
                  >
                    <span className="text-[15px] font-medium tracking-tight text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                      {l.label}
                    </span>
                    <ArrowUpRight className="size-4 text-faint transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="plate mystic-card relative mt-10 border border-line bg-panel/35 p-7 backdrop-blur-sm">
              <p className="eyebrow">Currently</p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
                Building{" "}
                <span className="text-ink">{site.name}</span> from{" "}
                {site.location} — open to collaborations, contract work and
                interesting problems.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* The apeiron: an energy field that separates into spectral colours. */}
      <div className="relative left-1/2 -mb-24 mt-20 h-[330px] w-screen -translate-x-1/2 sm:-mb-28 sm:h-[430px] lg:-mb-32 lg:h-[520px]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[430px] mix-blend-screen sm:h-[560px] lg:h-[650px]">
          <EnergyInferno className="h-full w-full" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#060513] via-[#060513]/55 to-transparent" />
      </div>
    </Section>
  );
}
