import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Target, Users, Award, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-border backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Logo />
              <h2 className="text-2xl font-bold tracking-tight">Angel Mariya</h2>
            </div>
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Angel Mariya</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your trusted partner in connecting talented individuals with exceptional career opportunities. We are Angel Mariya Job Consultancy.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-16 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between job seekers and employers by providing a seamless, efficient platform that empowers individuals to find their dream careers while helping businesses discover the perfect talent to drive their success.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading job placement agency recognized for our commitment to excellence, innovation, and personalized service. We envision a future where every job seeker finds meaningful employment and every employer finds the ideal candidate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 sm:px-6 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialize in connecting job seekers with top employers across various industries
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Job Placement</h3>
              <p className="text-muted-foreground">
                We match qualified candidates with suitable positions across multiple industries, ensuring the right fit for both parties.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Guidance</h3>
              <p className="text-muted-foreground">
                Our team provides personalized career counseling to help job seekers make informed decisions about their professional journey.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Employer Solutions</h3>
              <p className="text-muted-foreground">
                We help businesses find the right talent quickly and efficiently, saving time and resources in the recruitment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-16 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Angel Mariya?</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Industry Expertise</h3>
                <p className="text-muted-foreground">
                  With years of experience in job placement, we understand the nuances of various industries and can provide valuable insights.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Personalized Service</h3>
                <p className="text-muted-foreground">
                  We take the time to understand your unique needs and preferences, ensuring a tailored approach to job placement.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Extensive Network</h3>
                <p className="text-muted-foreground">
                  Our strong relationships with top employers give you access to exclusive job opportunities not available elsewhere.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Our commitment doesn't end with placement. We provide continuous support to ensure long-term career success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of job seekers who have found their dream careers with Angel Mariya Job Consultancy
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Explore Opportunities
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
