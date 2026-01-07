import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "Streamline Operations",
  description:
    "Replace admin churn with a system that automates the boring stuff and keeps jobs moving.",
  alternates: { canonical: "/solutions/operations" },
};

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Streamline Your Operations"
        description="Replace spreadsheets and admin churn with a system that automates the boring stuff and keeps jobs moving."
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
                  Too much time is spent on repetitive admin tasks—data entry, manual calculations, 
                  email coordination, spreadsheet management. These manual processes eat into productive 
                  time and limit your ability to focus on growing your business.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
                <p className="leading-relaxed mb-4">
                  I build simple systems that remove repetitive admin. From quote generation to customer management,
                  the goal is fewer steps, fewer mistakes, and more time on paid work.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Automated workflows that eliminate manual steps</li>
                  <li>Custom dashboards for managing your business</li>
                  <li>Integration with existing tools and systems</li>
                  <li>Data management and reporting solutions</li>
                  <li>Customer portal and self-service options</li>
                  <li>Mobile access for on-the-go management</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Result</h2>
                <p className="leading-relaxed">
                  You save hours every week on admin tasks. Your team can focus on what matters—serving 
                  customers and growing the business—while automated systems handle the rest.
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
              Ready to Automate Your Operations?
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

