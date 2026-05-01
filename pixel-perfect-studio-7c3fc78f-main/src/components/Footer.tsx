import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, label: "Follow JA Design Studio on LinkedIn", href: "https://linkedin.com/company/jadesignstudio" },
  { icon: Instagram, label: "Follow JA Design Studio on Instagram", href: "https://instagram.com/jadesignstudio" },
  { icon: Twitter, label: "Follow JA Design Studio on Twitter", href: "https://twitter.com/jadesignstudio" },
  { icon: Facebook, label: "Follow JA Design Studio on Facebook", href: "https://facebook.com/jadesignstudio" },
];

const isOpen = () => {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const watHour = (utcHour + 1) % 24;
  const day = now.getUTCDay();
  if (day === 0) return false;
  if (day === 6) return watHour >= 10 && watHour < 16;
  return watHour >= 8 && watHour < 18;
};

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => (
  <footer className="bg-card border-t border-border pt-16 pb-8">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="flex items-center gap-2 mb-4" aria-label="Navigate to home page">
            <img src={logo} alt="JA Design Studio logo" className="h-8 w-8" />
            <span className="font-heading font-bold text-lg text-foreground">JA <span className="text-gradient">Studio</span></span>
          </a>
          <p className="text-muted-foreground text-sm leading-relaxed">Premium digital agency. Designing and building websites and apps that drive results for ambitious brands.</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Navigation</h4>
          <nav className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }} aria-label={`Navigate to ${l.label} section`}
                className="text-muted-foreground text-sm hover:text-primary transition-colors">{l.label}</a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <a href="tel:+2349049483930" className="hover:text-primary transition-colors">📞 +234 904 948 3930</a>
            </p>
            <p>
              <a href="mailto:hello@jadesignstudio.com" className="hover:text-primary transition-colors">📧 hello@jadesignstudio.com</a>
            </p>
            <p>
              <a href="https://maps.google.com/?q=Lagos,Nigeria" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">📍 Lagos, Nigeria</a>
            </p>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Opening Hours (WAT)</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Mon – Fri: 8am – 6pm</p>
            <p>Saturdays: 10am – 4pm</p>
            <p>Sundays: Closed</p>
            <p className="flex items-center gap-2 mt-3">
              <span className={`w-2.5 h-2.5 rounded-full ${isOpen() ? "bg-green-500" : "bg-destructive"}`} />
              <span className={isOpen() ? "text-green-500" : "text-destructive"}>{isOpen() ? "Currently Open" : "Currently Closed"}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} JA Design Studio. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-muted-foreground hover:text-primary transition-colors">
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
