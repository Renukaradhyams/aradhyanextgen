import { motion } from "framer-motion";
import { Linkedin, Github, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutConfig } from "@/config/aboutConfig";

export const FounderSection = () => {
  const { founder } = aboutConfig;

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Meet the <span className="gradient-text">Founder</span></h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-border/50">
            <div className="relative shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-card border border-border overflow-hidden">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" draggable={false} />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading text-2xl font-bold mb-1">{founder.name}</h3>
              <p className="text-primary font-medium mb-4">{founder.role}</p>
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                <p className="text-muted-foreground italic pl-6">"{founder.vision}"</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Button variant="outline" size="sm" asChild className="border-border hover:border-primary/50">
                  <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Linkedin className="w-4 h-4" />LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="border-border hover:border-primary/50">
                  <a href={founder.social.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Github className="w-4 h-4" />GitHub
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
