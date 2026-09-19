import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Backdrop from "./components/Backdrop";
import Veins from "./components/Veins";

/**
 * The page is a descent through the three layers of the world — the living
 * surface, the veins, the apeiron — expressed only through colour and
 * artwork. Each wrapper re-tints everything inside it (see .layer-* in
 * index.css).
 */
export default function App() {
  return (
    <div className="grain relative min-h-screen">
      <Backdrop />
      <Nav />

      <main>
        <div className="layer-surface">
          <Hero />
          <Marquee />
        </div>

        <div className="layer-veins relative overflow-hidden">
          <Veins className="absolute inset-0 opacity-60" direction="down" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(112,104,205,0.15),transparent_32%),rgba(5,4,20,0.55)]" />
          <div className="relative">
            <Work />
            <Capabilities />
          </div>
        </div>

        <div className="layer-apeiron">
          <Contact />
        </div>
      </main>

      <div className="layer-apeiron">
        <Footer />
      </div>
    </div>
  );
}
