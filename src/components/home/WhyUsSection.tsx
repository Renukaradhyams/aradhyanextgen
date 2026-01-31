import { motion } from "framer-motion";
import { Zap, Smartphone, Search, Shield, Code, Gauge } from "lucide-react";
import { Mesh3DBackground } from "@/components/ui/Mesh3DBackground";
import { Card3D } from "@/components/ui/Card3D";

const features = [
  {
    icon: Code,
    title: "React-Based Development",
    description: "Modern, component-driven architecture for scalable applications.",
    color: "cyan" as const,
  },
  {
    icon: Gauge,
    title: "Fast Performance",
    description: "Optimized code and assets for lightning-fast load times.",
    color: "violet" as const,
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive layouts that look perfect on every device.",
    color: "primary" as const,
  },
  {
    icon: Search,
    title: "SEO-Ready",
    description: "Built-in SEO best practices for better search visibility.",
    color: "cyan" as const,
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Enterprise-grade security with room to grow.",
    color: "violet" as const,
  },
  {
    icon: Zap,
    title: "Latest Technologies",
    description: "Cutting-edge tools and frameworks for modern web experiences.",
    color: "primary" as const,
  },
];

export const WhyUsSection = () => {
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
            Why <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Aradhya NextGen</span>?
          </h2>
          <p className="text-muted-foreground">
            We combine modern technology with creative engineering to deliver solutions that perform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card3D 
                glowColor={feature.color} 
                intensity="medium"
                className="h-full"
              >
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.color === "cyan" ? "bg-cyan-500/20 border border-cyan-500/30" :
                    feature.color === "violet" ? "bg-violet-500/20 border border-violet-500/30" :
                    "bg-primary/20 border border-primary/30"
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === "cyan" ? "text-cyan-400" :
                      feature.color === "violet" ? "text-violet-400" : "text-primary"
                    }`} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};