import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "cyan" | "violet" | "accent";
  intensity?: "low" | "medium" | "high";
  disableOnMobile?: boolean;
}

export const Card3D = ({ 
  children, 
  className = "",
  glowColor = "primary",
  intensity = "medium",
  disableOnMobile = true,
}: Card3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  const intensityValues = {
    low: 5,
    medium: 10,
    high: 15,
  };
  
  const maxRotation = intensityValues[intensity];
  
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [maxRotation, -maxRotation]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-maxRotation, maxRotation]);
  
  const glowColors = {
    primary: "hsl(var(--primary) / 0.4)",
    cyan: "rgba(34, 211, 238, 0.4)",
    violet: "rgba(139, 92, 246, 0.4)",
    accent: "hsl(var(--accent) / 0.4)",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Disable on mobile
    if (disableOnMobile && window.innerWidth < 768) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = (e.clientX - centerX) / rect.width;
    const mouseY = (e.clientY - centerY) / rect.height;
    
    x.set(mouseX);
    y.set(mouseY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{
            background: `radial-gradient(circle at center, ${glowColors[glowColor]}, transparent 70%)`,
          }}
        />
        
        {/* Border glow */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Card content */}
        <div 
          className="relative rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 overflow-hidden transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-2xl"
          style={{
            transform: "translateZ(0)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Inner highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};