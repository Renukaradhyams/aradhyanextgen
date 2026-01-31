import { motion } from "framer-motion";
import { Zap, Smartphone, Search, Shield, Code, Gauge } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import bgWhyUs from "@/assets/bg-whyus.jpg";

const features = [
  {
    icon: Code,
    title: "React-Based Development",
    description: "Modern, component-driven architecture for scalable applications.",
  },
  {
    icon: Gauge,
    title: "Fast Performance",
    description: "Optimized code and assets for lightning-fast load times.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive layouts that look perfect on every device.",
  },
  {
    icon: Search,
    title: "SEO-Ready",
    description: "Built-in SEO best practices for better search visibility.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Enterprise-grade security with room to grow.",
  },
  {
    icon: Zap,
    title: "Latest Technologies",
    description: "Cutting-edge tools and frameworks for modern web experiences.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const WhyUsSection = () => {
  return (
    <AnimatedBackground
      imageSrc={bgWhyUs}
      overlayOpacity={0.85}
      parallaxStrength={40}
      className="py-24"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">Aradhya NextGen</span>?
          </h2>
          <p className="text-muted-foreground">
            We combine modern technology with creative design to deliver websites that perform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 group backdrop-blur-xl border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};
