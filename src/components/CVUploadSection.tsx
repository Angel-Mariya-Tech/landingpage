import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "./Logo";
import { JobApplicationDialog } from "./JobApplicationDialog";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { customerSchema } from "@/lib/validations";

export const CVUploadSection = () => {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    qualification: "",
    jobField: "",
    remark: "",
  });

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
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        location: "",
        qualification: "",
        jobField: "",
        remark: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-2 sm:px-6 lg:px-16 bg-section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5 px-2 sm:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
              Ready to Start Your Career Journey with Azifa?
            </h2>
            <p className="text-muted-foreground mb-8">
              Have questions or want to learn more about our services? Get in touch with us and our team will help you find the perfect job opportunity that matches your skills and aspirations.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              onClick={() => setContactDialogOpen(true)}
            >
              Contact Us
            </Button>
          </div>
          <div className="lg:w-3/5 w-full max-w-2xl mx-auto lg:mx-0">
            <div className="bg-muted/30 p-2 sm:p-4 rounded-xl">
              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
                <div className="bg-accent p-3 sm:p-4 rounded-lg mb-6 sm:mb-8 flex items-center justify-center gap-2">
                  <Logo />
                  <span className="font-bold text-xl sm:text-2xl tracking-tight text-accent-foreground">AZIFA</span>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-section-dark border-border"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    maxLength={100}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Enter your phone number (e.g., +1234567890)"
                    className="bg-section-dark border-border"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    maxLength={20}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Enter your location"
                    className="bg-section-dark border-border"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    maxLength={200}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Enter your qualification (e.g., Bachelor's, Diploma)"
                    className="bg-section-dark border-border"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    maxLength={500}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Which job are you interested in?"
                    className="bg-section-dark border-border"
                    value={formData.jobField}
                    onChange={(e) => setFormData({ ...formData, jobField: e.target.value })}
                    maxLength={200}
                    required
                  />
                  <Textarea
                    placeholder="Anything else you'd like to share with us?"
                    rows={4}
                    className="bg-section-dark border-border"
                    value={formData.remark}
                    onChange={(e) => setFormData({ ...formData, remark: e.target.value })}
                    maxLength={2000}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <JobApplicationDialog
        open={contactDialogOpen}
        onOpenChange={setContactDialogOpen}
        jobTitle="General Inquiry"
        company="Azifa"
        location="N/A"
      />
    </section>
  );
};
