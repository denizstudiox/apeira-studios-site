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
  email: "deniz@apeirastudios.me",
  operatingSince: "October 2025",
  profile: "Apeira Studios is an independent studio in Türkiye, founded and run by Deniz Akkoyun. Operating since October 2025, the studio builds games, interactive AI characters and software tools. Its released Unreal Engine 5 game, The Flawed Architect, is available free for Windows on itch.io. Deniz also develops Brewai, an AI café character, in collaboration with a Brewmood branch.",
  github: "https://github.com/denizstudiox",
  linkedin: "https://www.linkedin.com/in/deniz-akkoyun/",
  // Optional — leave as "" to hide the link
  itch: "https://apeira-studios.itch.io",
  x: "",
  youtube: "https://www.youtube.com/@ApeiraStudios",
};

export const studioDevelopment = {
  current: "We use Claude Code in our development workflow for C++ gameplay, Unreal Engine editor automation and release testing. The Flawed Architect is a released game built with this workflow.",
  planned: "For upcoming games, we plan to prototype Claude API-powered NPC conversations and dialogue localization. The prototype will keep responses within authored character and story boundaries, with server-side calls and usage limits.",
  releaseAnnouncement: "https://apeira-studios.itch.io/the-flawed-architect/devlog/1693991/the-flawed-architect-is-out-now-free-full-release",
  trailer: "https://www.youtube.com/watch?v=TLUjAXIUSps",
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
    "Apeira Studios is the independent studio of Deniz Akkoyun in Türkiye — building games, AI café characters, Minecraft mods, Android apps, browser extensions and the tooling around them.",
  primaryCta: { label: "See the work", href: "#work" },
  secondaryCta: { label: "Start a project", href: "#contact" },
  // Character-sheet style plate
  stats: [
    { value: "12", label: "Projects" },
    { value: "04", label: "Marketplaces" },
    { value: "04", label: "Platforms" },
    { value: "2025", label: "Studio started" },
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
 *   category  — id from `workCategories` below; decides which group it sits in
 *   wip       — renders as "In development", no link
 */

// The groups the work is presented in, in page order.
export const workCategories = [
  {
    id: "games",
    label: "Games & Mods",
    blurb: "Things you play — a standalone horror game and Minecraft content shipped across every major loader.",
  },
  {
    id: "interactive",
    label: "XR & Interactive",
    blurb: "VR experiences, a café kiosk and real-time effects — work you step into or touch rather than install.",
  },
  {
    id: "apps",
    label: "Apps & Extensions",
    blurb: "Small, focused software on phones and in the browser, published on Google Play and the Chrome Web Store.",
  },
  {
    id: "tools",
    label: "Desktop Tools",
    blurb: "Utilities and dashboards for Windows and the desktop, open source and portable.",
  },
];
export const work = [
  {
    title: "Brewai — Moodi",
    category: "interactive",
    tag: "AI Café Character",
    year: "2026",
    credit: "Brewmood branch collaboration · Working prototype",
    summary: "An animated, voice-enabled AI character for cafés. Guests can chat in Turkish and get recommendations grounded in the café’s approved menu. Developed by Deniz Akkoyun in collaboration with a Brewmood branch.",
    stack: ["Conversational AI", "Voice", "Node.js", "Kiosk"],
    href: "/studio.html#brewai",
    linkLabel: "About Brewai",
    details: "Moodi brings a playful character to a café screen, with expressive eyes, a voice-responsive mouth and natural conversation. Server-side menu tools support recommendations, while a background advisor and answer review help keep responses tied to the approved menu. A staff panel manages the menu and kiosk workflow. The current implementation uses other AI providers; it does not currently use the Claude API.",
    highlights: [
      "Developed in collaboration with a Brewmood branch",
      "Turkish voice conversation and animated expressions",
      "Recommendations grounded in the approved café menu",
      "Staff panel and local kiosk workflow",
    ],
    images: [{ src: "/projects/brewai-moodi.png", alt: "Moodi animated character interface — development screenshot", tone: "#a8cbb0" }],
    poster: { src: "/projects/brewai-moodi.png", alt: "Brewai Moodi character interface", fit: "contain", tone: "#a8cbb0" },
  },
  {
    title: "The Flawed Architect",
    category: "games",
    tag: "Psychological Horror",
    year: "2026",
    credit: "Free full game · Out now",
    summary:
      "The world ends. Something remains. A short, first-person psychological horror game about the apocalypse and unsettling divine themes, built in Unreal Engine and available free on itch.io.",
    stack: ["Unreal Engine", "Windows", "Single player", "itch.io"],
    href: "https://apeira-studios.itch.io/the-flawed-architect",
    linkLabel: "Download free on itch.io",
    details:
      "A short, first-person psychological horror game about the apocalypse and unsettling divine themes. Step beyond the familiar and face what you cannot understand. The full game is out now as a free Windows download on itch.io, with a feedback form for bug reports and player impressions.",
    highlights: [
      "First-person psychological horror",
      "Apocalypse, atmosphere and divine dread",
      "Built in Unreal Engine",
      "Free full game for Windows on itch.io",
      "Single-player, English, about 40 minutes",
      "Keyboard and mouse, headphones recommended",
    ],
    images: [
      { src: "/projects/flawed-architect-01.webp", alt: "The Flawed Architect living room and emergency broadcast", tone: "#b95151" },
      { src: "/projects/flawed-architect-02.webp", alt: "The Flawed Architect gameplay screenshot 2" },
      { src: "/projects/flawed-architect-03.webp", alt: "The Flawed Architect gameplay screenshot 3" },
      { src: "/projects/flawed-architect-04.webp", alt: "The Flawed Architect gameplay screenshot 4" },
      { src: "/projects/flawed-architect-05.webp", alt: "The Flawed Architect gameplay screenshot 5" },
    ],
    poster: {
      src: "/projects/flawed-architect-cover.webp",
      alt: "The Flawed Architect official cover artwork",
      fit: "contain",
      tone: "#b95151",
    },
  },
  {
    title: "Immortal Snail: No Escape",
    category: "games",
    tag: "Minecraft Mod",
    year: "2026",
    summary:
      "One indestructible snail per world, hunting the player forever. It paths normally where it can and tunnels, climbs, bridges gaps and scaffolds where it cannot, follows you through the Nether and the End at coordinate-scaled distance, and restores itself if anything removes it. Touching it kills you. A craftable Snail Compass is the only mercy.",
    stack: ["Fabric", "Forge", "NeoForge", "MC 1.20.1 – 26.2"],
    href: "https://www.curseforge.com/minecraft/mc-mods/immortal-snail-no-escape",
    linkLabel: "View on CurseForge",
    details:
      "Built as a persistent systemic threat rather than a scripted enemy. The snail first attempts legitimate navigation, then escalates into tunnelling, climbing, bridging and cross-dimensional pursuit when the world gets in its way.",
    highlights: [
      "Persistent hunter with natural-route-first AI",
      "Terrain traversal, tunnelling and temporary scaffolding",
      "Overworld, Nether and End pursuit",
      "Snail Compass, advancements and Turkish localization",
    ],
    images: [
      { src: "/projects/snail-01.webp", alt: "The immortal snail building a path across a desert" },
      { src: "/projects/snail-02.webp", alt: "The immortal snail pursuing a player in Minecraft" },
      { src: "/projects/snail-03.webp", alt: "The immortal snail pursuing a player underwater" },
      { src: "/projects/snail-04.webp", alt: "The immortal snail crossing difficult terrain" },
    ],
    poster: {
      src: "/projects/snail-01.webp",
      alt: "Immortal Snail: No Escape poster",
      tone: "#d2a45e",
      position: "center 58%",
    },
  },
  {
    title: "Kubik",
    category: "apps",
    tag: "Android App",
    year: "2026",
    summary:
      "A speedcubing timer built for people who actually compete: WCA scrambles across every event, two-finger Stackmat mode, and WCA-compliant statistics — ao5, ao12, ao50, ao100, mo3. Fully offline, no accounts, nothing leaves the device.",
    stack: ["Android", "Google Play", "Offline-first"],
    href: "https://denizstudiox.github.io/kubik/",
    linkLabel: "View project",
    details:
      "A focused Android companion for speedcubers. The interface is designed around fast repetition: generate a valid scramble, inspect, solve, record and immediately understand the session without an account or network connection.",
    highlights: [
      "Official-style scrambles across WCA events",
      "Two-finger Stackmat interaction mode",
      "ao5, ao12, ao50, ao100 and mo3 statistics",
      "Offline-first and account-free",
    ],
    images: [
      { src: "/projects/kubik-icon.webp", alt: "Kubik application cube mark", fit: "icon", tone: "#29d8b0" },
    ],
    poster: {
      src: "/projects/kubik-icon.webp",
      alt: "Kubik poster",
      fit: "icon",
      tone: "#29d8b0",
    },
  },
  {
    title: "Eco Quest",
    category: "interactive",
    tag: "VR Experience",
    year: "2026",
    credit: "Team project · Developer",
    summary:
      "A task-based VR simulation that teaches recycling through exploration, hands-on sorting and immediate feedback across familiar campus environments. Created collaboratively by the MCBÜ XR Lab team, with Deniz Akkoyun contributing as a developer.",
    stack: ["Virtual Reality", "Environmental Education", "XR Lab"],
    href: "https://denizstudiox.github.io/eco-quest-vr/index.html?v=20260826",
    linkLabel: "View project",
    details:
      "A collaborative educational VR experience built around learning by doing. Players explore recognizable campus spaces, collect discarded objects and receive immediate feedback as they decide where each item belongs.",
    highlights: [
      "Explorable classroom, canteen and garden scenes",
      "Hands-on object interaction and sorting",
      "Immediate educational feedback",
      "Created collaboratively by the MCBÜ XR Lab team",
    ],
    images: [
      { src: "/projects/eco-canteen.webp", alt: "Eco Quest virtual canteen environment", tone: "#6dde68" },
      { src: "/projects/eco-og.webp", alt: "Eco Quest VR promotional scene", fit: "contain", tone: "#6dde68" },
      { src: "/projects/eco-classroom.webp", alt: "Eco Quest virtual classroom environment" },
      { src: "/projects/eco-garden.webp", alt: "Eco Quest virtual garden environment" },
    ],
    poster: {
      src: "/projects/eco-og.webp",
      alt: "Eco Quest VR promotional poster",
      fit: "contain",
      tone: "#6dde68",
    },
  },
  {
    title: "Sort It!",
    category: "interactive",
    tag: "VR Game",
    year: "2026",
    credit: "Team project · Developer",
    summary:
      "A fast-paced VR sorting game where players identify objects through sound, glow and controller vibration, then race to place them correctly. Created collaboratively by the MCBÜ XR Lab team, with Deniz Akkoyun contributing as a developer.",
    stack: ["Virtual Reality", "Two-player", "XR Lab"],
    href: "https://denizstudiox.github.io/sort-it-vr/index.html?v=20260826",
    linkLabel: "View project",
    details:
      "A collaborative VR challenge that turns recognition and sorting into a physical race. Sound, glow and controller vibration provide layered cues while players move objects into the correct destinations under time pressure.",
    highlights: [
      "Fast tactile VR sorting loop",
      "Audio, light and haptic feedback",
      "Competitive two-player structure",
      "Created collaboratively by the MCBÜ XR Lab team",
    ],
    images: [
      { src: "/projects/sort-gameplay.webp", alt: "Sort It VR gameplay scene", tone: "#4ca9ff" },
      { src: "/projects/sort-og.webp", alt: "Sort It VR promotional artwork", fit: "contain", tone: "#4ca9ff" },
      { src: "/projects/sort-character.webp", alt: "Sort It VR character", fit: "icon", tone: "#4ca9ff" },
    ],
    poster: {
      src: "/projects/sort-og.webp",
      alt: "Sort It VR promotional poster",
      fit: "contain",
      tone: "#4ca9ff",
    },
  },
  {
    title: "Choose Your Mood",
    category: "interactive",
    tag: "Interactive Kiosk",
    year: "2026",
    summary:
      "A touch-first mood wheel created for café kiosks. One tap sends 47 illustrated moods spinning, then lands on a full-screen result with responsive motion, sound and a deeply configurable visual system. Now live at BrewMood in Güzelbahçe, İzmir.",
    stack: ["HTML", "SVG", "JavaScript", "Offline-first"],
    href: "https://denizstudiox.github.io/choose-your-mood/",
    linkLabel: "Open experience",
    repo: "https://github.com/denizstudiox/choose-your-mood",
    details:
      "A zero-install interactive kiosk designed for touch displays in cafés. The wheel adapts its labels and faces to any mood list, stores appearance and behavior settings locally, and can run offline as a single self-contained HTML file. It is currently running on the kiosk at BrewMood in Güzelbahçe, İzmir.",
    highlights: [
      "In daily use at BrewMood — Güzelbahçe, İzmir",
      "47 illustrated moods with a dynamically sized wheel",
      "Touch, keyboard and full-screen kiosk controls",
      "Custom colors, timing, mood lists and sound settings",
      "Offline single-file build with no external dependencies",
    ],
    images: [
      {
        src: "/projects/choose-your-mood-poster.webp",
        alt: "Choose Your Mood interactive wheel",
        fit: "contain",
        tone: "#79ecff",
      },
    ],
    poster: {
      src: "/projects/choose-your-mood-poster.webp",
      alt: "Choose Your Mood promotional poster",
      fit: "contain",
      tone: "#79ecff",
    },
  },
  {
    title: "Unlimited Void",
    category: "interactive",
    tag: "VFX",
    year: "2026",
    summary:
      "A real-time recreation of Gojo Satoru's Domain Expansion from Jujutsu Kaisen, built in Unreal Engine 5. Streaks of light tear open around the caster as the world collapses into an endless starfield.",
    stack: ["Unreal Engine 5", "Real-time VFX"],
    href: "https://youtu.be/vZo2oXLsJ0k",
    linkLabel: "Watch on YouTube",
    details:
      "A fan-made VFX study exploring how an anime domain expansion can read in real time: the transition from the normal world into the void, radial light streaks and a deep-space backdrop, all rendered live in Unreal Engine 5.",
    highlights: [
      "Domain Expansion transition into an infinite void",
      "Radial light streaks and a starfield backdrop",
      "Rendered in real time in Unreal Engine 5",
      "Non-commercial fan study of Jujutsu Kaisen",
    ],
    images: [
      {
        src: "/projects/unlimited-void.webp",
        alt: "A character standing inside the Unlimited Void as light streaks burst outward",
        tone: "#d24cff",
      },
    ],
    poster: {
      src: "/projects/unlimited-void.webp",
      alt: "Unlimited Void Unreal Engine 5 VFX",
      tone: "#d24cff",
    },
  },
  {
    title: "Shorts Shield",
    category: "apps",
    tag: "Extension",
    year: "2026",
    summary:
      "Removes YouTube Shorts everywhere on the platform using a pure CSS architecture — display:none paired with :has() selectors, so there is no runtime cost at all.",
    stack: ["Manifest V3", "CSS :has()", "JavaScript"],
    href: "https://chromewebstore.google.com/detail/shorts-shield/nnhhbjdginblkbojacgppopedghflbdg",
    linkLabel: "Chrome Web Store",
    repo: "https://github.com/denizstudiox/Shorts-Shield",
    details:
      "A deliberately tiny browser extension for reclaiming attention. Its CSS-first architecture removes Shorts surfaces without continuous DOM work, while a lightweight guard redirects explicit Shorts URLs to the standard player.",
    highlights: [
      "Removes Shorts shelves, grids and navigation entries",
      "CSS-first architecture with no layout thrashing",
      "Instant enable and disable control",
      "Desktop Chromium and Kiwi Browser support",
    ],
    images: [
      { src: "/projects/shorts-icon-hq.webp", alt: "Shorts Shield extension mark", fit: "icon", tone: "#ff5f57" },
    ],
    poster: {
      src: "/projects/shorts-icon-hq.webp",
      alt: "Shorts Shield poster",
      fit: "icon",
      tone: "#ff5f57",
    },
  },
  {
    title: "RoFilter",
    category: "apps",
    tag: "Extension",
    year: "2026",
    summary:
      "Filters the Roblox Discover and Home pages by like-to-dislike ratio, hides sponsored slots and drops anything below a player-count or keyword threshold — the storefront you wish it shipped with.",
    stack: ["JavaScript", "Chrome APIs"],
    href: "https://chromewebstore.google.com/detail/rofilter-game-quality-enh/mfbdhlnbimbigcfmmfonofkaccfpfion",
    linkLabel: "Chrome Web Store",
    repo: "https://github.com/denizstudiox/RoFilter",
    details:
      "A privacy-minded browser extension that gives players direct control over the Roblox discovery feed. Filters run locally and settings use Chrome sync; Apeira Studios does not receive browsing or usage data.",
    highlights: [
      "Minimum rating and active-player filters",
      "Custom blocked-title keywords",
      "Sponsored result removal",
      "Manifest V3 with plain HTML, CSS and JavaScript",
    ],
    images: [
      { src: "/projects/rofilter-store.webp", alt: "RoFilter Chrome Web Store presentation", fit: "contain", tone: "#05d99d" },
      { src: "/projects/rofilter-preview.webp", alt: "RoFilter extension settings interface", fit: "contain", tone: "#05d99d" },
    ],
    poster: {
      src: "/projects/rofilter-store.webp",
      alt: "RoFilter promotional poster",
      fit: "contain",
      tone: "#05d99d",
    },
  },
  {
    title: "WTTG2 Organizer",
    category: "tools",
    tag: "Tool",
    year: "2026",
    summary:
      "A real-time dashboard for tracking sites, keys and in-game data, synchronised live between desktop and phone over the local network. Thread-safe JSON store, packaged as a native desktop window.",
    stack: ["Python", "Flask-SocketIO", "PyWebView"],
    href: "https://github.com/denizstudiox/WTTG2Organizer",
    linkLabel: "View source",
    details:
      "A companion dashboard for Welcome to the Game II that consolidates targets, keys, Wi-Fi credentials and notes. The same state is synchronized in real time between its desktop window and a phone on the local network.",
    highlights: [
      "Availability tracking, sorting and instant search",
      "Key vault, Wi-Fi manager and secure notes",
      "Real-time phone and desktop synchronization",
      "Dedicated PyWebView desktop wrapper",
    ],
    images: [
      { src: "/projects/wttg-main.webp", alt: "WTTG2 Organizer main dashboard", fit: "contain", tone: "#20f072" },
      { src: "/projects/wttg-help.webp", alt: "WTTG2 Organizer help and mobile sync panel", fit: "contain", tone: "#20f072" },
    ],
    poster: {
      src: "/projects/wttg-main.webp",
      alt: "WTTG2 Organizer poster",
      fit: "contain",
      tone: "#20f072",
    },
  },
  {
    title: "dpi-easy",
    category: "tools",
    tag: "Desktop",
    year: "2026",
    summary:
      "A portable Windows front-end for GoodbyeDPI-Turkey: automatic profile selection, connection health checks and a single-file build that runs without installation.",
    stack: ["PowerShell", "WinForms", "Windows"],
    href: "https://github.com/denizstudiox/dpi-easy",
    linkLabel: "View source",
    details:
      "A portable Windows control layer for GoodbyeDPI-Turkey. It tests multiple upstream profiles, reports real connection health and keeps process ownership explicit, with no installer and no hidden background service.",
    highlights: [
      "One-button start and stop control",
      "Automatic selection across seven profiles",
      "HTTPS health checks and visible process state",
      "Portable Windows 10 and 11 package",
    ],
    images: [
      { src: "/projects/dpi-banner.svg", alt: "DPI Easy project banner", fit: "contain", tone: "#36a8ff" },
    ],
    poster: {
      src: "/projects/dpi-banner.svg",
      alt: "DPI Easy poster",
      fit: "contain",
      tone: "#36a8ff",
    },
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
