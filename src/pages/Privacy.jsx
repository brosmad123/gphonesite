import { motion } from "framer-motion";
import Footer from "../components/gphone/Footer";
import BottomNav from "../components/gphone/BottomNav";

const sections = [
  {
    title: "1. Information We Collect",
    content: "When you register for gPhone V updates or place a pre-order, we collect your name, email address, billing address, and payment information. We also collect device usage data when you use gOS to improve GAIA and system performance."
  },
  {
    title: "2. How We Use Your Information",
    content: "To process your pre-order and deliver your gPhone V. To send you order updates and product launch notifications. To improve gOS and GAIA AI features. To comply with legal obligations."
  },
  {
    title: "3. Data Sharing",
    content: "We do not sell your personal data. We may share information with trusted service providers who assist in delivering our products and services, under strict confidentiality agreements."
  },
  {
    title: "4. GAIA and On-Device AI",
    content: "GAIA processes most requests on-device to protect your privacy. Queries that require cloud processing are encrypted in transit and not stored beyond the immediate session. GAIA features require gOS 2.1.0 or later."
  },
  {
    title: "5. Your Rights",
    content: "You may request access to, correction of, or deletion of your personal data at any time by contacting 861814@pdsb.net."
  },
  {
    title: "6. Contact",
    content: "Email 861814@pdsb.net for any privacy-related inquiries."
  }
];

export default function Privacy() {
  return (
    <div className="bg-background min-h-screen">
      <section className="pt-20 pb-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mt-3">
            Effective Date: June 1, 2026 &middot; The GG Company
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