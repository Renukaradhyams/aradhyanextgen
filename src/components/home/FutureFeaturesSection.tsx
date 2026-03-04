import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { futureTechConfig } from "@/config/futureTechConfig";

const statusColors: Record<string, string> = {
  "available": "bg-primary/10 text-primary border-primary/20",
  "coming-soon": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  "in-development": "bg-blue-500/10 text-blue-500 border-blue-500/20",
};

const statusLabels: Record<string, string> = {
  "available": "Available",
  "coming-soon": "Coming Soon",
  "in-development": "In Development",
};

export const FutureFeaturesSection = () => {
  return (
    <section className="py-28 relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" /><span className="text-sm text-muted-foreground">Innovation Roadmap</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Future <span className="gradient-text">Technologies</span></h2>
          <p className="text-muted-foreground">Explore our technology roadmap and upcoming innovations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {futureTechConfig.map((tech, index) => (
            <motion.div key={tech.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }} className="group">
              <div className="glass-card p-6 h-full flex flex-col border border-border/50 group-hover:border-primary/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <tech.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[tech.status]}`}>
                    {statusLabels[tech.status]}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{tech.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{tech.description}</p>
                <div className="space-y-1 mb-4">
                  {tech.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />{feature}
                    </div>
                  ))}
                </div>
                {tech.eta && (
                  <div className="pt-3 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">Expected: </span>
                    <span className="text-xs text-primary font-medium">{tech.eta}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
