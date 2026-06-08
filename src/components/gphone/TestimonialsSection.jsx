import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Harman Sidhu",
    role: "Host",
    quote: "Are you tired of phones that lag, crash, and die at the worst moment? The gPhone is not just a phone. It is a huge step forward in mobile technology."
  },
  {
    name: "Gurshaan Gill",
    role: "Lead Engineer",
    quote: "The gPhone has an octa-core processor running at 4.2 gigahertz with 16GB of RAM. The display is so clear that you would think you are looking through a window instead of a screen."
  },
  {
    name: "Kabir Adhikari",
    role: "Customer",
    quote: "I dropped it off a ladder and there was not a scratch on it. My photos look so good that my friends thought I hired a photographer. I did not. It was just the gPhone."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          The G Leagues
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
          Words from the team.
        </p>

        <div className="space-y-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-border pt-8"
            >
              <p className="text-lg text-foreground leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <p className="text-sm text-muted-foreground">
                {t.name}, {t.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}