import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Target, Eye } from "lucide-react";
import { aboutConfig } from "@/config/aboutConfig";
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Mesh3DBackground } from "@/components/ui/Mesh3DBackground";
import { Card3D } from "@/components/ui/Card3D";

// Animated counter component
const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = numericValue / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
      {count}{suffix}
    </div>
  );
};

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Aradhya NextGen - Our Story</title>
        <meta name="description" content="Learn about Aradhya NextGen - a modern web solutions company focused on React-based development, AI solutions, and digital transformation." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <Mesh3DBackground variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">{aboutConfig.companyName}</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              {aboutConfig.tagline} — we're your trusted partner in building the digital future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are - Split Layout */}
      <section className="relative py-16 overflow-hidden">
        <Mesh3DBackground variant="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card3D glowColor="cyan" intensity="medium">
                <div className="aspect-square p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">AN</span>
                    </div>
                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-cyan-500/20 border border-cyan-500/30"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/30"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </div>
                </div>
              </Card3D>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                {aboutConfig.whoWeAre.title}
              </h2>
              {aboutConfig.whoWeAre.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 overflow-hidden">
        <Mesh3DBackground variant="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aboutConfig.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card3D 
                  glowColor={index % 3 === 0 ? "cyan" : index % 3 === 1 ? "violet" : "primary"} 
                  intensity="low"
                  className="text-center"
                >
                  <div className="p-6">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <div className="text-muted-foreground text-sm mt-2">{stat.label}</div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 overflow-hidden">
        <Mesh3DBackground variant="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Journey</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-primary" />
            
            {aboutConfig.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex gap-6 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex flex-col items-center shrink-0 md:w-auto">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm z-10">
                    {item.year}
                  </div>
                </div>
                <Card3D 
                  glowColor={index % 2 === 0 ? "cyan" : "violet"} 
                  intensity="low"
                  className="flex-1"
                >
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16 overflow-hidden">
        <Mesh3DBackground variant="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card3D glowColor="cyan" intensity="medium">
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">{aboutConfig.mission.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {aboutConfig.mission.description}
                  </p>
                </div>
              </Card3D>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card3D glowColor="violet" intensity="medium">
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-violet-400" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">{aboutConfig.vision.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {aboutConfig.vision.description}
                  </p>
                </div>
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-16 overflow-hidden">
        <Mesh3DBackground variant="subtle" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutConfig.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card3D 
                  glowColor={index % 3 === 0 ? "cyan" : index % 3 === 1 ? "violet" : "primary"} 
                  intensity="medium"
                  className="h-full text-center"
                >
                  <div className="p-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      index % 3 === 0 ? "bg-cyan-500/20 border border-cyan-500/30" :
                      index % 3 === 1 ? "bg-violet-500/20 border border-violet-500/30" :
                      "bg-primary/20 border border-primary/30"
                    }`}>
                      <value.icon className={`w-7 h-7 ${
                        index % 3 === 0 ? "text-cyan-400" :
                        index % 3 === 1 ? "text-violet-400" : "text-primary"
                      }`} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;