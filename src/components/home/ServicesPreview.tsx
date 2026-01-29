import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getActiveServices } from "@/config/servicesConfig";

export const ServicesPreview = () => {
  const services = getActiveServices().slice(0, 6); // Show first 6 services

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.15)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-300" />
              
              <div className="relative glass-card p-6 h-full flex flex-col backdrop-blur-xl">
                {/* Icon with gradient background */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="mb-4">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <span 
                      key={i} 
                      className="inline-block text-xs px-2 py-1 bg-primary/10 text-primary rounded-full mr-2 mb-2"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Gradient underline on hover */}
                <Link
                  to="/solutions"
                  className="inline-flex items-center text-sm text-primary font-medium relative overflow-hidden"
                >
                  <span className="relative z-10">Learn more</span>
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-2" />
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </div>
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
          <Button size="lg" variant="outline" asChild className="group">
            <Link to="/solutions">
              View All Solutions
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
