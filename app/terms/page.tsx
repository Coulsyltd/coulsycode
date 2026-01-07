import type { Metadata } from "next";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Website terms and conditions for Coulsy Code.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Terms of Service"
        description={`Last updated: ${lastUpdated}`}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using Coulsy Code's website and services, you agree to be bound by these Terms 
                  of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
                <p className="leading-relaxed">
                  Coulsy Code provides web development services including custom websites, web applications, 
                  and related services. Specific terms for each project will be outlined in a separate agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Use of Services</h2>
                <p className="leading-relaxed mb-4">
                  You agree to:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on this website, including text, graphics, logos, and software, is the property 
                  of Coulsy Code or its licensors and is protected by copyright and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, Coulsy Code shall not be liable for any indirect, 
                  incidental, special, or consequential damages arising from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately 
                  upon posting. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at 
                  <a href="mailto:info@coulsycode.com" className="text-blue-600 hover:underline"> info@coulsycode.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

