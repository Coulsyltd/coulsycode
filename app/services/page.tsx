import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, web applications, local SEO, and e-commerce — built to solve real business problems and generate more enquiries.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Custom Websites",
    description: "Bespoke websites built from scratch, tailored to your business needs. Modern design, optimized performance, and SEO-ready architecture.",
    href: "/services/websites",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Web Applications",
    description: "Full-stack applications with APIs, databases, and authentication. Scalable architecture built for growth and efficiency.",
    href: "/services/applications",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "green",
  },
  {
    title: "Local SEO",
    description: "Targeted SEO strategies for service businesses. Radius-based targeting and conversion-optimized landing pages that rank.",
    href: "/services/seo",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
      </svg>
    ),
    color: "purple",
  },
  {
    title: "E-commerce",
    description: "Complete online stores with payment processing, inventory management, and customer accounts. Built for sales and growth.",
    href: "/services/ecommerce",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    color: "orange",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Services that make you money"
        description="From getting found online to converting more visitors — I build what your business actually needs to bring in enquiries."
        ctas={[
          { label: "Book a Quick Call", href: "/contact", variant: "primary" },
          { label: "View Portfolio", href: "/portfolio", variant: "secondary" },
        ]}
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => {
                const colorClasses = {
                  blue: "bg-blue-100 text-blue-600",
                  green: "bg-green-100 text-green-600",
                  purple: "bg-purple-100 text-purple-600",
                  orange: "bg-orange-100 text-orange-600",
                };
                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200"
                  >
                    <div className={`w-16 h-16 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="text-blue-600 font-semibold text-sm group-hover:underline">
                      Learn more →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tell me about your business challenge and I’ll recommend the best next step.
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

