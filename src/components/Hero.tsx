import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AngelWings } from "./AngelWings";

export const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    // Replace with your WhatsApp number
    window.open("https://wa.me/919562789498", "_blank");
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-background">
        {/* Multiple gradient orbs - responsive sizes */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-accent/15 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-[175px] h-[175px] md:w-[350px] md:h-[350px] bg-primary/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '3s' }} />

        {/* Animated gradient mesh overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, transparent 50%, hsl(var(--accent) / 0.1) 100%)',
        }} />

        {/* Dotted grid pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px), radial-gradient(hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }} />

        {/* Decorative animated shapes - hidden on mobile for cleaner look */}
        <div className="hidden md:block absolute top-32 left-[5%] w-16 h-16 border-2 border-primary/30 rounded-lg rotate-12 animate-[spin_20s_linear_infinite]" />
        <div className="hidden md:block absolute top-24 right-[8%] w-12 h-12 border-2 border-primary/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        <div className="hidden md:block absolute top-[60%] right-[5%] w-14 h-14 border-2 border-accent/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="hidden md:block absolute top-[70%] left-[10%] w-12 h-12 border-2 border-accent/20 rounded-lg rotate-45 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="hidden md:block absolute top-[45%] left-[7%] w-8 h-8 bg-primary/20 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
        <div className="hidden md:block absolute top-[55%] right-[12%] w-6 h-6 bg-accent/20 rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />

        {/* Floating lines */}
        <div className="absolute top-[35%] left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[slide-right_8s_ease-in-out_infinite]" />
        <div className="absolute top-[65%] right-0 w-40 h-px bg-gradient-to-l from-transparent via-accent/30 to-transparent animate-[slide-left_10s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        
        {/* Angel wings background */}
        <AngelWings />
      </div>

      <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/75 supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Left section - Logo */}
            <div className="flex items-center gap-2 cursor-pointer lg:flex-1" onClick={() => scrollToSection("hero")}>
              <Logo />
              <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Angel Mariya
              </h2>
            </div>

            {/* Center section - Nav links */}
            <div className="hidden lg:flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
              <button onClick={() => scrollToSection("hero")} className="px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 text-foreground">Home</button>
              <button onClick={() => scrollToSection("platforms")} className="px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">Solutions</button>
              <button onClick={() => scrollToSection("jobs")} className="px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">Find Jobs</button>
              <button onClick={() => scrollToSection("testimonials")} className="px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">Testimonials</button>
            </div>

            {/* Right section - Contact button + Mobile menu */}
            <div className="flex items-center justify-end gap-3 lg:flex-1">
              <Button
                variant="default"
                size="sm"
                className="hidden lg:inline-flex"
                onClick={() => window.open("https://forms.gle/YpdWtMgbuj4E7cpH9", "_blank")}
              >
                Contact Us
              </Button>
              <button
                className="lg:hidden p-2 hover:bg-accent/10 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl animate-in slide-in-from-top-5 duration-200">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              <button onClick={() => scrollToSection("hero")} className="text-left px-4 py-3 rounded-xl bg-primary/5 text-primary font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection("platforms")} className="text-left px-4 py-3 rounded-xl hover:bg-accent/5 hover:text-accent transition-colors font-medium text-muted-foreground">Solutions</button>
              <button onClick={() => scrollToSection("jobs")} className="text-left px-4 py-3 rounded-xl hover:bg-accent/5 hover:text-accent transition-colors font-medium text-muted-foreground">Find Jobs</button>
              <button onClick={() => scrollToSection("testimonials")} className="text-left px-4 py-3 rounded-xl hover:bg-accent/5 hover:text-accent transition-colors font-medium text-muted-foreground">Testimonials</button>
              <button 
                onClick={() => {
                  window.open("https://forms.gle/YpdWtMgbuj4E7cpH9", "_blank");
                  setMobileMenuOpen(false);
                }} 
                className="text-left px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-colors mt-2"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="relative inline-block mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get The Right Job <br />
            <span className="text-accent">You Deserve</span>
          </h1>
        </div>

        <p className="text-muted-foreground mt-3 mb-6 md:mt-4 md:mb-8 text-base md:text-lg">
          1,80,570 jobs listed here! Your dream job is waiting.
        </p>

        <div className="max-w-3xl mx-auto relative">
          <Button
            size="lg"
            onClick={openWhatsApp}
            className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white border-none hover:opacity-90 font-bold w-full md:w-auto text-lg py-6 px-8 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-1 transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-2 group"
          >
            <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>Connect on WhatsApp</span>
          </Button>
        </div>

        {/* Popular searches and stats */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-xs md:text-sm">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-muted-foreground">Popular:</span>
            <div className="flex flex-wrap gap-2 justify-center">
              <button className="px-2.5 py-1 md:px-3 rounded-full bg-card border border-border hover:border-primary transition-colors text-foreground text-xs md:text-sm">
                Designer
              </button>
              <button className="px-2.5 py-1 md:px-3 rounded-full bg-card border border-border hover:border-primary transition-colors text-foreground text-xs md:text-sm">
                Developer
              </button>
              <button className="px-2.5 py-1 md:px-3 rounded-full bg-card border border-border hover:border-primary transition-colors text-foreground text-xs md:text-sm">
                Marketing
              </button>
              <button className="px-2.5 py-1 md:px-3 rounded-full bg-card border border-border hover:border-primary transition-colors text-foreground text-xs md:text-sm">
                Manager
              </button>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-5 md:mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-muted-foreground text-xs md:text-sm">
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span><span className="text-foreground font-semibold">2,547</span> new jobs today</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span><span className="text-foreground font-semibold">1,200+</span> companies hiring</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span><span className="text-foreground font-semibold">50k+</span> candidates placed</span>
          </div>
        </div>
      </div>
    </section>
  );
};
