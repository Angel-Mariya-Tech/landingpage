import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your career journey? We're here to help you find the perfect opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="group flex items-start gap-5 p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">Phone / WhatsApp</div>
                <div className="flex flex-col gap-1.5">
                  <a href="tel:9745608245" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                    +91 9745608245 (Soniya R S - MD)
                  </a>
                  <a href="tel:9745408244" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full" />
                    +91 9745408244 (Sujeesh S - Supervisor)
                  </a>
                </div>
              </div>
            </div>

            <div className="group flex items-start gap-5 p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">Email</div>
                <a href="mailto:info@angelmariya.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@angelmariya.com
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-5 p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">Office Location</div>
                <p className="text-muted-foreground">
                  Mamkoottam, Thirupuram po.<br />
                  Neyyattinkara, 695133
                </p>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Office Hours
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex items-center">
            <div className="w-full bg-gradient-to-br from-card via-card to-primary/5 rounded-3xl p-10 border border-border/50 shadow-lg text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                <Mail className="w-12 h-12 text-primary-foreground" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-3xl font-bold">Send Us a Message</h3>
                <p className="text-muted-foreground text-lg max-w-sm mx-auto">
                  Have questions or ready to apply? Fill out our form and we'll get back to you shortly.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full max-w-xs text-lg py-7 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  onClick={() => window.open("https://forms.gle/YpdWtMgbuj4E7cpH9", "_blank")}
                >
                  Open Contact Form
                </Button>
              </div>

              <p className="text-sm text-muted-foreground pt-2">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
