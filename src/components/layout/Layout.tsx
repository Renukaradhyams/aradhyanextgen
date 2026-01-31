import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { PageTransition } from "./PageTransition";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { AIAssistant } from "@/components/ai/AIAssistant";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  // Scroll to top on route change
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <AIAssistant />
    </div>
  );
};
