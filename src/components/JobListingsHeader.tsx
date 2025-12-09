import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const JobListingsHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/75 supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Logo />
            <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Angel Mariya
            </h2>
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open("https://forms.gle/YpdWtMgbuj4E7cpH9", "_blank")}
            >
              Contact Us
            </Button>
            <Link to="/staff/login">
              <Button variant="outline" size="sm">Staff Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
