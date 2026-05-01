import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 text-center py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-heading font-semibold text-sm md:text-base tracking-widest uppercase mb-4"
        >
          Premium Digital Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          We Build Digital Experiences
          <br />
          That <span className="text-gradient">Drive Revenue</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          At JA Design Studio, we combine high-end design with modern engineering to help ambitious brands scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow-border"
          >
            Get Started
          </button>
          <button
            onClick={() => scrollTo("portfolio")}
            className="px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors"
          >
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
