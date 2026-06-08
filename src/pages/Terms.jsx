import { motion } from "framer-motion";
import Footer from "../components/gphone/Footer";
import BottomNav from "../components/gphone/BottomNav";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing the gPhone V website or placing a pre-order for gPhone V, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services."
  },
  {
    title: "2. Pre-Order Agreement",
    content: "gPhone V pre-orders are subject to availability. The GG Company reserves the right to cancel or modify pre-orders in the event of pricing errors, inventory changes, or force majeure events. A 30-day money-back guarantee applies from the date of delivery."
  },
  {
    title: "3. Intellectual Property",
    content: "All content on this site, including the gPhone name, gOS, GAIA, and The GG Company branding, is the intellectual property of The GG Company. Unauthorized reproduction is prohibited."
  },
  {
    title: "4. Limitation of Liability",
    content: "The GG Company is not liable for damages arising from use of this site or delays in product delivery. Our liability is limited to the purchase price of the gPhone V unit."
  },
  {
    title: "5. gOS and GAIA Usage",
    content: "GAIA features are only available on gOS 2.1.0 or later. The GG Company may update gOS at any time. Continued use of gPhone V constitutes acceptance of software updates."
  },
  {
    title: "6. Governing Law",
    content: "These terms are governed by the laws of Canada. Disputes shall be resolved in the courts of Ontario."
  },
  {
    title: "7. Contact",
    content: "Email 861814@pdsb.net."
  }
];

export default function Terms() {
  return (
    <div className="bg-background min-h-screen">
      <section className="pt-20 pb-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Terms of Use
          </h1>
          <p className="text-sm text-muted-foreground mt-3">
            Last Updated: June 1, 2026 &middot; The GG Company
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        {sections.map((s, i) => (
          <div key={i} className="border-t border-border py-8">
            <h2 className="text-xl font-bold text-foreground mb-3">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.content}</p>
          </div>
        ))}
      </section>

      <Footer />
      <BottomNav />
    </div>
  );
}