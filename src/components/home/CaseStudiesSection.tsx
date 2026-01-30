import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Globe, Smartphone, ShoppingCart, Cpu, Building2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "TechStartup Dashboard",
    category: "SaaS Platform",
    problem: "A startup needed a modern analytics dashboard to visualize their customer data and KPIs in real-time.",
    solution: "Built a responsive React dashboard with real-time data syncing, interactive charts, and customizable widgets.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
    results: ["40% faster data insights", "Real-time updates", "Mobile responsive"],
    image: "from-blue-600 to-cyan-500",
    icon: Cpu,
    liveUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Online Store",
    problem: "A retail business wanted to expand online with a fast, SEO-optimized e-commerce website.",
    solution: "Developed a full-featured online store with product management, cart system, and payment integration.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    results: ["200+ products listed", "2x conversion rate", "Mobile-first design"],
    image: "from-purple-600 to-pink-500",
    icon: ShoppingCart,
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    category: "Business Website",
    problem: "An established company needed a modern web presence to attract new clients and improve brand perception.",
    solution: "Complete redesign with modern aesthetics, smooth animations, and lead generation forms.",
    techStack: ["React", "Framer Motion", "Tailwind CSS", "EmailJS"],
    results: ["60% more leads", "3s avg load time", "Modern brand image"],
    image: "from-orange-500 to-red-500",
    icon: Building2,
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Mobile-First Web App",
    category: "Progressive Web App",
    problem: "A service business needed a booking app that works seamlessly on mobile devices.",
    solution: "PWA with offline support, push notifications, and native-like user experience.",
    techStack: ["React", "PWA", "Service Workers", "IndexedDB"],
    results: ["Works offline", "App-like experience", "50% faster bookings"],
    image: "from-green-500 to-emerald-500",
    icon: Smartphone,
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio & Agency Site",
    category: "Creative Portfolio",
    problem: "A creative agency needed a stunning portfolio to showcase their work and attract high-value clients.",
    solution: "Animated portfolio with project galleries, case studies, and contact integration.",
    techStack: ["React", "Framer Motion", "Three.js", "Tailwind CSS"],
    results: ["Premium visual appeal", "Interactive galleries", "Lead capture"],
    image: "from-indigo-500 to-violet-500",
    icon: Palette,
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Multi-Page Business Portal",
    category: "Enterprise Solution",
    problem: "A growing business needed an internal portal for team collaboration and project management.",
    solution: "Custom portal with role-based access, document sharing, and real-time collaboration features.",
    techStack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    results: ["Streamlined workflow", "Secure access", "Team productivity up 35%"],
    image: "from-teal-500 to-cyan-500",
    icon: Globe,
    liveUrl: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const CaseStudiesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our Work <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-muted-foreground">
            Real projects, real results. See how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${study.image} rounded-2xl opacity-0 group-hover:opacity-40 blur transition-all duration-300`} />
              
              <div className="relative glass-card h-full overflow-hidden">
                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-br ${study.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white/10_1px,transparent_0)] bg-[size:20px_20px]" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <study.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    {study.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>

                  {/* Problem & Solution */}
                  <div className="space-y-3 mb-4 text-sm">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">Challenge:</span>
                      <p className="text-muted-foreground line-clamp-2">{study.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-primary">Solution:</span>
                      <p className="text-muted-foreground line-clamp-2">{study.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {study.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full"
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
                        className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
                      >
                        ✓ {result}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2 pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn border-primary/30 hover:border-primary"
                      asChild
                    >
                      <Link to="/contact">
                        View Case Study
                        <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="px-3"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
          <Button asChild className="group">
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