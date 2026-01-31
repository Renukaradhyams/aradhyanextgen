import { motion } from "framer-motion";

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingDot = ({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/30"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
    }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const FloatingLine = ({ delay, x, y, rotation }: { delay: number; x: number; y: number; rotation: number }) => (
  <motion.div
    className="absolute w-20 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      transform: `rotate(${rotation}deg)`,
    }}
    animate={{
      opacity: [0.1, 0.4, 0.1],
      scaleX: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: 5 + Math.random() * 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export const FloatingElements = ({ count = 20, className = "" }: FloatingElementsProps) => {
  const dots = Array.from({ length: count }, (_, i) => ({
    delay: Math.random() * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
  }));

  const lines = Array.from({ length: Math.floor(count / 3) }, (_, i) => ({
    delay: Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 180,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {dots.map((dot, i) => (
        <FloatingDot key={`dot-${i}`} {...dot} />
      ))}
      {lines.map((line, i) => (
        <FloatingLine key={`line-${i}`} {...line} />
      ))}
    </div>
  );
};