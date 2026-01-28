import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Rocket,
  CheckCircle,
  Send,
  ArrowRight
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailConfig";
import { useToast } from "@/hooks/use-toast";

const opportunities = [
  {
    icon: GraduationCap,
    title: "Internship Program",
    type: "Internship",
    description: "Learn and grow with hands-on experience in real projects. Perfect for students and fresh graduates.",
    roles: [
      "React Developer Intern",
      "UI/UX Design Intern",
      "Digital Marketing Intern",
    ],
    duration: "3-6 months",
    stipend: "Performance-based",
  },
  {
    icon: Users,
    title: "Freelance Collaboration",
    type: "Collaboration",
    description: "Partner with us on exciting projects. We're always looking for skilled developers and designers.",
    roles: [
      "Frontend Developers",
      "Backend Developers",
      "UI/UX Designers",
    ],
    duration: "Project-based",
    stipend: "Competitive rates",
  },
  {
    icon: Briefcase,
    title: "Full-time Positions",
    type: "Full-time",
    description: "Join our core team and help build the future of web development.",
    roles: [
      "Senior React Developer",
      "Full-Stack Developer",
      "Project Manager",
    ],
    duration: "Permanent",
    stipend: "Industry standard",
  },
];

const perks = [
  "Remote-first culture",
  "Flexible working hours",
  "Learning & development budget",
  "Work on cutting-edge technologies",
  "Collaborative team environment",
  "Growth opportunities",
];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    portfolio: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          role: formData.role,
          portfolio: formData.portfolio,
          message: formData.message,
          to_email: emailConfig.RECEIVER_EMAIL,
          subject: `Career Inquiry: ${formData.role}`,
        },
        emailConfig.PUBLIC_KEY
      );

      toast({
        title: "Application Submitted! 🎉",
        description: "We'll review your application and get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        portfolio: "",
        message: "",
      });
    } catch {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Careers | Aradhya NextGen - Join Our Team</title>
        <meta name="description" content="Join Aradhya NextGen! We're looking for talented developers, designers, and interns. Explore internship programs, freelance opportunities, and full-time positions." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">We're Hiring!</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Build the Future <span className="gradient-text">With Us</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Join a team of passionate developers and designers building next-generation 
              web solutions. We offer internships, freelance opportunities, and full-time positions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <opp.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {opp.type}
                </span>

                <h3 className="font-heading text-xl font-semibold mb-3">
                  {opp.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {opp.description}
                </p>

                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium">Open Roles:</p>
                  {opp.roles.map((role, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      {role}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span>{opp.duration}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-muted-foreground">Compensation:</span>
                    <span className="text-primary">{opp.stipend}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">
              Why Work With <span className="gradient-text">Us?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl glass text-center"
              >
                <CheckCircle className="w-5 h-5 text-primary mx-auto mb-2" />
                <span className="text-sm">{perk}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold mb-4">
                Apply <span className="gradient-text">Now</span>
              </h2>
              <p className="text-muted-foreground">
                Ready to join us? Fill out the form below and we'll get back to you.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Role Interested In</label>
                  <Input
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g., React Developer Intern"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Portfolio / LinkedIn URL</label>
                <Input
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Tell Us About Yourself</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your experience, skills, and why you want to join us..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Application
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
