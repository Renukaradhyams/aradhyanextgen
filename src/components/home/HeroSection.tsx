import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Globe, Cpu, Cloud, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/contactInfo";

const rotatingTexts = [
  "Web Development",
  "AI Solutions",
  "Automation",
  "Cloud Platforms",
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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)] -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.06),transparent_70%)] translate-x-1/4 translate-y-1/4" />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src="/logo.png" alt="" className="w-[500px] h-[500px] object-contain opacity-[0.04]" draggable={false} />
      </div>

      {/* Animated glow orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Next-Gen Digital Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-[1.1]"
            >
              Transforming Ideas Into{" "}
              <span className="gradient-text">Scalable Digital</span>{" "}
              Platforms
            </motion.h1>

            {/* Rotating Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-10 flex items-center mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="text-lg sm:text-xl font-heading font-medium text-primary"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              We build high-performance websites, AI automation systems, and scalable cloud platforms designed for modern businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <Button size="lg" asChild className="group px-7 h-12 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                <Link to="/contact">
                  Get a Proposal
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="group h-12 text-base border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Talk to Us
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 text-xs text-muted-foreground"
            >
              Trusted by 50+ businesses • MSME & UDYAM Certified
            </motion.p>
          </div>

          {/* Right - Floating glass cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative h-[500px]"
          >
            {/* Glow behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />

            {/* Card 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-8 glass-card p-5 w-56 border border-border/50"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-sm mb-1">Web Development</h4>
              <p className="text-xs text-muted-foreground">Modern React & Next.js applications</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-4 right-4 glass-card p-5 w-52 border border-border/50"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                <Cpu className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-sm mb-1">AI & Automation</h4>
              <p className="text-xs text-muted-foreground">Smart business workflows</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-20 left-16 glass-card p-5 w-52 border border-border/50"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Cloud className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-sm mb-1">Cloud Solutions</h4>
              <p className="text-xs text-muted-foreground">Scalable cloud infrastructure</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-8 right-12 glass-card p-5 w-48 border border-border/50"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-heading font-semibold text-sm mb-1">Enterprise Security</h4>
              <p className="text-xs text-muted-foreground">Production-grade solutions</p>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40 animate-pulse" />
            <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-accent/30 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
