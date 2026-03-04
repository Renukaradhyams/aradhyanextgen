import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { futureTechConfig } from "@/config/futureTechConfig";

const statusColors: Record<string, string> = {
  "available": "bg-primary/10 text-primary border-primary/20",
  "coming-soon": "bg-amber-100 text-amber-700 border-amber-200",
  "in-development": "bg-blue-100 text-blue-700 border-blue-200",
};

const statusLabels: Record<string, string> = {
  "available": "● Available",
  "coming-soon": "◐ Coming Soon",
  "in-development": "○ In Development",
};

export const FutureFeaturesSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6">
            <Sparkles className="w-4 h-4 text-primary" /><span className="text-sm text-primary font-medium">Innovation Roadmap</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Future <span className="gradient-text">Technologies</span></h2>
          <p className="text-muted-foreground text-lg">Explore our technology roadmap and upcoming innovations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {futureTechConfig.map((tech, index) => (
            <motion.div key={tech.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }} className="group">
              <div className="bg-white p-6 h-full flex flex-col rounded-2xl border border-border group-hover:border-primary/30 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <tech.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${statusColors[tech.status]}`}>
                    {statusLabels[tech.status]}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{tech.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">{tech.description}</p>
                <div className="space-y-1 mb-4">
                  {tech.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />{feature}
                    </div>
                  ))}
                </div>
                {tech.eta && (
                  <div className="pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground">Expected: </span>
                    <span className="text-xs text-primary font-semibold">{tech.eta}</span>
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
