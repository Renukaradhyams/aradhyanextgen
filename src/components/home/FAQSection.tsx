import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Website costs vary based on complexity and features. Starter websites begin at ₹15,000, business websites range from ₹25,000-50,000, and custom projects are quoted based on requirements. We provide transparent pricing with no hidden costs.",
  },
  {
    question: "How long will it take to build my website?",
    answer: "A simple landing page takes 3-5 days, business websites take 1-2 weeks, and complex web applications can take 3-6 weeks. We'll provide a clear timeline after understanding your requirements.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Absolutely! All our websites are built mobile-first, ensuring they look and work perfectly on smartphones, tablets, and desktops. Responsive design is included in every project.",
  },
  {
    question: "Can I update the website myself?",
    answer: "Yes! We can integrate a simple content management system for basic updates. For React-based websites, we also provide training and documentation for your team.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer maintenance packages that include updates, backups, security monitoring, and technical support. We're here to help even after launch.",
  },
  {
    question: "What makes React websites better?",
    answer: "React websites load faster, provide smoother user experiences, are easier to scale, and perform better in search rankings. They're built with modern architecture that's future-proof.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-heading font-medium text-lg">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
