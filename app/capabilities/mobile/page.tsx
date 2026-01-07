import type { Metadata } from "next";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "Mobile-ready Websites",
  description:
    "Mobile-first websites that load fast, read clearly, and make it easy to call, enquire, or buy.",
  alternates: { canonical: "/capabilities/mobile" },
};

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Mobile-ready websites"
        description="For most small businesses, “mobile” means a website that works brilliantly on phones — fast, readable, and built to convert."
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
                  Most customers will find you on their phone. So the basics matter: speed, clarity,
                  and a frictionless path to contact you.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Mobile-first responsive websites (standard)</li>
                  <li>Click-to-call and tap-friendly buttons</li>
                  <li>Forms that are easy to complete on mobile</li>
                  <li>Fast load times (optimised images and clean code)</li>
                  <li>Optional “app-like” upgrades when they’re genuinely useful</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How it helps</h2>
                <p className="leading-relaxed">
                  A mobile-ready site doesn’t just “look fine” — it helps you convert more traffic into
                  enquiries. Fewer bounces, more calls, and fewer half-completed forms.
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


