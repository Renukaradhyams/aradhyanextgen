import { motion } from "framer-motion";
import { getCoreTech, getTechByCategory, type TechItem } from "@/config/techStackConfig";

const categoryLabels: Record<TechItem["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  cloud: "Cloud & Hosting",
  tools: "Tools & Design",
};

const categoryOrder: TechItem["category"][] = ["frontend", "backend", "database", "cloud", "tools"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

export const TechStackSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.2)_1px,transparent_0)] bg-[size:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground">
            We use modern, industry-proven tools to build fast, scalable, and reliable solutions.
          </p>
        </motion.div>

        {/* Tech by category */}
        <div className="space-y-12">
          {categoryOrder.map((category) => {
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
                  <h3 className="font-heading font-semibold text-lg text-primary">
                    {categoryLabels[category]}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                  <span className="text-sm text-muted-foreground">
                    {techItems.length} technologies
                  </span>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                  {techItems.map((tech) => (
                    <motion.div
                      key={tech.id}
                      variants={itemVariants}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="relative group cursor-pointer"
                    >
                      {/* Glow effect */}
                      <motion.div 
                        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-60 blur-md transition-all duration-300"
                        style={{ backgroundColor: tech.color }}
                      />
                      
                      {/* Card */}
                      <div className="relative glass-card p-4 text-center h-full border border-transparent group-hover:border-white/20 transition-all duration-300">
                        {/* Icon container */}
                        <motion.div 
                          className="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all duration-300"
                          style={{ backgroundColor: `${tech.color}15` }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span 
                            className="text-2xl font-bold"
                            style={{ color: tech.color }}
                          >
                            {tech.name.slice(0, 2)}
                          </span>
                        </motion.div>

                        <h4 className="font-heading font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                          {tech.name}
                        </h4>

                        {tech.isCore && (
                          <span className="inline-block text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                            Core
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
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
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          <div className="glass-card px-6 py-3 flex items-center gap-3">
            <span className="text-2xl font-bold text-primary">{getCoreTech().length}</span>
            <span className="text-sm text-muted-foreground">Core Technologies</span>
          </div>
          {categoryOrder.map((category) => (
            <div 
              key={category}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              {categoryLabels[category]}: {getTechByCategory(category).length}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
