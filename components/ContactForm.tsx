"use client";

import { useEffect, useState, useRef } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Get formData directly from the form event - exactly as Netlify docs show
      const myForm = e.currentTarget;
      const formData = new FormData(myForm);

      // Debug: Log what we're sending
      console.log("FormData entries:", Array.from(formData.entries()));

      // Convert FormData to URLSearchParams (TypeScript-safe)
      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        params.append(key, value.toString());
      }

      console.log("Submitting to Netlify:", params.toString());

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      // Netlify forms return 200 even on success, but might return HTML
      // Check if we got a successful response (200-299)
      if (response.status >= 200 && response.status < 300) {
        // Success - redirect to success page
        window.location.href = "/contact?success=true";
      } else {
        throw new Error(`Submission failed (${response.status})`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Submission failed. Please try again."
      );
      setIsSubmitting(false);
    }
  };

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
          <form
            ref={formRef}
            name="contact"
            method="post"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Required for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this in:{" "}
                <input name="bot-field" autoComplete="off" tabIndex={-1} />
              </label>
            </p>

            {submitError && (
              <div
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                role="alert"
              >
                {submitError} If it keeps failing, email{" "}
                <a className="underline" href="mailto:info@coulsycode.co.uk">
                  info@coulsycode.co.uk
                </a>
                .
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength={2}
                maxLength={120}
                autoComplete="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={254}
                autoComplete="email"
                inputMode="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                maxLength={120}
                autoComplete="organization"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="challenge"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                What&apos;s Your Main Business Challenge? *
              </label>
              <input
                type="text"
                id="challenge"
                name="challenge"
                required
                minLength={8}
                maxLength={140}
                placeholder="e.g., Not getting found online, low conversion rates, manual processes..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Tell Me More *
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={20}
                maxLength={2000}
                rows={6}
                placeholder="A couple of sentences is perfect. What's the goal, and what's not working today?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              {isSubmitting ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
