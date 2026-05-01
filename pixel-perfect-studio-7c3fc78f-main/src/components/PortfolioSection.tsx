import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  { type: "WEB DESIGN", name: "Luxe Interiors", image: portfolio1 },
  { type: "SAAS APPLICATION", name: "TechScale Dashboard", image: portfolio2 },
  { type: "E-COMMERCE", name: "Bloom Cosmetics", image: portfolio3 },
  { type: "AGRITECH PLATFORM", name: "Greenfield Platform", image: portfolio4 },
  { type: "FINTECH DASHBOARD", name: "FinTrack App", image: portfolio5 },
  { type: "FOOD DELIVERY APP", name: "Urban Eats", image: portfolio6 },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-20 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
          Selected <span className="text-gradient">Work</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          A curated selection of projects that showcase our craft and capability.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={600}
                height={450}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-primary text-[10px] font-semibold tracking-widest uppercase mb-1">{p.type}</p>
              <h3 className="font-heading font-bold text-lg text-foreground">{p.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
