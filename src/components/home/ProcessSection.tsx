import { motion } from "framer-motion";
import { 
  Lightbulb, 
  PenTool, 
  Code, 
  TestTube, 
  Rocket, 
  Headphones,
  ArrowRight
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card3D } from "@/components/ui/Card3D";
import { Mesh3DBackground } from "@/components/ui/Mesh3DBackground";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery",
    description: "Understanding your vision, goals, and requirements.",
    color: "cyan",
  },
  {
    icon: PenTool,
    number: "02", 
    title: "Design",
    description: "Creating stunning UI/UX that captivates users.",
    color: "violet",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description: "Building with modern, scalable architecture.",
    color: "primary",
  },
  {
    icon: TestTube,
    number: "04",
    title: "Testing",
    description: "Rigorous QA for flawless performance.",
    color: "cyan",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Launch",
    description: "Seamless deployment to production.",
    color: "violet",
  },
  {
    icon: Headphones,
    number: "06",
    title: "Support",
    description: "Ongoing maintenance and optimization.",
    color: "primary",
  },
];

const glowColors: Record<string, "cyan" | "violet" | "primary"> = {
  cyan: "cyan",
  violet: "violet",
  primary: "primary",
};

export const ProcessSection = () => {
  const isMobile = useIsMobile();

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
            Our <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-muted-foreground">
            A streamlined engineering pipeline from concept to production.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Pipeline */}
        {!isMobile ? (
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <div className="absolute top-[100px] left-[8%] right-[8%] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-border to-transparent" />
              {/* Animated glow line */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Step circle with 3D effect */}
                  <motion.div
                    className="relative w-20 h-20 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.5 }}
                    style={{ perspective: 1000 }}
                  >
                    {/* Glow */}
                    <div className={`absolute inset-0 rounded-full blur-xl opacity-50 ${
                      step.color === "cyan" ? "bg-cyan-500/30" :
                      step.color === "violet" ? "bg-violet-500/30" : "bg-primary/30"
                    }`} />
                    
                    {/* Circle */}
                    <div className={`relative w-full h-full rounded-full flex items-center justify-center border-2 ${
                      step.color === "cyan" ? "bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border-cyan-500/50" :
                      step.color === "violet" ? "bg-gradient-to-br from-violet-500/20 to-violet-500/5 border-violet-500/50" :
                      "bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50"
                    }`}>
                      <step.icon className={`w-8 h-8 ${
                        step.color === "cyan" ? "text-cyan-400" :
                        step.color === "violet" ? "text-violet-400" : "text-primary"
                      }`} />
                    </div>

                    {/* Arrow to next step */}
                    {index < steps.length - 1 && (
                      <motion.div 
                        className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4 text-muted-foreground/30" />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Content card */}
                  <Card3D 
                    glowColor={glowColors[step.color]} 
                    intensity="low"
                  >
                    <div className="p-4 text-center">
                      <span className={`text-3xl font-bold opacity-30 ${
                        step.color === "cyan" ? "text-cyan-400" :
                        step.color === "violet" ? "text-violet-400" : "text-primary"
                      }`}>
                        {step.number}
                      </span>
                      <h3 className="font-heading font-semibold text-sm mt-1 mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* Mobile: Vertical Pipeline */
          <div className="md:hidden relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px]">
              <div className="w-full h-full bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-primary/50" />
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-4"
                >
                  {/* Step circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 relative z-10 border-2 ${
                    step.color === "cyan" ? "bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border-cyan-500/50" :
                    step.color === "violet" ? "bg-gradient-to-br from-violet-500/20 to-violet-500/5 border-violet-500/50" :
                    "bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50"
                  }`}>
                    <step.icon className={`w-7 h-7 ${
                      step.color === "cyan" ? "text-cyan-400" :
                      step.color === "violet" ? "text-violet-400" : "text-primary"
                    }`} />
                  </div>

                  {/* Content */}
                  <Card3D 
                    glowColor={glowColors[step.color]} 
                    intensity="low"
                    className="flex-1"
                    disableOnMobile={false}
                  >
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-2xl font-bold opacity-40 ${
                          step.color === "cyan" ? "text-cyan-400" :
                          step.color === "violet" ? "text-violet-400" : "text-primary"
                        }`}>
                          {step.number}
                        </span>
                        <h3 className="font-heading font-semibold">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};