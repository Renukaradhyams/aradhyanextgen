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
        <title>Aradhya NextGen - Next-Gen Web Solutions | React Development</title>
        <meta name="description" content="Build fast, scalable, and conversion-focused websites with Aradhya NextGen. We specialize in React development, AI solutions, and digital transformation for startups and businesses." />
        <meta name="keywords" content="web development, React websites, startup website, business website, landing page, website redesign, India" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aradhyanextgen.lovable.app/" />
        <meta property="og:title" content="Aradhya NextGen - From Idea to Online Presence" />
        <meta property="og:description" content="Next-generation web development company. Build fast, scalable React websites that convert visitors into customers." />
        <meta property="og:image" content="https://aradhyanextgen.lovable.app/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://aradhyanextgen.lovable.app/" />
        <meta name="twitter:title" content="Aradhya NextGen - From Idea to Online Presence" />
        <meta name="twitter:description" content="Next-generation web development company. Build fast, scalable React websites that convert visitors into customers." />
        <meta name="twitter:image" content="https://aradhyanextgen.lovable.app/og-image.png" />
        
        {/* WhatsApp specific */}
        <meta property="og:site_name" content="Aradhya NextGen" />
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
