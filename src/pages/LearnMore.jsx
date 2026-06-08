import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/gphone/Footer";
import BottomNav from "../components/gphone/BottomNav";

const LOGO_URL = "https://i.postimg.cc/3wHxcRB7/g-Phone-03-06-2026.png";

const features = [
  {
    title: "gChip Neural Engine",
    desc: "Our most advanced chip ever. An octa-core processor clocked at 4.2GHz paired with 16GB of LPDDR5X RAM delivers desktop-class performance in your pocket. Whether you are editing 4K video, running complex AI models locally, or switching between 30 apps, gChip handles it without breaking a sweat."
  },
  {
    title: "200MP ProVision Camera",
    desc: "The triple-lens camera system features a 200MP main sensor with f/1.6 aperture and optical image stabilization, a 50MP ultrawide lens, and a 30MP periscope telephoto lens. LiDAR depth sensing and computational photography let you capture 1.7 billion colors with stunning accuracy in any lighting condition."
  },
  {
    title: "6.7\" ProXDR AMOLED Display",
    desc: "A 6.7-inch AMOLED display running at 144Hz with 460 pixels per inch and HDR10+ support. Peak brightness reaches 2,200 nits, making it perfectly visible even in direct sunlight. Every color is accurate, every motion is fluid, every pixel is perfect."
  },
  {
    title: "GraphenePower Battery",
    desc: "A 6,500mAh graphene-composite battery that lasts up to 72 hours on a single charge with mixed use. Supports 120W wired charging, 60W wireless charging, and reverse wireless charging so you can top up your earbuds or watch right from the phone."
  },
  {
    title: "Aerospace-Grade Build",
    desc: "The frame is crafted from aerospace-grade titanium alloy, and both the front and back are protected by Gorilla Glass Victus 3. This phone is built to handle drops, scratches, and everyday wear without showing it."
  },
  {
    title: "GAIA On-Device AI",
    desc: "GAIA is our Generative Artificial Intelligence Assistant that runs on-device for maximum privacy and speed. It understands context, anticipates your needs, and responds before you finish your thought. GAIA gets smarter the more you use it, and your data never leaves your device."
  },
  {
    title: "Connectivity",
    desc: "5G support for both sub-6GHz and mmWave networks, Wi-Fi 7, Bluetooth 5.4, NFC for payments, and USB-C 4.0 with data transfer speeds up to 40Gbps. You are always connected at the fastest speeds available."
  },
  {
    title: "Security",
    desc: "Under-display optical fingerprint sensor and 3D face unlock keep your phone secure with biometric authentication that works in an instant."
  }
];

export default function LearnMore() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={LOGO_URL} alt="gPhone Logo" className="w-20 h-20 mx-auto mb-6 object-contain" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            gPhone V
          </h1>
          <p className="text-xl text-muted-foreground mt-3 max-w-lg mx-auto">
            Everything you need to know about the world's most advanced smartphone.
          </p>
          <Link to="/preorder" className="inline-block mt-6 text-primary text-lg font-medium hover:underline">
            PREORDER NOW &rsaquo;
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="border-t border-border py-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">{f.title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 border-t border-border">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ready to experience gPhone V?</h2>
        <Link to="/preorder" className="text-primary text-lg font-medium hover:underline">
          PREORDER NOW &rsaquo;
        </Link>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
}