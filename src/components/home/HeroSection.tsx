import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { getWhatsAppUrl } from "@/config/contactInfo";

const rotatingTexts = [
  "Web Development",
  "AI Solutions",
  "Automation",
  "Cloud & Digital Transformation",
];

export const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 noise-overlay">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-background" />

      {/* Radial emerald glows */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(145_70%_45%/0.08),transparent_70%)] -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(145_70%_45%/0.06),transparent_70%)] translate-x-1/4 translate-y-1/4" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(145_70%_45%/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(145_70%_45%/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/logo.png" 
          alt="" 
          className="w-[500px] h-[500px] object-contain opacity-[0.04]"
          draggable={false}
        />
      </div>

      {/* Animated glow orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]"
          >
            Building Scalable
            <br />
            <span className="gradient-text">Cloud & Digital</span>
            <br />
            Transformation
          </motion.h1>

          {/* Rotating Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-12 md:h-14 flex items-center justify-center mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-primary"
              >
                {rotatingTexts[currentTextIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
          >
            Your digital presence is more than a page — it's your brand's growth engine. 
            We build AI-powered and high-performance digital solutions that scale with your ambition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="group px-8 h-12 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_30px_-5px_hsl(145_70%_45%/0.5)] transition-all duration-300">
              <Link to="/contact">
                Get a Proposal
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="group h-12 text-base border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-4 h-4" />
                Talk to Us
              </a>
            </Button>
          </motion.div>

          {/* Glass floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto"
          >
            {[
              { value: "50+", label: "Projects Shipped" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card px-4 py-5 text-center border border-border/50"
              >
                <div className="text-2xl font-bold text-primary font-heading">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};
