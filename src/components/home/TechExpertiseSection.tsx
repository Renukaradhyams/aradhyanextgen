import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    techs: [
      { name: "React.js", color: "#61DAFB", abbr: "⚛️" },
      { name: "Next.js", color: "#000000", abbr: "▲" },
      { name: "TypeScript", color: "#3178C6", abbr: "TS" },
      { name: "Tailwind CSS", color: "#06B6D4", abbr: "🌊" },
      { name: "Angular", color: "#DD0031", abbr: "🅰️" },
      { name: "Flutter", color: "#02569B", abbr: "💙" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    techs: [
      { name: "Node.js", color: "#339933", abbr: "🟢" },
      { name: "Python", color: "#3776AB", abbr: "🐍" },
      { name: "Laravel", color: "#FF2D20", abbr: "🔴" },
      { name: "Express.js", color: "#444444", abbr: "Ex" },
      { name: "CodeIgniter", color: "#EF4223", abbr: "CI" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    techs: [
      { name: "Android", color: "#3DDC84", abbr: "🤖" },
      { name: "iOS", color: "#000000", abbr: "🍎" },
      { name: "Swift", color: "#F05138", abbr: "🦅" },
      { name: "Kotlin", color: "#7F52FF", abbr: "K" },
      { name: "React Native", color: "#61DAFB", abbr: "📱" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Database",
    techs: [
      { name: "AWS", color: "#FF9900", abbr: "☁️" },
      { name: "Vercel", color: "#000000", abbr: "▲" },
      { name: "Supabase", color: "#3FCF8E", abbr: "⚡" },
      { name: "PostgreSQL", color: "#4169E1", abbr: "🐘" },
      { name: "MongoDB", color: "#47A248", abbr: "🍃" },
      { name: "Firebase", color: "#FFCA28", abbr: "🔥" },
    ],
  },
  {
    id: "platforms",
    label: "Platforms",
    techs: [
      { name: "Shopify", color: "#7AB55C", abbr: "🛍️" },
      { name: "WordPress", color: "#21759B", abbr: "W" },
      { name: "Magento", color: "#EE672F", abbr: "M" },
      { name: "Zoho", color: "#C8202B", abbr: "Z" },
    ],
  },
];

export const TechExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Technology <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We use modern technologies to build scalable, secure, and high-performance digital products.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
          >
            {activeCategory.techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group cursor-default"
              >
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-border group-hover:border-primary/30 group-hover:shadow-xl transition-all duration-300">
                  <div
                    className="w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${tech.color}12` }}
                  >
                    {tech.abbr}
                  </div>
                  <h4 className="font-heading font-medium text-sm text-foreground">{tech.name}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
