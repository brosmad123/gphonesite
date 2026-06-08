import { motion } from "framer-motion";

export default function SpecTile({ title, headline, description, stat, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-t border-border pt-12 pb-16"
    >
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
          {title}
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
          {headline}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
          {description}
        </p>
        {stat && (
          <p className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            {stat}
          </p>
        )}
        {image && (
          <div className="mt-8">
            <img src={image} alt={title} className="w-full max-w-lg mx-auto rounded-2xl" />
          </div>
        )}
      </div>
    </motion.div>
  );
}