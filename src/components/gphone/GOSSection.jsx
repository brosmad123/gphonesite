import { motion } from "framer-motion";

export default function GOSSection() {
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
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          gOS is built from the ground up. GAIA understands context, anticipates your needs, and responds before you finish your thought.
        </p>

        {/* Phone mockup frame */}
        <div className="relative mx-auto" style={{ maxWidth: "320px" }}>
          {/* Side buttons */}
          <div className="absolute right-[-3px] top-20 w-[3px] h-10 bg-gray-700 rounded-l-sm z-10" />
          <div className="absolute left-[-3px] top-16 w-[3px] h-7 bg-gray-700 rounded-r-sm z-10" />
          <div className="absolute left-[-3px] top-28 w-[3px] h-12 bg-gray-700 rounded-r-sm z-10" />
          <div className="absolute left-[-3px] top-44 w-[3px] h-12 bg-gray-700 rounded-r-sm z-10" />

          {/* Phone shell */}
          <div className="relative rounded-[2.5rem] border-[10px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-xl z-10" />

            {/* Screen — strict 9:16 */}
            <div className="w-full overflow-hidden" style={{ aspectRatio: "9 / 16" }}>
              <iframe
                src="https://gphoneapk.db.app"
                title="gOS Software Preview"
                className="border-0"
                style={{
                  width: "1080px",
                  height: "1920px",
                  transform: "scale(0.2778)",
                  transformOrigin: "top left",
                  display: "block",
                }}
              />
            </div>

            {/* Home indicator bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full" />
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Requires gOS 2.1.0 or later.
        </p>
      </motion.div>
    </section>
  );
}
