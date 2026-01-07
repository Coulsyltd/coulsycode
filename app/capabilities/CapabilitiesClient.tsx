'use client';

import { useState } from "react";
import PageHero from "../../components/PageHero";
import Button from "../../components/Button";

const categories = [
  {
    id: "front-end",
    name: "Front-end",
    description: "Modern, responsive interfaces built for performance and user experience",
    technologies: [
      {
        name: "Next.js",
        description:
          "React framework for production-ready applications with server-side rendering",
      },
      {
        name: "React",
        description:
          "Component-based UI library for building interactive user interfaces",
      },
      {
        name: "TypeScript",
        description: "Type-safe JavaScript for more reliable and maintainable code",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS for clean, fast, consistent UI builds",
      },
      {
        name: "Astro",
        description: "Fast, SEO-friendly sites with minimal JavaScript",
      },
    ],
  },
  {
    id: "back-end",
    name: "Back-end",
    description: "Robust server-side architecture and APIs built for scale",
    technologies: [
      {
        name: "Laravel",
        description: "PHP framework for building scalable web applications and APIs",
      },
      {
        name: "Node.js",
        description: "Server-side JavaScript for APIs and automation",
      },
      {
        name: "PostgreSQL",
        description: "Reliable database design for structured, growing data",
      },
      {
        name: "MySQL",
        description: "A dependable database for many web application builds",
      },
      {
        name: "REST APIs",
        description: "Clean API design for integrations and future growth",
      },
    ],
  },
  {
    id: "mobile",
    name: "Mobile-ready sites",
    description:
      "Mobile-first websites that load fast, read clearly, and turn taps into enquiries",
    technologies: [
      {
        name: "Responsive layouts",
        description:
          "Built mobile-first so spacing and typography work properly on small screens",
      },
      {
        name: "Performance optimisations",
        description:
          "Optimised images and lean pages so mobile users don’t bounce on slow connections",
      },
      {
        name: "Tap-friendly UX",
        description:
          "Click-to-call, readable buttons, and forms designed for thumbs (not desktops)",
      },
    ],
  },
  {
    id: "ai",
    name: "AI & Automation",
    description: "Practical automation that saves time and reduces admin",
    technologies: [
      {
        name: "Smarter search",
        description:
          "Better site search and content discovery when it genuinely improves UX",
      },
      {
        name: "Workflow automation",
        description:
          "Automating repetitive admin so you (or your team) can focus on paid work",
      },
      {
        name: "Reporting & dashboards",
        description: "Clear reporting so you can see what’s working and what isn’t",
      },
      {
        name: "AI-assisted content (optional)",
        description:
          "Only where it adds value: structure, consistency, and speed — not generic filler",
      },
    ],
  },
];

export default function CapabilitiesClient() {
  const [selectedCategory, setSelectedCategory] = useState("front-end");
  const currentCategory =
    categories.find((cat) => cat.id === selectedCategory) || categories[0];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Capabilities"
        description="A plain-English look at what I can build — plus the tools behind it (without the jargon)."
        ctas={[
          { label: "Book a Quick Call", href: "/contact", variant: "primary" },
          { label: "See Portfolio", href: "/portfolio", variant: "secondary" },
        ]}
      />

      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "gradient" : "outline"}
                  className="rounded-lg"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {currentCategory.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                {currentCategory.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want a straight answer?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tell me what you’re trying to achieve, and I’ll tell you the simplest build that gets
              you there.
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


