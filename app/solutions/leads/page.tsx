import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "Generate More Leads",
  description:
    "Turn visits into calls — conversion-focused layout, clearer messaging, and trust signals that remove friction.",
  alternates: { canonical: "/solutions/leads" },
};

export default function LeadsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Generate More Leads"
        description="Turn visits into calls — conversion-focused layout, clearer messaging, and trust signals that remove friction."
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
                  You're getting website traffic, but visitors aren't taking action. They're not calling, 
                  filling out forms, or making purchases. Your website isn't converting visitors into leads, 
                  which means you're missing opportunities.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
                <p className="leading-relaxed mb-4">
                  I design pages around conversion. Every section has a job: build trust, answer objections, and make it easy to take the next step.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Clear, prominent call-to-action buttons</li>
                  <li>Conversion-optimized landing pages for campaigns</li>
                  <li>Trust signals and social proof throughout</li>
                  <li>Streamlined contact forms that reduce friction</li>
                  <li>Mobile-optimized experience for on-the-go users</li>
                  <li>A/B testing to optimize conversion rates</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Result</h2>
                <p className="leading-relaxed">
                  More visitors become leads. Your website actively works to convert traffic into customers, 
                  with clear paths to action and compelling reasons to get in touch.
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
              Ready to Convert More Visitors?
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

