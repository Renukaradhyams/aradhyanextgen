import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Mesh3DBackgroundProps {
  variant?: "default" | "hero" | "subtle";
  className?: string;
}

// Floating 3D shapes component
const FloatingShape = ({ 
  delay = 0, 
  size = 100, 
  x = 0, 
  y = 0,
  shape = "cube",
  color = "primary"
}: {
  delay?: number;
  size?: number;
  x?: number;
  y?: number;
  shape?: "cube" | "sphere" | "ring" | "triangle" | "hexagon";
  color?: "primary" | "accent" | "cyan" | "violet";
}) => {
  const colorClasses = {
    primary: "from-primary/20 to-primary/5",
    accent: "from-accent/20 to-accent/5",
    cyan: "from-cyan-500/20 to-cyan-500/5",
    violet: "from-violet-500/20 to-violet-500/5",
  };

  const shapeStyles = {
    cube: "rounded-xl rotate-45",
    sphere: "rounded-full",
    ring: "rounded-full border-4 border-current bg-transparent",
    triangle: "clip-path-triangle",
    hexagon: "clip-path-hexagon",
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${shapeStyles[shape]}`}
      style={{ 
        width: size, 
        height: size, 
        left: `${x}%`, 
        top: `${y}%`,
        perspective: "1000px",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1],
        rotateX: [0, 15, 0],
        rotateY: [0, 20, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div 
        className={`w-full h-full bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm ${shape === "ring" ? "border-primary/30" : ""}`}
        style={{
          boxShadow: `0 0 ${size/2}px hsl(var(--primary) / 0.1)`,
          transform: "translateZ(0)",
        }}
      />
    </motion.div>
  );
};

// Animated mesh gradient
const MeshGradient = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Primary glow */}
    <motion.div
      className="absolute w-[800px] h-[800px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        left: "10%",
        top: "20%",
        filter: "blur(60px)",
      }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    
    {/* Accent glow */}
    <motion.div
      className="absolute w-[600px] h-[600px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 70%)",
        right: "10%",
        bottom: "20%",
        filter: "blur(60px)",
      }}
      animate={{
        scale: [1.2, 1, 1.2],
        x: [0, -40, 0],
        y: [0, 30, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />

    {/* Cyan accent */}
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        filter: "blur(50px)",
      }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    />
  </div>
);

// Noise overlay for texture
const NoiseOverlay = () => (
  <div 
    className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    }}
  />
);

// Animated grid
const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--primary) / 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--primary) / 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    {/* Perspective grid lines */}
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        background: `
          linear-gradient(90deg, transparent 49.5%, hsl(var(--primary) / 0.05) 50%, transparent 50.5%),
          linear-gradient(0deg, transparent 49.5%, hsl(var(--primary) / 0.05) 50%, transparent 50.5%)
        `,
        backgroundSize: "100px 100px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
      }}
    />
  </div>
);

export const Mesh3DBackground = ({ 
  variant = "default",
  className = "" 
}: Mesh3DBackgroundProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const shapes = variant === "hero" ? [
    { delay: 0, size: 120, x: 10, y: 15, shape: "cube" as const, color: "primary" as const },
    { delay: 1, size: 80, x: 85, y: 25, shape: "sphere" as const, color: "cyan" as const },
    { delay: 2, size: 100, x: 75, y: 70, shape: "ring" as const, color: "violet" as const },
    { delay: 0.5, size: 60, x: 20, y: 75, shape: "sphere" as const, color: "accent" as const },
    { delay: 1.5, size: 90, x: 60, y: 10, shape: "cube" as const, color: "cyan" as const },
    { delay: 3, size: 70, x: 40, y: 85, shape: "ring" as const, color: "primary" as const },
  ] : variant === "subtle" ? [
    { delay: 0, size: 80, x: 10, y: 20, shape: "sphere" as const, color: "primary" as const },
    { delay: 2, size: 60, x: 80, y: 70, shape: "cube" as const, color: "accent" as const },
  ] : [
    { delay: 0, size: 100, x: 15, y: 20, shape: "cube" as const, color: "primary" as const },
    { delay: 1, size: 70, x: 80, y: 30, shape: "sphere" as const, color: "cyan" as const },
    { delay: 2, size: 80, x: 70, y: 75, shape: "ring" as const, color: "violet" as const },
    { delay: 1.5, size: 50, x: 25, y: 80, shape: "sphere" as const, color: "accent" as const },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Mesh gradients */}
      <MeshGradient />
      
      {/* Animated grid */}
      <AnimatedGrid />
      
      {/* Floating shapes */}
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
      
      {/* Noise texture */}
      <NoiseOverlay />
      
      {/* Depth vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, hsl(var(--background) / 0.4) 100%)",
        }}
      />
    </div>
  );
};