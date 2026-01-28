import { motion } from "framer-motion";
import { 
  Building2, 
  Brain, 
  Cloud, 
  Smartphone, 
  Shield, 
  Workflow,
  Sparkles
} from "lucide-react";

const futureFeatures = [
  {
    icon: Building2,
    title: "ERP Solutions",
    description: "Complete enterprise resource planning systems tailored for SMBs",
    status: "Coming Soon",
    eta: "Q2 2026",
  },
  {
    icon: Brain,
    title: "AI-Powered Chatbots",
    description: "Intelligent customer support bots that learn and adapt",
    status: "In Development",
    eta: "Q1 2026",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Managed cloud hosting and deployment services",
    status: "Coming Soon",
    eta: "Q2 2026",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native",
    status: "Planned",
    eta: "Q3 2026",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Security audits, penetration testing, and protection services",
    status: "Planned",
    eta: "Q4 2026",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Workflow automation and process optimization tools",
    status: "In Development",
    eta: "Q1 2026",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Development":
      return "bg-primary/20 text-primary border-primary/30";
    case "Coming Soon":
      return "bg-accent/20 text-accent border-accent/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export const FutureFeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Innovation Roadmap</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Future <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're constantly innovating. Here's a glimpse of what's coming next 
            to help your business stay ahead of the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(feature.status)}`}>
                    {feature.status}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {feature.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Expected: </span>
                  <span className="text-xs text-primary font-medium">{feature.eta}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Want early access to our upcoming features?{" "}
            <a href="/contact" className="text-primary hover:underline">
              Join our waitlist
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
