import { Hero } from "@/components/Hero";
import { PlatformsSection } from "@/components/PlatformsSection";
import { JobsSection } from "@/components/JobsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CVUploadSection } from "@/components/CVUploadSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

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
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
