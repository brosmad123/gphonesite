import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LOGO_URL = "https://i.postimg.cc/3wHxcRB7/g-Phone-03-06-2026.png";

export default function HeroSection({ heroImage }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto"
      >
        <img
          src={LOGO_URL}
          alt="gPhone Logo"
          className="w-32 h-32 mx-auto mb-8 object-contain"
        />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-foreground">
          gPhone V.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mt-4 font-light">
          Power in its purest form.
        </p>
        <p className="text-lg text-muted-foreground mt-2">
          6.7" Display. 16GB RAM. The new standard.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/preorder"
            className="text-primary text-lg font-medium hover:underline"
          >
            PREORDER NOW &rsaquo;
          </Link>
          <Link
            to="/learn-more"
            className="text-primary text-lg font-medium hover:underline"
          >
            Learn more &rsaquo;
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="mt-16 max-w-md mx-auto"
      >
        <img
          src={heroImage}
          alt="gPhone V premium smartphone"
          className="w-full h-auto"
        />
      </motion.div>

      <p className="text-sm text-muted-foreground mt-8">
        From <span className="font-semibold text-foreground">$999</span> with free overnight shipping.
      </p>
    </section>
  );
}