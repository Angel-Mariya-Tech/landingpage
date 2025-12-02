import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    company: "Mailchimp",
    text: "I can't thank JobSearchPro enough for connecting me with the perfect software engineering job. The job matching algorithm is spot on, and the job alerts kept me updated on new opportunities. It's a game-changer for anyone in the tech industry.",
    author: "Ibrahim Hamza",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    company: "Tech Solutions",
    text: "I can't thank JobSearchPro enough for connecting me with the perfect software engineering job. The job matching algorithm is spot on, and the job alerts kept me updated on new opportunities. It's a game-changer for anyone in the tech industry.",
    author: "Ibrahim Hamza",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/150?img=13",
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
                    <p className="font-bold text-lg text-foreground">{testimonial.company}</p>
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full"
                      />
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
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-section-dark p-6 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <p className="font-bold text-lg text-foreground">{testimonial.company}</p>
              </div>
              <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
