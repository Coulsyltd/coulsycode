import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "Custom Websites",
  description:
    "Bespoke websites built from the ground up — modern frameworks, optimised performance, and SEO-ready architecture.",
  alternates: { canonical: "/services/websites" },
};

export default function WebsitesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Custom Website Design"
        description="Bespoke websites built from the ground up — modern frameworks, optimised performance, and SEO-ready architecture."
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
                  I don’t use templates or cookie-cutter solutions. Every website is built around your business:
                  what you sell, what people search for, and what makes them pick up the phone.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Fully responsive design that works on all devices</li>
                  <li>SEO-led structure from day one</li>
                  <li>Fast load times (better rankings + better conversions)</li>
                  <li>Modern, clean design that builds trust</li>
                  <li>Easy content management for future updates</li>
                  <li>Integration with your existing tools</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Who It's For</h2>
                <p className="leading-relaxed">
                  Businesses that need a professional online presence—whether you're starting fresh 
                  or replacing an outdated site. Perfect for service businesses, local companies, 
                  and anyone who needs to be found online.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Process</h2>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="font-semibold">Understand Your Challenge</li>
                  <p className="ml-6 mb-4">
                    I’ll get clear on what you want the site to achieve: more enquiries, better lead quality, or less time wasted on the wrong calls.
                  </p>
                  
                  <li className="font-semibold">Design the Solution</li>
                  <p className="ml-6 mb-4">
                    I’ll map the structure (pages + sections) around search intent and conversion, then design it so it feels simple and trustworthy.
                  </p>
                  
                  <li className="font-semibold">Build & Launch</li>
                  <p className="ml-6">
                    I build it properly (speed, SEO, analytics), test it, and launch it with a plan for what happens next.
                  </p>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready for a Custom Website?
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

