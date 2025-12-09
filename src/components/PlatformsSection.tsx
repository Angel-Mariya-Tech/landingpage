import { Megaphone, Code, Palette, Users, Shield, Briefcase, Users2, Building2 } from "lucide-react";
const platforms = [{
  icon: Megaphone,
  name: "Marketing",
  jobs: 58
}, {
  icon: Code,
  name: "Development",
  jobs: 48
}, {
  icon: Palette,
  name: "UI/UX Design",
  jobs: 78
}, {
  icon: Users,
  name: "Human Research",
  jobs: 120
}, {
  icon: Shield,
  name: "Security",
  jobs: 90
}, {
  icon: Briefcase,
  name: "Business",
  jobs: 31
}, {
  icon: Users2,
  name: "Management",
  jobs: 52
}, {
  icon: Building2,
  name: "Finance",
  jobs: 80
}];
export const PlatformsSection = () => {
  return <section className="py-16 px-4 sm:px-6 lg:px-16 bg-background">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-accent">Our Job Solutions</h2>
          <a href="#" className="text-accent hover:text-accent/80 font-medium hidden sm:block transition-colors">
            See All Platform
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return <div key={index} className="flex items-center gap-4 p-4 rounded-lg border bg-section-dark border-border hover:bg-accent hover:text-accent-foreground hover:shadow-lg transition-all duration-300 group">
                <div className="p-3 rounded-full bg-muted group-hover:bg-primary transition-colors">
                  <Icon className="text-accent group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-accent-foreground transition-colors">
                    {platform.name}
                  </p>
                  <p className="text-sm text-muted-foreground group-hover:opacity-80 transition-opacity">
                    {platform.jobs} Jobs Available
                  </p>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};