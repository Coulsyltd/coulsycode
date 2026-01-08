"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check for success query param from Netlify redirect
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setSubmitted(true);
      const el = document.getElementById("contact-success");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (submitted) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div
              id="contact-success"
              className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
              role="status"
              aria-live="polite"
            >
              <div className="text-4xl mb-4">✓</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Message sent
              </h2>
              <p className="text-gray-700">
                Thanks — I've received your message. I'll get back to you soon.
              </p>
              <div className="mt-6">
                <Button href="/" variant="outline">
                  Back to homepage
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Use static HTML form that Netlify handles directly (bypasses Next.js routing) */}
          <iframe
            src="/contact-form.html"
            className="w-full border-0"
            style={{ minHeight: "600px" }}
            title="Contact Form"
          />
        </div>
      </div>
    </section>
  );
}
