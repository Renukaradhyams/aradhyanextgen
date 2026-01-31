import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const quickQuestions = [
  "What services do you offer?",
  "How much does a website cost?",
  "How long does development take?",
  "Do you offer AI solutions?",
];

const responses: Record<string, string> = {
  "what services do you offer?": "We offer comprehensive digital solutions including:\n\n• **Web Development** - React-based websites and web apps\n• **AI & Automation** - Custom AI solutions and workflow automation\n• **Cloud Services** - Deployment, hosting, and scaling\n• **MVP Development** - Fast startup product launches\n\nWould you like to know more about any specific service?",
  "how much does a website cost?": "Our pricing is tailored to your needs:\n\n• **Starter Sites** - ₹15,000 - ₹40,000 (Landing pages, portfolios)\n• **Business Sites** - ₹40,000 - ₹1,00,000 (Multi-page, CMS)\n• **Custom Solutions** - ₹1,00,000+ (E-commerce, platforms)\n\nWe offer flexible payment plans. Would you like a free quote?",
  "how long does development take?": "Project timelines vary based on complexity:\n\n• **Landing Pages** - 1-2 weeks\n• **Business Websites** - 2-4 weeks\n• **E-commerce/Custom** - 4-8 weeks\n• **Full Platforms** - 8-16 weeks\n\nWe follow an agile process with regular updates. Want to discuss your project timeline?",
  "do you offer ai solutions?": "Yes! Our AI solutions include:\n\n• **AI Chatbots** - Like me! Custom trained for your business\n• **Automation** - Workflow optimization and task automation\n• **Data Analysis** - Insights and predictive analytics\n• **AI Integration** - Adding AI to existing systems\n\nWant to explore how AI can transform your business?",
};

const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase().trim();
  
  for (const [key, value] of Object.entries(responses)) {
    if (lowerMessage.includes(key.split(" ").slice(0, 3).join(" "))) {
      return value;
    }
  }
  
  if (lowerMessage.includes("hi") || lowerMessage.includes("hello")) {
    return "Hello! 👋 I'm the Aradhya AI assistant. I can help you learn about our services, pricing, and how we can help your business grow digitally. What would you like to know?";
  }
  
  if (lowerMessage.includes("contact") || lowerMessage.includes("talk") || lowerMessage.includes("call")) {
    return "You can reach us through:\n\n📧 **Email:** hello@aradhyanextgen.com\n📱 **WhatsApp:** Click the green button below\n📞 **Phone:** +91 XXXXXXXXXX\n\nOr fill out our contact form for a detailed consultation!";
  }
  
  return "Thanks for your message! I'm here to help with questions about:\n\n• Our services and solutions\n• Pricing and timelines\n• Technology stack\n• Getting started\n\nFeel free to ask anything, or click a quick question above!";
};

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! 👋 I'm **Aradhya AI**, your digital growth assistant. How can I help you today?\n\nYou can ask me about our services, pricing, or how we can help your business!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(messageText);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 500);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-lg flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 20 : 0, pointerEvents: isOpen ? "none" : "auto" }}
        transition={{ duration: 0.2 }}
      >
        <Bot className="w-6 h-6" />
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-cyan-500/30"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] rounded-2xl bg-card/95 backdrop-blur-xl border border-border shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-gradient-to-r from-cyan-500/10 to-violet-500/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Aradhya AI</h3>
                    <p className="text-xs text-muted-foreground">Digital Growth Assistant</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-muted rounded-bl-md"
                      }`}
                    >
                      <div 
                        className="whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{
                          __html: message.content
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                            .replace(/\n/g, "<br />")
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Quick Questions */}
            <div className="px-4 py-2 border-t border-border/50">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {quickQuestions.map((question, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(question)}
                    className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1"
                  >
                    {question}
                    <ChevronRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-muted/50 border-0 focus-visible:ring-1"
                />
                <Button type="submit" size="icon" className="shrink-0" disabled={!input.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};