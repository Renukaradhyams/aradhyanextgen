import { motion } from "framer-motion";
import {
  MessageCircle, Dumbbell, Heart, Briefcase,
  BookOpen, Store, ShoppingCart, Car,
  Plane, Building2, UtensilsCrossed, Package
} from "lucide-react";

const industries = [
  { icon: MessageCircle, name: "Chat Applications", color: "text-blue-500" },
  { icon: Dumbbell, name: "Fitness Platforms", color: "text-orange-500" },
  { icon: Heart, name: "Dating Platforms", color: "text-pink-500" },
  { icon: Briefcase, name: "Job Portals", color: "text-indigo-500" },
  { icon: BookOpen, name: "E-learning Platforms", color: "text-purple-500" },
  { icon: Store, name: "Multi Vendor Marketplaces", color: "text-emerald-500" },
  { icon: ShoppingCart, name: "Online Grocery", color: "text-green-500" },
  { icon: Car, name: "Cab Booking Systems", color: "text-yellow-500" },
  { icon: Plane, name: "Travel & Tourism", color: "text-sky-500" },
  { icon: Building2, name: "Real Estate Platforms", color: "text-slate-500" },
  { icon: UtensilsCrossed, name: "Food Delivery Apps", color: "text-red-500" },
  { icon: Package, name: "Product Management", color: "text-teal-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export const IndustriesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">
            Industries
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Industries We Build <span className="gradient-text">Solutions For</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From startups to enterprises, we build scalable digital platforms across multiple industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.04 }}
              className="group cursor-default"
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300"
                >
                  <industry.icon className={`w-7 h-7 ${industry.color} transition-colors`} />
                </motion.div>
                <h3 className="font-heading font-medium text-sm text-foreground">{industry.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
