import { CheckCircle2, Users, Zap, Shield } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "100+ Employers Partnered",
      description: "Connected with top companies"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Job Matching",
      description: "Get placed within 24 hours"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Hidden Charges",
      description: "Transparent and honest service"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-primary">Our Agency</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a dedicated consulting agency that bridges the gap between talented job seekers 
            and trusted employers. Our mission is to help you find the right opportunity that matches 
            your skills, aspirations, and lifestyle needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
