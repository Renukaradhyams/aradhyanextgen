import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getActiveTestimonials, testimonialSettings } from "@/config/testimonialsConfig";
import { Card3D } from "@/components/ui/Card3D";
import { Mesh3DBackground } from "@/components/ui/Mesh3DBackground";

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const testimonials = getActiveTestimonials();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!autoPlay) return;
    
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, testimonialSettings.autoSlideInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, testimonials.length]);

  const next = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const glowColors: ("cyan" | "violet" | "primary")[] = ["cyan", "violet", "primary"];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 3D Background */}
      <Mesh3DBackground variant="subtle" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it — hear from businesses we've helped.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Card3D 
                glowColor={glowColors[current % glowColors.length]} 
                intensity="medium"
              >
                <div className="p-8 md:p-12">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                    current % 3 === 0 ? "bg-cyan-500/20 border border-cyan-500/30" :
                    current % 3 === 1 ? "bg-violet-500/20 border border-violet-500/30" :
                    "bg-primary/20 border border-primary/30"
                  }`}>
                    <Quote className={`w-8 h-8 ${
                      current % 3 === 0 ? "text-cyan-400" :
                      current % 3 === 1 ? "text-violet-400" : "text-primary"
                    }`} />
                  </div>
                  
                  <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-medium text-center italic">
                    "{testimonials[current].content}"
                  </p>

                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Client info */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-primary/30 flex items-center justify-center">
                      <span className={`font-bold text-lg ${
                        current % 3 === 0 ? "text-cyan-400" :
                        current % 3 === 1 ? "text-violet-400" : "text-primary"
                      }`}>
                        {testimonials[current].name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-heading font-semibold text-lg">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonials[current].role}
                        {testimonials[current].company && `, ${testimonials[current].company}`}
                      </p>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-primary/30 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoPlay(false);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-gradient-to-r from-cyan-500 to-violet-500 w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-primary/30 hover:border-violet-400 hover:bg-violet-500/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};