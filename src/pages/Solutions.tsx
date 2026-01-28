import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { solutions } from "@/config/solutionsConfig";
import { PricingSection } from "@/components/home/PricingSection";

const Solutions = () => {
  return (
    <Layout>
      <Helmet>
        <title>Solutions | Aradhya NextGen - Web & Digital Solutions</title>
        <meta name="description" content="Explore our web development solutions: Startup MVPs, AI & Automation, E-commerce, Custom Software, and more. Find the perfect solution for your business." />
      </Helmet>

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We solve real business problems with modern technology. 
              Each solution is designed to deliver measurable impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0">
                    <solution.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    
                    {/* Problem */}
                    <div className="mb-4 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                      <span className="text-xs font-medium text-destructive">Problem:</span>
                      <p className="text-sm text-muted-foreground mt-1">{solution.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <span className="text-xs font-medium text-primary">Our Solution:</span>
                      <p className="text-sm text-muted-foreground mt-1">{solution.solution}</p>
                    </div>

                    {/* Impact */}
                    <div className="mb-4 p-3 rounded-lg bg-accent/5 border border-accent/20">
                      <span className="text-xs font-medium text-accent">Business Impact:</span>
                      <p className="text-sm font-medium mt-1">{solution.impact}</p>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {solution.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-xs text-muted-foreground">Ideal for:</span>
                        <p className="text-sm text-primary">{solution.idealFor}</p>
                      </div>
                      {solution.priceRange && (
                        <span className="text-sm font-medium">{solution.priceRange}</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Not sure which solution fits your needs?
            </p>
            <Button asChild>
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />
    </Layout>
  );
};

export default Solutions;
