import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getActiveServices } from "@/config/servicesConfig";
import { Mesh3DBackground } from "@/components/ui/Mesh3DBackground";
import { Card3D } from "@/components/ui/Card3D";

export const ServicesPreview = () => {
  const services = getActiveServices().slice(0, 6);

  const glowColors: ("cyan" | "violet" | "primary" | "accent")[] = ["cyan", "violet", "primary", "accent", "cyan", "violet"];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 3D Background */}
      <Mesh3DBackground variant="subtle" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive digital solutions engineered for the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card3D 
                glowColor={glowColors[index % glowColors.length]} 
                intensity="medium"
                className="h-full"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    to="/solutions"
                    className="inline-flex items-center text-sm text-primary font-medium group/link hover:text-cyan-400 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </Card3D>
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
          <Button size="lg" variant="outline" asChild className="group border-primary/30 hover:border-primary backdrop-blur-sm">
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