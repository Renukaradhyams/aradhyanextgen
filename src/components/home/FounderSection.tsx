import { motion } from "framer-motion";
import { Linkedin, Github, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutConfig } from "@/config/aboutConfig";
import { Card3D } from "@/components/ui/Card3D";
import { Mesh3DBackground } from "@/components/ui/Mesh3DBackground";

export const FounderSection = () => {
  const { founder } = aboutConfig;

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 3D Background */}
      <Mesh3DBackground variant="subtle" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Founder</span>
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
          >
            <Card3D glowColor="cyan" intensity="medium">
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                {/* Photo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative shrink-0"
                >
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 p-1">
                    <div className="w-full h-full rounded-xl bg-card overflow-hidden">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="block w-full h-full object-cover object-center"
                        draggable={false}
                      />
                    </div>
                  </div>
                  {/* Floating elements */}
                  <motion.div 
                    animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30" 
                  />
                  <motion.div 
                    animate={{ y: [0, 10, 0], opacity: [0.5, 0.3, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-violet-500/20 border border-violet-500/30" 
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-heading text-2xl font-bold mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-4">{founder.role}</p>

                  <div className="relative mb-6">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-3">
                      <Quote className="w-5 h-5 text-violet-400" />
                    </div>
                    <p className="text-muted-foreground italic">
                      "{founder.vision}"
                    </p>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="group border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10"
                    >
                      <a
                        href={founder.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Linkedin className="w-4 h-4 text-cyan-400" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="group border-violet-500/30 hover:border-violet-400 hover:bg-violet-500/10"
                    >
                      <a
                        href={founder.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Github className="w-4 h-4 text-violet-400" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card3D>
          </motion.div>

          {/* Certifications / Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex items-center justify-center gap-4 flex-wrap"
          >
            {[
              { cert: "MSME Registered", color: "cyan" },
              { cert: "ISO Ready", color: "violet" },
              { cert: "GST Verified", color: "primary" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full border text-sm cursor-default ${
                  item.color === "cyan" ? "border-cyan-500/30 bg-cyan-500/5 text-cyan-400" :
                  item.color === "violet" ? "border-violet-500/30 bg-violet-500/5 text-violet-400" :
                  "border-primary/30 bg-primary/5 text-primary"
                }`}
              >
                ✓ {item.cert}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};