const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

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
        <div className="relative mx-auto" style={{ maxWidth: "360px" }}>
          <div className="relative rounded-[2.5rem] border-[8px] border-black bg-black overflow-hidden shadow-2xl">
            {/* Notch */}
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
          {/* Side button */}
          <div className="absolute right-[-4px] top-24 w-1 h-12 bg-black rounded-l-sm" />
          <div className="absolute left-[-4px] top-20 w-1 h-8 bg-black rounded-r-sm" />
          <div className="absolute left-[-4px] top-32 w-1 h-8 bg-black rounded-r-sm" />
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Requires gOS 2.1.0 or later.
        </p>
      </motion.div>
    </section>
  );
}