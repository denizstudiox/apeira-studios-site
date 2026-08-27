import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

const W = 1600;
const H = 680;

const OUTER =
  "M0 680V528 C50 574 78 410 126 458 C170 500 180 300 236 365 C282 418 300 498 340 455 C382 410 390 245 452 324 C510 396 520 514 574 463 C620 420 642 330 688 375 C730 416 730 503 780 454 C840 395 852 198 920 306 C968 382 982 512 1036 458 C1080 414 1096 278 1150 350 C1200 417 1212 520 1270 455 C1316 403 1334 324 1380 374 C1422 421 1436 540 1480 486 C1525 432 1553 385 1600 420 V680Z";

const MIDDLE =
  "M0 680V592 C70 620 100 502 154 538 C202 570 218 423 268 466 C318 509 324 592 382 536 C430 490 450 402 504 458 C548 505 566 590 624 535 C680 483 704 376 756 436 C802 490 824 594 880 526 C928 468 942 350 998 426 C1040 482 1060 588 1118 524 C1166 472 1192 416 1236 466 C1284 520 1302 590 1360 526 C1408 474 1446 440 1492 486 C1535 528 1562 566 1600 544 V680Z";

const CORE =
  "M0 680V636 C90 646 128 566 190 603 C246 636 276 533 330 574 C388 619 420 638 478 586 C536 536 578 622 636 579 C696 535 734 632 796 576 C854 523 900 620 958 574 C1014 529 1054 620 1116 572 C1178 524 1222 614 1286 570 C1346 528 1398 618 1460 578 C1510 545 1552 602 1600 588 V680Z";

export default function EnergyInferno({ className = "" }) {
  const reduce = useReducedMotion();
  const motes = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => ({
        x: 26 + ((i * 149) % 1548),
        y: 260 + ((i * 83) % 360),
        r: 1 + ((i * 7) % 3),
        delay: (i * 0.71) % 9,
        dur: 9 + ((i * 11) % 13),
        drift: ((i % 7) - 3) * 16,
      })),
    [],
  );

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      className={`energy-inferno ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <filter id="ei-warp" x="-12%" y="-35%" width="124%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.019"
            numOctaves="2"
            seed="17"
            result="noise"
          >
            {!reduce && (
              <animate
                attributeName="baseFrequency"
                values="0.006 0.019;0.009 0.029;0.005 0.017;0.006 0.019"
                dur="18s"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="42"
            xChannelSelector="R"
            yChannelSelector="B"
          />
          <feGaussianBlur stdDeviation="7" />
        </filter>

        <filter id="ei-glow" x="-30%" y="-80%" width="160%" height="230%">
          <feGaussianBlur stdDeviation="20" />
        </filter>

        <filter id="ei-thread-glow" x="-80%" y="-30%" width="260%" height="170%">
          <feGaussianBlur stdDeviation="4" />
        </filter>

        <radialGradient id="ei-halo" cx="50%" cy="88%" r="72%">
          <stop offset="0%" stopColor="#178cff" stopOpacity="0.54" />
          <stop offset="42%" stopColor="#2455e7" stopOpacity="0.22" />
          <stop offset="78%" stopColor="#6f35df" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#03040e" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="ei-outer" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#071a72" stopOpacity="0.96" />
          <stop offset="48%" stopColor="#145de5" stopOpacity="0.8">
            {!reduce && <animate attributeName="stop-color" values="#145de5;#0b8fe8;#4632d8;#145de5" dur="22s" repeatCount="indefinite" />}
          </stop>
          <stop offset="84%" stopColor="#27bbff" stopOpacity="0.46">
            {!reduce && <animate attributeName="stop-color" values="#27bbff;#7c55ff;#20d5df;#27bbff" dur="27s" repeatCount="indefinite" />}
          </stop>
          <stop offset="100%" stopColor="#8feaff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="ei-violet" x1="0" y1="1" x2="0" y2="0">
          <stop offset="5%" stopColor="#1e4fd9" stopOpacity="0.1" />
          <stop offset="58%" stopColor="#8054ff" stopOpacity="0.48">
            {!reduce && <animate attributeName="stop-color" values="#8054ff;#d354ff;#596cff;#8054ff" dur="31s" repeatCount="indefinite" />}
          </stop>
          <stop offset="100%" stopColor="#ee7cff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="ei-core" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#143bd1" stopOpacity="0.92" />
          <stop offset="62%" stopColor="#38cfff" stopOpacity="0.9">
            {!reduce && <animate attributeName="stop-color" values="#38cfff;#b169ff;#35e6d5;#f0b25c;#38cfff" dur="36s" repeatCount="indefinite" />}
          </stop>
          <stop offset="100%" stopColor="#e6fbff" stopOpacity="0.14" />
        </linearGradient>

        <linearGradient id="ei-thread" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#59c7ff" stopOpacity="0.86" />
          <stop offset="66%" stopColor="#8f68ff" stopOpacity="0.56">
            {!reduce && <animate attributeName="stop-color" values="#8f68ff;#ef62df;#51d8ff;#f2b867;#8f68ff" dur="29s" repeatCount="indefinite" />}
          </stop>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width={W} height={H} fill="url(#ei-halo)" />
      <ellipse cx="800" cy="665" rx="730" ry="190" fill="#1674ff" opacity="0.34" filter="url(#ei-glow)" />

      <g className={reduce ? "" : "energy-inferno__field"}>
        <path d={OUTER} fill="url(#ei-outer)" filter="url(#ei-warp)" />

        <g opacity="0.72" filter="url(#ei-warp)">
          {!reduce && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values="-16 10;18 -8;-16 10"
              dur="25s"
              repeatCount="indefinite"
            />
          )}
          <path d={MIDDLE} fill="url(#ei-violet)" />
        </g>

        <g opacity="0.9">
          {!reduce && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values="10 2;-12 -10;10 2"
              dur="19s"
              repeatCount="indefinite"
            />
          )}
          <path d={CORE} fill="url(#ei-core)" filter="url(#ei-thread-glow)" />
          <path d={CORE} fill="url(#ei-core)" opacity="0.78" />
        </g>
      </g>

      <g fill="none" stroke="url(#ei-thread)" strokeLinecap="round" filter="url(#ei-thread-glow)">
        {[
          "M112 662 C80 590 165 544 128 450 C112 410 126 356 166 316",
          "M356 670 C408 598 332 548 390 472 C432 416 394 362 448 300",
          "M642 674 C598 612 692 548 648 478 C618 430 672 376 706 326",
          "M895 670 C950 600 870 542 928 462 C970 404 934 332 984 270",
          "M1188 676 C1140 610 1232 552 1186 478 C1150 420 1218 372 1244 314",
          "M1462 674 C1510 604 1428 562 1484 488 C1518 444 1490 396 1540 346",
        ].map((d, i) => (
          <path key={d} d={d} strokeWidth={i % 2 ? 4 : 3} opacity={0.3 + (i % 3) * 0.12}>
            {!reduce && (
              <animate
                attributeName="stroke-dasharray"
                values="0 500;110 300;0 500"
                dur={`${17 + i * 2}s`}
                begin={`${i * -2.1}s`}
                repeatCount="indefinite"
              />
            )}
          </path>
        ))}
      </g>

      {!reduce && (
        <g>
          {motes.map((m, i) => (
            <circle key={i} cx={m.x} cy={m.y} r={m.r} fill={i % 5 === 0 ? "#d97cff" : i % 7 === 0 ? "#ffd183" : "#8eeaff"} opacity="0">
              <animate attributeName="opacity" values="0;0.9;0" dur={`${m.dur}s`} begin={`${-m.delay}s`} repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="translate" values={`0 80;${m.drift} -180`} dur={`${m.dur}s`} begin={`${-m.delay}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      )}

      <rect y="630" width={W} height="50" fill="#03040d" opacity="0.56" />
    </svg>
  );
}
