import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Solutions for visibility, leads, operations, and scale — designed to bring in more enquiries and save time.",
  alternates: { canonical: "/solutions" },
};

const solutions = [
  {
    title: "Increase Online Visibility",
    problem: "Customers can't find you when they search",
    solution: "I build SEO-led pages and local search structure so you rank where it matters — and get enquiries.",
    href: "/solutions/visibility",
    icon: "👁️",
  },
  {
    title: "Generate More Leads",
    problem: "Website visitors aren't converting",
    solution: "I tighten messaging, structure and trust signals so more visits turn into calls and enquiries.",
    href: "/solutions/leads",
    icon: "📈",
  },
  {
    title: "Streamline Operations",
    problem: "Manual processes slowing you down",
    solution: "I build simple systems that cut admin, automate the boring bits, and keep work moving.",
    href: "/solutions/operations",
    icon: "⚡",
  },
  {
    title: "Scale Your Business",
    problem: "Growth limited by manual processes",
    solution: "I build scalable foundations so you can handle more work without adding chaos or overhead.",
    href: "/solutions/scale",
    icon: "🚀",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Solutions that drive revenue"
        description="Practical fixes that turn search traffic into enquiries — and reduce admin so you can take on more work."
        ctas={[
          { label: "Book a Quick Call", href: "/contact", variant: "primary" },
          { label: "See Services", href: "/services", variant: "secondary" },
        ]}
      />

      {/* Solutions Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution) => (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200"
                >
                  <div className="text-5xl mb-6">{solution.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {solution.title}
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-red-600 mb-2">Problem:</p>
                    <p className="text-gray-700 mb-4">{solution.problem}</p>
                    <p className="text-sm font-semibold text-green-600 mb-2">Solution:</p>
                    <p className="text-gray-600">{solution.solution}</p>
                  </div>
                  <span className="text-blue-600 font-semibold text-sm group-hover:underline">
                    See how I solve this →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have a Different Challenge?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I solve all kinds of business problems. Let’s discuss yours.
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

