import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const CVUploadSection = () => {
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
              onClick={() => window.open("https://forms.gle/YpdWtMgbuj4E7cpH9", "_blank")}
            >
              Contact Us
            </Button>
          </div>
          <div className="lg:w-3/5 w-full max-w-2xl mx-auto lg:mx-0">
            <div className="bg-muted/30 p-2 sm:p-4 rounded-xl">
              <div className="bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-center space-y-6">
                <div className="bg-accent p-3 sm:p-4 rounded-lg mb-6 sm:mb-8 flex items-center justify-center gap-2">
                  <Logo />
                  <span className="font-bold text-xl sm:text-2xl tracking-tight text-accent-foreground">AZIFA</span>
                </div>

                <h3 className="text-2xl font-semibold">Submit Your CV</h3>
                <p className="text-muted-foreground">
                  Please fill out our application form to submit your CV and details.
                </p>

                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-lg"
                  onClick={() => window.open("https://forms.gle/YpdWtMgbuj4E7cpH9", "_blank")}
                >
                  Open Application Form
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
