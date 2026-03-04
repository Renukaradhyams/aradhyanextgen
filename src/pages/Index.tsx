import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { SolutionSelector } from "@/components/home/SolutionSelector";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { FounderSection } from "@/components/home/FounderSection";
import { PricingSection } from "@/components/home/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { FutureFeaturesSection } from "@/components/home/FutureFeaturesSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Aradhya NextGen Technologies - Next-Gen Web & AI Solutions</title>
        <meta name="description" content="Build fast, scalable, and conversion-focused websites with Aradhya NextGen Technologies. We specialize in React development, AI solutions, and digital transformation." />
        <meta name="keywords" content="web development, React websites, AI automation, cloud platforms, digital transformation, India" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aradhyanextgen.lovable.app/" />
        <meta property="og:title" content="Aradhya NextGen Technologies - From Idea to Online Presence" />
        <meta property="og:description" content="Next-generation web development company. Build fast, scalable React websites that convert visitors into customers." />
        <meta property="og:site_name" content="Aradhya NextGen Technologies" />
        <meta property="og:locale" content="en_IN" />
        
        <link rel="canonical" href="https://aradhyanextgen.lovable.app/" />
      </Helmet>
      
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <SolutionSelector />
      <ServicesPreview />
      <ComparisonSection />
      <ProcessSection />
      <TechStackSection />
      <CaseStudiesSection />
      <FounderSection />
      <FutureFeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
