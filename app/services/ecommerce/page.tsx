import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/PageHero";
import Button from "../../../components/Button";

export const metadata: Metadata = {
  title: "E-commerce",
  description:
    "Online stores built for sales — fast performance, clear UX, and SEO-friendly product structures.",
  alternates: { canonical: "/services/ecommerce" },
};

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="E-commerce Solutions"
        description="Online stores built for sales — fast, clear UX, and SEO-friendly product structures."
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
                  Full-featured online stores that handle everything from product display to checkout 
                  to order management.
                </p>
                <ul className="space-y-3 list-disc list-inside">
                  <li>Product catalog and search functionality</li>
                  <li>Secure payment processing integration</li>
                  <li>Shopping cart and checkout flow</li>
                  <li>Customer accounts and order history</li>
                  <li>Inventory management system</li>
                  <li>Order tracking and fulfillment</li>
                  <li>Admin dashboard for managing products and orders</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Who It's For</h2>
                <p className="leading-relaxed">
                  Retail businesses ready to sell online—whether you're launching your first online store 
                  or replacing an outdated e-commerce platform. Perfect for businesses selling physical 
                  products, digital products, or services online.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment & Security</h2>
                <p className="leading-relaxed">
                  I integrate with trusted payment processors and ensure your store meets PCI compliance 
                  standards. Your customers' payment information is secure, and transactions are processed 
                  reliably.
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
              Ready to Sell Online?
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

