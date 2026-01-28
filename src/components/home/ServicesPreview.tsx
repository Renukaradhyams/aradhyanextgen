import { motion } from "framer-motion";
import { ArrowRight, Globe, Briefcase, User, Rocket, RefreshCw, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "React-Based Websites",
    description: "Custom web applications built with React for maximum performance.",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Professional sites that establish credibility and drive growth.",
  },
  {
    icon: User,
    title: "Portfolio Websites",
    description: "Stunning portfolios that showcase your work beautifully.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "High-converting pages designed to capture leads.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Modernize your existing site with fresh design and tech.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integration",
    description: "Seamless chat integration for instant customer connection.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive web solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
