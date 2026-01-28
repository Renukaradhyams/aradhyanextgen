import { motion } from "framer-motion";
import { Linkedin, Github, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/config/companyInfo";

export const FounderSection = () => {
  const { founder } = companyInfo;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

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
            className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          >
            {/* ✅ FIXED PHOTO SECTION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative shrink-0 flex items-center justify-center"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-primary p-1 flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-card overflow-hidden flex items-center justify-center">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    // className="block w-full h-full object-cover rounded-xl"

                    className="block w-full h-full object-cover object-center scale-[0.95] rounded-xl"

                    draggable={false}
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full blur-lg" />
              <div className="pointer-events-none absolute -bottom-2 -left-2 w-6 h-6 bg-accent/20 rounded-full blur-lg" />
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
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex items-center justify-center gap-4 flex-wrap"
          >
            {companyInfo.certifications.map((cert, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full glass border border-primary/20 text-sm text-muted-foreground"
              >
                ✓ {cert}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
