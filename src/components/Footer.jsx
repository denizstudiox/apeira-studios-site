import { site } from "../content";
import { Mark, StudioLogo } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line">
      <div className="flex justify-center px-6 pb-10 pt-14 sm:px-10 lg:px-14">
        <a href="#top" aria-label={`${site.name} — home`}>
          <StudioLogo size="large" />
        </a>
      </div>

      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-6 pb-10 pt-4 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
        <div className="flex items-center gap-3">
          <Mark className="size-5 shrink-0" />
          <p className="text-[13px] tracking-tight text-faint">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-7">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[13px] text-faint transition-colors duration-300 hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[13px] text-faint transition-colors duration-300 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="#top"
            className="text-[13px] text-faint transition-colors duration-300 hover:text-accent"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
