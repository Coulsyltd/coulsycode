import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "Web Applications",
  description:
    "Full-stack applications with APIs, databases and authentication — scalable architecture built for growth and efficiency.",
  alternates: { canonical: "/services/applications" },
};

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Web Applications"
        description="Full-stack applications with APIs, databases, and authentication — scalable architecture built for growth."
        ctas={[
          { label: "Book a Quick Call", href: "/contact", variant: "primary" },
          { label: "View Portfolio", href: "/portfolio", variant: "secondary" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Build</h2>
                <p className="leading-relaxed mb-4">
                  Custom web applications that solve specific business problems — from customer portals
                  to internal tools to workflow systems that save time and reduce mistakes.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>User authentication and authorization</li>
                  <li>Database design and management</li>
                  <li>API development and integration</li>
                  <li>Real-time features and updates</li>
                  <li>Mobile-responsive interfaces</li>
                  <li>Scalable cloud infrastructure</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Who It's For</h2>
                <p className="leading-relaxed">
                  Businesses that need custom functionality beyond a standard website—customer portals, 
                  internal tools, workflow automation, data management systems, or any application 
                  that solves a specific operational challenge.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
                <p className="leading-relaxed mb-4">
                  Built with modern, reliable technology:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Frontend:</strong> Next.js, React, TypeScript</li>
                  <li><strong>Backend:</strong> Node.js, API routes, serverless functions</li>
                  <li><strong>Database:</strong> PostgreSQL, MongoDB, or cloud databases</li>
                  <li><strong>Infrastructure:</strong> Cloud hosting with auto-scaling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Application?
            </h2>
            <Button href="/contact" size="lg">
              Book a Quick Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

