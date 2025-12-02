import { jobs } from "@/data/jobs";
import { JobCard } from "./JobCard";

export const TrendingJobs = () => {
  const vacancies = jobs;

  return (
    <>
      <section id="jobs" className="py-16 px-4 sm:px-6 lg:px-16 bg-section-dark animate-fade-in">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-accent">Trending Jobs</h2>
            <a href="/jobs" className="text-accent hover:text-accent/80 font-medium transition-colors">
              See All Jobs
            </a>
          </div>

          {vacancies && vacancies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vacancies.slice(0, 3).map((vacancy) => (
                <JobCard key={vacancy.id} vacancy={vacancy} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No trending jobs available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
