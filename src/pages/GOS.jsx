import { motion } from "framer-motion";
import Footer from "../components/gphone/Footer";
import BottomNav from "../components/gphone/BottomNav";

const SCREEN_W = 300;
const SCREEN_H = 533;

export default function GOS() {
  const scale = SCREEN_W / 390;

  return (
    <div className="bg-background min-h-screen">
      <section className="pt-20 pb-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            gOS &middot; GAIA &middot; Software
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            The software is the superpower.
          </h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-xl mx-auto">
            gOS is built from the ground up. GAIA understands context, anticipates your needs, and responds before you finish your thought. Requires gOS 2.1.0 or later.
          </p>
        </motion.div>
      </section>

      <section className="flex justify-center py-10 px-6">
        <div className="relative" style={{ width: `${SCREEN_W + 24}px` }}>
          <div className="absolute right-[-3px] top-20 w-[3px] h-10 bg-gray-700 rounded-l-sm z-10" />
          <div className="absolute left-[-3px] top-16 w-[3px] h-7 bg-gray-700 rounded-r-sm z-10" />
          <div className="absolute left-[-3px] top-28 w-[3px] h-10 bg-gray-700 rounded-r-sm z-10" />
          <div className="absolute left-[-3px] top-44 w-[3px] h-10 bg-gray-700 rounded-r-sm z-10" />

          <div
            className="relative rounded-[2.5rem] bg-gray-900 overflow-hidden shadow-2xl"
            style={{ border: "12px solid #111" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />
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
            <div className="flex justify-center py-2 bg-black">
              <div className="w-20 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <div className="border-t border-border pt-8">
          <h3 className="text-2xl font-bold text-foreground mb-3">GAIA Intelligence</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GAIA processes requests on-device to protect your privacy. It learns your habits, anticipates your needs, and delivers results with sub-millisecond latency. Complex queries that need the cloud are encrypted in transit and never stored.
          </p>
        </div>
        <div className="border-t border-border pt-8">
          <h3 className="text-2xl font-bold text-foreground mb-3">Seamless Integration</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            gOS works with every app, every service, every file format. It is designed to get out of your way and let you focus on what matters. Updates are automatic and non-intrusive.
          </p>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
}
