import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { AzifaFooter } from "@/components/AzifaFooter";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-border backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Logo />
              <h2 className="text-2xl font-bold tracking-tight">AZIFA</h2>
            </div>
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using AZIFA's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AZIFA provides job placement and recruitment services. By using our platform, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use the services only for lawful purposes</li>
              <li>Not engage in any activity that disrupts or interferes with our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for maintaining the security of your account and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Job Listings and Applications</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Job seekers acknowledge that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>AZIFA acts as an intermediary between job seekers and employers</li>
              <li>We do not guarantee job placement or employment</li>
              <li>Information provided in applications may be shared with potential employers</li>
              <li>Final hiring decisions are made by the employer, not AZIFA</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Employer Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Employers using our platform agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Post only legitimate job opportunities</li>
              <li>Comply with all applicable employment laws and regulations</li>
              <li>Not discriminate based on protected characteristics</li>
              <li>Handle candidate information confidentially and professionally</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on the AZIFA platform, including text, graphics, logos, and software, is the property of AZIFA and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              AZIFA shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. We do not guarantee the accuracy, completeness, or timeliness of information on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of AZIFA's services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your account and access to our services immediately, without prior notice, for any breach of these terms or for any other reason we deem appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us through our platform or reach out to our support team.
            </p>
          </section>
        </div>
      </div>

      <AzifaFooter />
    </div>
  );
};

export default Terms;
