import HeroSection from "../components/gphone/HeroSection";
import SpecTile from "../components/gphone/SpecTile";
import GOSSection from "../components/gphone/GOSSection";
import TrailerSection from "../components/gphone/TrailerSection";
import TestimonialsSection from "../components/gphone/TestimonialsSection";
import ModelConfigurator from "../components/gphone/ModelConfigurator";
import Footer from "../components/gphone/Footer";
import BottomNav from "../components/gphone/BottomNav";

// Updated images
const HERO_IMAGE = "https://www.videotron.com/sites/default/files/styles/original_large/public/mobility_product/image3_21.webp?itok=eHLn-Aa7";
const CAMERA_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7er5vSX4tmEf3hJYZX7rg67U6xz3EJFi3cg&s";
const TOPDOWN_IMAGE = "https://i5.walmartimages.com/asr/d1e733b7-1e89-4c26-a192-79daff5e593e.bdcdc76bb8e13b7b385878eb733ea8be.png";
const EDGE_IMAGE = "https://www.videotron.com/sites/default/files/styles/original_large/public/mobility_product/image3_21.webp?itok=eHLn-Aa7";

const specs = [
  {
    title: "gChip Neural Engine",
    headline: "Blindingly fast.",
    description: "Octa-core processor at 4.2GHz with 16GB RAM. Eight simultaneous cores. Processes data faster than your brain handles a Monday alarm.",
    stat: "4.2GHz",
    image: TOPDOWN_IMAGE,
    learnMoreTo: "/specs",
    learnMoreLabel: "Learn more about gChip",
  },
  {
    title: "ProVision Camera",
    headline: "See more than ever.",
    description: "200MP AI triple-lens with LiDAR depth sensing. Tells apart 1.7 billion colors. Your photos will look like a pro shot them.",
    stat: "200MP",
    image: CAMERA_IMAGE,
    learnMoreTo: "/specs",
    learnMoreLabel: "Learn more about ProVision",
  },
  {
    title: "GraphenePower Battery",
    headline: "Three days. No charger.",
    description: "6,500mAh battery with AI power management. Lab tested at 72 hours of mixed use before needing a charge.",
    stat: "72hrs",
    image: null,
    learnMoreTo: "/specs",
    learnMoreLabel: "Learn more about GraphenePower",
  },
  {
    title: "ProXDR Display",
    headline: "Every pixel. Perfect.",
    description: "6.7\" AMOLED at 144Hz and 460 PPI. So sharp you will think you are looking through glass, not a screen.",
    stat: "144Hz",
    image: EDGE_IMAGE,
    learnMoreTo: "/specs",
    learnMoreLabel: "Learn more about ProXDR",
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
