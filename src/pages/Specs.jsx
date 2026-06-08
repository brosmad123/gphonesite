import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/gphone/Footer";
import BottomNav from "../components/gphone/BottomNav";

const specs = [
  { label: "Display", value: '6.7" ProXDR AMOLED, 2800 x 1260, 144Hz, 460 PPI, HDR10+, 2200 nits peak brightness' },
  { label: "Chip", value: "gChip Neural Engine, Octa-core, 4.2GHz clock speed" },
  { label: "RAM", value: "16GB LPDDR5X" },
  { label: "Storage", value: "1TB / 2TB / 4TB NVMe" },
  { label: "Rear Camera", value: "200MP main (f/1.6, OIS, LiDAR) + 50MP ultrawide + 30MP periscope telephoto; computational photography, 1.7 billion color detection" },
  { label: "Front Camera", value: "32MP, autofocus, hole-punch cutout" },
  { label: "Battery", value: "6,500mAh graphene-composite; 72-hour lab-tested mixed usage" },
  { label: "Charging", value: "120W wired, 60W wireless, reverse wireless charging" },
  { label: "AI", value: "GAIA (Generative Artificial Intelligence Assistant); requires gOS 2.1.0 or later" },
  { label: "OS", value: "gOS 2.1.0" },
  { label: "Build", value: "Aerospace-grade titanium alloy frame, Gorilla Glass Victus 3 front and back" },
  { label: "Biometrics", value: "Under-display optical fingerprint sensor, 3D face unlock" },
  { label: "Connectivity", value: "5G (sub-6GHz + mmWave), Wi-Fi 7, Bluetooth 5.4, NFC, USB-C 4.0 (40Gbps)" },
  { label: "Colors", value: "Midnight Black, Arctic Silver, Phantom Blue*" },
  { label: "Starting Price", value: "$999 (1TB)" },
];

export default function Specs() {
  return (
    <div className="bg-background min-h-screen">
      <section className="pt-20 pb-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Full Specifications
          </h1>
          <p className="text-lg text-muted-foreground mt-3">
            Everything inside the world's most advanced smartphone.
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-10">
        <div className="border rounded-xl overflow-hidden">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className={`flex flex-col sm:flex-row ${i > 0 ? "border-t border-border" : ""}`}
            >
              <div className="sm:w-1/3 px-5 py-4 bg-muted/50">
                <p className="text-sm font-medium text-foreground">{spec.label}</p>
              </div>
              <div className="sm:w-2/3 px-5 py-4">
                <p className="text-sm text-muted-foreground">{spec.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          *Phantom Blue sold out on 1TB and 2TB models.
        </p>

        <div className="text-center mt-12">
          <Link to="/preorder" className="text-primary text-lg font-medium hover:underline">
            PREORDER NOW &rsaquo;
          </Link>
        </div>
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
}