import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, Luxe Interiors", text: "JA Design Studio transformed our online presence completely. The website they built not only looks stunning but has increased our leads by 200%. Truly exceptional work." },
  { name: "David Chen", role: "Founder, TechScale", text: "The dashboard they built for us is incredibly intuitive and powerful. Our users love the experience, and our metrics have improved dramatically since launch." },
  { name: "Amara Okafor", role: "Brand Director, Bloom Cosmetics", text: "From design to deployment, JA Design Studio delivered a world-class e-commerce experience. Our online sales have grown 3x since launching the new store." },
  { name: "James Adeyemi", role: "CTO, Greenfield Platform", text: "Their technical expertise is outstanding. They built a complex agritech platform that handles massive data volumes while remaining incredibly fast and user-friendly." },
  { name: "Rachel Kim", role: "Product Lead, FinTrack", text: "Working with JA Design Studio was seamless. They understood our fintech needs perfectly and delivered a product that exceeded all expectations." },
  { name: "Michael Eze", role: "Co-founder, Urban Eats", text: "The food delivery app they developed is beautiful, fast, and reliable. Our customer retention has improved significantly thanks to the premium UX they designed." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
          Client <span className="text-gradient">Success Stories</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Don't just take our word for it — hear from brands we've helped grow.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-gradient border border-border rounded-xl p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-primary text-sm">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
