import { motion } from "framer-motion";

const technologies = [
  { name: "React", abbr: "Re", color: "#61DAFB" },
  { name: "Next.js", abbr: "Nx", color: "#888888" },
  { name: "TypeScript", abbr: "TS", color: "#3178C6" },
  { name: "Tailwind CSS", abbr: "Tw", color: "#06B6D4" },
  { name: "Framer Motion", abbr: "FM", color: "#0055FF" },
  { name: "Node.js", abbr: "No", color: "#339933" },
  { name: "Python", abbr: "Py", color: "#3776AB" },
  { name: "Express", abbr: "Ex", color: "#888888" },
  { name: "MongoDB", abbr: "Mg", color: "#47A248" },
  { name: "PostgreSQL", abbr: "Pg", color: "#4169E1" },
  { name: "Supabase", abbr: "Sb", color: "#3FCF8E" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export const TechStackSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Technology <span className="gradient-text">Stack</span></h2>
          <p className="text-muted-foreground">Modern technologies powering scalable and high-performance digital platforms.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <motion.div key={tech.name} variants={itemVariants} whileHover={{ y: -6, scale: 1.04 }}
              className="group relative cursor-default">
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500 bg-primary" />
              <div className="relative glass-card p-5 text-center h-full border border-border/50 group-hover:border-primary/30">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-lg font-bold transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${tech.color}15`, color: tech.color }}>
                  {tech.abbr}
                </div>
                <h4 className="font-heading font-medium text-sm">{tech.name}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
