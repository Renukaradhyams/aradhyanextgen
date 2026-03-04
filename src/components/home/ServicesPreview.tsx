import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getActiveServices } from "@/config/servicesConfig";

export const ServicesPreview = () => {
  const services = getActiveServices().slice(0, 6);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)] -translate-x-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-muted-foreground">Comprehensive digital solutions tailored to your business needs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }} className="group relative">
              <div className="absolute -inset-0.5 bg-primary rounded-2xl opacity-0 group-hover:opacity-10 blur-sm transition-all duration-500" />
              <div className="relative glass-card p-6 h-full flex flex-col border border-border/50 group-hover:border-primary/30">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
                <div className="mb-4">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="inline-block text-xs px-2 py-1 bg-primary/10 text-primary rounded-full mr-2 mb-2">{feature}</span>
                  ))}
                </div>
                <Link to="/solutions" className="inline-flex items-center text-sm text-primary font-medium group/link">
                  Learn more<ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-12">
          <Button size="lg" variant="outline" asChild className="group border-primary/30 hover:border-primary">
            <Link to="/solutions">View All Solutions<ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
