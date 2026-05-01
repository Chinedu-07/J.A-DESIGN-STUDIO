import { useState, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [shake, setShake] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const fireConfetti = () => {
    const end = Date.now() + 1500;
    const colors = ["#00e5ff", "#00b8d4", "#ffffff", "#80deea"];
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const triggerError = (msg: string) => {
    setErrorMsg(msg);
    setShake(true);
    setTimeout(() => setShake(false), 600);
    setStatus("error");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !phone) {
      return triggerError("Please fill in all required fields.");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return triggerError("Please enter a valid email address.");
    }
    if (!isValidPhoneNumber(phone)) {
      return triggerError("Please enter a valid phone number for the selected country.");
    }
    // E.164 phone is in `phone` (e.g. +2349049483930)
    setStatus("success");
    fireConfetti();
  };

  const isBusinessHours = () => {
    const now = new Date();
    const watHour = (now.getUTCHours() + 1) % 24;
    const day = now.getUTCDay();
    if (day === 0) return false;
    if (day === 6) return watHour >= 10 && watHour < 16;
    return watHour >= 8 && watHour < 18;
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors";

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-muted-foreground text-lg">Ready to build something extraordinary? Tell us about your project.</p>
        </motion.div>

        {status === "success" ? (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16 card-gradient border border-primary/30 rounded-xl">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">Thank you!</h3>
            <p className="text-muted-foreground">
              {isBusinessHours()
                ? "Thanks for reaching out! We'll review your message and get back to you shortly."
                : "Thanks for your message! Our team is currently offline, but we'll respond as soon as we're back."}
            </p>
          </motion.div>
        ) : (
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            animate={shake ? { x: [0, -10, 10, -10, 10, -5, 5, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="card-gradient border border-border rounded-xl p-8 space-y-6"
          >
            {status === "error" && (
              <p className="text-destructive text-sm text-center">{errorMsg}</p>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
              <input id="name" maxLength={100} placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
              <input id="email" type="email" maxLength={255} placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
              <PhoneInput
                id="phone"
                international
                defaultCountry="NG"
                value={phone}
                onChange={setPhone}
                placeholder="Enter phone number"
                className="phone-input-custom"
              />
              {phone && !isValidPhoneNumber(phone) && (
                <p className="text-destructive text-xs mt-1">Invalid phone number for selected country.</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message *</label>
              <textarea id="message" maxLength={1000} placeholder="Tell us about your project" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
            </div>

            <button type="submit" className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base hover:opacity-90 transition-opacity glow-border">
              Send Message
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
