import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/contactInfo";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border/50 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Aradhya NextGen Technologies" className="w-12 h-12 object-contain" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl text-foreground leading-tight">
              Aradhya NextGen
            </span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">Technologies</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <motion.div layoutId="navbar-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
          <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
            <Link to="/enquiry">Enquire Now</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl mt-2 mx-4 rounded-xl overflow-hidden border border-border"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href}
                  className={`p-3 rounded-lg transition-colors ${location.pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}>
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-border flex flex-col gap-2">
                <Button variant="outline" asChild className="w-full">
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/enquiry">Enquire Now</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.nav>
  );
};
