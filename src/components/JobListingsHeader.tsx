import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export const JobListingsHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-section-dark border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold">
              Job<span className="text-primary">Connect</span>
            </h2>
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
          </div>

          <div className="flex items-center gap-3">
            <Link to="/staff/login">
              <Button variant="hero">Staff Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
