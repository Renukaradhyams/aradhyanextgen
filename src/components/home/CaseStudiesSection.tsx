import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "GalaxyPower Solar",
    url: "https://galaxypowersolar.in",
    description: "Corporate solar energy website built for performance, branding, and lead generation.",
    tech: ["React", "Tailwind CSS", "SEO", "Lead Gen"],
  },
  {
    title: "Karunadu LED",
    url: "https://karunaduled.in",
    description: "Modern lighting solutions website designed for product showcase and B2B engagement.",
    tech: ["React", "Framer Motion", "Responsive", "B2B"],
  },
  {
    title: "Unnathi CNC",
    url: "https://unnathicnc.com",
    description: "Industrial precision manufacturing website focused on strong branding and SEO performance.",
    tech: ["React", "TypeScript", "SEO", "Industrial"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const CaseStudiesSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)] translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-muted-foreground">Real businesses powered by Aradhya NextGen Technologies. Built for performance, scalability, and measurable growth.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants} whileHover={{ y: -8 }} className="group relative">
              <div className="absolute -inset-0.5 bg-primary rounded-2xl opacity-0 group-hover:opacity-15 blur-sm transition-all duration-500" />
              <div className="relative glass-card overflow-hidden h-full border border-border/50 group-hover:border-primary/30">
                {/* Header */}
                <div className="h-36 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.04)_1px,transparent_0)] bg-[size:24px_24px]" />
                  <div className="absolute bottom-4 left-6">
                    <span className="px-2 py-1 rounded-full bg-primary/15 text-primary text-xs font-medium border border-primary/20">Live Project</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full">{t}</span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full group/btn border-primary/30 hover:border-primary hover:bg-primary/10">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      View Live Website<ExternalLink className="ml-2 w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
