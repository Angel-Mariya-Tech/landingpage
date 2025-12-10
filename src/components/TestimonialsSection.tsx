import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, TouchEvent } from "react";

const testimonials = [
  {
    id: 1,
    location: "Kochi, Kerala",
    text: "Angel Mariya helped me find a great job at a hospital in Ernakulam. The team was very supportive and guided me through the entire process. Very thankful!",
    author: "Arun Kumar",
    role: "Hospital Staff",
    initials: "AK",
  },
  {
    id: 2,
    location: "Thiruvananthapuram",
    text: "I was searching for a job for months. Angel Mariya found me a perfect position in a hotel within two weeks. Highly recommended for anyone in Kerala!",
    author: "Sreeja Nair",
    role: "Receptionist",
    initials: "SN",
  },
  {
    id: 3,
    location: "Kozhikode, Kerala",
    text: "Best agency in Kerala! They helped me get a well-paying job at a supermarket. The team is very professional and caring. God bless Angel Mariya!",
    author: "Vijayan Pillai",
    role: "Store Supervisor",
    initials: "VP",
  },
  {
    id: 4,
    location: "Thrissur, Kerala",
    text: "After trying many agencies, I found Angel Mariya. They were honest and transparent throughout. Now I am happily working at a restaurant. Thank you!",
    author: "Lakshmi Menon",
    role: "Kitchen Helper",
    initials: "LM",
  },
  {
    id: 5,
    location: "Kannur, Kerala",
    text: "Angel Mariya is truly a blessing. They helped me find a driver job near my hometown. Their service is genuine and trustworthy.",
    author: "Suresh Babu",
    role: "Driver",
    initials: "SB",
  },
  {
    id: 6,
    location: "Alappuzha, Kerala",
    text: "I got my job within one week. Angel Mariya team is very helpful and they follow up regularly. Best agency for jobs in Kerala!",
    author: "Priya Thomas",
    role: "Sales Staff",
    initials: "PT",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (isDesktop: boolean) => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - go next
        isDesktop ? nextDesktop() : nextTestimonial();
      } else {
        // Swiped right - go prev
        isDesktop ? prevDesktop() : prevTestimonial();
      }
    }
  };

  // For desktop, show 2 cards at a time
  const desktopMaxIndex = Math.ceil(testimonials.length / 2) - 1;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextDesktop = () => {
    setCurrentIndex((prev) => (prev >= desktopMaxIndex ? 0 : prev + 1));
  };

  const prevDesktop = () => {
    setCurrentIndex((prev) => (prev <= 0 ? desktopMaxIndex : prev - 1));
  };

  // Get 2 testimonials for desktop view
  const getDesktopTestimonials = () => {
    const startIndex = currentIndex * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="py-16 px-2 sm:px-6 lg:px-16 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-accent">
            Review of People <br className="hidden md:block" /> Who Have Found Jobs
          </h2>
          <div className="flex items-center gap-4">
            {/* Mobile navigation */}
            <div className="flex md:hidden items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full border-border hover:bg-secondary"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full border-border hover:bg-secondary"
                onClick={nextTestimonial}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full border-border hover:bg-secondary"
                onClick={prevDesktop}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full border-border hover:bg-secondary"
                onClick={nextDesktop}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile: Single card carousel */}
        <div 
          className="md:hidden overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => handleTouchEnd(false)}
        >
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-1">
                <div className="bg-section-dark p-6 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <p className="font-bold text-lg text-foreground">{testimonial.location}</p>
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop: 2 cards carousel */}
        <div 
          className="hidden md:block"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => handleTouchEnd(true)}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {getDesktopTestimonials().map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-section-dark p-6 rounded-xl border border-border animate-fade-in"
              >
                <div className="flex items-center gap-3 mb-4">
                  <p className="font-bold text-lg text-foreground">{testimonial.location}</p>
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: desktopMaxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
