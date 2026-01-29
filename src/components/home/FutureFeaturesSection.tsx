import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { futureTechConfig } from "@/config/futureTechConfig";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

const statusColors = {
  "available": "bg-green-500/20 text-green-500 border-green-500/30",
  "coming-soon": "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
  "in-development": "bg-blue-500/20 text-blue-500 border-blue-500/30",
};

const statusLabels = {
  "available": "Available",
  "coming-soon": "Coming Soon",
  "in-development": "In Development",
};

export const FutureFeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark futuristic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Particle effect */}
      <ParticleBackground particleCount={40} className="opacity-50" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Innovation Roadmap</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Future <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground">
            Explore our technology roadmap and upcoming innovations that will transform your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureTechConfig.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500" />
              
              <div className="relative glass-card p-6 h-full flex flex-col">
                {/* Status badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <tech.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[tech.status]}`}>
                    {statusLabels[tech.status]}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {tech.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {tech.description}
                </p>

                {/* Features */}
                <div className="space-y-1 mb-4">
                  {tech.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* ETA for upcoming features */}
                {tech.eta && (
                  <div className="pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground">Expected: </span>
                    <span className="text-xs text-primary font-medium">{tech.eta}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Want early access to our upcoming features?{" "}
            <a href="/contact" className="text-primary hover:underline">
              Join our waitlist
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
