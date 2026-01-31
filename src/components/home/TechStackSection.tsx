import { motion } from "framer-motion";
import { getCoreTech, getTechByCategory, type TechItem } from "@/config/techStackConfig";
import { Card3D } from "@/components/ui/Card3D";
import { Mesh3DBackground } from "@/components/ui/Mesh3DBackground";

const categoryLabels: Record<TechItem["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  cloud: "Cloud & Hosting",
  tools: "Tools & Design",
};

const categoryOrder: TechItem["category"][] = ["frontend", "backend", "database", "cloud", "tools"];
const glowColors: ("cyan" | "violet" | "primary")[] = ["cyan", "violet", "primary", "cyan", "violet"];

export const TechStackSection = () => {
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
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground">
            Enterprise-grade technologies for scalable solutions.
          </p>
        </motion.div>

        {/* Tech by category */}
        <div className="space-y-12">
          {categoryOrder.map((category, categoryIndex) => {
            const techItems = getTechByCategory(category);
            if (techItems.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <h3 className={`font-heading font-semibold text-lg ${
                    categoryIndex % 3 === 0 ? "text-cyan-400" :
                    categoryIndex % 3 === 1 ? "text-violet-400" : "text-primary"
                  }`}>
                    {categoryLabels[category]}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                  <span className="text-sm text-muted-foreground">
                    {techItems.length} technologies
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {techItems.map((tech, techIndex) => (
                    <motion.div
                      key={tech.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                    >
                      <Card3D 
                        glowColor={glowColors[categoryIndex % glowColors.length]} 
                        intensity="low"
                        className="h-full"
                      >
                        <div className="p-4 text-center">
                          {/* Icon container */}
                          <motion.div 
                            className="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center"
                            style={{ 
                              backgroundColor: `${tech.color}15`,
                              border: `1px solid ${tech.color}30`,
                            }}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <span 
                              className="text-2xl font-bold"
                              style={{ color: tech.color }}
                            >
                              {tech.name.slice(0, 2)}
                            </span>
                          </motion.div>

                          <h4 className="font-heading font-semibold text-sm mb-1">
                            {tech.name}
                          </h4>

                          {tech.isCore && (
                            <span className="inline-block text-[10px] px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full">
                              Core
                            </span>
                          )}
                        </div>
                      </Card3D>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          <Card3D glowColor="cyan" intensity="low">
            <div className="px-6 py-3 flex items-center gap-3">
              <span className="text-2xl font-bold text-cyan-400">{getCoreTech().length}</span>
              <span className="text-sm text-muted-foreground">Core Technologies</span>
            </div>
          </Card3D>
          {categoryOrder.slice(0, 3).map((category, i) => (
            <div 
              key={category}
              className={`px-4 py-2 rounded-full border text-sm text-muted-foreground flex items-center gap-2 ${
                i === 0 ? "border-cyan-500/30 bg-cyan-500/5" :
                i === 1 ? "border-violet-500/30 bg-violet-500/5" :
                "border-primary/30 bg-primary/5"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-cyan-400" : i === 1 ? "bg-violet-400" : "bg-primary"
              }`} />
              {categoryLabels[category]}: {getTechByCategory(category).length}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};