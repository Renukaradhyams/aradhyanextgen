import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/contactInfo";
import { Card3D } from "@/components/ui/Card3D";
import { Mesh3DBackground } from "@/components/ui/Mesh3DBackground";

export const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* 3D Background */}
      <Mesh3DBackground variant="default" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card3D glowColor="cyan" intensity="high" className="max-w-4xl mx-auto">
            <div className="p-12 md:p-16 text-center relative overflow-hidden">
              {/* Inner gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />
              
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Build Your
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Dream Website?</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                  Let's transform your vision into a stunning, high-performance digital experience 
                  that drives real results.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    size="lg" 
                    asChild 
                    className="group px-8 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 border-0"
                  >
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild
                    className="border-primary/30 hover:border-cyan-400 hover:bg-cyan-500/10"
                  >
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </section>
  );
};