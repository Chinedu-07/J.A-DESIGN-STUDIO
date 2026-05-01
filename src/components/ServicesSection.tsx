import { motion } from "framer-motion";
import { Globe, ShoppingCart, Palette, RefreshCw, Search, Layout } from "lucide-react";

const services = [
  { icon: Globe, title: "Custom Website Design & Development", desc: "High-performance, responsive websites built for credibility, speed, and conversion." },
  { icon: ShoppingCart, title: "E-Commerce Development", desc: "Conversion-optimized online stores with secure payment integrations and scalable architecture." },
  { icon: Palette, title: "UI/UX Strategy & Design", desc: "User-focused interface design that enhances usability, engagement, and brand perception." },
  { icon: RefreshCw, title: "Website Redesign & Optimization", desc: "Modern redesigns that improve speed, structure, SEO, and overall digital performance." },
  { icon: Search, title: "SEO & Performance Optimization", desc: "Technical SEO, speed tuning, structured data for better visibility." },
  { icon: Layout, title: "Web Applications & SaaS Development", desc: "Custom dashboards, platforms, and scalable web applications." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We deliver end-to-end digital solutions that help ambitious brands grow and scale.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-gradient border border-border rounded-xl p-8 hover:border-primary/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
