import { motion } from "framer-motion";

interface GlowingOrbProps {
  size?: number;
  color?: "primary" | "cyan" | "violet" | "accent";
  className?: string;
  delay?: number;
  blur?: number;
}

export const GlowingOrb = ({
  size = 400,
  color = "primary",
  className = "",
  delay = 0,
  blur = 80,
}: GlowingOrbProps) => {
  const colorGradients = {
    primary: "hsl(var(--primary) / 0.2)",
    cyan: "rgba(34, 211, 238, 0.2)",
    violet: "rgba(139, 92, 246, 0.2)",
    accent: "hsl(var(--accent) / 0.2)",
  };

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colorGradients[color]} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};