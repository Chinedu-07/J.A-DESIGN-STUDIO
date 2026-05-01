import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiJavascript, SiTypescript, 
  SiHtml5, SiCss, SiRedux, SiReactrouter, SiGoogleanalytics,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase, 
  SiVercel, SiNetlify, SiGithub, SiFigma, SiStripe
} from "react-icons/si";
import { Code2 } from "lucide-react";

const row1 = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "Redux", icon: SiRedux },
  { name: "React Router", icon: SiReactrouter },
  { name: "Google Analytics", icon: SiGoogleanalytics },
];

const row2 = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
  { name: "VS Code", icon: Code2 },
  { name: "Stripe", icon: SiStripe },
];

const MarqueeRow = ({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden group">
      <div
        className={`flex gap-6 py-4 ${reverse ? "animate-marquee-right" : "animate-marquee-left"} group-hover:[animation-play-state:paused]`}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary border border-border hover:border-primary/30 hover:scale-105 transition-all cursor-default"
          >
            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="font-heading font-medium text-foreground text-sm whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechStackSection = () => (
  <section id="tools" className="py-20 md:py-32 bg-secondary/30 overflow-hidden">
    <div className="container mx-auto px-4 md:px-6 mb-12">
      <div className="text-center">
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
          Our Technology <span className="text-gradient">Stack</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We leverage modern, industry-standard technologies to build fast, scalable, and high-performing digital products.
        </p>
      </div>
    </div>
    <div className="space-y-6">
      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
    </div>
  </section>
);

export default TechStackSection;
