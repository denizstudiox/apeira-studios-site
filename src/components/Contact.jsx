import { contact, site } from "../content";
import Flame, { Embers } from "./Flame";
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
        <div className="grid-bg absolute inset-0 opacity-40" />
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
            <div className="plate relative mt-10 rounded-2xl border border-line bg-panel/40 p-7">
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

      {/* the apeiron, at the very foot of the page */}
      <div className="relative mt-20 h-[260px] sm:h-[340px]">
        <div className="pointer-events-none absolute bottom-[-110px] left-1/2 h-[420px] -translate-x-1/2 mix-blend-screen sm:h-[520px]">
          <Flame className="h-full w-auto" />
          <Embers count={9} />
        </div>
        {/* sink the base of the flame into the dark */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-40 bg-gradient-to-t from-[#04050b] via-[#04050b]/80 to-transparent" />
      </div>
    </Section>
  );
}
