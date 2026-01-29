import { motion } from "framer-motion";
import { getCoreTech, getTechByCategory } from "@/config/techStackConfig";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const TechStackSection = () => {
  const coreTech = getCoreTech();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with animated dots */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.3)_1px,transparent_0)] bg-[size:50px_50px]" />
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
            We use modern, industry-proven tools to build fast, scalable websites.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {coreTech.map((tech, index) => (
            <motion.div
              key={tech.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div 
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-300"
                style={{ backgroundColor: tech.color }}
              />
              
              <div className="relative glass-card p-6 text-center h-full">
                <div 
                  className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <span 
                    className="text-xl font-bold"
                    style={{ color: tech.color }}
                  >
                    {tech.name.slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-muted-foreground text-xs capitalize">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {["frontend", "backend", "database", "cloud", "tools"].map((category) => (
            <div 
              key={category}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground capitalize"
            >
              {category}: {getTechByCategory(category as any).length}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
