import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "Increase Online Visibility",
  description:
    "Get found in the areas you actually serve — with SEO-led structure, local intent, and pages built to rank.",
  alternates: { canonical: "/solutions/visibility" },
};

export default function VisibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Increase Your Online Visibility"
        description="Get found in the areas you actually serve — with SEO-led structure, local intent, and pages built to rank."
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
                  When potential customers search for your services, they're finding your competitors instead. 
                  Your website exists, but it's not showing up in search results where it matters. This means 
                  you're missing out on valuable leads and opportunities.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
                <p className="leading-relaxed mb-4">
                  I build SEO-led pages from the ground up, so Google can understand the site and real people can take action.
                  For service-area businesses, I structure pages around the areas you actually want work from.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Technical SEO optimization for fast loading and search engine crawling</li>
                  <li>Local SEO strategies for service-area businesses</li>
                  <li>Content optimization that targets the right keywords</li>
                  <li>Structured data markup for rich search results</li>
                  <li>Mobile-first design that Google prioritizes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Result</h2>
                <p className="leading-relaxed">
                  Your website ranks where your customers are searching. You appear in local search results, 
                  Google Maps, and organic search—putting you in front of potential customers when they're 
                  ready to buy.
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
              Ready to Get Found Online?
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

