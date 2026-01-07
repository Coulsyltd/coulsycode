import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "AI & Automation",
  description:
    "Practical automation that saves time — smarter workflows, better reporting, and less admin.",
  alternates: { canonical: "/capabilities/ai" },
};

export default function AIPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="AI & Automation"
        description="Practical automation that saves time — better workflows, clearer reporting, and less admin."
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What I mean by “AI”</h2>
                <p className="leading-relaxed mb-4">
                  Most small businesses don’t need “AI”. They need less admin, fewer mistakes, and a smoother
                  way of handling leads and customers. If AI helps, I’ll use it — if it doesn’t, I won’t.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Workflow automation (quotes, follow-ups, reminders, handoffs)</li>
                  <li>Smarter search and content discovery (when it genuinely improves UX)</li>
                  <li>Reporting and dashboards so you can see what’s working</li>
                  <li>Optional AI-assisted content structure (never generic filler)</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">The goal</h3>
                <p className="text-gray-700">
                  Save time and increase revenue: faster follow-ups, clearer systems, and fewer jobs lost due to
                  slow replies or messy admin.
                </p>
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


