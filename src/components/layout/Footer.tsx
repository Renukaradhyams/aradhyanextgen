import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";
import { contactInfo } from "@/config/contactInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  solutions: [
    { label: "Startup & MVP", href: "/solutions" },
    { label: "AI & Automation", href: "/solutions" },
    { label: "Business Websites", href: "/solutions" },
    { label: "E-commerce", href: "/solutions" },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/renukaradhya-m-s" },
    { label: "GitHub", href: "https://github.com/renukaradhya" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
};

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Subscribed! 🎉",
      description: "You'll receive our latest updates and news.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-background" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg">
                  Aradhya NextGen
                </span>
                <span className="block text-xs text-muted-foreground">
                  Web Solutions
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              From Idea to Online Presence. Building next-generation websites
              that convert visitors into customers.
            </p>
            
            {/* Newsletter */}
            <div className="pt-4">
              <p className="text-sm font-medium mb-3">Subscribe to our newsletter</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50"
                />
                <Button type="submit" size="icon" disabled={isSubmitting}>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {contactInfo.phone}
                </a>
              </li>
              <li className="text-muted-foreground text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.location}</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-3">Follow Us</p>
              <div className="flex gap-2">
                {footerLinks.social.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
                  >
                    <span className="text-xs font-medium">{social.label[0]}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Aradhya NextGen. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with{" "}
            <span className="text-primary">React</span> &{" "}
            <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
