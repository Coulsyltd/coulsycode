import PageHero from "../../components/PageHero";
import ContactForm from "../../components/ContactForm";

export default function ContactPage({
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hidden static HTML form for Netlify form detection at build time */}
      {/* This MUST be in the rendered HTML for Next.js + Netlify Forms to work */}
      <form
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="company" />
        <input type="text" name="challenge" />
        <textarea name="message"></textarea>
      </form>

      <PageHero
        title="Let's Talk"
        description="Tell me what you're trying to achieve and what's getting in the way — I'll come back with clear next steps."
      />

      <ContactForm />

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

