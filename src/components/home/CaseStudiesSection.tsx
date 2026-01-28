import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "E-commerce Platform for Fashion Brand",
    problem: "A fashion startup needed an online store but had no technical expertise.",
    solution: "Built a complete e-commerce solution with product catalog, cart, and payment integration.",
    techStack: ["React", "Tailwind CSS", "Stripe", "Supabase"],
    result: "200% increase in online sales within 3 months",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Business Dashboard for Logistics Company",
    problem: "Manual tracking of shipments was causing delays and customer complaints.",
    solution: "Custom dashboard with real-time tracking, automated notifications, and analytics.",
    techStack: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    result: "50% reduction in customer complaints",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Portfolio Website for Creative Agency",
    problem: "Outdated website wasn't attracting quality clients.",
    solution: "Modern, animated portfolio with case studies and lead capture.",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    result: "3x more client inquiries per month",
    image: "/placeholder.svg",
    link: "#",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Live <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real projects, real results. See how we've helped businesses grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>

                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs text-primary font-medium">Problem:</span>
                    <p className="text-sm text-muted-foreground">{study.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium">Solution:</span>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 mb-4">
                  <span className="text-xs text-muted-foreground">Result:</span>
                  <p className="text-sm font-medium text-primary">{study.result}</p>
                </div>

                <Button variant="ghost" size="sm" className="w-full group/btn">
                  View Case Study
                  <ExternalLink className="ml-2 w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                </Button>
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
          <Button variant="outline" asChild>
            <a href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
