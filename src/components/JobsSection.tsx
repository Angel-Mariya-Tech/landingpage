import { Button } from "@/components/ui/button";
import { useVacancies } from "@/hooks/useVacancies";
import { JobCard } from "./JobCard";
import { Link } from "react-router-dom";
export const JobsSection = () => {
  const { data: vacancies } = useVacancies();
  return <>
    <section id="jobs" className="py-16 px-4 sm:px-6 lg:px-16 bg-section-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Recently Added Jobs






















        </h2>

        {vacancies && vacancies.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {vacancies.slice(0, 9).map(vacancy => <JobCard key={vacancy.id} vacancy={vacancy} />)}
        </div> : <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No job vacancies available at the moment.</p>
        </div>}

        <div className="text-center mt-12">
          <Link to="/jobs">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              Find More Jobs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </>;
};