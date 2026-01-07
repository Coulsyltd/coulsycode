import type { Metadata } from "next";
import Link from "next/link";
import Testimonials from "../components/Testimonials";
import ClientLogos from "../components/ClientLogos";
import OurStrengths from "../components/OurStrengths";
import PageHero from "../components/PageHero";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "Web Development & Local SEO in York",
  description:
    "Founder-led web development and local SEO. I build fast sites and simple systems that turn searches into enquiries — and enquiries into revenue. Based in York.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Web builds that bring in enquiries"
        description="I build fast, SEO-led websites and simple systems that turn searches into enquiries — and enquiries into revenue. Based in York."
        ctas={[
          { label: "Book a Quick Call", href: "/contact", variant: "primary" },
          { label: "See How I Help", href: "/solutions", variant: "secondary" },
        ]}
      />

      {/* Our Strengths */}
      <OurStrengths />

      {/* Client Logos */}
      <ClientLogos />

      {/* Problems We Solve */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Common Business Problems We Solve
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every business faces challenges. Here's how we help you overcome them.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Not Getting Found Online
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Customers can't find you when they search. We build SEO-optimized websites 
                  and implement local search strategies so you rank where it matters.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Missing Out on Leads
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Website visitors aren't converting. We create conversion-focused designs 
                  and landing pages that turn visitors into customers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Manual Processes Slowing You Down
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Too much admin work eating into productive time. We build custom applications 
                  that automate workflows and streamline operations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can't Scale Your Business
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Growth is limited by manual processes. We create scalable web solutions 
                  that grow with your business, handling more without more overhead.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Outdated Website Hurting Credibility
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your website looks dated and doesn't reflect your quality. We design modern, 
                  professional sites that build trust and convert visitors.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Competitors Outranking You
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your competitors show up first in search results. We implement proven SEO 
                  strategies and local search optimization to get you ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* How We Help */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How We Help Your Business Grow
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We don't just build websites—we create solutions that solve problems and drive results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-4">01</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Understand Your Challenge
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We start by understanding your specific business problem, your goals, 
                  and what success looks like for you.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-4">02</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Design the Solution
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We design a custom solution tailored to your needs—whether that's a website, 
                  application, or integrated system.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-4">03</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Build & Launch
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We build with modern, reliable technology and launch your solution, 
                  ensuring it works perfectly from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Built with Modern Technology
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industry-standard frameworks and tools trusted by enterprise teams worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-2xl font-bold text-gray-900 mb-2">Next.js</div>
                <div className="text-sm text-gray-600">React Framework</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-2xl font-bold text-gray-900 mb-2">TypeScript</div>
                <div className="text-sm text-gray-600">Type Safety</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-2xl font-bold text-gray-900 mb-2">React</div>
                <div className="text-sm text-gray-600">UI Library</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow duration-200">
                <div className="text-2xl font-bold text-gray-900 mb-2">Tailwind</div>
                <div className="text-sm text-gray-600">Styling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Solve Your Business Challenge?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss your specific problem and create a solution that helps your business grow.
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
