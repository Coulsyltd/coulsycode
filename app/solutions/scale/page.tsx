import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "Scale Your Business",
  description:
    "Build systems that handle more work without needing more headcount — scalable architecture and clean workflows.",
  alternates: { canonical: "/solutions/scale" },
};

export default function ScalePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Scale Your Business"
        description="Build systems that handle more work without needing more headcount — scalable architecture and clean workflows."
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem</h2>
                <p className="leading-relaxed">
                  Your business is growing, but your systems can't keep up. Every new customer means more 
                  manual work. You're hitting capacity limits because scaling requires hiring more people 
                  or working longer hours. Growth becomes a burden instead of an opportunity.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
                <p className="leading-relaxed mb-4">
                  I build scalable foundations so you can take on more work without everything turning into admin chaos.
                  As you grow, the system can handle more without needing a full rebuild.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Scalable architecture that handles increased load</li>
                  <li>Automated systems that don't require more staff</li>
                  <li>Cloud-based infrastructure that grows with you</li>
                  <li>Self-service options that reduce support overhead</li>
                  <li>Integration capabilities for future expansion</li>
                  <li>Performance optimization for speed at scale</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Result</h2>
                <p className="leading-relaxed">
                  You can grow without proportional increases in overhead. The system scales automatically, 
                  handling more customers, more transactions, and more complexity—without requiring more 
                  people or resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Scale Your Business?
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

