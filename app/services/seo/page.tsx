import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "Local SEO",
  description:
    "Targeted local SEO for service businesses — radius-based targeting and conversion-focused pages that rank and bring enquiries.",
  alternates: { canonical: "/services/seo" },
};

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Local SEO & Lead Generation"
        description="Targeted SEO for service businesses — radius-based targeting and conversion-focused pages that rank and bring enquiries."
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
                <p className="leading-relaxed mb-4">
                  I focus on local SEO for service-area businesses. The goal is simple: show up in the places you actually want work from — and turn that traffic into enquiries.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Radius-based SEO targeting your service area</li>
                  <li>Location-specific landing pages for each area</li>
                  <li>Google Business Profile optimization</li>
                  <li>Local citation building and directory listings</li>
                  <li>Conversion-optimized pages that turn visitors into leads</li>
                  <li>Ongoing monitoring and optimization</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Who It's For</h2>
                <p className="leading-relaxed">
                  Service businesses that operate in specific geographic areas—plumbers, electricians, 
                  joiners, fire safety companies, and any business that serves local customers within 
                  a defined radius.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Results</h2>
                <p className="leading-relaxed">
                  You rank where your customers are searching. When someone searches for your service 
                  in your area, you appear at the top of results. More visibility means more leads, 
                  and more leads mean more business.
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
              Ready to Rank Locally?
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

