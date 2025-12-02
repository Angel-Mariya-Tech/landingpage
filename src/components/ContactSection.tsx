import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your job search? Contact us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone / WhatsApp</div>
                    <div className="flex flex-col gap-1">
                      <a href="tel:9745608245" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 9745608245 (Soniya R S - MD)
                      </a>
                      <a href="tel:9745408244" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 9745408244 (Sujeesh S - Supervisor)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@angelmariya.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@angelmariya.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Office Location</div>
                    <p className="text-muted-foreground">
                      Mamkoottam, Thirupuram po.<br />
                      Neyyattinkara, 695133
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="font-semibold mb-3">Office Hours</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Send Us a Message</h3>
            <p className="text-muted-foreground">
              Have questions or want to apply? Fill out our form and we'll get back to you shortly.
            </p>

            <Button
              size="lg"
              className="w-full text-lg py-6"
              onClick={() => window.open("https://forms.gle/YpdWtMgbuj4E7cpH9", "_blank")}
            >
              Open Contact Form
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
