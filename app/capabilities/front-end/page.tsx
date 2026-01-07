import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "Front-end Development",
  description:
    "Modern, responsive interfaces built for performance and UX — with SEO and conversion baked in.",
  alternates: { canonical: "/capabilities/front-end" },
};

export default function FrontEndPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Front-end Development"
        description="Modern, responsive interfaces built for performance and user experience — with SEO and conversion baked in."
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
                  Fast, clean front-end experiences that feel simple to use and are built to convert.
                  Every interface is designed with SEO, performance, and clarity in mind.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Server-side rendered pages for better SEO</li>
                  <li>Component-based UI for maintainability</li>
                  <li>Mobile-first responsive design</li>
                  <li>Optimised performance and loading times</li>
                  <li>Accessible interfaces that work for everyone</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Next.js</h3>
                    <p className="text-gray-600">
                      Production-ready React with server rendering for speed and SEO.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">React</h3>
                    <p className="text-gray-600">
                      Component-based UI for clean, maintainable builds.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">TypeScript</h3>
                    <p className="text-gray-600">
                      Type-safe code that reduces bugs and makes future changes safer.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Astro</h3>
                    <p className="text-gray-600">
                      Fast, content-focused sites where minimal JavaScript wins.
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


