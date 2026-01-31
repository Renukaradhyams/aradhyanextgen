import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket, CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery & Planning",
    description: "We understand your vision, goals, and target audience to create a strategic roadmap.",
    color: "from-blue-500 to-cyan-500",
    features: ["Requirements gathering", "Competitor analysis", "Project timeline"],
  },
  {
    icon: Palette,
    number: "02",
    title: "Design & UI/UX",
    description: "Creating stunning mockups and user interfaces that capture your brand essence.",
    color: "from-purple-500 to-pink-500",
    features: ["Wireframing", "Visual design", "Prototype review"],
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description: "Building your website with clean, efficient, and scalable code architecture.",
    color: "from-orange-500 to-red-500",
    features: ["React development", "API integration", "Performance tuning"],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description: "Rigorous testing, seamless deployment, and ongoing maintenance support.",
    color: "from-green-500 to-emerald-500",
    features: ["QA testing", "Deployment", "24/7 support"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ProcessSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.08)_1px,transparent_0)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground">
            A streamlined, transparent approach to bring your vision to life.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        {!isMobile ? (
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <div className="absolute top-[80px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            
            {/* Animated progress line */}
            <motion.div
              className="absolute top-[80px] left-[10%] h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-6"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  {/* Step number circle */}
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                    
                    {/* Pulse ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-30`}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>

                  {/* Content card */}
                  <div className="glass-card p-6 text-center group-hover:border-primary/30 transition-all duration-300">
                    <span className={`text-5xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-30`}>
                      {step.number}
                    </span>
                    <h3 className="font-heading font-semibold text-lg mt-2 mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          /* Mobile: Vertical Timeline */
          <div className="md:hidden relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex gap-6"
                >
                  {/* Step circle */}
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shrink-0 relative z-10`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="glass-card p-5 flex-1">
                    <span className={`text-3xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-40`}>
                      {step.number}
                    </span>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
