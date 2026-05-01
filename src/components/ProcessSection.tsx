import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery & Strategy", desc: "We start by understanding your business, goals, and target audience to define a clear direction for your website." },
  { num: "02", title: "Planning & Design", desc: "We map out the structure, user flow, and visual design to ensure a seamless and engaging experience." },
  { num: "03", title: "Development", desc: "We bring the design to life using modern technologies, ensuring speed, responsiveness, and functionality." },
  { num: "04", title: "Review & Optimization", desc: "You review the website with us while we refine performance, fix issues, and optimize for the best user experience." },
  { num: "05", title: "Launch", desc: "We deploy your website and make it live, ensuring everything runs smoothly across devices and platforms." },
  { num: "06", title: "Support & Growth", desc: "We provide ongoing support, updates, and optimization to help your website continue to perform and grow." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
          Our <span className="text-gradient">Process</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A proven framework that turns ideas into high-performing digital products.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-gradient border border-border rounded-xl p-6 relative overflow-hidden"
          >
            <span className="absolute top-2 right-4 font-heading font-bold text-6xl text-primary/10">{s.num}</span>
            <div className="relative">
              <p className="text-primary font-heading font-semibold text-sm tracking-widest mb-2">{s.num}</p>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
