const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import HeroSection from "../components/gphone/HeroSection";
import SpecTile from "../components/gphone/SpecTile";
import GOSSection from "../components/gphone/GOSSection";
import TrailerSection from "../components/gphone/TrailerSection";
import TestimonialsSection from "../components/gphone/TestimonialsSection";
import ModelConfigurator from "../components/gphone/ModelConfigurator";
import Footer from "../components/gphone/Footer";
import BottomNav from "../components/gphone/BottomNav";

const HERO_IMAGE = "https://media.db.com/images/public/6a26f97c2b2487617caf93d9/34d7f1e9f_generated_aac985f4.png";
const CAMERA_IMAGE = "https://media.db.com/images/public/6a26f97c2b2487617caf93d9/62f95ed68_generated_9e61f2f8.png";
const TOPDOWN_IMAGE = "https://media.db.com/images/public/6a26f97c2b2487617caf93d9/d77afdd63_generated_35364ad7.png";
const EDGE_IMAGE = "https://media.db.com/images/public/6a26f97c2b2487617caf93d9/bfe7f5e0b_generated_75ac303a.png";

const specs = [
  {
    title: "gChip Neural Engine",
    headline: "Blindingly fast.",
    description: "Octa-core processor at 4.2GHz with 16GB RAM. Eight simultaneous cores. Processes data faster than your brain handles a Monday alarm.",
    stat: "4.2GHz",
    image: null,
  },
  {
    title: "ProVision Camera",
    headline: "See more than ever.",
    description: "200MP AI triple-lens with LiDAR depth sensing. Tells apart 1.7 billion colors. Your photos will look like a pro shot them.",
    stat: "200MP",
    image: CAMERA_IMAGE,
  },
  {
    title: "GraphenePower Battery",
    headline: "Three days. No charger.",
    description: "6,500mAh battery with AI power management. Lab tested at 72 hours of mixed use before needing a charge.",
    stat: "72hrs",
    image: null,
  },
  {
    title: "ProXDR Display",
    headline: "Every pixel. Perfect.",
    description: "6.7\" AMOLED at 144Hz and 460 PPI. So sharp you will think you are looking through glass, not a screen.",
    stat: "144Hz",
    image: EDGE_IMAGE,
  },
];

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection heroImage={HERO_IMAGE} />

      <div className="max-w-5xl mx-auto">
        {specs.map((spec, i) => (
          <SpecTile key={i} {...spec} index={i} />
        ))}
      </div>

      <div className="border-t border-border">
        <TrailerSection />
      </div>

      <div className="border-t border-border">
        <GOSSection />
      </div>

      <div className="border-t border-border">
        <ModelConfigurator />
      </div>

      <div className="border-t border-border">
        <TestimonialsSection />
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
}