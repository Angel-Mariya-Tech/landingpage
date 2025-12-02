import { UserPlus, Search, CalendarCheck, Briefcase } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Register / Contact Us",
      description: "Fill out our simple form or reach out directly"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "We Match You",
      description: "Our team finds the perfect employer for your skills"
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Attend Interview",
      description: "We schedule and prepare you for the interview"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Get Hired",
      description: "Start your new career journey with confidence"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to your dream job
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 text-center group h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <div className="text-primary group-hover:text-primary-foreground">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
