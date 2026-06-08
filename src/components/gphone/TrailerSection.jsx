import { motion } from "framer-motion";

const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/bh8YG9l_8Pk?rel=0&modestbranding=1";

export default function TrailerSection() {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Watch the trailer.
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          See gPhone V in action.
        </p>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src={YOUTUBE_EMBED_URL}
            title="gPhone V Trailer"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </motion.div>
    </section>
  );
}