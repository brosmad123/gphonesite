import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Phone inner screen dimensions (fixed)
const SCREEN_W = 300;
const SCREEN_H = 533; // 300 * 16/9 = 533.33

export default function GOSSection() {
  const scale = SCREEN_W / 390; // scale 390px-wide site down to fit

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
          gOS &middot; GAIA &middot; Software
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          The software is the superpower.
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
          gOS is built from the ground up. GAIA understands context, anticipates your needs, and responds before you finish your thought.
        </p>

        <Link
          to="/gos"
          className="inline-block mb-10 text-primary text-base font-medium hover:underline"
        >
          Learn more about gOS &rsaquo;
        </Link>

        {/* Phone mockup */}
        <div className="relative mx-auto" style={{ width: `${SCREEN_W + 24}px` }}>
          {/* Side buttons */}
          <div className="absolute right-[-3px] top-20 w-[3px] h-10 bg-gray-700 rounded-l-sm z-10" />
          <div className="absolute left-[-3px] top-16 w-[3px] h-7 bg-gray-700 rounded-r-sm z-10" />
          <div className="absolute left-[-3px] top-28 w-[3px] h-10 bg-gray-700 rounded-r-sm z-10" />
          <div className="absolute left-[-3px] top-44 w-[3px] h-10 bg-gray-700 rounded-r-sm z-10" />

          {/* Phone shell */}
          <div
            className="relative rounded-[2.5rem] bg-gray-900 overflow-hidden shadow-2xl"
            style={{ border: "12px solid #111" }}
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />

            {/* Fixed-size screen container */}
            <div
              style={{
                width: `${SCREEN_W}px`,
                height: `${SCREEN_H}px`,
                overflow: "hidden",
                position: "relative",
                backgroundColor: "#000",
              }}
            >
              <iframe
                src="https://gphoneapk.base44.app/"
                title="gOS Software Preview"
                style={{
                  width: "390px",
                  height: `${390 * (16 / 9)}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  border: "none",
                  display: "block",
                }}
              />
            </div>

            {/* Home indicator */}
            <div className="flex justify-center py-2 bg-black">
              <div className="w-20 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Requires gOS 2.1.0 or later.
        </p>
      </motion.div>
    </section>
  );
}
