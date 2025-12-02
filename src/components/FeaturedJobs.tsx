import { Button } from "@/components/ui/button";
import { jobs } from "@/data/jobs";
import { JobCard } from "./JobCard";

export const FeaturedJobs = () => {
  const vacancies = jobs;

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-16 bg-section-dark animate-fade-in">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Recently Added Jobs</h2>

          {vacancies && vacancies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {vacancies.slice(0, 6).map((vacancy) => (
                <JobCard key={vacancy.id} vacancy={vacancy} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No job vacancies available at the moment.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" asChild>
              <a href="/jobs">View All Jobs</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
