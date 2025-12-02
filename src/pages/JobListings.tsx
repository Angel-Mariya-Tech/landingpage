import { JobCard } from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { Grid3x3, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { jobs } from "@/data/jobs";
import { Link, useSearchParams } from "react-router-dom";
import { AzifaFooter } from "@/components/AzifaFooter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const JobListings = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"time" | "salary">("time");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const vacancies = jobs;

  const sortedVacancies = vacancies
    ?.sort((a, b) => {
      if (sortBy === "time") {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      } else {
        // Sort by salary - handle null/negotiable cases
        const salaryA = a.salary && !a.salary.toLowerCase().includes('negotiable')
          ? parseFloat(a.salary.replace(/[^0-9.]/g, ''))
          : 0;
        const salaryB = b.salary && !b.salary.toLowerCase().includes('negotiable')
          ? parseFloat(b.salary.replace(/[^0-9.]/g, ''))
          : 0;
        return salaryB - salaryA;
      }
    });

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Match Home Page */}
      <nav className="relative z-20 border-b border-border backdrop-blur-sm bg-background/80 sticky top-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-xl font-bold">A</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">AZIFA</h2>
            </Link>

            <div className="hidden lg:flex items-center gap-8 text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              <a href="/#cv-upload" className="hover:text-accent transition-colors">Contact Us</a>
              <Link to="/jobs" className="text-accent hover:text-accent/80 transition-colors font-medium">Find Jobs</Link>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
                <a href="/#cv-upload" className="text-muted-foreground hover:text-accent transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </a>
                <Link to="/jobs" className="text-accent font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Find Jobs
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="py-8 bg-section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sort Dropdown */}
          <div className="mb-6">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-12 px-6 rounded-2xl border-border bg-card hover:bg-muted min-w-[140px]">
                    Sort: {sortBy === "time" ? "Recent" : "Salary"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-card border-border">
                  <DropdownMenuRadioGroup value={sortBy} onValueChange={(value) => setSortBy(value as "time" | "salary")}>
                    <DropdownMenuRadioItem value="time" className="cursor-pointer">
                      Most Recent
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="salary" className="cursor-pointer">
                      Highest Salary
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold">
                  All Jobs <span className="text-muted-foreground font-medium">{sortedVacancies?.length || 0}</span>
                </h3>

                <button
                  onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                  className="p-2 rounded-lg bg-card hover:bg-muted transition-colors border border-border"
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
              </div>

              {sortedVacancies && sortedVacancies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {sortedVacancies.map((vacancy) => (
                    <JobCard key={vacancy.id} vacancy={vacancy} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    {"No job vacancies available at the moment."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <AzifaFooter />
    </div>
  );
};

export default JobListings;
