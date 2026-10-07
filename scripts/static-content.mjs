import { readFile, writeFile } from "node:fs/promises";
import { site, work } from "../src/content.js";

const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[char]);
const link = (href, label) => `<a href="${escape(href)}">${escape(label)}</a>`;
const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: "https://apeirastudios.me/",
  email: site.email,
  description: site.profile,
  founder: { "@type": "Person", name: site.founder, url: site.linkedin },
  sameAs: [site.github, site.linkedin, site.itch, site.youtube].filter(Boolean),
};
const structuredData = `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`;
const styles = `<style>
  .studio-static { max-width: 960px; margin: auto; padding: 4rem 1.5rem; color: #ebe8f0; font: 16px/1.8 Inter, sans-serif; }
  .studio-static h1 { font-size: clamp(2rem, 6vw, 3.5rem); line-height: 1.2; }
  .studio-static h2 { margin-top: 2.5rem; font-size: 1.8rem; }
  .studio-static h3 { margin-top: 1.75rem; font-size: 1.2rem; }
  .studio-static p { max-width: 760px; }
  .studio-static a { color: #c6b6ff; text-decoration: underline; text-underline-offset: 4px; }
  .studio-static li { margin: .4rem 0; }
</style>`;
const content = `<main class="studio-static">
  <h1>${escape(site.name)}</h1>
  <p>${escape(site.profile)}</p>
  <p>${escape(site.founder)} · ${escape(site.role)} · ${escape(site.location)}<br>Operating since ${escape(site.operatingSince)}</p>
  <p>${link(`mailto:${site.email}`, site.email)} · ${link(site.linkedin, "Founder on LinkedIn")} · ${link(site.github, "GitHub")}</p>
  <h2 id="work">Projects &amp; releases</h2>
  ${work.map((project) => `<article><h3>${escape(project.title)}</h3><p>${escape(project.summary)}</p><p>${[
    project.href && link(project.href, project.linkLabel || "View project"),
    project.repo && link(project.repo, "Source code"),
  ].filter(Boolean).join(" · ")}</p></article>`).join("\n")}
  <h2 id="contact">Contact the studio</h2>
  <p>${link(`mailto:${site.email}`, site.email)}</p>
  <p>${link("https://apeirastudios.me/", "Main website")} · ${link("https://apeirastudios.me/studio.html", "Studio & releases")}</p>
</main>`;

// The initial HTML remains readable if JavaScript is unavailable. React's
// createRoot replaces this fallback with the interactive page after loading.
const path = new URL("../dist/index.html", import.meta.url);
const source = await readFile(path, "utf8");
if (!source.includes('<div id="root"></div>')) throw new Error("Missing root placeholder");
await writeFile(path, source.replace("</head>", `${structuredData}\n${styles}\n</head>`)
  .replace('<div id="root"></div>', `<div id="root">${content}</div>`));

await writeFile(new URL("../dist/studio.html", import.meta.url), `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Apeira Studios — Studio &amp; releases</title><meta name="description" content="${escape(site.profile)}">
<link rel="canonical" href="https://apeirastudios.me/studio.html"><link rel="icon" href="/brand/favicon-silver.png">
${structuredData}${styles}<style>body { margin: 0; background: #070611; }</style></head><body>${content}</body></html>`);
await writeFile(new URL("../dist/robots.txt", import.meta.url), "User-agent: *\nAllow: /\nSitemap: https://apeirastudios.me/sitemap.xml\n");
await writeFile(new URL("../dist/sitemap.xml", import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://apeirastudios.me/</loc></url><url><loc>https://apeirastudios.me/studio.html</loc></url></urlset>\n`);
