import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { customerSchema } from "@/lib/validations";

interface JobApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobTitle: string;
  company: string;
  location: string;
  type?: string;
  salary?: string;
  vacancyId?: string;
}

export const JobApplicationDialog = ({
  open,
  onOpenChange,
  jobTitle,
  company,
  location,
  type,
  salary,
  vacancyId,
}: JobApplicationDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    qualification: "",
    remark: jobTitle === "General Inquiry" ? "" : `Interested in applying for: ${jobTitle} at ${company}\nLocation: ${location}\nType: ${type}${salary ? `\nSalary: ${salary}` : ''}`,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate input
      const validation = customerSchema.safeParse(formData);
      if (!validation.success) {
        toast({
          title: "Validation Error",
          description: validation.error.errors[0].message,
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Application Submitted!",
        description: "We'll contact you soon regarding your application.",
      });

      // Reset form and close dialog
      setFormData({
        name: "",
        phone: "",
        location: "",
        qualification: "",
        remark: jobTitle === "General Inquiry" ? "" : `Interested in applying for: ${jobTitle} at ${company}\nLocation: ${location}\nType: ${type}${salary ? `\nSalary: ${salary}` : ''}`,
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              maxLength={100}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              maxLength={20}
              required
              placeholder="Enter your phone number (e.g., +1234567890)"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Your Location *</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              maxLength={200}
              required
              placeholder="Enter your location"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="qualification">Qualification *</Label>
            <Input
              id="qualification"
              value={formData.qualification}
              onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
              maxLength={500}
              required
              placeholder="Enter your qualification (e.g., Bachelor's, Diploma)"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="remark">Remark (Optional)</Label>
            <Textarea
              id="remark"
              value={formData.remark}
              onChange={(e) => setFormData({ ...formData, remark: e.target.value })}
              maxLength={2000}
              className="min-h-[120px]"
              placeholder="Job details and additional notes"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
