import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Building2, Target, DollarSign, Clock, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/contactInfo";

const steps = [
  { id: "business", title: "Business Type", icon: Building2, question: "What type of business do you have?",
    options: [
      { value: "startup", label: "Startup / New Business", icon: "🚀" },
      { value: "smb", label: "Small-Medium Business", icon: "🏢" },
      { value: "enterprise", label: "Enterprise / Large Company", icon: "🏛️" },
      { value: "freelancer", label: "Freelancer / Individual", icon: "👤" },
    ] },
  { id: "goal", title: "Business Goal", icon: Target, question: "What's your primary goal?",
    options: [
      { value: "presence", label: "Establish Online Presence", icon: "🌐" },
      { value: "leads", label: "Generate More Leads", icon: "📈" },
      { value: "automate", label: "Automate Processes", icon: "⚙️" },
      { value: "sell", label: "Sell Products Online", icon: "🛒" },
    ] },
  { id: "budget", title: "Budget Range", icon: DollarSign, question: "What's your budget range?",
    options: [
      { value: "starter", label: "₹10K - ₹25K", icon: "💰" },
      { value: "growth", label: "₹25K - ₹50K", icon: "💰💰" },
      { value: "scale", label: "₹50K - ₹1L", icon: "💰💰💰" },
      { value: "enterprise", label: "₹1L+", icon: "💎" },
    ] },
  { id: "timeline", title: "Timeline", icon: Clock, question: "When do you need this?",
    options: [
      { value: "urgent", label: "ASAP (1-2 weeks)", icon: "⚡" },
      { value: "soon", label: "This Month", icon: "📅" },
      { value: "planned", label: "In 1-2 Months", icon: "🗓️" },
      { value: "flexible", label: "Flexible", icon: "🔄" },
    ] },
];

const recommendations: Record<string, { solution: string; description: string; price: string }> = {
  "startup-presence": { solution: "Startup Website & MVP", description: "Fast launch with a professional React website", price: "₹15,000 - ₹30,000" },
  "startup-leads": { solution: "Lead Generation Website", description: "Conversion-optimized landing page with forms", price: "₹20,000 - ₹40,000" },
  "smb-presence": { solution: "Business Website", description: "Professional multi-page website", price: "₹20,000 - ₹40,000" },
  "smb-leads": { solution: "Lead Generation System", description: "Website + CRM + Automation", price: "₹35,000 - ₹60,000" },
  "default": { solution: "Custom Solution", description: "Tailored to your specific needs", price: "Contact for quote" },
};

export const SolutionSelector = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [steps[currentStep].id]: value };
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    else setShowResult(true);
  };

  const getRecommendation = () => {
    const key = `${answers.business}-${answers.goal}`;
    return recommendations[key] || recommendations.default;
  };

  const recommendation = getRecommendation();
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6">
            <Sparkles className="w-4 h-4 text-primary" /><span className="text-sm text-primary font-medium">Smart Solution Finder</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">What Solution Do <span className="gradient-text">You Need?</span></h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-lg">
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Step {currentStep + 1} of {steps.length}</span><span className="font-medium">{steps[currentStep].title}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" animate={{ width: `${progress}%` }} />
                  </div>
                </div>
                <div className="text-center mb-8">
                  <h3 className="font-heading text-xl font-bold text-foreground">{steps[currentStep].question}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {steps[currentStep].options.map((option) => (
                    <motion.button key={option.value} onClick={() => handleSelect(option.value)}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="p-4 rounded-xl border border-border hover:border-primary/50 bg-background hover:bg-primary/5 transition-all text-left group shadow-sm hover:shadow-md">
                      <span className="text-2xl mb-2 block">{option.icon}</span>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{option.label}</span>
                    </motion.button>
                  ))}
                </div>
                {currentStep > 0 && (
                  <Button variant="ghost" onClick={() => setCurrentStep(currentStep - 1)} className="w-full text-muted-foreground">
                    <ArrowLeft className="w-4 h-4 mr-2" />Back
                  </Button>
                )}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 text-center rounded-2xl border border-border shadow-lg">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">Your Recommended Solution</h3>
                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 mb-6">
                  <h4 className="font-heading text-xl font-bold text-primary mb-2">{recommendation.solution}</h4>
                  <p className="text-muted-foreground mb-4">{recommendation.description}</p>
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold">
                    Estimated: {recommendation.price}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="flex-1 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]">
                    <a href={getWhatsAppUrl(`Hi! I'm interested in ${recommendation.solution}.`)} target="_blank" rel="noopener noreferrer">
                      Get Proposal<ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="border-primary/30 hover:border-primary text-foreground" onClick={() => { setCurrentStep(0); setAnswers({}); setShowResult(false); }}>Start Over</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
