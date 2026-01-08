"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);

    // Convert FormData to URLSearchParams (TypeScript-safe)
    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      params.append(key, value.toString());
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    })
      .then(() => {
        setSubmitted(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  if (submitted) {
    return (
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div
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
            name="contact"
            method="post"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this in: <input name="bot-field" />
              </label>
            </p>

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

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
