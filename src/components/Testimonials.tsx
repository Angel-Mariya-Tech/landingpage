import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      role: "Hotel Manager",
      quote: "This agency helped me find my dream job in just 2 days! The process was smooth and professional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "San Francisco, CA",
      role: "Software Developer",
      quote: "Outstanding service! They matched me with a startup that perfectly aligned with my skills and values.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      location: "Miami, FL",
      role: "Restaurant Manager",
      quote: "Professional, fast, and caring. They truly understand what job seekers need.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from people who found their dream jobs through us
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
