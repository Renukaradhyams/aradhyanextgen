import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, Code2, Cpu, Cloud, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { getWhatsAppUrl } from "@/config/contactInfo";
import { Mesh3DBackground } from "@/components/ui/Mesh3DBackground";
import { Card3D } from "@/components/ui/Card3D";

const rotatingTexts = [
  "Web Development",
  "AI Solutions",
  "Automation",
  "Cloud Transformation",
];

// 3D Floating icon component
const FloatingIcon = ({ 
  icon: Icon, 
  delay = 0, 
  x, 
  y,
  color = "cyan"
}: { 
  icon: typeof Code2;
  delay?: number;
  x: number;
  y: number;
  color?: "cyan" | "violet" | "primary";
}) => {
  const colorClasses = {
    cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400",
    violet: "from-violet-500/20 to-violet-500/5 border-violet-500/30 text-violet-400",
    primary: "from-primary/20 to-primary/5 border-primary/30 text-primary",
  };

  return (
    <motion.div
      className={`absolute hidden lg:flex w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[color]} border backdrop-blur-sm items-center justify-center`}
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        perspective: 1000,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -15, 0],
        rotateY: [0, 10, 0],
        rotateX: [0, 5, 0],
      }}
      transition={{
        opacity: { delay: delay + 0.5, duration: 0.5 },
        scale: { delay: delay + 0.5, duration: 0.5 },
        y: { delay: delay + 1, duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotateY: { delay: delay + 1, duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotateX: { delay: delay + 1, duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <Icon className="w-7 h-7" />
    </motion.div>
  );
};

export const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Mesh Background */}
      <Mesh3DBackground variant="hero" />

      {/* Floating 3D Icons */}
      <FloatingIcon icon={Code2} x={8} y={25} delay={0} color="cyan" />
      <FloatingIcon icon={Cpu} x={85} y={20} delay={0.3} color="violet" />
      <FloatingIcon icon={Cloud} x={78} y={65} delay={0.6} color="primary" />
      <FloatingIcon icon={Zap} x={12} y={70} delay={0.9} color="violet" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-xl border border-primary/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Next-Gen Digital Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="text-foreground">Aradhya</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-primary to-violet-500 bg-clip-text text-transparent">
                NextGen
              </span>
            </motion.h1>

            {/* Rotating Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-12 md:h-16 flex items-center justify-center lg:justify-start mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 text-balance leading-relaxed"
            >
              Engineering the future of digital experiences. We build scalable, 
              AI-powered solutions that transform businesses and drive measurable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" asChild className="group px-8 relative overflow-hidden bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 border-0">
                <Link to="/contact">
                  <span className="relative z-10">Get a Proposal</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="group border-primary/30 hover:border-primary hover:bg-primary/5 backdrop-blur-sm"
              >
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Talk to Us
                </a>
              </Button>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 text-muted-foreground text-sm"
            >
              From Idea to Online Presence — <span className="text-primary">Engineering Excellence</span>
            </motion.p>
          </div>

          {/* Right Side - 3D Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* 3D Stats Cards */}
            <div className="relative w-full h-[500px]">
              {/* Main central card */}
              <Card3D className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64" glowColor="cyan">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">Deep Tech</h3>
                  <p className="text-sm text-muted-foreground">
                    AI, Automation & Cloud-Native Solutions
                  </p>
                </div>
              </Card3D>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute left-0 top-10"
              >
                <Card3D className="w-40" glowColor="violet" intensity="low">
                  <div className="p-4 text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent">50+</div>
                    <div className="text-xs text-muted-foreground mt-1">Projects</div>
                  </div>
                </Card3D>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute right-0 top-20"
              >
                <Card3D className="w-40" glowColor="cyan" intensity="low">
                  <div className="p-4 text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-accent bg-clip-text text-transparent">100%</div>
                    <div className="text-xs text-muted-foreground mt-1">Satisfaction</div>
                  </div>
                </Card3D>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute left-10 bottom-10"
              >
                <Card3D className="w-40" glowColor="primary" intensity="low">
                  <div className="p-4 text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">24/7</div>
                    <div className="text-xs text-muted-foreground mt-1">Support</div>
                  </div>
                </Card3D>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute right-5 bottom-20"
              >
                <Card3D className="w-44" glowColor="violet" intensity="low">
                  <div className="p-4 text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-accent to-violet-400 bg-clip-text text-transparent">AI</div>
                    <div className="text-xs text-muted-foreground mt-1">Powered Solutions</div>
                  </div>
                </Card3D>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:hidden"
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "100%", label: "Satisfaction" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <Card3D key={index} className="text-center" intensity="low" glowColor={index === 0 ? "cyan" : index === 1 ? "violet" : "primary"}>
              <div className="p-4">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </Card3D>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};