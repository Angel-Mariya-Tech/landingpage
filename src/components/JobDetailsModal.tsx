import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Users, IndianRupee, Clock } from "lucide-react";
import { Vacancy } from "@/hooks/useVacancies";

interface JobDetailsModalProps {
  vacancy: Vacancy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const JobDetailsModal = ({ vacancy, open, onOpenChange }: JobDetailsModalProps) => {
  if (!vacancy) return null;

  const handleApply = () => {
    window.open("https://forms.gle/cidyXkqgpMXQFSxu9", "_blank");
  };

  const locations = vacancy.job_providers?.location?.split(',').map(loc => loc.trim()) || [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-gradient-to-br from-background via-background to-muted/20 border-border/50 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground leading-tight">
                {vacancy.job_title}
              </DialogTitle>
              {vacancy.job_providers?.industry && (
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {vacancy.job_providers.industry}
                </span>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Key Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
              <div className="p-2 rounded-lg bg-primary/10">
                <IndianRupee className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Salary</p>
                <p className="font-semibold text-foreground text-sm">
                  {vacancy.salary || 'Negotiable'}
                  {vacancy.salary_type && !vacancy.salary?.toLowerCase().includes('negotiable') && (
                    <span className="text-xs font-normal text-muted-foreground">/{vacancy.salary_type}</span>
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Users className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Openings</p>
                <p className="font-semibold text-foreground text-sm">
                  {vacancy.openings} {vacancy.openings === 1 ? 'Position' : 'Positions'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Briefcase className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="font-semibold text-foreground text-sm capitalize">{vacancy.status}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <Clock className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Posted</p>
                <p className="font-semibold text-foreground text-sm">
                  {new Date(vacancy.created_at).toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          {vacancy.description && (
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                About the Role
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {vacancy.description}
              </p>
            </div>
          )}

          {/* Locations */}
          {locations.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Job Locations
              </h4>
              <div className="flex flex-wrap gap-2">
                {locations.map((location, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full text-sm bg-muted text-foreground border border-border/50"
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
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl text-base"
          >
            Apply Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
