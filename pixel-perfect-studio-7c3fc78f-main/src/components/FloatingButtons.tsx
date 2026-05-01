import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2349049483930";
const WHATSAPP_TEXT = encodeURIComponent("Hello JA DESIGN STUDIO, I'm interested in your services and would like to discuss a project.");

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll back to top of page"
          className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors shadow-lg"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with JA Design Studio on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
};

export default FloatingButtons;
