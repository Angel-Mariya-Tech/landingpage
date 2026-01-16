import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, IndianRupee, Users } from "lucide-react";
import { Vacancy } from "@/hooks/useVacancies";

interface ColorScheme {
  bg: string;
  badge: string;
  text: string;
}

interface JobDetailsModalProps {
  vacancy: Vacancy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  colorScheme?: ColorScheme;
}

const defaultColorScheme: ColorScheme = {
  bg: "bg-gradient-to-br from-orange-50 to-orange-100",
  badge: "bg-orange-200 text-orange-800",
  text: "text-orange-900/70"
};

export const JobDetailsModal = ({ vacancy, open, onOpenChange, colorScheme = defaultColorScheme }: JobDetailsModalProps) => {
  if (!vacancy) return null;

  const handleApply = () => {
    window.open("https://forms.gle/cidyXkqgpMXQFSxu9", "_blank");
  };

  const locations = vacancy.job_providers?.location?.split(',').map(loc => loc.trim()) || [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`sm:max-w-md ${colorScheme.bg} border-0 max-h-[90vh] overflow-y-auto p-0`}>
        <div className="p-6 space-y-5">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-bold text-foreground leading-tight">
              {vacancy.job_title}
            </DialogTitle>
            
            {/* Industry & Openings badges */}
            <div className="flex flex-wrap gap-2">
              {vacancy.job_providers?.industry && (
                <span className={`${colorScheme.badge} px-3 py-1 rounded-full text-xs font-medium`}>
                  {vacancy.job_providers.industry}
                </span>
              )}
              <span className={`${colorScheme.badge} px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
                <Users className="w-3 h-3" />
                {vacancy.openings} {vacancy.openings === 1 ? 'opening' : 'openings'}
              </span>
            </div>
          </DialogHeader>

          {/* Salary - Prominent */}
          <div className="flex items-center gap-2">
            <IndianRupee className="w-5 h-5 text-foreground" />
            <span className="text-2xl font-bold text-foreground">
              {vacancy.salary || 'Negotiable'}
              {vacancy.salary && vacancy.salary_type && !vacancy.salary.toLowerCase().includes('negotiable') && (
                <span className="text-sm font-normal text-muted-foreground ml-1">/{vacancy.salary_type}</span>
              )}
            </span>
          </div>

          {/* Description */}
          {vacancy.description && (
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground text-sm">About the Role</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {vacancy.description}
              </p>
            </div>
          )}

          {/* Locations */}
          {locations.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Locations
              </h4>
              <div className="flex flex-wrap gap-2">
                {locations.map((location, index) => (
                  <span
                    key={index}
                    className={`${colorScheme.badge} px-3 py-1.5 rounded-full text-xs font-medium`}
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Apply Button */}
          <Button
            onClick={handleApply}
            className="w-full bg-foreground hover:bg-foreground/90 text-background font-semibold py-6 rounded-xl text-base"
          >
            Apply Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
