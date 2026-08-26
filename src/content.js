/* ==================================================================
 *  APEIRA STUDIOS — SITE CONTENT
 *  ------------------------------------------------------------------
 *  Everything the site says lives in this one file.
 *  Edit here, save, done — no component needs to be touched.
 * ================================================================== */

export const site = {
  name: "Apeira Studios",
  short: "Apeira",
  founder: "Deniz Akkoyun",
  role: "Founder & Developer",
  location: "Türkiye",
  email: "apeirastudios@gmail.com",
  github: "https://github.com/denizstudiox",
  linkedin: "https://www.linkedin.com/in/deniz-akkoyun/",
  // Optional — leave as "" to hide the link
  itch: "",
  x: "",
  youtube: "",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  status: "Open for collaborations — 2026",
  // The headline. Each inner array is one line; each part is a run of text.
  // Set `glow: true` on a part to render it in the accent gradient.
  headline: [
    [{ t: "Independent games," }],
    [{ t: "mods and " }, { t: "tools.", glow: true }],
  ],
  intro:
    "Apeira Studios is the independent practice of Deniz Akkoyun — shipping Minecraft mods, Android apps, browser extensions and the tooling around them.",
  primaryCta: { label: "See the work", href: "#work" },
  secondaryCta: { label: "Start a project", href: "#contact" },
  // Character-sheet style plate
  stats: [
    { value: "08", label: "Shipped works" },
    { value: "03", label: "Marketplaces" },
    { value: "04", label: "Platforms" },
    { value: "∞", label: "Prototypes" },
  ],
};

export const marquee = [
  "Game Development",
  "Gameplay Systems",
  "Modding",
  "Tools & Pipelines",
  "Interactive Prototypes",
  "Technical Design",
];

/* ------------------------------------------------------------------
 * THE CHRONICLE (work)
 * ------------------------------------------------------------------
 *   tag       — short kind label ("Minecraft Mod", "Android App", …)
 *   stack     — technologies / platforms
 *   href      — where the thing lives (store page, site). "" hides the link.
 *   linkLabel — text on that link. Defaults to "View project".
 *   repo      — optional source-code link, shown as a second "Source" link.
 *   credit    — optional contribution note for collaborative projects
 *   featured  — spans the full row
 *   wip       — renders as "In development", no link
 */
export const work = [
  {
    title: "Immortal Snail: No Escape",
    tag: "Minecraft Mod",
    year: "2026",
    summary:
      "One indestructible snail per world, hunting the player forever. It paths normally where it can and tunnels, climbs, bridges gaps and scaffolds where it cannot, follows you through the Nether and the End at coordinate-scaled distance, and restores itself if anything removes it. Touching it kills you. A craftable Snail Compass is the only mercy.",
    stack: ["Fabric", "Forge", "NeoForge", "MC 1.20.1 – 26.2"],
    href: "https://www.curseforge.com/minecraft/mc-mods/immortal-snail-no-escape",
    linkLabel: "View on CurseForge",
    featured: true,
  },
  {
    title: "Kubik",
    tag: "Android App",
    year: "2026",
    summary:
      "A speedcubing timer built for people who actually compete: WCA scrambles across every event, two-finger Stackmat mode, and WCA-compliant statistics — ao5, ao12, ao50, ao100, mo3. Fully offline, no accounts, nothing leaves the device.",
    stack: ["Android", "Google Play", "Offline-first"],
    href: "https://denizstudiox.github.io/kubik/",
    linkLabel: "View project",
    featured: true,
  },
  {
    title: "Eco Quest",
    tag: "VR Experience",
    year: "2026",
    credit: "Team project · Developer",
    summary:
      "A task-based VR simulation that teaches recycling through exploration, hands-on sorting and immediate feedback across familiar campus environments. Created collaboratively by the MCBÜ XR Lab team, with Deniz Akkoyun contributing as a developer.",
    stack: ["Virtual Reality", "Environmental Education", "XR Lab"],
    href: "https://denizstudiox.github.io/eco-quest-vr/",
    linkLabel: "View project",
  },
  {
    title: "Sort It!",
    tag: "VR Game",
    year: "2026",
    credit: "Team project · Developer",
    summary:
      "A fast-paced VR sorting game where players identify objects through sound, glow and controller vibration, then race to place them correctly. Created collaboratively by the MCBÜ XR Lab team, with Deniz Akkoyun contributing as a developer.",
    stack: ["Virtual Reality", "Two-player", "XR Lab"],
    href: "https://denizstudiox.github.io/sort-it-vr/",
    linkLabel: "View project",
  },
  {
    title: "Shorts Shield",
    tag: "Extension",
    year: "2026",
    summary:
      "Removes YouTube Shorts everywhere on the platform using a pure CSS architecture — display:none paired with :has() selectors, so there is no runtime cost at all.",
    stack: ["Manifest V3", "CSS :has()", "JavaScript"],
    href: "https://chromewebstore.google.com/detail/shorts-shield/nnhhbjdginblkbojacgppopedghflbdg",
    linkLabel: "Chrome Web Store",
    repo: "https://github.com/denizstudiox/Shorts-Shield",
  },
  {
    title: "RoFilter",
    tag: "Extension",
    year: "2026",
    summary:
      "Filters the Roblox Discover and Home pages by like-to-dislike ratio, hides sponsored slots and drops anything below a player-count or keyword threshold — the storefront you wish it shipped with.",
    stack: ["JavaScript", "Chrome APIs"],
    href: "https://chromewebstore.google.com/detail/rofilter-game-quality-enh/mfbdhlnbimbigcfmmfonofkaccfpfion",
    linkLabel: "Chrome Web Store",
    repo: "https://github.com/denizstudiox/RoFilter",
  },
  {
    title: "WTTG2 Organizer",
    tag: "Tool",
    year: "2026",
    summary:
      "A real-time dashboard for tracking sites, keys and in-game data, synchronised live between desktop and phone over the local network. Thread-safe JSON store, packaged as a native desktop window.",
    stack: ["Python", "Flask-SocketIO", "PyWebView"],
    href: "https://github.com/denizstudiox/WTTG2Organizer",
    linkLabel: "View source",
  },
  {
    title: "dpi-easy",
    tag: "Desktop",
    year: "2026",
    summary:
      "A portable Windows front-end for GoodbyeDPI-Turkey: automatic profile selection, connection health checks and a single-file build that runs without installation.",
    stack: ["PowerShell", "WinForms", "Windows"],
    href: "https://github.com/denizstudiox/dpi-easy",
    linkLabel: "View source",
  },
];

export const capabilities = {
  eyebrow: "Disciplines",
  title: "What the studio actually does.",
  items: [
    {
      no: "01",
      title: "Gameplay Systems",
      body: "Movement, combat, progression, economy — the rules that make a game feel like a game. Built to be tuned, not rewritten.",
    },
    {
      no: "02",
      title: "Modding",
      body: "Shipped Minecraft content across Fabric, Forge and NeoForge — custom AI, pathfinding and cross-dimensional behaviour that holds up in someone else's world.",
    },
    {
      no: "03",
      title: "Prototyping",
      body: "Fast, honest vertical slices that answer one question: is this fun? Weeks, not quarters, from idea to something playable.",
    },
    {
      no: "04",
      title: "Tools & Automation",
      body: "Editor tooling, dashboards and pipelines that give the rest of the week back. Several already shipped; they run every day.",
    },
    {
      no: "05",
      title: "Interfaces",
      body: "Desktop, mobile and browser front-ends that stay out of the way — the kind people keep pinned instead of uninstalling.",
    },
    {
      no: "06",
      title: "Polish & Performance",
      body: "Profiling, frame budgets, game feel. The last ten percent that separates a project from a product.",
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: ["Have something", "worth building?"],
  body: "A full production, a prototype you need proven, or a system that has stopped scaling — send a few lines about it. Every message gets a reply.",
};
