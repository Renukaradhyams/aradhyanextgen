import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/contactInfo";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for personal portfolios & landing pages",
    price: "₹15,000",
    priceRange: "₹15,000 - ₹25,000",
    features: ["Single page website", "Mobile responsive", "Contact form / WhatsApp", "Basic SEO setup", "1 revision round", "3-5 days delivery"],
    popular: false,
  },
  {
    name: "Business",
    description: "Ideal for businesses & service providers",
    price: "₹35,000",
    priceRange: "₹25,000 - ₹50,000",
    features: ["Multi-page website (5-7)", "Custom React development", "Advanced animations", "Full SEO optimization", "EmailJS integration", "2 revision rounds", "1-2 weeks delivery"],
    popular: true,
  },
  {
    name: "Premium",
    description: "For complex web applications & e-commerce",
    price: "Custom",
    priceRange: "₹50,000+",
    features: ["Custom web application", "E-commerce features", "Advanced functionality", "Database integration", "Admin panel (optional)", "Unlimited revisions", "Priority support"],
    popular: false,
  },
];

export const PricingSection = () => {
  const handleGetQuote = (planName: string) => {
    const message = `Hello Aradhya NextGen Team 👋\n\nI am interested in the ${planName} plan.\n\nPlease share more details and a custom quote.`;
    window.open(getWhatsAppUrl(message), "_blank");
  };

  return (
    <section className="py-28 relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,hsl(145_70%_45%/0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground">Honest pricing with no hidden costs. Choose a plan that fits your needs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass-card p-8 border ${
                plan.popular ? "border-primary/50 shadow-glow scale-[1.02]" : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4" fill="currentColor" />Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="text-4xl font-bold font-heading gradient-text mb-1">{plan.price}</div>
                <p className="text-muted-foreground text-sm">{plan.priceRange}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0" /><span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className={`w-full group ${plan.popular ? "hover:shadow-[0_0_20px_-5px_hsl(145_70%_45%/0.4)]" : "border-primary/30 hover:border-primary"}`}
                onClick={() => handleGetQuote(plan.name)}
              >
                Get Quote<ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          * Prices are indicative. Final quote depends on specific requirements.
        </motion.p>
      </div>
    </section>
  );
};
