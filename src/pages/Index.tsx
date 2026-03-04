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
        <title>Aradhya NextGen Technologies | Web, AI & Cloud Solutions</title>
        <meta name="description" content="We build scalable web platforms, AI automation systems, and cloud solutions for startups and enterprises in Bangalore, India." />
        <meta name="keywords" content="web development, React websites, AI automation, cloud platforms, digital transformation, Bangalore, India" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aradhyanextgen.lovable.app/" />
        <meta property="og:title" content="Aradhya NextGen Technologies | Web, AI & Cloud Solutions" />
        <meta property="og:description" content="We build scalable web platforms, AI automation systems, and cloud solutions for startups and enterprises." />
        <meta property="og:site_name" content="Aradhya NextGen Technologies" />
        <meta property="og:locale" content="en_IN" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aradhya NextGen Technologies | Web, AI & Cloud Solutions" />
        <meta name="twitter:description" content="We build scalable web platforms, AI automation systems, and cloud solutions." />
        
        <link rel="canonical" href="https://aradhyanextgen.lovable.app/" />
        
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Aradhya NextGen Technologies",
          "url": "https://aradhyanextgen.lovable.app",
          "logo": "https://aradhyanextgen.lovable.app/logo.png",
          "description": "Web development, AI automation, and cloud solutions company based in Bangalore, India.",
          "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressCountry": "IN" },
          "contactPoint": { "@type": "ContactPoint", "telephone": "+91-6360076463", "contactType": "sales" }
        })}</script>
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
