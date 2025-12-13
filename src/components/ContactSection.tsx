import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Ready to start your career journey? We're here to help you find the perfect opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Contact Information</h3>

            <div className="group flex items-start gap-4 md:gap-5 p-4 md:p-6 bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-base md:text-lg mb-2">Phone / WhatsApp</div>
                <div className="flex flex-col gap-1.5">
                  <a href="tel:9745608245" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full flex-shrink-0" />
                    <span>+91 9745608245</span>
                  </a>
                  <a href="tel:9745408244" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full flex-shrink-0" />
                    <span>+91 9745408244</span>
                  </a>
                  <a href="tel:9745608246" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full flex-shrink-0" />
                    <span>+91 9745608246</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="group flex items-start gap-4 md:gap-5 p-4 md:p-6 bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-base md:text-lg mb-2">Email</div>
                <a href="mailto:angelmariyajobconsultancy@gmail.com" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors break-all">
                  angelmariyajobconsultancy@gmail.com
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-4 md:gap-5 p-4 md:p-6 bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-base md:text-lg mb-2">Office Location</div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Neyyattinkara<br />
                  Thiruvananthapuram, Kerala, 695121
                </p>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl md:rounded-2xl border border-primary/10">
              <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Office Hours
              </h4>
              <div className="space-y-2 text-sm md:text-base text-muted-foreground">
                <div className="flex justify-between gap-2">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span>Saturday:</span>
                  <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span>Sunday:</span>
                  <span className="font-semibold text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex items-center">
            <div className="w-full bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-border/50 shadow-lg text-center space-y-4 md:space-y-6">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-primary to-primary/70 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                <Mail className="w-8 h-8 md:w-12 md:h-12 text-primary-foreground" />
              </div>

              <div className="space-y-2 md:space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold">Send Us a Message</h3>
                <p className="text-sm md:text-lg text-muted-foreground max-w-sm mx-auto">
                  Have questions or ready to apply? Fill out our form and we'll get back to you shortly.
                </p>
              </div>

              <div className="pt-2 md:pt-4">
                <Button
                  size="lg"
                  className="w-full md:max-w-xs text-base md:text-lg py-6 md:py-7 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  onClick={() => window.open("https://forms.gle/cidyXkqgpMXQFSxu9", "_blank")}
                >
                  Open Contact Form
                </Button>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground pt-1 md:pt-2">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
