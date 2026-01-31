import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getActiveTestimonials, testimonialSettings } from "@/config/testimonialsConfig";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import bgTestimonials from "@/assets/bg-testimonials.jpg";

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

  return (
    <AnimatedBackground
      imageSrc={bgTestimonials}
      overlayOpacity={0.9}
      parallaxStrength={30}
      className="py-24"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
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
              className="relative"
            >
              {/* Glass card with gradient border */}
              <div className="gradient-border rounded-2xl">
                <div className="glass-card p-8 md:p-12 rounded-2xl backdrop-blur-xl border border-white/10">
                  <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
                  
                  <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-medium text-center">
                    "{testimonials[current].content}"
                  </p>

                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Client info with avatar */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {testimonials[current].name.charAt(0)}
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
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
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
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
};
