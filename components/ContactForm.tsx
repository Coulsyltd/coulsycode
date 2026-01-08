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
          {/* Simple form - let browser submit normally, just like the static form */}
          <form
            name="contact"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
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
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
