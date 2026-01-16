import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Vacancy } from "@/hooks/useVacancies";
import { useState, useMemo } from "react";
import { JobDetailsModal } from "./JobDetailsModal";

interface JobCardProps {
  vacancy: Vacancy;
}

const cardColors = [
  { bg: "bg-gradient-to-br from-orange-50 to-orange-100", badge: "bg-orange-200 text-orange-800", text: "text-orange-900/70" },
  { bg: "bg-gradient-to-br from-emerald-50 to-emerald-100", badge: "bg-emerald-200 text-emerald-800", text: "text-emerald-900/70" },
  { bg: "bg-gradient-to-br from-blue-50 to-blue-100", badge: "bg-blue-200 text-blue-800", text: "text-blue-900/70" },
  { bg: "bg-gradient-to-br from-purple-50 to-purple-100", badge: "bg-purple-200 text-purple-800", text: "text-purple-900/70" },
  { bg: "bg-gradient-to-br from-pink-50 to-pink-100", badge: "bg-pink-200 text-pink-800", text: "text-pink-900/70" },
];

export const JobCard = ({ vacancy }: JobCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Use useMemo to keep consistent color for each card
  const colorScheme = useMemo(() => {
    const index = parseInt(vacancy.id) % cardColors.length;
    return cardColors[index];
  }, [vacancy.id]);

  const handleApply = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open("https://forms.gle/cidyXkqgpMXQFSxu9", "_blank");
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        className={`${colorScheme.bg} p-6 rounded-3xl flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-border/10 cursor-pointer`}
        onClick={handleCardClick}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <p className={`text-xs ${colorScheme.text} font-medium`}>
              Actively Hiring
            </p>
            <h4 className="text-xl font-bold mt-2 text-foreground">
              {vacancy.job_title}
            </h4>
          </div>
          <div className="text-foreground/60">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {vacancy.job_providers?.industry && (
            <span className={`${colorScheme.badge} px-3 py-1 rounded-full text-xs font-medium`}>
              {vacancy.job_providers.industry}
            </span>
          )}
          <span className={`${colorScheme.badge} px-3 py-1 rounded-full text-xs font-medium`}>
            {vacancy.openings} {vacancy.openings === 1 ? 'opening' : 'openings'}
          </span>
        </div>

        <div className="mt-auto">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="font-bold text-xl text-foreground">
                {vacancy.salary || 'Negotiable'}
                {vacancy.salary && vacancy.salary_type && !vacancy.salary.toLowerCase().includes('negotiable') && (
                  <span className="text-sm font-normal text-muted-foreground">/{vacancy.salary_type}</span>
                )}
              </p>
              <p className="text-sm text-muted-foreground flex items-start gap-1 mt-1">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="break-words">{vacancy.job_providers?.location || 'Location not available'}</span>
              </p>
            </div>
            <Button
              className="bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-xl px-6"
              onClick={handleApply}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>

      <JobDetailsModal 
        vacancy={vacancy} 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen}
        colorScheme={colorScheme}
      />
    </>
  );
};
