import { Logo } from "./Logo";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/#contact" }
  ],
  jobs: [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Apply Now", href: "/#cv-upload" }
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" }
  ],
};

export const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    if (href.startsWith("/#")) {
      // Handle anchor links
      const id = href.replace("/#", "");
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Handle regular navigation
      navigate(href);
    }
  };

  return (
    <footer className="pt-16 pb-8 px-4 sm:px-6 lg:px-16 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="font-bold text-2xl tracking-tight">Angel Mariya</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting Talent with Opportunity
            </p>
          </div>
          <div className="text-muted-foreground space-y-3">
            <h3 className="font-semibold text-foreground mb-3">Company</h3>
            {footerLinks.company.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="block hover:text-accent transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="text-muted-foreground space-y-3">
            <h3 className="font-semibold text-foreground mb-3">Jobs</h3>
            {footerLinks.jobs.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="block hover:text-accent transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="text-muted-foreground space-y-3">
            <h3 className="font-semibold text-foreground mb-3">Legal</h3>
            {footerLinks.legal.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="block hover:text-accent transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button onClick={() => navigate("/terms")} className="hover:text-accent transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => navigate("/privacy")} className="hover:text-accent transition-colors">
              Privacy Policy
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            ©Copyright Angel Mariya Job Consultancy. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
