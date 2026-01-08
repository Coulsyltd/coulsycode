"use client";

import { useEffect, useMemo, useState } from "react";
import Button from "./Button";

type FieldName = "name" | "email" | "company" | "challenge" | "message";
type FormState = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  company: "",
  challenge: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  const name = values.name.trim();
  const email = values.email.trim();
  const company = values.company.trim();
  const challenge = values.challenge.trim();
  const message = values.message.trim();

  if (name.length < 2) errors.name = "Please enter your name.";

  // HTML type="email" catches most cases; this covers obvious empties/whitespace.
  if (!email) errors.email = "Please enter a valid email address.";

  if (company.length > 120) errors.company = "Please keep this under 120 characters.";

  if (challenge.length < 8) {
    errors.challenge = "Please add a little more detail (at least 8 characters).";
  } else if (challenge.length > 140) {
    errors.challenge = "Please keep this under 140 characters.";
  }

  if (message.length < 20) {
    errors.message = "Please include a bit more detail (at least 20 characters).";
  } else if (message.length > 2000) {
    errors.message = "Please keep this under 2000 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [errors, setErrors] = useState<FormErrors>({});

  const visibleErrors = useMemo(() => {
    const next: FormErrors = {};
    for (const key of Object.keys(errors) as FieldName[]) {
      if (touched[key]) next[key] = errors[key];
    }
    return next;
  }, [errors, touched]);

  useEffect(() => {
    // Netlify redirects back to /contact?success=true (not ?success=1)
    // This matches the working joinery form behavior
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const ok = params.get("success") === "true" || params.get("success") === "1";
    setSubmitted(ok);
  }, []);

  useEffect(() => {
    if (!submitted) return;
    // Make success state unmissable after redirect from Netlify.
    const el = document.getElementById("contact-success");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [submitted]);

  useEffect(() => {
    // Live-validate as the user types (errors only show after field is touched).
    setErrors(validate(values));
  }, [values]);

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
                Thanks — I’ve received your message. I’ll get back to you soon.
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
            netlify-honeypot="bot-field"
            className="space-y-6"
            onSubmit={async (e) => {
              const nextErrors = validate(values);
              setErrors(nextErrors);
              setTouched({
                name: true,
                email: true,
                company: true,
                challenge: true,
                message: true,
              });
              
              if (Object.keys(nextErrors).length > 0) {
                e.preventDefault();
                const firstKey = Object.keys(nextErrors)[0] as FieldName;
                const first = document.getElementById(firstKey);
                (first as HTMLElement | null)?.focus();
                return;
              }

              // Validation passed - submit via AJAX (Netlify supports this)
              // Using AJAX because Next.js React forms need it (unlike Astro server-rendered forms)
              e.preventDefault();
              setIsSubmitting(true);
              setSubmitError(null);

              try {
                // Get formData directly from the form event, as Netlify docs recommend
                const myForm = e.target as HTMLFormElement;
                const formData = new FormData(myForm);
                
                // Ensure all values are captured (React controlled inputs may not sync to DOM immediately)
                // Manually set values from React state to guarantee they're included
                formData.set("form-name", "contact");
                formData.set("name", values.name.trim());
                formData.set("email", values.email.trim());
                if (values.company.trim()) {
                  formData.set("company", values.company.trim());
                }
                formData.set("challenge", values.challenge.trim());
                formData.set("message", values.message.trim());
                formData.set("bot-field", ""); // Honeypot should be empty
                
                // Convert FormData to URLSearchParams (TypeScript-safe)
                const params = new URLSearchParams();
                for (const [key, value] of formData.entries()) {
                  params.append(key, value.toString());
                }
                
                const res = await fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: params.toString(),
                });

                if (!res.ok) {
                  throw new Error(`Submission failed (${res.status}).`);
                }

                // Redirect to success page (matching joinery's ?success=true)
                if (typeof window !== "undefined") {
                  window.location.href = "/contact?success=true";
                }
              } catch (err) {
                setSubmitError(
                  err instanceof Error
                    ? err.message
                    : "Submission failed. Please try again."
                );
                setIsSubmitting(false);
              }
            }}
          >
            {/* Required for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this in:{" "}
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
                value={values.name}
                onChange={(e) =>
                  setValues((v) => ({ ...v, name: e.target.value }))
                }
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                {...(visibleErrors.name ? { "aria-invalid": "true" } : {})}
                aria-describedby={visibleErrors.name ? "name-error" : undefined}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
              />
              {visibleErrors.name && (
                <p id="name-error" className="mt-2 text-sm text-red-600">
                  {visibleErrors.name}
                </p>
              )}
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
                value={values.email}
                onChange={(e) =>
                  setValues((v) => ({ ...v, email: e.target.value }))
                }
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                {...(visibleErrors.email ? { "aria-invalid": "true" } : {})}
                aria-describedby={visibleErrors.email ? "email-error" : undefined}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
              />
              {visibleErrors.email && (
                <p id="email-error" className="mt-2 text-sm text-red-600">
                  {visibleErrors.email}
                </p>
              )}
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
                value={values.company}
                onChange={(e) =>
                  setValues((v) => ({ ...v, company: e.target.value }))
                }
                onBlur={() => setTouched((t) => ({ ...t, company: true }))}
                {...(visibleErrors.company ? { "aria-invalid": "true" } : {})}
                aria-describedby={
                  visibleErrors.company ? "company-error" : undefined
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
              />
              {visibleErrors.company && (
                <p id="company-error" className="mt-2 text-sm text-red-600">
                  {visibleErrors.company}
                </p>
              )}
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
                value={values.challenge}
                onChange={(e) =>
                  setValues((v) => ({ ...v, challenge: e.target.value }))
                }
                onBlur={() => setTouched((t) => ({ ...t, challenge: true }))}
                {...(visibleErrors.challenge ? { "aria-invalid": "true" } : {})}
                aria-describedby={
                  visibleErrors.challenge ? "challenge-error" : undefined
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
              />
              {visibleErrors.challenge && (
                <p id="challenge-error" className="mt-2 text-sm text-red-600">
                  {visibleErrors.challenge}
                </p>
              )}
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
                placeholder="A couple of sentences is perfect. What’s the goal, and what’s not working today?"
                value={values.message}
                onChange={(e) =>
                  setValues((v) => ({ ...v, message: e.target.value }))
                }
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                {...(visibleErrors.message ? { "aria-invalid": "true" } : {})}
                aria-describedby={
                  visibleErrors.message ? "message-error" : undefined
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-none"
              />
              {visibleErrors.message && (
                <p id="message-error" className="mt-2 text-sm text-red-600">
                  {visibleErrors.message}
                </p>
              )}
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

