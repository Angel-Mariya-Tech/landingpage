import { JobCard } from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Grid3x3, Menu, X, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import { useVacancies } from "@/hooks/useVacancies";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const ITEMS_PER_PAGE = 20;

const JobListings = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"time" | "salary">("time");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: vacancies } = useVacancies();

  const filteredVacancies = vacancies?.filter((vacancy) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      vacancy.job_title?.toLowerCase().includes(query) ||
      vacancy.job_providers?.name?.toLowerCase().includes(query) ||
      vacancy.job_providers?.location?.toLowerCase().includes(query) ||
      vacancy.job_providers?.industry?.toLowerCase().includes(query)
    );
  });

  const sortedVacancies = filteredVacancies
    ?.sort((a, b) => {
      if (sortBy === "time") {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      } else {
        const salaryA = a.salary && !a.salary.toLowerCase().includes('negotiable')
          ? parseFloat(a.salary.replace(/[^0-9.]/g, ''))
          : 0;
        const salaryB = b.salary && !b.salary.toLowerCase().includes('negotiable')
          ? parseFloat(b.salary.replace(/[^0-9.]/g, ''))
          : 0;
        return salaryB - salaryA;
      }
    });

  const totalPages = Math.ceil((sortedVacancies?.length || 0) / ITEMS_PER_PAGE);
  const currentVacancies = sortedVacancies?.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header - Match Home Page */}
      <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/75 supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Logo />
              <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Angel Mariya
              </h2>
            </Link>

            <div className="hidden lg:flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
              <Link to="/" className="px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">Home</Link>
              <Link to="/about" className="px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">About Us</Link>
              <Link to="/jobs" className="px-4 py-2 rounded-full bg-primary/10 text-primary transition-all duration-300">Find Jobs</Link>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="default"
                size="sm"
                className="hidden lg:inline-flex"
                onClick={() => window.open("https://forms.gle/cidyXkqgpMXQFSxu9", "_blank")}
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl animate-in slide-in-from-top-5 duration-200">
              <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
                <Link to="/" className="text-left px-4 py-3 rounded-xl hover:bg-accent/5 hover:text-accent transition-colors font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/about" className="text-left px-4 py-3 rounded-xl hover:bg-accent/5 hover:text-accent transition-colors font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
                <Link to="/jobs" className="text-left px-4 py-3 rounded-xl bg-primary/5 text-primary font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Find Jobs
                </Link>
                <button
                  onClick={() => {
                    window.open("https://forms.gle/cidyXkqgpMXQFSxu9", "_blank");
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-colors mt-2"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="py-8 bg-section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Sort */}
          <div className="mb-6">
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 justify-between items-center">
              {/* Search Input */}
              <div className="relative w-full flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search jobs, companies, locations..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="h-12 pl-11 pr-4 rounded-2xl border-border bg-card"
                />
              </div>

              {/* Sort Dropdown */}
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

              {currentVacancies && currentVacancies.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {currentVacancies.map((vacancy) => (
                      <JobCard key={vacancy.id} vacancy={vacancy} />
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="h-10 w-10 rounded-lg"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>

                      {(() => {
                        const getVisiblePages = (current: number, total: number) => {
                          if (total <= 7) {
                            return Array.from({ length: total }, (_, i) => i + 1);
                          }

                          const pages: (number | null)[] = [1];

                          if (current > 3) {
                            pages.push(null);
                          }

                          const start = Math.max(2, current - 1);
                          const end = Math.min(total - 1, current + 1);

                          for (let i = start; i <= end; i++) {
                            pages.push(i);
                          }

                          if (current < total - 2) {
                            pages.push(null);
                          }

                          if (total > 1) {
                            pages.push(total);
                          }

                          return pages;
                        };

                        return getVisiblePages(currentPage, totalPages).map((page, index) => (
                          page === null ? (
                            <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">...</span>
                          ) : (
                            <Button
                              key={page}
                              variant={currentPage === page ? "default" : "outline"}
                              onClick={() => handlePageChange(page)}
                              className={`h-10 w-10 rounded-lg ${currentPage === page ? "bg-primary text-primary-foreground" : ""}`}
                            >
                              {page}
                            </Button>
                          )
                        ));
                      })()}

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="h-10 w-10 rounded-lg"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
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

      <Footer />
    </div>
  );
};

export default JobListings;
