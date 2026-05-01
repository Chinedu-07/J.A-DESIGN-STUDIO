import { motion } from "framer-motion";
import { Award, Paintbrush, Layers, MessageSquare, Cpu, Target, Heart } from "lucide-react";

const reasons = [
  { icon: Award, title: "Expertise That Delivers Results", desc: "We bring strong experience in web development, e-commerce, SaaS, and UI/UX design, using proven strategies to build websites that attract, engage, and convert." },
  { icon: Paintbrush, title: "Premium, Brand-Focused Design", desc: "Every project is crafted to reflect your brand identity, delivering modern, clean, and responsive designs across all devices." },
  { icon: Layers, title: "End-to-End Solutions", desc: "From strategy to design, development, and ongoing support — we handle everything so you get a seamless, stress-free experience." },
  { icon: MessageSquare, title: "Clear Communication", desc: "We keep you informed at every stage with transparent updates, timelines, and collaborative feedback." },
  { icon: Cpu, title: "Built for Performance", desc: "Our websites are fast, secure, and scalable — engineered to perform efficiently and support long-term digital growth." },
  { icon: Target, title: "Results-Focused Approach", desc: "Everything we build is aimed at business growth — whether that's increasing sales, improving user experience, automating processes, or strengthening your brand." },
  { icon: Heart, title: "Client-Centered Mindset", desc: "We take time to understand your goals, audience, and vision, then turn them into a digital experience that truly connects with your customers." },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
          Why <span className="text-gradient">JA Design Studio?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          We don't just build websites — we create high-performing digital experiences designed to grow your business. Every project is approached with strategy, precision, and a deep understanding of what drives results in today's digital space.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
          >
            <r.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto text-lg"
      >
        Choosing JA Design Studio means working with a team that combines{" "}
        <span className="text-foreground font-medium">creative excellence, technical expertise, and a genuine commitment to your success</span>.
      </motion.p>
    </div>
  </section>
);

export default WhyChooseUs;
