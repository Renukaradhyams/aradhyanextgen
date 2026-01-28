import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Idea & Requirement",
    description: "We understand your vision, goals, and target audience to create a roadmap.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design & UI",
    description: "Creating stunning mockups and user interfaces that capture your brand.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description: "Building your website with clean, efficient, and scalable code.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Testing & Launch",
    description: "Rigorous testing and seamless deployment to make you live.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground">
            A streamlined approach to bring your vision to life.
          </p>
        </motion.div>

        <div className="relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex items-center gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                <div className={`glass-card p-6 inline-block ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl font-bold text-primary/30 font-heading">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="hidden lg:flex w-8 h-8 rounded-full bg-primary items-center justify-center relative z-10 shrink-0">
                <div className="w-3 h-3 rounded-full bg-primary-foreground" />
              </div>

              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
