import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, number: "01", title: "Discovery", description: "We understand your vision, goals, and target audience." },
  { icon: Palette, number: "02", title: "Design", description: "Creating stunning mockups and user interfaces." },
  { icon: Code, number: "03", title: "Development", description: "Building with clean, efficient, scalable code." },
  { icon: Rocket, number: "04", title: "Launch", description: "Testing, deployment, and ongoing support." },
];

export const ProcessSection = () => {
  return (
    <section className="py-28 relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Process</span></h2>
          <p className="text-muted-foreground">A streamlined approach to bring your vision to life.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Horizontal line */}
          <div className="hidden md:block relative mb-16">
            <div className="absolute top-8 left-[12%] right-[12%] h-px bg-border" />
            <motion.div
              className="absolute top-8 left-[12%] h-px bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "76%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            />
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-card border border-border group-hover:border-primary/50 flex items-center justify-center relative z-10 transition-all">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{step.number}</span>
                  <h3 className="font-heading font-semibold text-lg mt-1 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-mono">{step.number}</span>
                  <h3 className="font-heading font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
