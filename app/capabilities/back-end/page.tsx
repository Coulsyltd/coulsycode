import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "Back-end Development",
  description:
    "Robust server-side architecture and APIs — secure, performant, and built to scale.",
  alternates: { canonical: "/capabilities/back-end" },
};

export default function BackEndPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Back-end Development"
        description="Robust server-side architecture and APIs — secure, performant, and built to scale."
        ctas={[
          { label: "Book a Quick Call", href: "/contact", variant: "primary" },
          { label: "See Portfolio", href: "/portfolio", variant: "secondary" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Build</h2>
                <p className="leading-relaxed mb-4">
                  The back-end is where the real “system” lives: data, rules, workflows, and automation.
                  I build it to be secure, reliable, and easy to evolve.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>REST APIs for integrations</li>
                  <li>Database design and optimisation</li>
                  <li>User authentication and roles</li>
                  <li>Automated workflows and business logic</li>
                  <li>Secure, scalable architecture</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Laravel</h3>
                    <p className="text-gray-600">
                      PHP framework for robust business systems and APIs.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Node.js</h3>
                    <p className="text-gray-600">
                      Great for APIs, automation, and integrations.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">PostgreSQL</h3>
                    <p className="text-gray-600">
                      Solid relational data modelling with strong query performance.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">MySQL</h3>
                    <p className="text-gray-600">
                      A dependable choice for many production systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Button href="/contact" size="lg">
              Book a Quick Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


