import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Page Load Speed", traditional: "Slower", react: "⚡ Lightning Fast" },
  { feature: "User Experience", traditional: "Static Feel", react: "Dynamic & Smooth" },
  { feature: "Scalability", traditional: "Limited", react: "Highly Scalable" },
  { feature: "Code Reusability", traditional: "Minimal", react: "Component-Based" },
  { feature: "Future Upgrades", traditional: "Hard & Costly", react: "Easy & Efficient" },
  { feature: "SEO Performance", traditional: "Basic", react: "Optimized" },
];

export const ComparisonSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">React Websites</span>?
          </h2>
          <p className="text-muted-foreground">
            See how modern React websites outperform traditional websites.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto glass-card overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-0">
            {/* Header */}
            <div className="p-4 md:p-6 bg-muted/30 border-b border-border">
              <h3 className="font-heading font-semibold text-sm md:text-base">Feature</h3>
            </div>
            <div className="p-4 md:p-6 bg-muted/50 border-b border-border text-center">
              <h3 className="font-heading font-semibold text-sm md:text-base text-muted-foreground">
                Traditional
              </h3>
            </div>
            <div className="p-4 md:p-6 bg-primary/10 border-b border-primary/20 text-center">
              <h3 className="font-heading font-semibold text-sm md:text-base text-primary">
                React Website
              </h3>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <>
                <div
                  key={`feature-${index}`}
                  className="p-4 md:p-6 border-b border-border flex items-center"
                >
                  <span className="text-sm md:text-base">{item.feature}</span>
                </div>
                <div
                  key={`traditional-${index}`}
                  className="p-4 md:p-6 bg-muted/20 border-b border-border text-center flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4 text-destructive hidden md:block" />
                  <span className="text-sm md:text-base text-muted-foreground">
                    {item.traditional}
                  </span>
                </div>
                <div
                  key={`react-${index}`}
                  className="p-4 md:p-6 bg-primary/5 border-b border-primary/10 text-center flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4 text-primary hidden md:block" />
                  <span className="text-sm md:text-base font-medium">
                    {item.react}
                  </span>
                </div>
              </>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
