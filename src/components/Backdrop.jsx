/**
 * The page descends: the living surface at the top, the vein network beneath
 * it, the apeiron at the very bottom. The background is that descent — the
 * world is stated here and in the artwork, never in words.
 */
export default function Backdrop() {
  // A static gradient over the full page height rather than a colour driven
  // by scroll: it scrolls with the content, so nothing repaints per frame.
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-50"
      style={{
        background:
          "linear-gradient(to bottom, #070611 0%, #090817 22%, #0c0820 50%, #080714 78%, #03040a 100%)",
      }}
    />
  );
}
