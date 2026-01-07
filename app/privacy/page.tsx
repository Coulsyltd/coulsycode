import type { Metadata } from "next";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Coulsy Code collects, uses, and protects information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Privacy Policy"
        description={`Last updated: ${lastUpdated}`}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="leading-relaxed">
                  Coulsy Code ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Business information (company name, industry)</li>
                  <li>Information you provide when contacting us or using our services</li>
                  <li>Website usage data and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Respond to your inquiries and provide our services</li>
                  <li>Improve our website and services</li>
                  <li>Send you updates about our services (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us 
                  at <a href="mailto:info@coulsycode.com" className="text-blue-600 hover:underline">info@coulsycode.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

