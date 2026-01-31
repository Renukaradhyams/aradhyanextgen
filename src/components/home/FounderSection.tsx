import { motion } from "framer-motion";
import { Linkedin, Github, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutConfig } from "@/config/aboutConfig";

export const FounderSection = () => {
  const { founder } = aboutConfig;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="gradient-text">Founder</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The vision behind Aradhya NextGen
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur" />
            
            <div className="relative glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative shrink-0"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-xl bg-card overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="block w-full h-full object-cover object-center"
                      draggable={false}
                    />
                  </div>
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-primary/30 rounded-full blur-lg" 
                />
                <motion.div 
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent/30 rounded-full blur-lg" 
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold mb-1">
                  {founder.name}
                </h3>
                <p className="text-primary font-medium mb-4">{founder.role}</p>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground italic pl-6">
                    "{founder.vision}"
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Button variant="outline" size="sm" asChild className="group">
                    <a
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Linkedin className="w-4 h-4 group-hover:text-primary transition-colors" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="group">
                    <a
                      href={founder.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications / Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex items-center justify-center gap-4 flex-wrap"
          >
            {["MSME Registered", "ISO Ready", "GST Verified"].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full glass border border-primary/20 text-sm text-muted-foreground cursor-default"
              >
                ✓ {cert}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
