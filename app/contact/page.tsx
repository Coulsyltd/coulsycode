import PageHero from "../../components/PageHero";
import Button from "../../components/Button";

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { success?: string };
}) {
  const submitted = searchParams?.success === "1";

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Let’s Talk"
        description="Tell me what you’re trying to achieve and what’s getting in the way — I’ll come back with clear next steps."
      />

      {/* Contact Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h2>
                <p className="text-gray-600">
                  I’ve received your message and I’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                action="/contact?success=1"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
              >
                {/* Required for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this in: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-sm font-semibold text-gray-900 mb-2">
                    What's Your Main Business Challenge? *
                  </label>
                  <input
                    type="text"
                    id="challenge"
                    name="challenge"
                    required
                    placeholder="e.g., Not getting found online, low conversion rates, manual processes..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tell Us More *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe your challenge in more detail..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Other Ways to Reach Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:info@coulsycode.co.uk" className="text-blue-600 hover:underline">
                  info@coulsycode.co.uk
                </a>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:07544030486" className="text-blue-600 hover:underline">
                  07544 030486
                </a>
                <p className="text-gray-600 mt-2">
                  If I’m on a call, leave a message and I’ll ring you back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

