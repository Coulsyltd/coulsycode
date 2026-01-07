import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founder-led web development in York. I build clean, SEO-led sites with direct communication and a focus on enquiries and revenue.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Founder-led. Proper work."
        description="You deal with me directly. I build SEO-led sites that bring in enquiries — and help you turn them into revenue."
        ctas={[
          { label: "Book a Quick Call", href: "/contact", variant: "primary" },
          { label: "View Portfolio", href: "/portfolio", variant: "secondary" },
        ]}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Founder-led. Proper work.</h2>
                <p className="leading-relaxed mb-4">
                  I’m not a big agency with layers of handoffs. You deal directly with the person doing the work.
                  That keeps decisions quick, quality consistent, and the end result better.
                </p>
                <p className="leading-relaxed">
                  I think commercially: rankings are important, but enquiries pay the bills.
                  So I focus on both — search visibility and conversion.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Forensic Attention to Detail</h2>
                <p className="leading-relaxed mb-4">
                  I obsess over details. Every pixel matters. Every line of code matters. Every SEO element matters.
                  Because when you're competing for rankings, small improvements compound into big results.
                </p>
                <p className="leading-relaxed">
                  I don’t build websites and hope they rank. I build them with SEO baked in from day one:
                  technical SEO, on-page optimisation, and content built around what people actually search for.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">SEO-Led (Not SEO “Sprinkled On”)</h2>
                <p className="leading-relaxed mb-4">
                  I build SEO in from the start: site structure, internal linking, fast pages, and content designed around what people actually search for.
                </p>
                <p className="leading-relaxed">
                  I’ve built geolocation-driven service sites across Yorkshire — the kind where being “near me” matters.
                  It’s not guesswork; it’s careful structure and consistent execution.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Modern Technology, Proven Results</h2>
                <p className="leading-relaxed mb-4">
                  I build with modern frameworks like Next.js, React, and TypeScript. But I don’t choose technology
                  because it’s trendy — I choose it because it helps me build faster, more reliable sites that perform.
                </p>
                <p className="leading-relaxed">
                  Every site I build is fast, mobile-ready, and optimised for search engines. I write clean,
                  maintainable code that performs well and scales with your business.
                </p>
                <div className="not-prose mt-6">
                  <Link
                    href="/capabilities"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    See capabilities (plain-English) <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Who I Work With</h2>
                <p className="leading-relaxed mb-4">
                  I work with business owners who want a website that actually works. Service businesses,
                  local companies, e-commerce stores — anyone who needs more enquiries and a clearer path to revenue.
                </p>
                <p className="leading-relaxed">
                  If you’re tired of agencies that don’t understand your business, or developers who build pretty sites
                  that don’t rank, we’ll probably get on well. I keep things practical and commercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What sets me apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Owner Perspective</h3>
                <p className="text-gray-600">
                  I build with a commercial lens. Rankings are great — but what you need is enquiries and revenue.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Forensic Attention to Detail</h3>
                <p className="text-gray-600">
                  I keep the fundamentals tight — structure, speed, internal linking, and copy that’s easy to act on.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO-led from day one</h3>
                <p className="text-gray-600">
                  I don’t “sprinkle SEO on” at the end — I build the structure and intent so it can rank properly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let’s discuss your business challenge — and what would actually move the needle on enquiries and revenue.
            </p>
            <Button href="/contact" size="lg">
              Book a Quick Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
