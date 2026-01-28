import { motion } from "framer-motion";
import { Code2, Palette, Zap, Mail, Globe, Server } from "lucide-react";

const technologies = [
  {
    icon: Code2,
    name: "React.js",
    description: "Modern UI library",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Palette,
    name: "Tailwind CSS",
    description: "Utility-first styling",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Zap,
    name: "Framer Motion",
    description: "Smooth animations",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Mail,
    name: "EmailJS",
    description: "Form handling",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    name: "Netlify / Vercel",
    description: "Fast hosting",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Server,
    name: "TypeScript",
    description: "Type-safe code",
    color: "from-blue-500 to-indigo-500",
  },
];

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
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/30" />
      
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
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 text-center group cursor-pointer"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}>
                <tech.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-1">
                {tech.name}
              </h3>
              <p className="text-muted-foreground text-xs">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
