import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What is your typical project timeline?", a: "Most standard website projects are completed within 3–6 weeks, depending on scope, complexity, and content readiness. Larger platforms or SaaS applications may require additional development time." },
  { q: "Do you work with international clients?", a: "Yes. JA Design Studio collaborates with businesses both locally and internationally. We operate remotely and use structured communication systems to ensure seamless delivery across time zones." },
  { q: "What is included in your website development service?", a: "Every project includes strategic planning, custom UI/UX design, responsive development, on-page SEO setup, performance optimization, and launch support." },
  { q: "Do you offer ongoing maintenance?", a: "Yes. We offer optional ongoing support plans that include updates, performance monitoring, security checks, and technical support." },
  { q: "How many revisions are included?", a: "We follow a structured revision process during the design phase to ensure clarity and alignment. Revision rounds are agreed upon at project initiation to maintain efficiency and timelines." },
  { q: "What technologies do you use?", a: "We use modern, scalable technologies including React, Next.js, Tailwind CSS, and other performance-driven tools to ensure speed, security, and scalability." },
  { q: "How do we get started?", a: "Simply fill out the contact form below with your project details. We'll review your request and schedule a consultation to discuss strategy and next steps." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-32">
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about working with us.
        </p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="card-gradient border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
          >
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {faq.q.includes("get started") ? (
                <>
                  Simply{" "}
                  <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="text-primary underline">
                    fill out the contact form
                  </a>{" "}
                  with your project details. We'll review your request and schedule a consultation to discuss strategy and next steps.
                </>
              ) : faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
