import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Globe, Smartphone, ShoppingCart, Cpu, Building2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card3D } from "@/components/ui/Card3D";
import { Mesh3DBackground } from "@/components/ui/Mesh3DBackground";

const caseStudies = [
  {
    id: 1,
    title: "TechStartup Dashboard",
    category: "SaaS Platform",
    problem: "A startup needed a modern analytics dashboard to visualize their customer data and KPIs in real-time.",
    solution: "Built a responsive React dashboard with real-time data syncing, interactive charts, and customizable widgets.",
    techStack: ["React", "TypeScript", "Tailwind", "Supabase"],
    results: ["40% faster insights", "Real-time updates"],
    icon: Cpu,
    color: "cyan" as const,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Online Store",
    problem: "A retail business wanted to expand online with a fast, SEO-optimized e-commerce website.",
    solution: "Developed a full-featured online store with product management, cart system, and payment integration.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    results: ["200+ products", "2x conversion"],
    icon: ShoppingCart,
    color: "violet" as const,
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    category: "Business Website",
    problem: "An established company needed a modern web presence to attract new clients and improve brand perception.",
    solution: "Complete redesign with modern aesthetics, smooth animations, and lead generation forms.",
    techStack: ["React", "Framer Motion", "Tailwind", "EmailJS"],
    results: ["60% more leads", "3s load time"],
    icon: Building2,
    color: "primary" as const,
  },
  {
    id: 4,
    title: "Mobile-First Web App",
    category: "Progressive Web App",
    problem: "A service business needed a booking app that works seamlessly on mobile devices.",
    solution: "PWA with offline support, push notifications, and native-like user experience.",
    techStack: ["React", "PWA", "Service Workers"],
    results: ["Works offline", "50% faster bookings"],
    icon: Smartphone,
    color: "cyan" as const,
  },
  {
    id: 5,
    title: "Portfolio & Agency Site",
    category: "Creative Portfolio",
    problem: "A creative agency needed a stunning portfolio to showcase their work and attract high-value clients.",
    solution: "Animated portfolio with project galleries, case studies, and contact integration.",
    techStack: ["React", "Framer Motion", "Three.js"],
    results: ["Premium visuals", "Lead capture"],
    icon: Palette,
    color: "violet" as const,
  },
  {
    id: 6,
    title: "Multi-Page Business Portal",
    category: "Enterprise Solution",
    problem: "A growing business needed an internal portal for team collaboration and project management.",
    solution: "Custom portal with role-based access, document sharing, and real-time collaboration features.",
    techStack: ["React", "TypeScript", "Supabase"],
    results: ["Streamlined workflow", "35% productivity"],
    icon: Globe,
    color: "primary" as const,
  },
];

export const CaseStudiesSection = () => {
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
            Our Work <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">in Action</span>
          </h2>
          <p className="text-muted-foreground">
            Real projects, real results. See how we've helped businesses transform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card3D glowColor={study.color} intensity="medium" className="h-full">
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className={`p-6 border-b border-border/50 ${
                    study.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-transparent" :
                    study.color === "violet" ? "bg-gradient-to-br from-violet-500/10 to-transparent" :
                    "bg-gradient-to-br from-primary/10 to-transparent"
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        study.color === "cyan" ? "bg-cyan-500/20 border border-cyan-500/30" :
                        study.color === "violet" ? "bg-violet-500/20 border border-violet-500/30" :
                        "bg-primary/20 border border-primary/30"
                      }`}>
                        <study.icon className={`w-6 h-6 ${
                          study.color === "cyan" ? "text-cyan-400" :
                          study.color === "violet" ? "text-violet-400" : "text-primary"
                        }`} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        study.color === "cyan" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" :
                        study.color === "violet" ? "bg-violet-500/10 text-violet-400 border border-violet-500/20" :
                        "bg-primary/10 text-primary border border-primary/20"
                      }`}>
                        {study.category}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg">
                      {study.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Problem & Solution */}
                    <div className="space-y-3 mb-4 text-sm flex-1">
                      <div>
                        <span className="text-xs font-medium text-destructive/80">Challenge:</span>
                        <p className="text-muted-foreground line-clamp-2 mt-1">{study.problem}</p>
                      </div>
                      <div>
                        <span className={`text-xs font-medium ${
                          study.color === "cyan" ? "text-cyan-400" :
                          study.color === "violet" ? "text-violet-400" : "text-primary"
                        }`}>Solution:</span>
                        <p className="text-muted-foreground line-clamp-2 mt-1">{study.solution}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {study.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            study.color === "cyan" ? "bg-cyan-500/10 text-cyan-400/80" :
                            study.color === "violet" ? "bg-violet-500/10 text-violet-400/80" :
                            "bg-primary/10 text-primary/80"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.results.map((result, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                        >
                          ✓ {result}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex gap-2 pt-4 border-t border-border/50">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn border-primary/30 hover:border-primary"
                        asChild
                      >
                        <Link to="/contact">
                          View Details
                          <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="px-3 hover:bg-primary/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
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
          <p className="text-muted-foreground mb-4">
            Want to see your project here?
          </p>
          <Button asChild className="group bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 border-0">
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};