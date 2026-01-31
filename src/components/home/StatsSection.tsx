import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card3D } from "@/components/ui/Card3D";
import { Mesh3DBackground } from "@/components/ui/Mesh3DBackground";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  color: "cyan" | "violet" | "primary";
}

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Websites Delivered", color: "cyan" },
  { value: 100, suffix: "%", label: "Client Satisfaction", color: "violet" },
  { value: 10, suffix: "+", label: "Technologies Used", color: "primary" },
  { value: 24, suffix: "/7", label: "Support Available", color: "cyan" },
];

const CountUpAnimation = ({ value, suffix, inView, color }: { value: number; suffix: string; inView: boolean; color: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className={`${
      color === "cyan" ? "text-cyan-400" :
      color === "violet" ? "text-violet-400" : "text-primary"
    }`}>
      {count}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* 3D Background */}
      <Mesh3DBackground variant="subtle" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Businesses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our numbers speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card3D glowColor={stat.color} intensity="medium" className="text-center">
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                    <CountUpAnimation value={stat.value} suffix={stat.suffix} inView={isInView} color={stat.color} />
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};