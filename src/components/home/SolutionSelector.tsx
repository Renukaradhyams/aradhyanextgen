import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Building2, Globe, Settings, DollarSign, User, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const steps = [
  { id: "business", title: "Business Type", icon: Building2, question: "What type of business do you have?",
    options: [
      { value: "startup", label: "Startup / New Business", icon: "🚀" },
      { value: "smb", label: "Small-Medium Business", icon: "🏢" },
      { value: "enterprise", label: "Enterprise / Large Company", icon: "🏛️" },
      { value: "freelancer", label: "Freelancer / Individual", icon: "👤" },
    ] },
  { id: "website", title: "Website Type", icon: Globe, question: "What type of website do you need?",
    options: [
      { value: "landing", label: "Landing Page", icon: "📄" },
      { value: "business", label: "Business Website", icon: "🌐" },
      { value: "ecommerce", label: "E-commerce Store", icon: "🛒" },
      { value: "webapp", label: "Web Application", icon: "⚙️" },
    ] },
  { id: "features", title: "Features Needed", icon: Settings, question: "What features do you need?",
    options: [
      { value: "basic", label: "Basic (Info + Contact)", icon: "📋" },
      { value: "interactive", label: "Interactive (Forms + Chat)", icon: "💬" },
      { value: "advanced", label: "Advanced (Dashboard + API)", icon: "📊" },
      { value: "ai", label: "AI & Automation", icon: "🤖" },
    ] },
  { id: "budget", title: "Project Budget", icon: DollarSign, question: "What's your budget range?",
    options: [
      { value: "starter", label: "₹10K - ₹25K", icon: "💰" },
      { value: "growth", label: "₹25K - ₹50K", icon: "💰💰" },
      { value: "scale", label: "₹50K - ₹1L", icon: "💰💰💰" },
      { value: "enterprise", label: "₹1L+", icon: "💎" },
    ] },
];

const budgetEstimates: Record<string, string> = {
  "starter": "₹10,000 – ₹25,000",
  "growth": "₹25,000 – ₹50,000",
  "scale": "₹50,000 – ₹1,00,000",
  "enterprise": "₹1,00,000+",
};

const labelMap: Record<string, Record<string, string>> = {
  business: { startup: "Startup / New Business", smb: "Small-Medium Business", enterprise: "Enterprise / Large Company", freelancer: "Freelancer / Individual" },
  website: { landing: "Landing Page", business: "Business Website", ecommerce: "E-commerce Store", webapp: "Web Application" },
  features: { basic: "Basic (Info + Contact)", interactive: "Interactive (Forms + Chat)", advanced: "Advanced (Dashboard + API)", ai: "AI & Automation" },
  budget: { starter: "₹10K - ₹25K", growth: "₹25K - ₹50K", scale: "₹50K - ₹1L", enterprise: "₹1L+" },
};

export const SolutionSelector = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [name, setName] = useState("");

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [steps[currentStep].id]: value };
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    else setShowResult(true);
  };

  const progress = ((currentStep + (showResult ? 1 : 0)) / steps.length) * 100;
  const estimate = budgetEstimates[answers.budget] || "Contact for quote";

  const handleWhatsAppRedirect = () => {
    const msg = `Hello Aradhya NextGen,\n\nI used the Smart Solution Finder on your website.\n\nBusiness Type: ${labelMap.business[answers.business] || answers.business}\nWebsite Type: ${labelMap.website[answers.website] || answers.website}\nFeatures Required: ${labelMap.features[answers.features] || answers.features}\nBudget: ${labelMap.budget[answers.budget] || answers.budget}${name ? `\nName: ${name}` : ""}\n\nI would like to discuss this project.`;
    window.open(`https://wa.me/916360076463?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6">
            <Sparkles className="w-4 h-4 text-primary" /><span className="text-sm text-primary font-medium">Smart Solution Finder</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">What Solution Do <span className="gradient-text">You Need?</span></h2>
          <p className="text-muted-foreground">Answer a few quick questions and get a personalized project estimate.</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Step indicators */}
          <div className="flex items-center justify-between mb-8 max-w-md mx-auto">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  i < currentStep || showResult ? "bg-primary text-primary-foreground" : i === currentStep && !showResult ? "bg-primary/20 text-primary border-2 border-primary" : "bg-muted text-muted-foreground"
                }`}>
                  {i < currentStep || showResult ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-1 transition-colors duration-300 ${i < currentStep || showResult ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg">
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Step {currentStep + 1} of {steps.length}</span><span className="font-medium">{steps[currentStep].title}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
                  </div>
                </div>
                <div className="text-center mb-8">
                  <h3 className="font-heading text-xl font-bold text-foreground">{steps[currentStep].question}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {steps[currentStep].options.map((option) => (
                    <motion.button key={option.value} onClick={() => handleSelect(option.value)}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-xl border transition-all text-left group shadow-sm hover:shadow-md ${
                        answers[steps[currentStep].id] === option.value 
                          ? "border-primary bg-primary/5" 
                          : "border-border hover:border-primary/50 bg-background hover:bg-primary/5"
                      }`}>
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
                className="bg-white/80 backdrop-blur-sm p-8 text-center rounded-2xl border border-border shadow-lg">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">Your Project Summary</h3>
                
                <div className="text-left space-y-2 p-4 rounded-xl bg-muted/50 border border-border mb-4">
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Business Type:</span><span className="font-medium">{labelMap.business[answers.business]}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Website Type:</span><span className="font-medium">{labelMap.website[answers.website]}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Features:</span><span className="font-medium">{labelMap.features[answers.features]}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Budget:</span><span className="font-medium">{labelMap.budget[answers.budget]}</span></div>
                </div>

                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Estimated Project Range</p>
                  <div className="text-2xl font-bold font-heading text-primary">{estimate}</div>
                </div>

                <div className="mb-6">
                  <Input placeholder="Your name (optional)" value={name} onChange={e => setName(e.target.value)} className="text-center" />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleWhatsAppRedirect} className="flex-1 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]">
                    Share on WhatsApp<ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-primary/30 hover:border-primary text-foreground" onClick={() => { setCurrentStep(0); setAnswers({}); setShowResult(false); setName(""); }}>Start Over</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
