import { Hero } from "@/components/Hero";
import { PlatformsSection } from "@/components/PlatformsSection";
import { JobsSection } from "@/components/JobsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CVUploadSection } from "@/components/CVUploadSection";
import { AzifaFooter } from "@/components/AzifaFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div id="hero">
        <Hero />
      </div>
      <div id="platforms">
        <PlatformsSection />
      </div>
      <div id="jobs">
        <JobsSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="cv-upload">
        <CVUploadSection />
      </div>
      <AzifaFooter />
    </div>
  );
};

export default Index;
