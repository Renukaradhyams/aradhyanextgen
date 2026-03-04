import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getActiveTestimonials, testimonialSettings } from "@/config/testimonialsConfig";

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
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [autoPlay, testimonials.length]);

  const next = () => { setAutoPlay(false); setCurrent((prev) => (prev + 1) % testimonials.length); };
  const prev = () => { setAutoPlay(false); setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length); };

  return (
    <section className="py-28 relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(145_70%_45%/0.04),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-muted-foreground">Don't just take our word for it — hear from businesses we've helped.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }}>
              <div className="glass-card p-8 md:p-12 border border-border/50">
                <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-medium text-center">
                  "{testimonials[current].content}"
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-semibold">{testimonials[current].name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[current].role}{testimonials[current].company && `, ${testimonials[current].company}`}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full border-border hover:border-primary">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => { setAutoPlay(false); setCurrent(index); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === current ? "bg-primary w-8" : "bg-muted-foreground/30 w-1.5"}`} />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full border-border hover:border-primary">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
