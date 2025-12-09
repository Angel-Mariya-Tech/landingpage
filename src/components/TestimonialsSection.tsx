import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    location: "Dubai, UAE",
    text: "Angel Mariya helped me find my dream job in Dubai. The process was smooth and they guided me through every step. Very thankful for their support!",
    author: "Arun Kumar",
    role: "Construction Supervisor",
    initials: "AK",
  },
  {
    id: 2,
    location: "Saudi Arabia",
    text: "I was worried about finding a good job abroad, but Angel Mariya made it so easy. They found me a perfect position within weeks. Highly recommended!",
    author: "Sreeja Nair",
    role: "Staff Nurse",
    initials: "SN",
  },
  {
    id: 3,
    location: "Qatar",
    text: "Best agency in Kerala! They helped me get a well-paying job in Qatar. The team is very professional and caring. God bless Angel Mariya!",
    author: "Vijayan Pillai",
    role: "Electrician",
    initials: "VP",
  },
  {
    id: 4,
    location: "Kuwait",
    text: "After trying many agencies, I found Angel Mariya. They were honest and transparent throughout. Now I am happily working in Kuwait. Thank you!",
    author: "Lakshmi Menon",
    role: "Housekeeping Staff",
    initials: "LM",
  },
  {
    id: 5,
    location: "Oman",
    text: "Angel Mariya is truly a blessing. They helped my whole family find jobs in the Gulf. Their service is genuine and trustworthy.",
    author: "Suresh Babu",
    role: "Driver",
    initials: "SB",
  },
  {
    id: 6,
    location: "Bahrain",
    text: "I got my visa and job within one month. Angel Mariya team is very helpful and they follow up regularly. Best agency for Gulf jobs!",
    author: "Priya Thomas",
    role: "Sales Executive",
    initials: "PT",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-2 sm:px-6 lg:px-16 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-accent">
            Review of People <br className="hidden md:block" /> Who Have Found Jobs
          </h2>
          <div className="flex items-center gap-4">
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
        </div>
        
        {/* Mobile: Single card carousel */}
        <div className="md:hidden overflow-hidden">
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
        
        {/* Desktop: Grid view */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-section-dark p-6 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <p className="font-bold text-lg text-foreground">{testimonial.location}</p>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">"{testimonial.text}"</p>
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
      </div>
    </section>
  );
};
