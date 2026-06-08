const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from "framer-motion";
import Footer from "../components/gphone/Footer";
import BottomNav from "../components/gphone/BottomNav";

export default function GOS() {
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

      {/* Full-width phone mockup */}
      <section className="flex justify-center py-10 px-6">
        <div className="relative" style={{ maxWidth: "360px", width: "100%" }}>
          <div className="relative rounded-[2.5rem] border-[8px] border-black bg-black overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
            <div className="w-full" style={{ aspectRatio: "9/19.5" }}>
              <iframe
                src="https://gphoneapk.db.app"
                title="gOS Software Preview"
                className="w-full h-full border-0"
                style={{
                  width: "1080px",
                  height: "1920px",
                  transform: "scale(0.333)",
                  transformOrigin: "top left",
                }}
              />
            </div>
          </div>
          <div className="absolute right-[-4px] top-24 w-1 h-12 bg-black rounded-l-sm" />
          <div className="absolute left-[-4px] top-20 w-1 h-8 bg-black rounded-r-sm" />
          <div className="absolute left-[-4px] top-32 w-1 h-8 bg-black rounded-r-sm" />
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