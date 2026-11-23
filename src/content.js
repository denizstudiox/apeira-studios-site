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
  profile:
    "Apeira Studios is an independent studio in Türkiye, founded and run by Deniz Akkoyun. Operating since October 2025, the studio builds games, VR prototypes, interactive AI characters, focused Android apps and desktop tools. Its released Unreal Engine 5 game, The Flawed Architect, is available free for Windows on itch.io; ScrollBrake is in Google Play closed beta, alongside upcoming projects including NORTHWICK LINE, TETHERFALL and Stitchy.",
  github: "https://github.com/denizstudiox",
  linkedin: "https://www.linkedin.com/in/deniz-akkoyun/",
  // Optional — leave as "" to hide the link
  itch: "https://apeira-studios.itch.io",
  x: "",
  youtube: "https://www.youtube.com/@ApeiraStudios",
};

export const studioDevelopment = {
  current:
    "We ship across Unreal Engine 5 (C++), Kotlin/Jetpack Compose, Flutter and web stacks — pairing rapid prototyping with automated verification and focused visual craft. The Flawed Architect is released free on itch.io, and ScrollBrake is live in Google Play closed beta.",
  planned:
    "Next up are NORTHWICK LINE (a narrative visual novel & 3D psychological horror game), TETHERFALL (a C++ OpenXR VR locomotion prototype) and Stitchy (an offline-first Android knitting & crochet row counter).",
  releaseAnnouncement:
    "https://apeira-studios.itch.io/the-flawed-architect/devlog/1693991/the-flawed-architect-is-out-now-free-full-release",
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
    [{ t: "worlds and " }, { t: "apps.", glow: true }],
  ],
  intro:
    "Apeira Studios is the independent studio of Deniz Akkoyun in Türkiye — building Unreal Engine games, VR prototypes, AI café characters, Minecraft mods, Android apps, browser extensions and desktop tools.",
  primaryCta: { label: "See the work", href: "#work" },
  secondaryCta: { label: "Start a project", href: "#contact" },
  spotlight: {
    badge: "Closed Beta Live",
    title: "ScrollBrake for Android",
    body: "Block Instagram Reels & YouTube Shorts while keeping DMs, Stories and full videos open.",
    cta: "Join Closed Beta",
    href: "/scrollbrake/test/",
  },
  // Character-sheet style plate
  stats: [
    { value: "16", label: "Projects & releases" },
    { value: "UE5 & VR", label: "Games & worlds" },
    { value: "Android", label: "Apps & extensions" },
    { value: "2025", label: "Studio founded" },
  ],
};

export const marquee = [
  "Game Development",
  "VR Locomotion",
  "Android Apps",
  "Minecraft Modding",
  "Interactive AI",
  "Tools & Pipelines",
];

/* ------------------------------------------------------------------
 * THE CHRONICLE (work)
 * ------------------------------------------------------------------
 *   tag         — short kind label ("Minecraft Mod", "Android App", …)
 *   stack       — technologies / platforms
 *   href        — where the thing lives (store page, site). "" hides the link.
 *   linkLabel   — text on that link. Defaults to "View project".
 *   repo        — optional source-code link, shown as a second "Source" link.
 *   secondaryHref / secondaryLabel — optional secondary action in modal
 *   credit      — optional contribution or release status note
 *   category    — id from `workCategories` below; decides which group it sits in
 *   featured    — renders as a wide editorial spotlight card at top of its group
 *   wip         — renders statusLabel instead of an external link
 *   statusLabel — short status label shown when `wip` is true
 */

// The groups the work is presented in, in page order.
export const workCategories = [
  {
    id: "games",
    label: "Games & Mods",
    blurb:
      "Standalone horror games — released and in development — plus Minecraft systems shipped across every major loader.",
  },
  {
    id: "interactive",
    label: "XR & Interactive",
    blurb:
      "VR locomotion, educational simulations, café kiosks and real-time effects — work you step into or touch.",
  },
  {
    id: "apps",
    label: "Apps & Extensions",
    blurb:
      "Focused Android software and lightweight browser extensions designed to stay calm and out of the way.",
  },
  {
    id: "tools",
    label: "Desktop Tools",
    blurb:
      "Utilities and dashboards for Windows and the desktop, open source and portable.",
  },
];

export const work = [
  /* ===================== GAMES & MODS (3) ===================== */
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
      {
        src: "/projects/flawed-architect-01.webp",
        alt: "The Flawed Architect living room and emergency broadcast",
        tone: "#b95151",
      },
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
    title: "NORTHWICK LINE",
    category: "games",
    tag: "Visual Novel · 3D Horror",
    year: "2026",
    credit: "In development · PC (Steam & itch.io planned)",
    wip: true,
    statusLabel: "In development",
    summary:
      "\"You spent four days falling in love with her. On the fifth, the radio told you to drive faster.\" A story-driven blend of visual novel and first-person 3D psychological horror in Unreal Engine 5.",
    stack: ["Unreal Engine 5", "Narrative Horror", "Visual Novel", "PC"],
    href: "",
    details:
      "NORTHWICK LINE opens with warm, everyday visual-novel days before turning those exact same rooms, notes and routines into a first-person 3D psychological horror investigation. Built around memory, guilt and the fragile boundary between truth and self-deception.",
    highlights: [
      "Blends illustrated visual-novel storytelling with 3D first-person horror",
      "Familiar domestic spaces return transformed as the mystery deepens",
      "Choice-driven investigation with evidence boards and multiple endings",
      "Built in Unreal Engine 5 for Windows with full gamepad support",
    ],
    images: [
      {
        src: "/projects/northwick-cover.webp",
        alt: "NORTHWICK LINE rainy apartment hallway with an ajar front door",
        tone: "#d49b54",
      },
      {
        src: "/projects/northwick-02.webp",
        alt: "NORTHWICK LINE evening living room scene",
        tone: "#e29a5b",
      },
      {
        src: "/projects/northwick-03.webp",
        alt: "NORTHWICK LINE quiet bedroom at night",
        tone: "#5e78c9",
      },
    ],
    poster: {
      src: "/projects/northwick-cover.webp",
      alt: "NORTHWICK LINE atmospheric hallway artwork",
      tone: "#d49b54",
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

  /* ===================== XR & INTERACTIVE (6) ===================== */
  {
    title: "TETHERFALL",
    category: "interactive",
    tag: "VR Locomotion",
    year: "2026",
    credit: "Playable C++ prototype · In development",
    wip: true,
    statusLabel: "In development",
    summary:
      "An original VR physics locomotion prototype built entirely in Unreal Engine 5.8 C++. Swing across a procedural city with real projectile tethers, wall-running, point-launches, object manipulation and synthesized audio.",
    stack: ["Unreal Engine 5.8", "C++", "OpenXR", "PC VR"],
    href: "",
    details:
      "TETHERFALL is written in pure C++ with a procedural city district and zero external map dependencies. A single-trigger tether system handles real projectile attachment, tension-based swinging, wall-runs, rooftop vaults, zip-to-point movement and dynamic city events — targeting Meta Quest Link / PC VR via OpenXR.",
    highlights: [
      "100% C++ Unreal Engine 5.8 core with procedural city generation",
      "Physical projectile tethers with tension swinging and breakable load limits",
      "Wall-running, vertical climbs, point-launch and zip-to-point traversal",
      "In-world VR menu, comfort options and procedurally synthesized audio",
    ],
    images: [
      {
        src: "/projects/tetherfall-cover.webp",
        alt: "TETHERFALL mid-air tether swing between city towers",
        tone: "#6bb8ff",
      },
      {
        src: "/projects/tetherfall-02.webp",
        alt: "TETHERFALL high-speed rooftop traversal",
        tone: "#78c4ff",
      },
      {
        src: "/projects/tetherfall-03.webp",
        alt: "TETHERFALL procedural skyline at night",
        tone: "#5c7cff",
      },
      {
        src: "/projects/tetherfall-04.webp",
        alt: "TETHERFALL rooftop vista at sunset",
        tone: "#f2a679",
      },
    ],
    poster: {
      src: "/projects/tetherfall-cover.webp",
      alt: "TETHERFALL VR swinging prototype screenshot",
      tone: "#6bb8ff",
    },
  },
  {
    title: "Brewai — Moodi",
    category: "interactive",
    tag: "AI Café Character",
    year: "2026",
    credit: "Brewmood branch collaboration · Working prototype",
    summary:
      "An animated, voice-enabled AI character for cafés. Guests can chat in Turkish and get recommendations grounded in the café’s approved menu. Developed by Deniz Akkoyun in collaboration with a Brewmood branch.",
    stack: ["Conversational AI", "Voice", "Node.js", "Kiosk"],
    href: "/studio.html#brewai",
    linkLabel: "About Brewai",
    details:
      "Moodi brings a playful character to a café screen, with expressive eyes, a voice-responsive mouth and natural conversation. Server-side menu tools support recommendations, while a background advisor and answer review help keep responses tied to the approved menu. A staff panel manages the menu and kiosk workflow.",
    highlights: [
      "Developed in collaboration with a Brewmood branch",
      "Turkish voice conversation and animated expressions",
      "Recommendations grounded in the approved café menu",
      "Staff panel and local kiosk workflow",
    ],
    images: [
      {
        src: "/projects/brewai-moodi.png",
        alt: "Moodi animated character interface — development screenshot",
        tone: "#a8cbb0",
      },
    ],
    poster: {
      src: "/projects/brewai-moodi.png",
      alt: "Brewai Moodi character interface",
      fit: "contain",
      tone: "#a8cbb0",
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
      "A touch-first mood wheel created for café kiosks. One tap sends illustrated moods spinning, then lands on a full-screen result with responsive motion, sound and a deeply configurable visual system. Now live at BrewMood in Güzelbahçe, İzmir.",
    stack: ["HTML", "SVG", "JavaScript", "Offline-first"],
    href: "https://denizstudiox.github.io/choose-your-mood/",
    linkLabel: "Open experience",
    repo: "https://github.com/denizstudiox/choose-your-mood",
    details:
      "A zero-install interactive kiosk designed for touch displays in cafés. The wheel adapts its labels and faces to any mood list, stores appearance and behavior settings locally, and can run offline as a single self-contained HTML file. It is currently running on the kiosk at BrewMood in Güzelbahçe, İzmir.",
    highlights: [
      "In daily use at BrewMood — Güzelbahçe, İzmir",
      "Illustrated moods with a dynamically sized wheel",
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

  /* ===================== APPS & EXTENSIONS (1 Featured + 4) ===================== */
  {
    title: "ScrollBrake",
    category: "apps",
    featured: true,
    tag: "Android App",
    year: "2026",
    credit: "Google Play Closed Beta · v1.0.1 · 13 Languages",
    summary:
      "Stop Instagram Reels and YouTube Shorts without losing DMs, Stories or full videos. Built with a calm 5-second haptic pause gate, live count-only overlay, home widgets and a 3-day cardless Pro trial — all detection stays on your device.",
    stack: ["Kotlin", "Jetpack Compose", "Android", "13 Languages"],
    href: "/scrollbrake/test/",
    linkLabel: "Join Closed Beta",
    secondaryHref: "/scrollbrake/privacy.html",
    secondaryLabel: "Privacy Policy",
    details:
      "ScrollBrake is an Android focus shield built for people who want to stop short-form doomscrolling without deleting social apps. Instagram Reels and YouTube Shorts protection are free forever; Pro adds TikTok, Facebook Reels, Snapchat Spotlight, Focus Schedules, Strict Mode and CSV exports — with a 3-day cardless trial and zero auto-charge. Accessibility detection runs locally on device with no account required.",
    highlights: [
      "Free forever for Instagram Reels & YouTube Shorts — DMs, Stories & regular videos stay untouched",
      "4 protection styles: Instant Shield, 5-second Haptic Hold Gate, Live Counter & Deep Focus Lock",
      "3-day cardless Pro trial (no credit card, no auto-charge) unlocking TikTok, Facebook & Snapchat",
      "On-device detection, zero account required, localized across 13 languages",
    ],
    images: [
      {
        src: "/projects/scrollbrake-cover.webp",
        alt: "ScrollBrake — Pause the feed, keep your life",
        fit: "contain",
        tone: "#8fb892",
      },
      {
        src: "/projects/scrollbrake-01.webp",
        alt: "ScrollBrake Clear Mind orbital dashboard",
        fit: "contain",
        tone: "#8fb892",
      },
      {
        src: "/projects/scrollbrake-02.webp",
        alt: "ScrollBrake live Reels & Shorts counter overlay",
        fit: "contain",
        tone: "#8fb892",
      },
      {
        src: "/projects/scrollbrake-03.webp",
        alt: "ScrollBrake annual time-reclaimed calculator",
        fit: "contain",
        tone: "#dfbe7e",
      },
      {
        src: "/projects/scrollbrake-04.webp",
        alt: "ScrollBrake home screen widgets and Focus Wrapped card",
        fit: "contain",
        tone: "#8fb892",
      },
    ],
    poster: {
      src: "/projects/scrollbrake-cover.webp",
      alt: "ScrollBrake feature artwork",
      fit: "cover",
      tone: "#8fb892",
    },
  },
  {
    title: "Stitchy",
    category: "apps",
    tag: "Android App",
    year: "2026",
    credit: "Offline-first · Preparing for Google Play",
    wip: true,
    statusLabel: "Coming soon",
    summary:
      "A calm row counter and project notebook for knitting and crochet, built for when your hands are full. Tap half the screen or press the volume key to count, with gentle haptics and full offline storage.",
    stack: ["Flutter", "Android", "Offline-first", "10 Languages"],
    href: "",
    details:
      "Stitchy is designed around one constraint every knitter knows: your hands are busy. Half the screen acts as a generous count surface, hardware volume buttons count without looking, and multiple counters track rows, repeats, sleeves and pattern sections across projects — completely offline with no account or backend.",
    highlights: [
      "Half-screen tap counter plus hardware volume-key counting",
      "Short haptic confirmation and keep-screen-awake mode while counting",
      "Multiple counters per project for rows, repeats and pattern sections",
      "Light & dark themes, 10 languages, 100% offline with zero sign-up",
    ],
    images: [
      {
        src: "/projects/stitchy-cover.webp",
        alt: "Stitchy knitting & crochet row counter feature graphic",
        fit: "contain",
        tone: "#c76846",
      },
      {
        src: "/projects/stitchy-01.webp",
        alt: "Stitchy light mode row counter screen",
        fit: "contain",
        tone: "#d49a6a",
      },
      {
        src: "/projects/stitchy-02.webp",
        alt: "Stitchy project notebook list",
        fit: "contain",
        tone: "#d49a6a",
      },
      {
        src: "/projects/stitchy-03.webp",
        alt: "Stitchy dark mode row counter screen",
        fit: "contain",
        tone: "#c76846",
      },
    ],
    poster: {
      src: "/projects/stitchy-cover.webp",
      alt: "Stitchy feature artwork",
      fit: "cover",
      tone: "#c76846",
    },
  },
  {
    title: "Kubik",
    category: "apps",
    tag: "Android App",
    year: "2026",
    credit: "Android Closed Beta",
    summary:
      "An Android speedcubing timer with offline timing, scramble generation and session statistics. Two-finger touchscreen controls support practice; solve history stays local with JSON/CSV export.",
    stack: ["Android", "Offline practice", "Local solve history"],
    href: "https://denizstudiox.github.io/kubik/",
    linkLabel: "View project",
    details:
      "Kubik is a practice timer for speedcubers: offline timing, scramble generation and session statistics. Solve history is stored on your phone, and you can export it as JSON/CSV; Android backup can include it. The timer screen is ad-free; a single banner ad (Google AdMob, with a consent screen) appears under the other tabs. Kubik is a practice tool and is not certified for official WCA competitions.",
    highlights: [
      "Scrambles for common puzzles (generation method varies by puzzle)",
      "Two-finger touchscreen start, Stackmat-style (no hardware timer needed)",
      "ao5, ao12, ao50, ao100 and mo3 session statistics",
      "Works offline; the internet is only used for ads",
      "Local solve history, with JSON/CSV export and Android backup",
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
    title: "Shorts Shield",
    category: "apps",
    tag: "Extension",
    year: "2026",
    summary:
      "A browser extension that hides YouTube Shorts surfaces using CSS selectors, with a lightweight JavaScript guard for explicit Shorts URLs.",
    stack: ["Manifest V3", "CSS :has()", "JavaScript"],
    href: "https://chromewebstore.google.com/detail/shorts-shield/nnhhbjdginblkbojacgppopedghflbdg",
    linkLabel: "Chrome Web Store",
    repo: "https://github.com/denizstudiox/Shorts-Shield",
    details:
      "A deliberately tiny browser extension for reclaiming attention. Its CSS-first architecture removes Shorts surfaces without continuous DOM work, while a lightweight guard redirects explicit Shorts URLs to the standard player.",
    highlights: [
      "Removes Shorts shelves, grids and navigation entries",
      "CSS selectors hide Shorts surfaces",
      "Instant enable and disable control",
      "Designed for compatible Chromium browsers",
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
      {
        src: "/projects/rofilter-store.webp",
        alt: "RoFilter Chrome Web Store presentation",
        fit: "contain",
        tone: "#05d99d",
      },
      {
        src: "/projects/rofilter-preview.webp",
        alt: "RoFilter extension settings interface",
        fit: "contain",
        tone: "#05d99d",
      },
    ],
    poster: {
      src: "/projects/rofilter-store.webp",
      alt: "RoFilter promotional poster",
      fit: "contain",
      tone: "#05d99d",
    },
  },

  /* ===================== DESKTOP TOOLS (2) ===================== */
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
      "A fan-made companion dashboard for Welcome to the Game II that consolidates targets, game keys, in-game Wi-Fi credentials and gameplay notes. Desktop and phone access share state on the local network without sign-in, so use a trusted network. The first load can require CDN access. This is not an official game product.",
    highlights: [
      "Availability tracking, sorting and instant search",
      "Game keys, Wi-Fi manager and gameplay notes",
      "Real-time phone and desktop synchronization",
      "Dedicated PyWebView desktop wrapper",
    ],
    images: [
      { src: "/projects/wttg-main.webp", alt: "WTTG2 Organizer main dashboard", fit: "contain", tone: "#20f072" },
      {
        src: "/projects/wttg-help.webp",
        alt: "WTTG2 Organizer help and mobile sync panel",
        fit: "contain",
        tone: "#20f072",
      },
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
      title: "Gameplay & VR Systems",
      body: "Movement, physics locomotion, horror atmosphere and narrative systems in Unreal Engine 5 — built in C++ to be tuned, not rewritten.",
    },
    {
      no: "02",
      title: "Focused Mobile Apps",
      body: "Native Android (Kotlin / Jetpack Compose) and Flutter software built for calm daily use, offline reliability and strict privacy.",
    },
    {
      no: "03",
      title: "Modding & Prototyping",
      body: "Shipped Minecraft content across Fabric, Forge and NeoForge alongside fast, playable vertical slices that test ideas early.",
    },
    {
      no: "04",
      title: "Interactive AI & Kiosks",
      body: "Voice-driven characters and touch-first displays that run reliably in real venues — grounded in real menus and workflows.",
    },
    {
      no: "05",
      title: "Browser & Desktop Tools",
      body: "Lightweight extensions, portable Windows utilities and local dashboards that stay out of the way and solve one problem well.",
    },
    {
      no: "06",
      title: "Polish & Performance",
      body: "120Hz frame budgets, haptic feedback, responsive motion and accessibility. The last ten percent that turns a prototype into a product.",
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: ["Have something", "worth building?"],
  body: "A game system, a focused mobile app, an interactive prototype or a tool that needs to ship — send a few lines about it. Every message gets a reply.",
};
