import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A simple, senior-led process: understand the problem, design the right solution, build and test properly, then launch with support.",
  alternates: { canonical: "/process" },
};

const steps = [
  {
    number: "01",
    title: "Understand Your Challenge",
    description: "We start by understanding your specific business problem, your goals, and what success looks like for you. This isn't about selling a solution—it's about finding the right one.",
  },
  {
    number: "02",
    title: "Design the Solution",
    description: "We design a custom solution tailored to your needs—whether that's a website, application, or integrated system. You'll see mockups and plans before we build anything.",
  },
  {
    number: "03",
    title: "Build & Test",
    description: "We build with modern, reliable technology and test thoroughly. You'll have opportunities to review and provide feedback throughout the process.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We launch your solution and ensure everything works perfectly. We provide documentation and support to help you get the most out of your new system.",
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Clear Steps. No Drama."
        description="Short feedback loops, direct comms, and a build process that’s designed to ship and perform."
        ctas={[
          { label: "Book a Quick Call", href: "/contact", variant: "primary" },
          { label: "View Portfolio", href: "/portfolio", variant: "secondary" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline</h3>
                <p className="text-gray-600">
                  Most projects take 4-8 weeks from start to launch, depending on complexity. We'll provide 
                  a timeline upfront and keep you updated throughout.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
                <p className="text-gray-600">
                  Regular updates and check-ins throughout the process. You'll always know where things stand 
                  and what's happening next.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexibility</h3>
                <p className="text-gray-600">
                  We adapt to your needs. If priorities change or new requirements emerge, we adjust the plan 
                  accordingly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600">
                  After launch, we provide documentation and support to help you get the most out of your 
                  new solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start?
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

